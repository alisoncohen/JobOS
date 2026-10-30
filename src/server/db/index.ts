import "server-only";
import { openDatabase } from "./connection";
// Open lazily; importing the application must not create a database during build.
let connection: ReturnType<typeof openDatabase> | undefined;
export function getDatabase() {
  connection ??= openDatabase();
  return connection.db;
}
