# 1. Local development stack

Status: accepted. Source: ALI-37, confirmed with Alison.

## Context

Prove an interview → preparation → approval → execution → debrief journey using synthetic data. Prioritize a working acceptance-tested slice on one Mac. Alison will implement selected frontend features first, with agents reviewing and handling most infrastructure.

## Decision

- React, Next.js App Router, and TypeScript in one application.
- Shared authoritative server-side domain actions; framework-independent rules in TypeScript modules.
- SQLite with stable Drizzle and reviewed SQL migrations; no separate database service.
- Small custom component set with CSS Modules; established primitives for complex interactions. Add components as features need them.
- Node 24 LTS and pnpm, exact versions pinned during bootstrap; no Docker requirement.
- One local user, no login, localhost-only binding; secrets and database access stay server-side.
- Deterministic AI fixtures for acceptance tests; optional live model calls later.

## Consequences

One app and a file-backed database reduce operational setup. Drizzle exposes SQL concepts but keeps schema in TypeScript. Database correctness still requires explicit validation, version checks, idempotency, approved operation boundaries, and conflict-aware Undo.

The custom component set supports frontend interview practice but costs more time than adopting a full UI library. Standalone library packaging, extensive theming, and a component catalogue are deferred.

Revisit persistence when multiple app instances need coordinated writes. Shared or hosted access requires a new authentication/authorization decision. Production hosting, AI provider, and file-parsing libraries remain undecided. Node's test runner with tsx was selected in ALI-42 for foundation checks; UI-specific tooling may be added when needed.
