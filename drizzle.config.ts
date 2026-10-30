import { loadEnvConfig } from "@next/env";
import { defineConfig } from "drizzle-kit";
loadEnvConfig(process.cwd(), true);
export default defineConfig({
  dialect: "sqlite",
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dbCredentials: { url: process.env.DATABASE_PATH ?? "./data/jobos.db" },
});
