import assert from "node:assert/strict";
import { test } from "node:test";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { sql } from "drizzle-orm";
import { openDatabase } from "../src/server/db/connection";

test("fresh migrations preserve data across reopen and repeated application", () => {
  const directory = mkdtempSync(join(tmpdir(), "jobos-test-"));
  let connection: ReturnType<typeof openDatabase> | undefined;
  try {
    const path = join(directory, "nested", "test.db");
    connection = openDatabase(path);
    migrate(connection.db, { migrationsFolder: "./drizzle" });
    const before = connection.sqlite
      .prepare("SELECT count(*) AS count FROM __drizzle_migrations")
      .get();
    connection.sqlite.exec(
      "CREATE TABLE persistence_probe (value TEXT NOT NULL)",
    );
    connection.sqlite
      .prepare("INSERT INTO persistence_probe VALUES (?)")
      .run("synthetic");
    connection.sqlite.close();
    connection = undefined;
    connection = openDatabase(path);
    migrate(connection.db, { migrationsFolder: "./drizzle" });
    assert.deepEqual(
      connection.db.get(sql`SELECT value FROM persistence_probe`),
      { value: "synthetic" },
    );
    assert.deepEqual(
      connection.sqlite
        .prepare("SELECT count(*) AS count FROM __drizzle_migrations")
        .get(),
      before,
    );
    assert.equal(connection.sqlite.pragma("foreign_keys", { simple: true }), 1);
    assert.equal(
      connection.sqlite.pragma("quick_check", { simple: true }),
      "ok",
    );
  } finally {
    connection?.sqlite.close();
    rmSync(directory, { recursive: true, force: true });
  }
});
