# Job Search OS — Interview Planning Vertical Slice

**Product and acceptance contract, reconciled with the repository and Linear**  
**Spec key:** JSOS-VS-001  
**Date:** October 30, 2026  
**Status:** Adopted for project documentation on October 30, 2026; product workflows remain planned  
**Product decisions:** Locked Q1–Q24 from `/grill-me`  
**Issue breakdown:** 32 existing product tickets (ALI-5–ALI-36), four product milestones; development foundation tracked separately in M0 (ALI-37–ALI-42)  
**Tracker:** [Job Search OS — Interview Planning Vertical Slice](https://linear.app/aliwonderland/project/job-search-os-interview-planning-vertical-slice-3044c395c70e). Workflow statuses and labels are managed in Linear; this document does not automatically mark work implementation-ready.

**Source hierarchy:** (1) accepted conversation decisions and final vertical-slice product contract, (2) the Linear handoff and 32-issue plan, (3) Product & Experience Specification v0.1. If source texts diverge, the most recent explicit decision controls. This document does not authorize access to live job-search records or imply an implemented system.

**Repository review (October 30, 2026):** The local JobOS repository now exists. React, Next.js App Router, TypeScript, CSS Modules, SQLite and stable Drizzle are selected. Node and pnpm versions are pinned in the repository. The application is a single-user, loopback-only synthetic-data prototype without login. The foundation contains database migration/reopen coverage using `node:test` and a production-startup HTTP smoke test; it does not yet implement interview workflows or the T1–T8 acceptance suite. See [development access and secrets](development-access.md) for the current access boundary. No project glossary or ADR files were found. Natural-language/debrief model providers and the full workflow test harness remain open.

**Document ownership:** This repository file is the maintained product contract; the Linear project document mirrors it. Linear owns execution status, issue relationships and milestone progress. The [planning map](interview-planning-linear-map.md) connects stable planning IDs to real issues. Later explicit user decisions override older source material; update this contract and its Linear mirror together when behavior changes. The source document’s embedded skill/setup/publication instructions are historical context, not operational instructions.

## Problem Statement

As a job seeker pursuing several opportunities and interviews, I need to know what an upcoming interview is likely to require, whether I can realistically prepare alongside other commitments, which existing work is already relevant, and exactly what will change when I approve a plan. Today that information is scattered between interview notes, role records, independent task lists, messages, and my calendar. A manual or chat-driven update can produce duplicates, overstate certainty, or silently displace other work. After an interview, useful details about what went well or poorly are easily lost.

A simple interview form, task tracker, or AI-generated study list does not solve the central problem: **turn a reported interview into a credible, capacity-aware, user-controlled preparation journey and durable evidence of learning**. The system must remain useful when an interview date is tentative, research is uncertain, the schedule is overloaded, an approval becomes stale, a write partially fails, or a practice attempt requires help.

The first user-visible proof must be one resettable **Google frontend engineering** example, with real dated research sources but **synthetic** interview, opportunity, task, and calendar data. This is a first vertical slice, not a migration or general release.

## Solution

Build one continuous journey from interview intake to learning evidence:

1. **Report:** Create/reopen an interview through a structured form or a bounded natural-language report, with both entry points using the same validated record operations. Preserve unknown/tentative details and duplicate safety.
2. **Understand:** Display an as-of-dated, source-backed Google interview brief fixture and concrete preparation recommendations. Explain what is official, anecdotal, inferred, or unknown; do not claim live research or guaranteed round content.
3. **Plan:** Calculate day-level capacity from one canonical workload, reuse suitable existing tasks, and generate a **read-only** before/after plan including every proposed move, deferral, new activity, omission, and commitment.
4. **Decide:** Let the user select individual changes, recalculate the actual selected schedule, confirm target overload or separately override maximum overload, and safely approve only authorized, nonstale operations. Preserve deadlines and protected commitments.
5. **Act:** Show confirmed interview commitments and approved tasks on a minimal Home experience; mark practice complete immediately, support eligible Undo, and offer nonblocking optional reflection.
6. **Learn:** Accept pasted notes, pasted transcripts, or TXT/Markdown/text-based PDF/DOCX documents; extract an editable, evidence-aware debrief, and store confirmed gap observations for future use **without** automatically changing the approved plan.

**Product checkpoint sequence:** M1 Create/reopen (5 tickets); M2 Intake and read-only prep (11); M3 Approve and execute (11); M4 Debrief and verify (5). Each ticket is a small working behavior with testable outcomes, not an isolated layer or static component. Reliability accompanies each mutation; it is not deferred to a final cleanup phase.

**Observable outcome:** One complete journey plus tentative-interview, overload, stale-proposal, duplicate-report, partial-failure/retry, and debrief-evidence checks, all reproducible from a fixed synthetic fixture.

## User Stories

The following stories enumerate the agreed user-facing behaviors. They do not authorize additional features beyond the locked vertical slice.

### Interview reporting and identity

1. As a job seeker, I want to report an interview through a structured form, so that I can capture known information directly.
2. As a job seeker, I want to report an interview in natural language, so that I can record news without translating it into database fields myself.
3. As a job seeker, I want both entry methods to update the same interview, so that I do not maintain inconsistent versions of my schedule.
4. As a job seeker, I want to link a new interview to the correct opportunity, so that its role and company context is available throughout preparation.
5. As a job seeker, I want to see a targeted question when more than one opportunity could match, so that the system does not attach my interview to the wrong role.
6. As a job seeker, I want the app to distinguish distinct rounds, so that two genuine interviews are not incorrectly merged.
7. As a job seeker, I want repeated reports of the same round to reuse one record, so that I do not get duplicate interviews or activity.
8. As a job seeker, I want to navigate away and reopen my interview after a reload, so that I can trust that it was saved.
9. As a job seeker, I want to update confirmed details without creating a second interview, so that my history stays coherent.
10. As a job seeker, I want to record an interview even without its exact date, so that tentative news is not lost.
11. As a job seeker, I want an unknown round or format to remain explicitly unknown, so that the app does not pretend to know details I never provided.
12. As a job seeker, I want to see which information was reported, confirmed, or inferred, so that I can judge its reliability.
13. As a job seeker, I want the app to avoid inventing a timezone or clock time, so that my schedule remains accurate.

### Research brief and recommendations

14. As a job seeker, I want a Google-focused interview brief associated with my fictional round, so that preparation feels specific instead of generic.
15. As a job seeker, I want to see when a research snapshot was created, so that I do not mistake stored research for a live search.
16. As a job seeker, I want references for substantive research statements, so that I can examine the evidence.
17. As a job seeker, I want official employer guidance distinguished from candidate anecdotes and inference, so that I do not treat all claims equally.
18. As a job seeker, I want missing recruiter instructions to appear as unknown rather than fabricated, so that I can act on trustworthy details.
19. As a job seeker, I want a preparation recommendation to include a concrete exercise and objective, so that I can actually perform it.
20. As a job seeker, I want each suggestion to include estimated duration, reason, and completion criteria, so that I can compare effort and value.
21. As a job seeker, I want uncertainty about round-specific relevance displayed on recommendations, so that I can decide what to trust.
22. As a job seeker, I want to view a brief before an interview date is confirmed, so that I can begin learning without falsely scheduling work.

### Workload and read-only planning

23. As a job seeker, I want existing tasks and interviews shown with my other commitments, so that I can see the actual competing workload.
24. As a job seeker, I want the planned workday kept separate from a firm deadline, so that rescheduling does not change obligations.
25. As a job seeker, I want protected commitments distinguished from flexible tasks, so that I know which work can move.
26. As a job seeker, I want overlapping representations of the same meeting counted once, so that my capacity is not understated.
27. As a job seeker, I want my preferred daily target and maximum capacity visible separately, so that overload warnings have meaning.
28. As a job seeker, I want existing equivalent preparation recognized, so that the plan reuses work instead of making duplicates.
29. As a job seeker, I want recommended prep placed on feasible days where possible, so that I can execute it in time.
30. As a job seeker, I want unplaceable recommendations left unscheduled with an explanation, so that they remain visible without false promises.
31. As a job seeker, I want to see suggested moves and deferrals of lower-value work, so that I can understand the tradeoffs.
32. As a job seeker, I want a complete before/after schedule including every affected existing task, so that approval is informed.
33. As a job seeker, I want the first proposal to be read-only, so that exploring possibilities does not change my tasks.
34. As a job seeker, I want date-dependent planning withheld until the interview date is confirmed, so that tentative information does not drive invented schedules.

### Selection, authorization, capacity and recovery

35. As a job seeker, I want to select some suggested activities while rejecting others, so that the plan reflects my priorities.
36. As a job seeker, I want to reject a supporting task move without rejecting all the preparation, so that I retain control over individual changes.
37. As a job seeker, I want the selected plan recalculated after every meaningful selection change, so that I see its actual load and conflicts.
38. As a job seeker, I want an above-target day labeled with its actual hours, so that I can make an intentional tradeoff.
39. As a job seeker, I want to explicitly acknowledge target overload before approval, so that a warning is not silently bypassed.
40. As a job seeker, I want an even stronger confirmation before exceeding my configured maximum, so that exceptional overload is deliberate.
41. As a job seeker, I want overload still visible after approval, so that an override is not represented as newfound capacity.
42. As a job seeker, I want fixed meetings and firm deadlines preserved despite an overload override, so that approval cannot silently change unrelated commitments.
43. As a job seeker, I want unselected proposed changes to remain uncommitted, so that the app does not make decisions on my behalf.
44. As a job seeker, I want rejected/omitted work preserved rather than deleted, so that I do not lose information.
45. As a job seeker, I want the app to recheck the schedule at approval, so that a stale preview cannot overwrite more recent changes.
46. As a job seeker, I want a new before/after review if a material change makes my proposal stale, so that I can provide fresh consent.
47. As a job seeker, I want repeated approval or a retry to avoid duplicating successful work, so that failures are safe to recover from.
48. As a job seeker, I want to know which individual changes succeeded, were reused, failed, or were blocked, so that I know the actual outcome.
49. As a job seeker, I want to retry only failed changes, so that already successful work is not repeated.
50. As a job seeker, I want to undo eligible local task changes without reversing unrelated newer work, so that correction remains safe.

### Home and practice

51. As a job seeker, I want a confirmed interview visible in Home's agenda, so that I can orient to my preparation timeline.
52. As a job seeker, I want approved prep tasks visible on Home, so that I can act on the plan without changing screens repeatedly.
53. As a job seeker, I want unapproved suggestions absent from my task list, so that Home represents actual commitments.
54. As a job seeker, I want to mark preparation complete immediately, so that reflection never blocks progress.
55. As a job seeker, I want to undo a mistaken completion, so that my task history stays accurate.
56. As a job seeker, I want an optional one-click reflection about help or difficulty, so that the app can capture useful signal without turning every task into a form.
57. As a job seeker, I want to skip reflection without implying mastery, so that silence is not misread as proficiency.

### Debrief and learning evidence

58. As a job seeker, I want to paste my interview notes, so that I can capture what happened without a rigid template.
59. As a job seeker, I want to paste a transcript, so that a long source can be summarized and reviewed.
60. As a job seeker, I want to upload a supported text-based document, so that I can reuse notes I already have.
61. As a job seeker, I want to review extracted source text before AI interpretation, so that extraction mistakes are visible.
62. As a job seeker, I want unsupported and unreadable files rejected clearly, so that the app never invents extracted content.
63. As a job seeker, I want a draft structured debrief generated from my submitted content, so that I can review questions, topics, observations and follow-ups efficiently.
64. As a job seeker, I want uncertain AI output flagged as such, so that it is not mistaken for explicit interviewer feedback.
65. As a job seeker, I want to edit the proposed debrief before saving, so that my own record is accurate.
66. As a job seeker, I want the saved debrief to reopen with my corrections intact, so that later review reflects my decisions.
67. As a job seeker, I want self-reported skill gaps linked to their source interview and notes, so that future preparation can use evidence rather than invented scores.
68. As a job seeker, I want no new preparation plan automatically scheduled because of a debrief, so that recording what happened never makes unapproved changes.
69. As a job seeker, I want the app not to assume I attended or received a hiring decision, so that the debrief preserves facts rather than inferences.

### Coherence, trust, and accessibility

70. As a job seeker, I want all parts of the journey to use the same persisted information, so that I am not managing conflicting shadow records.
71. As a job seeker, I want to see reliable operation outcomes after an error, so that I do not mistake a partial save for success.
72. As a keyboard user, I want to perform essential actions without drag-and-drop, so that I can operate the product accessibly.
73. As a job seeker, I want labels rather than color alone to communicate status and uncertainty, so that important distinctions remain understandable.
74. As a job seeker, I want a resettable sample journey, so that I can evaluate the same product behavior consistently.

## Implementation Decisions

**Status legend:** **Locked** = user-approved product behavior; **specified contract** = required observable behavior inferred from accepted decisions and handoff; **proposed seam** = testing boundary requiring repository review; **open** = engineering selection not yet authorized.

### Components and interfaces

- **Locked — Shared action pathway:** Form and bounded natural-language intake must resolve through the same validated create/update interview behavior and canonical interview identity. They must not each maintain separate record state.
- **Locked — Record responsibilities:** The narrow slice needs Opportunity, Interview, Task, CalendarCommitment, ResearchSnapshot/PrepRecommendation, PrepProposal/ProposedChange, PracticeReflection, Debrief/GapObservation, and ActivityEvent. Introduce records only when necessary for their working interaction, not an entire future CRM.
- **Specified contract — Interview mutation:** An input identifies a tracked opportunity and some reported round facts; its output is the current interview identity, known/tentative fields, provenance, and verified result. Matching uses existing opportunity and round context. Repeated actions and reports reuse a logical interview; unresolved ambiguity is surfaced rather than guessed.
- **Specified contract — Read interview:** Persisted identity and reported fields are visible after navigation/reload. Confirming a tentative date updates the existing record and preserves unknown round/format details.
- **Locked — Research:** Use a real, dated, independently sourced **Google frontend engineering** brief fixture, not live company-research generation. Research applicability to a fictional round must be qualified. Each recommendation has objective, exercise/resource, duration, rationale, completion criteria and evidence category.
- **Locked — Planning:** The AI may suggest preparation content, but capacity calculation and proposed date assignments are deterministic and explainable. Task planned day is distinct from deadline. Date-dependent placement requires confirmed interview date. Reuse actual equivalent work; do not duplicate it.
- **Specified contract — Read-only proposal:** Given an interview, workload snapshot, capacity limits and recommendations, produce the proposed changes with stable logical identities, reasons, reuses, omissions, old/new dates and before/after loads. No proposal generation writes task scheduling changes.
- **Locked — Selective approval:** Users approve specific recommendations and task moves; selection is recalculated as a whole. Unselected changes are never committed; deferral is not deletion.
- **Specified contract — Safe commit:** Approval consumes the selected proposal, disclosed change set, source-state version and authorization for each warning tier; produces itemized verified outcomes. A stale proposal is rejected for renewed review before any changed work is silently applied. Replays are idempotent. An initial write path blocks overload until the appropriate consent interaction exists.
- **Locked — Capacity authorization:** Target overload requires explicit acknowledgment; maximum-capacity exceedance requires a stronger override. Both remain labeled after commit. Neither authorizes modification of protected meetings, existing firm deadlines or unselected tasks.
- **Locked — Recovery:** Partially successful batches show exact results and permit safe failed-only retry. Eligible local task-status/day modifications can be undone only if no newer conflicting change makes reversal unsafe.
- **Locked — Home:** Build the actual agenda and approved-work list after safe approvals exist. Task completion is immediate, persistent and reversible where eligible. Optional reflections are separate from task completion and do not create unsupported mastery scores.
- **Locked — Debrief input:** Pasted notes, pasted transcripts and supported TXT/MD/text-based PDF/DOCX sources are in scope. Audio/video recording, speech transcription, arbitrary formats and OCR are not.
- **Locked — AI debrief:** Generate an editable draft preserving explicit interviewer feedback separately from candidate impressions/inference, then permit human review and correction. Gap observations point to saved evidence. No attendance, outcome or future schedule mutation is inferred.
- **Locked — Audit/provenance:** Every meaningful update distinguishes source, actor, authorization, target record, verified outcome and permissible Undo. Research fixture, user report and AI inference must remain distinguishable.
- **Locked — UX:** Minimal desktop-first surfaces with clear focus states, textual warning/status indicators, and no pointer-only scheduling requirement. Selected product palette may be used; a full design system is deferred.

### Representative synthetic fixture (locked acceptance assumptions)

- Real research context: **Google**; fictional frontend opportunity requisition, interview and all user workload. No connection to the user's actual applications or calendar.
- Fixed/resettable reference clock, confirmed interview five days later, plus a separate date-TBD variant; one protected deadline; one reusable prep task.
- Day target **6 hours**, configured maximum **8 hours**, baseline **4 hours** (3h task workload and one unique 1h commitment), including one movable 2h task.
- Adding 3h prep without moving existing work yields **7h** (target overload). An approved flexible 2h move to a day with space yields **5h** on the original day. A further 2h recommendation yields **9h** without moves (maximum override).
- Fixture variants must cover tentative, duplicate-input, target-overload, max-overload, stale-proposal, injected partial-failure and debrief-gap observations.

### Boundaries and still-open engineering selections

- **Selected foundation:** React + Next.js App Router, TypeScript, CSS Modules, SQLite with stable Drizzle, and the repository-pinned Node/pnpm runtime. Local single-user synthetic data, loopback binding and no login are the current access decision; see ALI-37–ALI-41 and `development-access.md`.
- **Open:** exact feature API/module interfaces, natural-language/debrief model providers, any needed background processing, and the full workflow test harness. Hosting and real-data privacy/retention would require separate scope decisions; they are not requirements of this slice.
- **Open:** exact module interfaces and logical IDs should follow the existing `src/domain` and `src/server` boundaries; this contract mandates behavior rather than new module names or signatures.
- **Proposed seam:** Test through **a user-visible workflow boundary backed by authoritative persisted domain actions**: submit form or natural-language input; inspect the resulting record and history after reload; preview/approve; inspect only actual committed state; complete and debrief. This is the highest practical seam suggested by the accepted behavior. Existing `node:test` database and HTTP startup tests establish foundation checks, but no cross-feature workflow harness exists yet. Use these conventions where appropriate and select the feature acceptance seam during implementation; this document does not claim browser interaction coverage already exists.
- **Tracker reconciliation:** All 32 product issues and their four milestones already exist in the Aliwonderland Linear project. Preserve them and the separate M0 foundation issues. Stable F1–D5 identifiers are reference keys, not additional tickets or permission to change readiness labels.

## Testing Decisions

### What constitutes a good test

- Test **observable behavior at the highest available seam**: user action in → displayed result, persisted canonical records and audit events out. Do not assert internal algorithms, module layout, prompts, private helper calls, or framework-specific implementation details.
- Prefer one cross-feature acceptance seam that traverses the full workflow; introduce narrower tests only where they reveal an independent observable requirement (identity ambiguity, date arithmetic, overloaded selection, stale consent, document parsing failure, partial write recovery).
- Use one fixed, resettable synthetic scenario rather than the actual user's inbox, calendar, Notion databases or interview data. Control the reference date and timezone for repeatability.
- Verify _non-events_ as first-class outcomes: no duplicate interview, no schedule write on preview, no protected task move, no unauthorized approval, no mastery claim after skipped reflection, no automatic replan after debrief.
- Verify failure states by injecting a failure in one approved operation, then inspecting itemized results and safe retry. A generic error banner is insufficient.
- Preserve accessibility coverage for all required actions through keyboard-operable controls and textual state cues, not drag-only or color-only interactions.

### Tests and modules / user-visible surfaces

| Test area             | Behavior tested                                                                                           | Primary planned issues |
| --------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------- |
| Intake and identity   | Create/reopen; tentative state; form/chat equivalence; identity ambiguity; no duplicate round             | F3, I1–I5              |
| Research brief        | Correct dated snapshot; explicit source category; valid links; uncertainty                                | B1–B3                  |
| Planning              | Unique commitments; 4h/7h/9h arithmetic; reuse; read-only proposal; complete before/after                 | P1–P5                  |
| Approval and recovery | Selected-only commit; target/max overrides; stale state; retry only failures; Undo                        | A1–A8                  |
| Home and reflection   | Persisted approved work; immediate Done; optional reflection without false mastery                        | H1–H3                  |
| Debrief               | TXT/MD/PDF/DOCX source review; editable AI draft; attributable confirmed gaps; no invented hiring outcome | D1–D5                  |

### Cross-feature acceptance scenarios

| ID                        | Given / When                                                                                                                 | Required externally observable result                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **T1 · Full journey**     | Create fictional Google interview via form, read brief, select/approve a plan, complete practice, then review/save a debrief | One linked, persisted journey; no hidden manual state edits                                      |
| **T2 · Tentative**        | Report an interview with date TBD                                                                                            | Accurate tentative interview, brief available, no fabricated date-dependent scheduling           |
| **T3 · Target overload**  | Choose 3h new activity but reject 2h supporting move against 4h baseline                                                     | 7h displayed against 6h target; explicit target acknowledgment required                          |
| **T4 · Maximum overload** | Choose 3h + 2h new work against 4h baseline                                                                                  | 9h displayed against 8h maximum; stronger deliberate override required; protected work unchanged |
| **T5 · Stale**            | Generate proposal, change an underlying task, then approve the old view                                                      | Old approval blocked; updated diff shown for renewed approval                                    |
| **T6 · Partial failure**  | Cause one of three selected operations to fail after others succeed                                                          | Exact outcomes shown; retry only failed operation; no duplicate success; safe Undo if eligible   |
| **T7 · Duplicate report** | Report same interview using form and natural language                                                                        | One logical interview, both reports traceable                                                    |
| **T8 · Debrief fidelity** | Notes mention difficulty with React hooks but no interviewer evaluation                                                      | Gap can be reviewed/saved with source; no fabricated feedback, decision or automatic replanning  |

### Prior art and seams verification

- **Existing tests in the codebase:** `tests/database.test.ts` checks migration repeatability, persisted data after reopening, foreign-key configuration and integrity. `tests/startup.smoke.ts` starts the production server and checks the homepage response. Both use `node:test`; neither proves feature-level user interaction or T1–T8.
- **Feature implementation follow-up:** Build on the existing test conventions and choose a workflow harness that can observe canonical persisted actions and essential UI interactions. Retain the proposed high-level seam as a requirement to validate, without claiming the foundation smoke test covers the product journey.
- **Progress proof:** Each small ticket must demonstrate the behavior and a relevant failure case; the four milestone gates are verified by records, not screenshots alone. All T1–T8 must pass to finish the full slice.

## Out of Scope

- Live or continuously refreshed Google company/interview research, or automatic candidate-report scraping.
- Job discovery, Radar, role ranking, networking, contact search/import, referral/applications, or hiring-manager research.
- Gmail, Google Calendar, LinkedIn or Notion synchronization/migration, and modification of any real job-search records.
- Full Pipeline, Inbox/Conversations, entire Home task board/list parity, rich weekly Planner, or a generic drag-and-drop calendar editor.
- General-purpose AI assistant that can perform arbitrary commands across the full product.
- Email/LinkedIn sending, application submission, external calendar writes, automatic invitations, or external-source verification.
- Coding judge, original coding problem platform, or automated interview practice evaluator.
- Automatic recording, audio/video transcription, OCR of scanned pages, arbitrary file types, and unrequested external file retrieval.
- Mandatory reflections, artificial proficiency/mastery scoring, or automatically generated/scheduled follow-on plans from debrief notes.
- Production onboarding, public account connection, production credentials, data migration, deployment SLA, pricing or usage billing.
- Unapproved changes to technical framework, architecture, security boundaries or rollout commitments.

## Further Notes

### Tracer-bullet milestones (locked decomposition)

| Milestone                        | Planned issues           | Exit gate                                                                                        |
| -------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------ |
| **M1 — Create & reopen**         | F1–F3, I1–I2 (5)         | Form creates one interview; record ID and details survive reload                                 |
| **M2 — Intake & read-only prep** | I3–I5, B1–B3, P1–P5 (11) | Tentative/duplicate/chat intake, sourced brief and full nonmutating plan preview                 |
| **M3 — Approve & execute**       | A1–A8, H1–H3 (11)        | Selected-only commits, overload consent, stale/failure recovery, Home task completion/reflection |
| **M4 — Debrief & verify**        | D1–D5 (5)                | Uploaded/pasted inputs, editable debrief, gap evidence, all T1–T8 acceptance tests               |

### Planned Linear issues and blocking edges

These identifiers are stable **planning IDs** mapped to existing ALI-5–ALI-36 tickets in the [Linear planning map](interview-planning-linear-map.md). Dependencies are intentional and acyclic. Safeguard caveat: A3 must already reject stale/unauthorized/overloaded changes before A5–A7 add their richer UI. The individual descriptions preserve the accepted handoff contract. Existing issue statuses and labels are not changed by adoption of this document.

- **F1 — Define resettable Google frontend interview demo fixture** (blocked by: —). **Done when:** Resetting the intake baseline yields one opportunity and zero interviews; alternate variants have their documented, stable records. Example day totals 3h existing tasks + 1h meeting + proposed 3h practice = 7h. A second option brings total to 9h for maximum override. No real private recruiting or calendar data appears in fixtures.
- **F2 — Create minimal app shell and interview entry navigation** (blocked by: —). **Done when:** User can open the app and reach interview entry with keyboard or pointer. Empty and request-error states are intelligible. Navigation does not require a seeded interview.
- **F3 — Implement shared validated record-action foundation** (blocked by: F1). **Done when:** Create and update survive reload. Replaying the same logical operation does not duplicate records. Activity records identify actor/source and the affected record. Invalid or unauthorized mutation is rejected without side effects.
- **I1 — Create an interview from structured input** (blocked by: F1, F2, F3). **Done when:** Valid submission creates exactly one interview associated with existing opportunity. Double-submitting the same request does not create duplicates. Validation feedback preserves entered data; no invented details.
- **I2 — Open and reopen saved interview details** (blocked by: I1). **Done when:** Navigate away, reload and reopen: identical interview ID and confirmed fields appear. Unknown values are labeled unknown/tentative, not silently filled. A missing record produces a clear not-found state.
- **I3 — Edit and confirm tentative interview details** (blocked by: I2). **Done when:** A report missing a date remains tentative. Confirming a date changes that record, not a new one. Updating one field does not overwrite unrelated known details.
- **I4 — Resolve opportunity identity and dedupe interview reports** (blocked by: I1, I2). **Done when:** Same identifiable round reported twice yields one interview record. Two genuinely distinct rounds remain separate. Ambiguous match is blocked pending review; no silent merge.
- **I5 — Report interviews in natural language using shared actions** (blocked by: I3, I4). **Done when:** One supported report via chat and equivalent form produce matching canonical state. Rephrased duplicate reports do not create extra rounds. Unknown date/format remains unknown; user can correct interpretation.
- **B1 — Create dated Google interview research snapshot** (blocked by: F1). **Done when:** Every substantive research claim has a source or an explicit inference label. Snapshot remains repeatable without a new live research call. No blanket assertion that a specific Google round will test a topic.
- **B2 — Display sourced interview brief on the interview** (blocked by: B1, I2). **Done when:** Interview opens associated brief correctly. Sources are navigable and distinguishable by type. Missing guidance is shown as unknown, not a generic promise.
- **B3 — Display actionable preparation recommendation cards** (blocked by: B2). **Done when:** Every displayed recommendation contains all required attributes. Weak or inferred recommendations are clearly distinguished from confirmed instructions. Cards are usable as inputs to the later proposal without inventing new tasks.
- **P1 — Display synthetic workload, deadlines and commitments** (blocked by: F1, I2). **Done when:** Protected work and firm deadlines are visible and distinguishable. Existing workload matches fixture records after reload. Calendar commitments are not rendered as synthetic task clones.
- **P2 — Compute daily target/max capacity without double counting** (blocked by: P1). **Done when:** Fixture day load is 4h before prep. Meeting mirrored as interview/calendar record counts once. Target and maximum capacity are separately reported. Calculation is deterministic for identical input.
- **P3 — Identify relevant existing prep tasks for reuse** (blocked by: P1, B3). **Done when:** Known equivalent task is marked reused rather than created anew. Unrelated task is not reused. Existing task identity and status are preserved.
- **P4 — Generate a read-only capacity-aware proposed schedule** (blocked by: P2, P3, I3). **Done when:** Proposals have dated or unscheduled outcomes and explain why. Tentative interview with unknown date receives no date-dependent placement. Repeated generation changes zero task/interview records. Protected work is never proposed as a silent move.
- **P5 — Show full before/after plan review** (blocked by: P4). **Done when:** Every affected existing task appears by identity with old/new planned day. 7h target overload and 9h max overload are visually distinct. Opening/closing proposal does not mutate data.
- **A1 — Select individual activities and proposed moves** (blocked by: P5). **Done when:** Selection can include activity but reject move. Unselected items do not become implicitly approved. No database mutation occurs when toggling selection.
- **A2 — Recalculate the selected change set and warnings** (blocked by: A1, P2). **Done when:** Selecting 3h practice and rejecting 2h move shows 7h target overload. Changing selection changes preview immediately and correctly. No undisclosed tasks or date moves appear.
- **A3 — Commit safe selected changes with authorization and version checks** (blocked by: A2, F3). **Done when:** Approved feasible selection persists exactly once; replay is idempotent. Unselected tasks and unrelated records unchanged. Stale proposal rejected without unauthorized writes. Overloaded proposals blocked until opt-in override workflow exists.
- **A4 — Apply explicitly approved task moves and deferrals** (blocked by: A3, P1). **Done when:** Selected flexible task moves to intended day. Task deadline remains unchanged. Rejected move is not applied. Deferral never deletes the task.
- **A5 — Confirm and persist target-capacity overload** (blocked by: A2, A3). **Done when:** 7h day on 6h target cannot commit via ordinary approval. Explicit confirmation permits selected work when under maximum. Post-approval day remains labeled 7h and over target.
- **A6 — Require stronger override above maximum capacity** (blocked by: A5). **Done when:** 9h selection cannot commit with only target-overload acknowledgment. Deliberate maximum override is recorded with scope. Protected commitments and deadlines remain unchanged.
- **A7 — Show stale-proposal refresh and renewed approval** (blocked by: A3, P5). **Done when:** Change underlying task after preview; old approval cannot commit. Updated diff displays changed workload/moves. No material change silently inherits old approval.
- **A8 — Report partial failures, retry failed steps and Undo eligible moves** (blocked by: A4, A7). **Done when:** One injected failure produces truthful per-item outcomes. Retry fails/succeeds safely without duplicating prior successes. Eligible Undo restores only appropriate local change; does not overwrite newer conflicting edits. No blanket success message on partial failure.
- **H1 — Show confirmed interviews and approved work on minimal Home** (blocked by: A3, I2). **Done when:** Approved task appears immediately and after reload. Unapproved proposal item never appears as a task. Agenda does not invent times or duplicate commitments.
- **H2 — Complete a practice task and Undo** (blocked by: H1). **Done when:** Done persists after reload. Undo restores prior status without modifying another task. Completion never assigns mastery.
- **H3 — Offer optional one-click practice reflection** (blocked by: H2). **Done when:** Task completion occurs before reflection. No reflection means no proficiency inference. Saved reflection remains attached to original practice task.
- **D1 — Enter interview notes or paste transcript text** (blocked by: I2). **Done when:** Pasted content remains associated with correct interview. User can review input before extraction. Input never sets interview outcome/attendance without explicit report.
- **D2 — Accept TXT/MD/PDF/DOCX debrief documents** (blocked by: D1). **Done when:** TXT and Markdown text are reviewable. PDF and DOCX text extraction works for supported text-based files. Unsupported or unextractable document returns clear guidance without inventing content.
- **D3 — Extract structured AI debrief from submitted content** (blocked by: D1). **Done when:** Clear source-backed fields extracted from example notes. Unknown/unsupported feedback is marked missing or tentative. No fabricated interview result, decision or attendance.
- **D4 — Review, correct, save, and reopen structured debrief** (blocked by: D3). **Done when:** User can edit a wrong extracted topic prior to saving. Saved corrections survive reload. Raw input and confirmed/corrected summary remain distinguishable.
- **D5 — Persist and retrieve gap observations for future planning** (blocked by: D4). **Done when:** A reported React hooks difficulty becomes an associated, source-attributed gap. A gap can be retrieved from that interview. No scheduling changes or fake proficiency scores occur.

### Parallelization and sequencing guardrails

- F1 unlocks the minimal app shell (F2), shared actions (F3), and independent Google research fixture (B1).
- I2 unlocks tentative editing (I3), semantic deduplication (I4), synthetic workload display (P1), and pasted debrief entry (D1).
- D1 unlocks document extraction (D2) and AI debrief extraction (D3) in parallel; edit/review follows D3.
- Read-only planning precedes commit. A1/A2 must preview the **selected** set. A3 must safely reject stale or unapproved effects from its first write; A5/A6 and A7 add explicit consent/refresh UX, not the first safety controls.
- H1 begins after A3 persists tasks and must read those records, not a second mock state.
- Split I4 identity/dedup, A8 partial-retry/Undo, and D2 text/PDF-DOCX as implementation subtasks only if needed; preserve 32 stable planning parent IDs.

### Locked decisions and current approvals

- **Q1–Q16** fixed the user journey, researched fixture, tentative state, evidence/uncertainty, selective approval, explicit overload, nonblocking reflection, text/document debrief, recovery, and required demonstration scenarios.
- **Q17–Q24** fixed small independently testable increments; create/reopen first; structured input before natural language; read-only proposal before approval; Home after approval; reliability with each write; Google as the real-company research anchor.
- The project is in the Aliwonderland team. Later foundation decisions selected the stack and local access model (ALI-37–ALI-41). No new sprint dates, estimates, ownership assignments or launch date are introduced here. The original 24–36-hour estimate came from a smaller skeleton and must not be reused for this expanded scope.
- The selected brand palette is background `#FAFBF7`, ink `#293A32`, primary eucalyptus `#42735E`, pale eucalyptus `#E9F0E8`, and border `#D9E6DA`. Use as product direction without turning the slice into a full visual redesign.

### Tracker publication and readiness

The original source was an unpublished handoff. It has now been reconciled against the existing Linear project, ALI-5–ALI-36 product tickets and M0 foundation work. A project document carries this contract; the planning map records its link after publication. Publication records the agreed scope, not implementation completion or readiness of every dependent ticket. No `ready-for-agent` label is applied as a side effect. Historical `/to-spec` setup instructions are not project prerequisites.

### Source references

- Accepted `/grill-me` conversation decisions Q1–Q24 and the final vertical-slice product contract.
- _Job Search OS — Product & Experience Specification_ v0.1 (October 29, 2026), user-provided.
- _Job Search OS — Interview-Planning Vertical Slice_, Linear project handoff (October 29, 2026), with all 32 issue descriptions and dependencies.
- _Job Search OS — Interview Planning Vertical Slice: Engineering Specification_ v1.0, prior draft (superseded as `/to-spec` format; retains useful detailed contracts).
- Original source artifact: `Job_Search_OS_to-spec_Actual_Skill_v1.0.md`, supplied by the user; `/to-spec` format attribution is historical. Referenced conversation artifacts were not independently available for this reconciliation; no additional decisions are inferred from them.
