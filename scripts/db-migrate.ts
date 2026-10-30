import { loadEnvConfig } from "@next/env";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { openDatabase } from "../src/server/db/connection";
loadEnvConfig(process.cwd(), true);
const connection = openDatabase();
try {
  migrate(connection.db, { migrationsFolder: "./drizzle" });
  console.log(`Migrations applied: ${connection.path}`);
} finally {
  connection.sqlite.close();
}
