# Development access and secrets

## Chosen access model

This slice is a single-user application on Alison's Mac, using synthetic interview, task, and calendar records. No login or account management is implemented. Both `dev` and `start` bind to `127.0.0.1`. Do not override the hostname, enable a tunnel, or expose this configuration as a hosted/shared application. Shared access requires a separate authentication and authorization decision.

Local-only binding limits network reachability; it does not authenticate a person or isolate other users/processes on this computer. A browser tab is not a trusted authority, and a hidden button is not authorization. This configuration is appropriate only for the agreed local synthetic-data scope.

## Server authority

There are no application write endpoints or domain mutations in the foundation yet. Application writes must follow these requirements:

- Use one server-owned local actor for this single-user slice. Do not accept an authoritative actor/user identity supplied by the browser or model.
- Keep database access and credentials server-side. Application code imports the guarded `src/server/db/index.ts` entry point; the low-level connection factory is for server/CLI use only.
- Validate untrusted form, conversation, file, and model output on the server before invoking shared domain actions. UI and AI adapters call the same authoritative actions.
- Treat route handlers and Server Actions as request entry points. Retain framework origin protections and validate request origin where custom browser write endpoints require it; local binding alone is not a cross-site request defense.
- Planning is read-only. Only selected, disclosed, explicitly approved operations may write. Recheck versions, protected commitments, and consent at commit time. Persist idempotency keys and operation outcomes; Undo must not overwrite newer conflicting edits.

These are implementation requirements for future features, not claims that authorization, approval, or Undo already exists.

## Credentials and environment

No credentials are required for the current application or SQLite database. `DATABASE_PATH` is a local filesystem path, not a secret. `.env.example` contains only safe example configuration. Copy it to `.env.local` for local overrides; `.env.local` and other environment files are ignored by Git.

When optional model calls are introduced, document the exact provider variable in that feature. Keep keys in local environment configuration, never in source, fixtures, browser storage, URLs, logs, or `NEXT_PUBLIC_*` variables. Public-prefixed values can be bundled for the browser. Do not invent or request credentials before a feature needs them. Rotate a key if it is exposed; removing it from the latest source does not revoke it.

## Data and local storage

Use synthetic records only. Do not import real recruiting/calendar data, credentials, interview transcripts, or personal documents in this slice. Live calendar/recruiting integrations are outside scope. Uploaded-file flows must follow the same synthetic-data constraint when introduced.

SQLite database, WAL, and SHM files are ignored by Git. They are ordinary local files without application-level encryption or user isolation; protect them using the computer's account and filesystem controls. The repository is in Dropbox: Git ignore does not stop file synchronization. Do not use cloud sync as a live database-sharing mechanism or open one synced database concurrently on multiple computers. `DATABASE_PATH` can select a location outside the synced directory.

## Verification performed

Checked that package start scripts explicitly bind to `127.0.0.1`, the application database entry point uses `server-only`, `.env.local` and SQLite companion files are Git-ignored, and `.env.example` remains trackable. No provider credentials or real user records are required. This is a documented development boundary, not a production security review.
