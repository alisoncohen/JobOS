import assert from "node:assert/strict";
import { test } from "node:test";
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";

async function availablePort() {
  const socket = createServer();
  socket.listen(0, "127.0.0.1");
  await once(socket, "listening");
  const address = socket.address();
  assert.ok(address && typeof address !== "string");
  const port = address.port;
  await new Promise<void>((resolve, reject) =>
    socket.close((error) => (error ? reject(error) : resolve())),
  );
  return port;
}

test(
  "production app starts and serves the homepage",
  { timeout: 30000 },
  async () => {
    const port = await availablePort();
    const child = spawn(
      process.execPath,
      [
        "node_modules/next/dist/bin/next",
        "start",
        "--hostname",
        "127.0.0.1",
        "--port",
        String(port),
      ],
      {
        env: { ...process.env, NODE_ENV: "production" },
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    let output = "";
    child.stdout.on("data", (chunk) => {
      output += chunk;
    });
    child.stderr.on("data", (chunk) => {
      output += chunk;
    });
    const exited = once(child, "exit");
    try {
      const deadline = Date.now() + 20000;
      while (Date.now() < deadline) {
        assert.equal(child.exitCode, null, output);
        try {
          const response = await fetch(`http://127.0.0.1:${port}`, {
            signal: AbortSignal.timeout(1000),
          });
          if (response.ok) {
            const html = await response.text();
            assert.match(html, /Make room for your next opportunity/);
            assert.match(html, /<html lang="en"/);
            return;
          }
        } catch (error) {
          if (error instanceof assert.AssertionError) throw error;
        }
        await delay(100);
      }
      assert.fail(`Server did not become healthy: ${output}`);
    } finally {
      if (child.exitCode === null) {
        child.kill("SIGTERM");
        const timer = setTimeout(() => child.kill("SIGKILL"), 3000);
        await exited;
        clearTimeout(timer);
      }
    }
  },
);
