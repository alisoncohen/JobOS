# JobOS

An AI-assisted job search workspace for interview preparation, capacity-aware planning, and reflection.

The current slice is a local interview-planning application using synthetic data.

## Current state and product direction

The application provides a local Next.js app, SQLite persistence, explicit migrations, and automated checks. Interview intake, research briefs, planning, approval, practice, and debrief workflows remain planned.

The intended journey is: report an interview → review sourced preparation guidance → preview a capacity-aware plan → approve selected changes → complete practice → save an editable debrief. The first demonstration will use synthetic records and real dated public research sources.

- [Interview-planning contract](docs/interview-planning-spec.md): required behavior, safeguards, and acceptance scenarios T1–T8.
- [Linear project](https://linear.app/aliwonderland/project/job-search-os-interview-planning-vertical-slice-3044c395c70e): work planning and execution status.
- [Confirmed scope decisions](docs/product-design-context.md): current slice boundaries and their relationship to the preserved [broader product design](docs/archive/job-search-os-product-design-spec-v0.1-2026-10-29.md).
- [Stack decision](docs/decisions/0001-local-development-stack.md): architecture and rationale.

## Prerequisites

macOS, Git, and a working Node/npm installation are needed to bootstrap. No global pnpm, Docker, database service, or credentials are required yet.

The application uses **Node 24.22.2** and **pnpm 11.25.0**. Use the checked-in `./pnpmw` wrapper: npm downloads/caches those exact tools and runs pnpm with the pinned Node on PATH. The first invocation needs internet access; application dependencies also need internet on first install. It does not change your global Node, shell profile, or other projects. Keep the wrapper versions, `.node-version`, `.nvmrc`, and `package.json` in sync when intentionally upgrading.

## Install and start

```sh
cd /path/to/JobOS
./pnpmw install --frozen-lockfile
cp .env.example .env.local
./pnpmw dev
```

Open http://127.0.0.1:3000. Stop with Ctrl+C. Both development and production scripts bind to 127.0.0.1, so access stays on this computer. Run only one development server per checkout. If JobOS is already running from this directory, use it or stop it with Ctrl+C before restarting; changing ports does not bypass its development lock. If port 3000 is occupied by a different application, run `./pnpmw dev --port 3001` and open that port.

`.env.local` can set `DATABASE_PATH`; the default is `./data/jobos.db`. It is ignored by Git. Never put credentials in `NEXT_PUBLIC_*` variables, which can be sent to the browser.

## Verify

```sh
./pnpmw exec node --version
./pnpmw --version
./pnpmw check
./pnpmw start
```

Expected tool versions: `v24.22.2` and `11.25.0`. After `start`, open the local URL and confirm the JobOS heading and introductory text, reload, and check a narrow window for horizontal overflow. Stop with Ctrl+C before starting another server. `start` requires a successful build.

The lockfile fixes resolved application dependencies. `install --frozen-lockfile` fails if the manifest and lockfile disagree rather than silently updating them.

## Troubleshooting

- `pnpm: command not found`: use `./pnpmw` instead of bare `pnpm`.
- Wrong global Node version: run through `./pnpmw`; a bare `node --version` reports your global runtime, not the application's selected runtime.
- `npm: command not found`: install a supported Node/npm distribution, reopen Terminal, then retry.
- Installation/download failure: check network access and npm registry connectivity; retry the same command. Do not use sudo for project installs.
- `Permission denied` running the wrapper: restore its executable bit with `chmod +x pnpmw`.

## Structure

- `src/app`: Next.js App Router pages and layouts
- `src/components`: reusable components and CSS Modules
- `src/domain`: framework-independent shared domain rules
- `src/server`: server-only adapters

## Development database

SQLite runs in process, with stable Drizzle ORM and reviewed SQL migrations. There are no domain tables or synthetic fixtures yet. Database files are ignored; migration SQL and metadata must be committed together.

```sh
./pnpmw db:migrate
./pnpmw db:check
```

`db:migrate` creates the parent directory and database if missing and applies pending migrations. Repeating it preserves data and skips applied migrations. `db:check` queries through Drizzle, checks database integrity, and confirms migration history. Migrations run explicitly, never automatically on app startup.

Set `DATABASE_PATH` in `.env.local` to a local filesystem path (not a `file:` URL). Next.js environment loading is shared by CLI configuration and application code; an exported shell value takes precedence. Keep local databases outside Dropbox if you intend to run the project from multiple computers: SQLite files must not be actively shared through file sync. For this local development slice, only one computer should open the database.

To verify a fresh database without touching existing data:

```sh
DATABASE_PATH=./data/verification.db ./pnpmw db:migrate
DATABASE_PATH=./data/verification.db ./pnpmw db:migrate
DATABASE_PATH=./data/verification.db ./pnpmw db:check
```

For future schema changes, edit `src/server/db/schema.ts`, run `./pnpmw db:generate`, inspect the generated SQL and metadata in `drizzle/`, then run `db:migrate`. Never rewrite an applied migration. The baseline intentionally executes only `SELECT 1`; Drizzle owns the migration bookkeeping table.

The server-only application entry point is `src/server/db/index.ts`. It opens the connection lazily. CLI commands use the same connection factory, enabling foreign keys, WAL journaling, and a five-second busy timeout. pnpm explicitly permits native build scripts for better-sqlite3 and esbuild; fresh installation may need a compiler if no compatible prebuilt SQLite binary is available.

## Access and secrets

See [development access and secrets](docs/development-access.md) for the single-user local boundary, future write authorization requirements, synthetic-data policy, and credential handling. No credentials or login are required in this slice.

## Automated checks

Run `./pnpmw check` for formatting, lint, TypeScript, database tests, production build, and a production startup smoke test. Use `./pnpmw format` to apply formatting. `./pnpmw test` uses Node's test runner with tsx; `./pnpmw test:smoke` requires a preceding build. Database tests create disposable databases, check migration repeatability and persistence, and clean up afterward. The startup test chooses an available localhost port and shuts its server down.

GitHub Actions runs the same checks on push and pull requests. No cloud credentials or live AI calls are required. Avoid running a production build concurrently with development work in the same checkout; use a separate checkout for uninterrupted development.

Lint compatibility note: ESLint is pinned to 9.39.5 because the React, import, and accessibility plugins bundled by eslint-config-next 16.4.3 do not yet declare ESLint 10 support. ESLint 9 is deprecated upstream; revisit the pin when those plugins support the maintained major.
