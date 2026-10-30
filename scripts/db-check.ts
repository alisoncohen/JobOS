import { loadEnvConfig } from "@next/env";
import { sql } from "drizzle-orm";
import { openDatabase } from "../src/server/db/connection";
loadEnvConfig(process.cwd(), true);
const connection = openDatabase();
try {
  const result = connection.db.get<{ value: number }>(sql`select 1 as value`);
  if (result?.value !== 1) throw new Error("Database query failed");
  const integrity = connection.sqlite.pragma("quick_check", { simple: true });
  if (integrity !== "ok")
    throw new Error(`Integrity check failed: ${integrity}`);
  const migrations = connection.sqlite
    .prepare("select count(*) as count from __drizzle_migrations")
    .get() as { count: number };
  if (migrations.count < 1) throw new Error("Run db:migrate first");
  console.log(
    `Database OK: ${connection.path}; ${migrations.count} migration(s)`,
  );
} finally {
  connection.sqlite.close();
}
