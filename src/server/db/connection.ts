import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";

export function openDatabase(
  filename = process.env.DATABASE_PATH ?? "./data/jobos.db",
) {
  if (!filename.trim()) throw new Error("DATABASE_PATH must not be empty");
  const path = resolve(filename);
  mkdirSync(dirname(path), { recursive: true });
  const sqlite = new Database(path);
  sqlite.pragma("foreign_keys = ON");
  sqlite.pragma("journal_mode = WAL");
  sqlite.pragma("busy_timeout = 5000");
  return { db: drizzle(sqlite, { schema }), sqlite, path };
}
