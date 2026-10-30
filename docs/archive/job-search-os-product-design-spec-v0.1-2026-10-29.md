---
title: "Job Search OS — Product & Experience Specification"
subtitle: "Your search, in focus."
date: "29 October 2026"
version: "Product discovery draft v0.1"
---

# Job Search OS

**Product & Experience Specification**  
**Status:** Discovery specification for design and technical planning, not approval to build or modify live data  
**Version:** v0.1 · 29 October 2026  
**Origin:** Consolidation of the `/grill-me` product discussions and flow pressure tests (through Q127)

> **Product promise:** Know where you stand. Know what to do next.
>
> **Mission:** Make job searching simpler, more intentional, and less overwhelming—giving people clarity to stay organized and tools to make meaningful progress toward their next opportunity.
>
> **Tagline:** Your search, in focus.

## Executive summary

Job Search OS is a desktop-first, AI-native job-search workspace. It combines opportunity tracking, interview preparation, capacity-aware planning, actionable communications, and job discovery in **one coherent system**. Unlike a collection of trackers with a chatbot attached, the application shares one workflow engine across direct UI actions, conversational updates, and verified provider events.

Its core loop is **Discover → Decide → Plan → Act → Learn**. Users can open Home and immediately see today's calls, planned work, urgent replies, and meaningful proposals; report an update in natural language; or let a supported integration surface new information. The app understands the relevant opportunity, proposes the next step, and makes only authorized changes. Every consequential proposed schedule change is reviewable before commitment.

**Critical MVP priority:** Prove an end-to-end interview-preparation journey before building every integration: *user reports interview → canonical records updated → specific research-based prep recommended → capacity-checked plan previewed → changes approved and verified → tasks executed on Home → debrief captured → future recommendations improved.* A minimal Pipeline, the shared AI/action system, and a trustworthy scheduling model are prerequisites. Full automatic discovery, richer networking, and broader source coverage are phased in.

**Important Flow A correction:** **Apply Directly** and **Add Contact** are two independent actions, not alternatives that do the same job. Applying starts an application path; adding a contact enriches the user's relationship graph and **must not** imply that outreach occurred, a referral is available, or an application was submitted. Seeking a referral and contacting a hiring team are additional opt-in strategies associated with an opportunity.

---

# 1. Goals, audience, and product boundaries

## 1.1 Primary audience

Individual job seekers managing several roles, recruiters, interview rounds, preparation activities, and competing deadlines. The initial reference workflow is a technically sophisticated, frontend-focused job seeker with an existing structured Notion system. The product should be approachable without requiring users to understand Notion schemas or agent commands.

## 1.2 Primary jobs to be done

1. **Orient quickly:** “Show me today's confirmed commitments, high-value work, and anything I owe someone.”
2. **Keep records current:** “When I report an update—or Gmail provides evidence—update the appropriate role, conversation, interview, and task without duplicates.”
3. **Prepare intelligently:** “Find out what this particular interview is likely to test and recommend concrete practice based on my gaps.”
4. **Plan realistically:** “Fit the work into the time I truly have, protect important commitments, and let me approve meaningful tradeoffs.”
5. **Pursue strategically:** “Help me decide whether to apply, network, request a referral, or hold, and execute only my chosen next steps.”
6. **Improve with use:** “Learn from practice and interview debriefs without turning every completed action into an administrative form.”

## 1.3 Product principles

- **One source of truth:** UI, Chat, and integrations use the same validated command and data layer.
- **User agency:** Routine explicit reports can commit; consequential or ambiguous changes require scoped approval. Sending emails or submitting applications always requires the user's action.
- **Action over noise:** Home surfaces what needs attention; Radar and background information should not interrupt by default.
- **Evidence over inference:** Separate confirmed, user-reported, inferred, and unknown information.
- **Preparedness over activity:** Maximize high-value preparation, not tasks created or hours filled.
- **Distinct records, joined experience:** Tasks, Conversations, Interviews, and Opportunities may be shown together but retain their different lifecycles.
- **Graceful incompleteness:** Missing access to LinkedIn, source research, or Calendar must not block the whole app.
- **Trust through visibility:** Show source, why the app recommended an action, affected records, and verified write outcomes.

## 1.4 Non-goals / exclusions

- Replace LeetCode or GreatFrontEnd with a full coding judge, sandbox, or content catalog in MVP.
- Scrape LinkedIn messages, connections, or profiles through unauthorized automation.
- Automatically mass-message contacts, apply to jobs, or accept invitations.
- Force users to run morning/evening commands or complete feedback forms.
- Convert every email, conversation, suggested job, or follow-up into a Task.
- Require continuous bidirectional Notion synchronization once the application becomes authoritative.
- Automatically move firm deadlines or confirmed external meetings.

---

# 2. Scope and release strategy

**Definition:** *First working slice* is an internal, end-to-end product proof; *MVP* is the smallest coherent user-facing product; *broader v1* adds the automated discovery and integration capabilities already selected during discovery. These are scope tiers, not promises of dates.

| Capability | First working slice | MVP | Broader v1 / later |
|---|---|---|---|
| Canonical Opportunities, Tasks, Interviews, activity history | Essential | Full core | Hardened |
| Context-aware AI-reported updates | Essential | Essential | Expanded |
| Research-based interview prep proposal and approval | Essential | Essential | Expanded |
| Day-level capacity planning and Home task execution | Essential | Essential | Expanded |
| Interview debrief from notes/transcripts | Essential | Essential | Expanded |
| Pipeline Active view and role detail | Minimal | Board/Table + details | Advanced comparisons |
| Practice logging and lightweight external links | Minimal | Practice Hub | Original AI-guided practice |
| Existing known contacts and manual referral/outreach | Data model | Lightweight UX | Better matching |
| Gmail incoming/sent sync | Not required for first slice | Phased integration | Robust production sync |
| Google Calendar reconciliation/time blocking | Seed/manual commitments initially | Read commitments | Optional write-backed blocks |
| Radar verified discovery and manual run | Not required for first slice | Narrow implementation if feasible | Daily scheduled runs, richer source coverage |
| LinkedIn | Stored user-supplied URLs | Draft + open + user reports | Authorized integrations if available |
| Public hiring-manager discovery | Not included | Not included | Permitted public research, clearly qualified |
| Embedded coding editor | Not included | Not included | Consider only if validated |

**Scope pushback:** Including Radar in “v1” was agreed, but implementing all its scheduling, ingestion, verification, ranking, and review sophistication in the *first vertical slice* was not. Defer advanced contact discovery as explicitly decided in Round 20. Do not defer company-/round-specific **interview research**, which is part of the planning value proposition.

---

# 3. Information architecture and navigation

## 3.1 Primary places

| Area | User purpose | Core views/actions |
|---|---|---|
| **Home** | Operate the day | Prominent agenda, Today task Board/List, Replies needing action, planning proposals, up to 3 optional focus items, compact Radar alert |
| **Pipeline** | Manage opportunities | Active, Discover (Radar), Archived; Board/Table toggle; unified opportunity detail |
| **Interviews** | Review rounds and preparation | Schedule, briefs, notes/debriefs, linked plans and source evidence |
| **Practice** | Execute and learn | Recommendations, external exercise links, timers, practice history, optional reflections |
| **AI Chat** | Report updates, ask, coordinate | Global collapsible panel with visibly scoped context and auditable outcomes |

**Secondary surfaces:** expanded weekly Planner (launched from Home and role/interview context, not a duplicate Tasks dashboard); Inbox / Conversations for deeper communication review; Contacts within relationship context; Settings & Integrations; activity/audit history.

## 3.2 Home — layout specification

Desktop priority hierarchy:

1. **Today's schedule strip** directly above the work area: all confirmed recruiting calls/interviews in local chronological order with type, time, company, length, and one-click event detail. If none today, feature the **next upcoming interview** and its prep status. Other calendar commitments count toward truthful capacity without necessarily dominating the agenda.
2. **Meaningful urgent action**: a compact, nonmodal prep-plan approval or overdue reply. Do not stack repetitive marketing-style cards.
3. **Today's work**: task-only Kanban with direct status changes and optional completion, or unified List with tasks **and actionable conversations**. Board and List use the same underlying work and core operations but have different optimal layouts. Tasks completed today remain visible; overdue work is visually separated from consciously scheduled work.
4. **Replies needing action** (prominent in Board mode): conversation-specific workflow and “Reply with AI” rather than fake checkbox tasks. In List mode, these appear inline in the unified action list.
5. **Radar**: only a compact indicator of genuinely new/high-fit discoveries after a completed scan. No empty-scan prompt; dismissing the alert never rejects the roles. The top three can be revealed on demand, with full results in Pipeline → Discover.

**Interaction rules:** A task marked Done updates immediately and offers Undo. Optional practice reflection must not block completion. Dragging a flexible task to another day moves only that task, within safeguards; it does not silently rebalance the schedule. A task's scheduled day is distinct from its actual deadline.

## 3.3 Expanded Planner

Full-screen or expanded workspace accessible from Home; day-level schedule by default, optional calendar time blocking. It displays daily estimated workload, real calendar commitments, limits, firm deadlines, protected tasks, and selected opportunity priorities. A plan review shows before/after changes, new activities, reused work, omissions, and all affected existing task dates, plus explanations. “Approve selected” commits only the disclosed feasible set after revalidation.

## 3.4 Pipeline

**Active** includes a small number of high-level visual stages: *Interested*, *Engaged*, *Interviewing*, *Decision*. Detailed application and interview states remain separate underlying facts. **Discover** includes new Radar suggestions, saved-for-later review decisions, and their source evidence. **Archived** retains Rejected, Withdrawn, Not a Fit, and other terminal opportunities with history.

Pipeline supports **Board and Table**; remember the last-used view. **The initial default remains an open UX question** (Q92), to be tested using realistic density. Company, role, stage, next meaningful action/interview, and priority dominate each row/card. Extra data (salary, location, recruiter, referral, evidence quality) is accessible as needed.

Selecting an opportunity opens a contextual workspace: role facts, source URL and verification, current stage, next action, interview rounds, conversations, people, referral/outreach progress, tasks, prep, and a chronological provenance-aware history. Long notes/transcripts can expand beyond the drawer. Chat scope is visible.

---

# 4. End-to-end user flows

## Flow A — Radar discovery → Pursue → action

**Trigger:** Scheduled morning Radar scan, user-triggered “Run Radar Now,” imported job alert, or a manually/AI-reported opportunity.

1. Discover candidate jobs through permitted sources; verify current posting where possible, prioritize the canonical employer listing, and retain source and actual freshness confidence.
2. Deduplicate against **all** reviewed and tracked requisitions—not only active ones. Avoid recreation of Not a Fit, archived, and applied records.
3. High-confidence verified candidates enter **Suggested** in Discover. No application task is created merely because a listing was found.
4. User selects a **review action:** Save for Later, Pursue, or Not a Fit. These are not equivalent to application state.
5. **Pursue** moves the opportunity into the active Pipeline and invokes a next-action resolver. Check whether the user applied already, has a referral in progress, is communicating with a recruiter, has company guidance to wait, or faces a real deadline.
6. Present **one recommended next action plus independent alternatives**:
   - **Apply Directly:** opens application path and creates/reuses one actionable application task if appropriate.
   - **Seek Referral / Reach Out:** selects a known contact or lets the user choose another person, drafts tailored outreach, and opens the permitted original channel; no sending by default.
   - **Add Contact:** creates/links a person record only. **It does not apply, message, request a referral, or automatically choose a networking strategy.** The newly added contact can subsequently support a separate outreach action.
   - **Save / Decide Later:** preserve the opportunity without a forced action.
7. If a new substantive task is warranted, create/reuse it. Assign a day only if capacity permits; otherwise leave it actionable and unscheduled with a proposed placement. Preserve application deadlines and existing priorities.
8. Opening the application page is **not** evidence of submission. Record Applied only after a reliable provider confirmation or explicit user report. A referral submitted is likewise not equivalent to an application submitted.

**Networking state:** Outreach intent → Draft → Verified/user-reported sent → Conversation → Waiting/Needs response/Closed; referral request/submission tracked as distinct, opportunity-specific facts. The underlying intent and draft history are preserved when a Conversation begins. Routine conversation replies do **not** spawn one new Task per message.

**Edge cases:** already applied; duplicate requisition; existing Not a Fit; unposted or tentative opportunity; referral-first hold; job closes during pursuit; contact employer is stale; no known contacts; concurrent referral and direct application; low capacity; Gmail notices later confirm a user-reported send. No automatic LinkedIn scraping.

## Flow B — Detected/reported interview → prep plan → approval

1. New invitation or explicit user report is matched to an opportunity. Confirmed details update the Interview record; tentative dates and ambiguous rounds remain flagged, not fabricated.
2. Generate a **proposed** preparation brief using recruiter instructions first, exact round type/seniority, job description, previous attempts and debriefs, and permitted current research including recent firsthand candidate reports. Separate official evidence from anecdotal patterns and timestamp them.
3. Recommend concrete executable activities: objective, exercise/resource, estimate, reason, completion criteria, and confidence. Reuse relevant existing tasks; never double-create covered work.
4. Calculate available capacity across **all** commitments, actual interviews, external deadlines, and user priority preferences. Count each call once. Default to scheduled days; add optional real calendar blocks only by opt-in.
5. Display the selected proposal and **every affected existing task** in a before/after schedule. Disclose feasible items, overload, lower-value cuts, and protected conflicts.
6. User approves all or selected items. Revalidate live state and capacity, commit only authorized changes, verify created/updated/reused/blocked records, and offer actionable recovery for partial failure.
7. If the interview is materially changed or canceled, propose a revised plan without silently shifting approved work.

## Flow C — Execute → reflect → debrief → adapt

- Complete practice work immediately from Board or List. An unobtrusive, optional prompt offers “independent / some help / struggled / incomplete” plus notes. Skipping does not imply mastery.
- Interview end time may trigger a **debrief prompt**, but not an assumption that the interview occurred. User can confirm attendance and paste notes or a transcript.
- AI produces an **editable, reviewable** structured summary: format, questions/topics, experience, explicit interviewer feedback, personal impressions, possible gaps, follow-ups, and uncertain details. Preserve source and do not invent a hiring decision.
- Capture reflections separately from task completion. Future recommendations consider repeated evidence, not an unsupported precise proficiency score.
- A meaningful new gap can create a **new proposal**, not an automatic schedule mutation.

## Flow D — Communication and manual AI updates

- Gmail can support authorized mailbox discovery and matching of sent/received messages via API, with incremental sync, reconciliation, and provenance. A message arriving may reopen an appropriate conversation if it genuinely requires a response.
- LinkedIn general inbox/connection sync is not guaranteed by available public interfaces. MVP supports saved thread links, AI drafts, opening the provider, and user-reported sends; notifications may provide incomplete incoming signals.
- Users can directly say “I replied to the recruiter,” “I applied,” or “I finished an interview.” The assistant resolves existing identities, applies clear authorized routine updates, preserves **user-reported** provenance, and verifies writes. It distinguishes recorded fact from suggested next step.
- Drafting a reply and opening a thread do **not** prove it was sent. Gmail detection may verify later; provider gaps must be visible without obstructing the workflow.

## Flow E — Daily orientation and Radar

- Home is accurate without a Start My Day command. Users may optionally invoke a deeper AI briefing or End My Day review.
- Radar runs in the morning on an opt-in configurable local schedule, independently of Home. Users can **Run Radar Now** for a new incremental scan, with optional broader search; duplicate concurrent runs are coalesced. Scheduled runs remain scheduled.
- Display source coverage and scan status (running/completed/partial/failed), without fake percentage progress or declaring an incomplete scan successful.
- First Home visit after fresh relevant discoveries shows a compact dismissible summary. No new relevant matches → no notification. Dismissal affects the notification only, not review status or opportunity state.
- Today's schedule and work outrank Radar promotion. Evidence-based urgent opportunities may be highlighted but should not create false deadline urgency.

---

# 5. Canonical data and lifecycle design

## 5.1 Domain entities

| Entity | Responsibilities / essential fields |
|---|---|
| **Opportunity** | Stable identity per actual requisition or tentative/unposted role; company, title, canonical URL, source IDs, fit, lifecycle, priority, availability/evidence |
| **Company** | Stable organization facts and links; not a second live pipeline summary |
| **Contact & affiliation** | Person identity, employer relationship with confidence/last verification, channel addresses, known relationship, role links |
| **Discovery & review** | Scan, candidate lead, source links, seen/saved/rejected decision, reason, timestamp, duplicate link |
| **Application & referral events** | Submitted/referred/requested/withdrawn actions, actor, timestamp, evidence, per-opportunity associations |
| **Outreach intent** | Opportunity/contact/strategy, proposed action, draft, progress; later linked to conversation |
| **Conversation & messages** | Thread/channel identity, latest verified activity, needs response/waiting/closed, next step, follow-up date, source messages |
| **Interview** | One factual round/event, format, date/time or tentative state, recruiter instructions, meeting link, source evidence, debrief |
| **Task** | Executable work, owner, work type, status, estimate, planned day, independent real deadline, flexibility/protection, linked context |
| **Prep plan & proposal** | Research basis, rank and rationale, selected/omitted items, existing-task reuse, proposed moves, approval scope/version |
| **Practice attempt/reflection** | Exercise, duration, completion, assistance/difficulty, notes, self-reported outcomes, related interview |
| **Calendar commitment** | Provider event identity, time and source; affects capacity, never duplicates task work |
| **Activity/audit event** | Change source, before/after, actor, evidence, authorization, verification result, reversible flag |
| **Attention item** | Derived or materialized actionable alert pointing to the authoritative record; dismissal state separate from business state |

## 5.2 Invariants

1. **One opportunity per requisition;** different requisitions at one company remain distinct. Tentative opportunities can exist without invented posting IDs.
2. **Task planned day ≠ deadline.** Day-level rescheduling must not change external deadlines.
3. **Status ≠ evidence.** Interviewing does not prove a round was scheduled; Applied requires a provider confirmation or user report; Submitted referral ≠ Applied.
4. **Source-specific authority.** Gmail is authoritative for Gmail messages, Calendar for provider commitments, user reports for what the user explicitly knows, application database for internal plans. Conflicts are preserved and reconciled rather than silently overwritten.
5. **No duplicate activity.** One logical event can arrive via user report and later provider confirmation. Link/verify the existing event rather than producing a second record.
6. **No reply-only task proliferation.** Conversation actions live in Conversations; initial planned outreach is a separate intent only until a thread exists.
7. **No synthetic calendar mirror tasks.** Meeting capacity is derived from Interview/Calendar commitments and counted once.
8. **Dismissal is not an action.** Clearing an alert does not reject a role, mark a reply sent, or approve a schedule.
9. **No silent consequential writes.** Firm deadlines, external meetings, broad rescheduling, applications, and external sends respect the permission rules.
10. **Reversible where possible.** Local changes have Undo and an audit trail; external sends cannot be falsely “undone.”

## 5.3 Suggested application and communication lifecycle

- **Opportunity lifecycle (high level):** Suggested → Interested/Engaged → Interviewing → Decision → Archived. Intermediate stage labels are **presentation**, not the only source of factual truth.
- **Application state:** Not started / Drafting / Submitted / Withdrawn / Outcome known (use events instead of overloading a single mutable string).
- **Discovery review:** New / Seen / Saved for later / Pursued / Not a Fit; distinct from application state.
- **Conversation:** To review / Needs response / Waiting on them / Scheduled / Closed, with actual messages and follow-up evidence.
- **Referral:** Not initiated / Request planned / Requested / Offered / Submitted / Declined or expired; per contact-and-opportunity context where applicable.

---

# 6. AI behavior, permissions, and trust

## 6.1 Assistant contract

The context-aware AI panel is available across Home, Pipeline, Interviews, Practice, and Planner. It visibly shows its current scope and avoids implicit referents (“this,” “that role”) when ambiguous. It can interpret free text, propose structured commands, call validated domain actions, read resulting records, and report verified outcomes. It is **not** an independent shadow database.

A user statement such as “I had my interview, struggled with hooks, and am waiting on the next round” may produce three distinct outcomes: save debrief (routine write), record self-reported difficulty (routine write), and note the future round as tentative (not fabricate a date). A prep change is a proposal until approved.

## 6.2 Authorization matrix

| Action | Default permission |
|---|---|
| Record high-confidence Radar suggestion / supported source message | Automatic with evidence and deduplication |
| Update a clear, explicit user-reported fact | Auto-commit routine scoped change and verify |
| Add known contact when user explicitly requests | Direct write, no implied outreach |
| Generate company-specific research / prep proposal | Read-only proposal |
| Create new prep activities or move multiple existing tasks | Disclosed, selectable approval; revalidate before commit |
| Move one flexible task to a feasible date | Direct action with graduated warnings and Undo |
| Exceed a maximum or move protected work | Explicit override, if permitted; no silent collateral moves |
| Alter external calendar event or fixed deadline | Separate high-consequence authorization |
| Send an email/LinkedIn message, submit an application | Explicit user action; never inferred from drafting or opening URL |

## 6.3 Failure and recovery behavior

- Source unavailable: show last verified data and partial coverage; avoid fake “synced” indicators.
- Ambiguous identity: ask one targeted question or place a review item; do not choose a candidate silently.
- Stale proposal: recalculate capacity and show differences; request fresh approval for materially altered changes.
- Batch partial failure: itemize successful/reused/failed operations and provide a safe retry path; no blanket “done.”
- Provider/user disagreement: store both evidence and current resolution state rather than overwriting silently.
- Undo: available for local status/date changes where no external irreversible action occurred.

---

# 7. Design system and interaction standards

## 7.1 Brand and layout

A calm, premium, editorial desktop interface inspired by efficient work tools—not a dense CRM. Use restrained decoration, generous whitespace, clear hierarchy, tactile cards, and strong affordances. Avoid stacking multiple large sections above the task board.

**Selected palette:** background `#FAFBF7`; surface `#FFFFFF`; pale eucalyptus `#E9F0E8`; ink `#293A32`; primary eucalyptus `#42735E`; muted `#65776B`; borders `#D9E6DA`; supplementary rose `#E7A7B4`, powder blue `#97C8ED` / pale `#EAF5FC`, occasional apricot `#F3B27E`. Color is supportive—not the only status indicator.

**Desktop first:** multi-pane Home and Pipeline, collapsible scoped AI panel, comfortable multi-column Task board. Smaller screens should preserve essential viewing, quick updates, and replies without requiring advanced drag interactions in the first release.

## 7.2 Components and behaviors

- **Today Board:** task-only columns, direct drag/status actions, completed-today visibility, in-progress and overdue affordances; no hidden work after completing a card.
- **Today List:** tasks plus actionable conversations with differentiated completion/reply controls and priority/deadline sorting.
- **Agenda strip:** first-class calls/interviews, fallback to next future interview if none today; open brief and verified details.
- **Opportunity card/row:** company, title, stage, next action/interview; clear reason and uncertainty for Radar results.
- **Opportunity workspace:** context, chronology, related records, evidence, contacts, prep, and contextual assistant.
- **Plan proposal:** selected checklist, estimated durations, tradeoffs, capacity, before/after moves, approval scope and verification.
- **Reply composer:** AI-proposed text, provider handoff, distinct draft/sent/verified states.
- **Reflection:** one-click optional result after practice, no completion gate.
- **Debrief:** paste notes/transcript, editable extracted summary, explicit uncertainty.
- **Notifications:** compact and nonmodal for ordinary discoveries; actionable attention prioritized by real time sensitivity.

## 7.3 Accessibility and performance

Aim for keyboard-operable board and list controls, semantic headings, accessible focus states, sufficient contrast, named actions, non-color state cues, no mandatory pointer-only drag. Provide a non-drag alternative for moving cards/dates. Loading should not block Home while Radar or research runs. Preserve navigation and draft state during long-running work.

---

# 8. Proposed technical architecture (recommendation; not yet approved)

## 8.1 Initial structure

**Modular monolith, TypeScript end to end:** React/TypeScript web frontend; one authenticated application API; PostgreSQL for canonical records; background workers/queue for scheduled Radar, provider sync, research, and reconciliation; an AI orchestration module that invokes the same typed application actions used by the UI and connectors. Choose framework, hosting, identity provider, and queue after a small implementation spike rather than committing prematurely.

Modules: Identity/Permissions; Opportunities; People/Relationships; Conversations; Interviews; Tasks/Planning; Practice; Radar; Providers; AI/Research; Audit/Notifications. Enforce transaction boundaries and idempotency keys for provider events, imports, and multi-record operations.

## 8.2 Scheduling engine

Use transparent rules for deadlines, commitments, target/max capacity, weekday/weekend preferences, user priorities, buffers, dependencies, task estimates, and selected practice value. The AI can recommend *what* to practice; a deterministic planner should calculate *when it can fit*. Ranking and priorities are explainable; a target is a preference, not a quota. No invented meeting times or auto-rollover of unfinished tasks.

## 8.3 External connections

- **Gmail:** OAuth, minimal necessary scopes, initial discovery, incremental history sync, thread/message identity, sent/received detection, periodic reconciliation. Public release of broad Gmail reading can involve restricted-scope verification and security obligations. Treat this as a real security/cost workstream.
- **Calendar:** read commitments and interviews for true capacity. Optional event creation/time-blocking is separate and opt-in. Never use cloned task rows to count meetings.
- **LinkedIn:** do not depend on general private inbox or network-graph APIs. Store user-supplied thread/profile links, allow drafting and reporting, and use only permissions actually granted.
- **Radar:** scheduled local-time scans and manual runs share deduplication, source evidence, freshness distinctions, and run-status reporting. Background work must be idempotent and rate/cost bounded.
- **Notion migration:** build import mapping and test fixtures early, trial import idempotently, compare identities/counts/links, choose explicit source-of-truth cutover, and preserve recoverable snapshots. No mandatory bidirectional sync.

## 8.4 Security and privacy

User-controlled connection scopes; secure token storage; separation of provider credentials from AI prompts; least-privilege access; deletion/disconnect paths; auditable tool operations. Pasted interview transcripts may contain sensitive candidate/interviewer details: process only with user intent, limit retained raw content by policy, and make summaries editable. Never initiate recording or presume participant consent. Avoid storing full mailbox copies without a clear need.

---

# 9. Delivery milestones and acceptance criteria

## Milestone A — Core schema and read/write reliability

Implement Opportunity, Interview, Task, Practice, Contact, and Activity foundations; permissions; dedupe/identity resolution; direct UI mutations and an auditable timeline. Design migration mapping before finalizing IDs.

**Exit tests:** repeat commands/imports create no duplicate logical records; UI and AI can read the same current state; unrelated records are not mutated; a local task move supports Undo.

## Milestone B — Interview-planning vertical slice

User reports or creates a new interview → matching role/round → focused research/brief → capacity-aware proposed prep → selected approval → verified scheduled tasks → Home completion → edited debrief → future practice signal.

**Exit tests:** ambiguous rounds remain tentative; old prep is reused; before/after preview lists all moved tasks; unapproved work is not created; a material conflict triggers renewed approval; completion never implies proficiency.

## Milestone C — Daily operation and Pipeline

Home agenda, task Board/List, replies area, expanded planner, Active/Discover/Archived Pipeline shells, role detail, scoped AI. Add manual known-contact/referral and outreach workflows without automated people discovery.

**Exit tests:** no recruiting calls today → next interview appears; all calls counted once; task board and list remain synchronized; a sent conversation does not generate a generic reply-only Task; Add Contact causes no outreach/application side effects.

## Milestone D — Integrations and Radar

Calendar capacity, Gmail sync and verification, limited LinkedIn handoff, verified role discovery, daily Radar, manual Run Radar Now, scan run-state, dedupe and attention integration.

**Exit tests:** existing requisition rediscovered → no duplicate; partial scan does not erase last good results; manual and scheduled scans do not overlap wastefully; opening Gmail/LinkedIn is not treated as proof of sending; dismissing Radar banner leaves role state unchanged.

## Milestone E — Migration, hardening, UX validation

Trial/verified migration, product metrics, reliability and privacy checks, keyboard and responsive usability tests, realistic busy-week scenarios, prioritized bug fixes.

**Exit tests:** migrated counts, links and chronology reconcile; failed provider permissions degrade safely; multi-write failure is reported per item; users can find the next important action without digging through multiple dashboards.

## 9.1 Core acceptance scenarios

1. **Radar:** 5 discovered roles: one new, one existing, one prior Not a Fit, one referral-first, one expired. Correct canonical treatment, no manufactured applications, only valid next actions.
2. **Interview:** 3 interviews in one week plus limited capacity. Specific prep proposal ranks the highest-value activities and discloses what will not fit.
3. **Conversation:** user reports a LinkedIn reply, Gmail later confirms an analogous email thread separately; provenance remains accurate and no duplicate sends are invented.
4. **Application:** user chooses Apply Directly, opens external site, closes browser. Opportunity remains not submitted. User reports actual submission → Applied updated once.
5. **Networking:** user selects Add Contact. Person record created, with **no outreach**, no referral request, no application Task unless separately requested.
6. **Learning:** timed mock completed with “needed help”; task is Done, proficiency remains uncertain, next relevant plan can recommend targeted review without silently changing approved dates.
7. **Replanning:** interview moves; existing protected deadline preserved; revised plan preview appears and waits for approval.

---

# 10. Measurement and validation

Measure whether the product reduces work rather than merely adding functionality. Proposed instruments (targets to be established after baseline testing):

- Time from detecting a confirmed interview to a reviewable feasible prep proposal.
- Number of manual data-entry steps required to keep an opportunity current.
- Percentage of accepted prep plans that remain within confirmed commitments and configured capacity.
- Duplication rate for roles, application tasks, interview rounds, and message events.
- Misclassification/correction rate for automatic inbox triage and stage changes.
- Fraction of Radar suggestions marked Pursue versus Not a Fit; qualified source coverage and repeat/review noise.
- Completion of *relevant* preparation, not merely number of tasks checked off.
- User ability to identify the next action in Home during a busy-day usability test.
- Trust indicators: false “sent,” false “applied,” and silent consequential changes should be treated as severe defects.

Initial design validation should compare Pipeline Board vs Table at realistic density and test Home under multiple interviews, overdue items, urgent replies, and a plan proposal competing for space.

---

# 11. Risks, open decisions, and next decision frontier

## 11.1 Settled boundaries to preserve

- Task-only Home Kanban; unified List includes actionable Conversations; no duplicate reply-only tasks.
- Gmail sync is a desired v1 feature; LinkedIn generic inbox/connection sync is explicitly limited.
- Strong AI is accessible across screens; it does not bypass validation, provenance, or permissions.
- Research-driven interview prep and actionable exercises are core. Automated people/hiring-manager research is post-MVP.
- Run Radar Now is a **real new scan**, not UI refresh. Daily scheduled Radar is opt-in and configurable.
- User-reported routine updates can commit; schedule restructuring and outbound actions require appropriate approval.
- **Apply Directly, Add Contact, Seek Referral, and Contact Hiring Team are separate actions.** None should silently trigger another.

## 11.2 Explicitly unresolved / to validate

| Decision | Current status / approach |
|---|---|
| Pipeline initial view (Q92) | **Open**: remember user's Board/Table selection and test initial default. |
| Practice reflection hesitation (Q43) | Resolved operationally by Q50: instantaneous completion, optional nonblocking reflection; validate prompt frequency. |
| Whether planner gets a permanent primary navigation item | Recommendation: no; expanded workspace launched from Home/role context. Validate discoverability. |
| Exact high-level Pipeline grouping labels | Proposed: Interested, Engaged, Interviewing, Decision. Test comprehensibility without losing detailed stages. |
| MVP cutoff versus full v1 integration depth | Still needs an explicit build-scope decision after architecture spike. |
| Real Calendar time-block write behavior | Optional opt-in established; provider scope, confirmation, and conflict UX need implementation-level specification. |
| Networking research and contact import | Public people research deferred beyond MVP. Optional Google Contacts import needs consent/verification policy later. |
| Performance and pricing of AI-assisted research | Needs cost/latency tests and caching strategy. |

## 11.3 Recommended next ready frontier (do not decide implicitly)

**A. MVP boundary:** Identify the nonnegotiable capabilities for a first release to real users versus a working prototype; defend explicit deferrals.  
**B. Technical stack and auth:** Evaluate frontend framework, backend, database, job queue, auth, hosting, event sync, and separation of AI recommendation from deterministic write policy.  
**C. Record migration contract:** Map Notion fields and linked histories, design identity resolution and idempotent import, agree on rollback/cutover.  
**D. UX test:** Compare Pipeline Board/Table and rehearse high-friction Flow A and interview-planning scenarios with realistic data.

**Working hypothesis:** Prioritize the shared workflow engine, a compelling interview-planning loop, Home, and a minimal Pipeline. Integrate broader discovery and automation in controlled steps. No implementation or external record changes are authorized by this specification.

---

# 12. Existing-system references

These are internal context references to the current Notion system, used as behavior and migration references—not live integration requirements.

- [Job Search HQ](https://app.notion.com/p/4041021f8877815fb73cc7e418617883)
- [Pipeline & Progress](https://app.notion.com/p/4051021f8877810cb89cf43d822a3dc3)
- [Roles](https://app.notion.com/p/bbb5d51c48e548859fa0ad09c5c4861d)
- [Contacts](https://app.notion.com/p/8303e47e8764424da7cd6bee6c985505)
- [Conversations](https://app.notion.com/p/c1cb347f95ff4945a324ba688451a53d)
- [Role Radar skill](https://app.notion.com/p/4051021f887781aa9db0c0a59ed30a28)
- [Role Radar discovery history](https://app.notion.com/p/4051021f887781eb8574e6728c2c8f27)
- [Task scheduler](https://app.notion.com/p/4051021f88778165851befcb977f548c)
- [Interview brief](https://app.notion.com/p/4051021f887781afbaced15206907b11)
- [Job Search Settings](https://app.notion.com/p/4051021f8877815a8302d5a8db39abf4)

**Document note:** This specification distinguishes accepted decisions from implementation recommendations and open questions. It is designed to be refined into engineering tickets and a testable prototype, not treated as an unreviewed authorization to change live user information.
