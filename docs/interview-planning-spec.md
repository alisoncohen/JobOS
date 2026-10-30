# Job Search OS — Interview Planning Vertical Slice

Product behavior and acceptance contract for the local synthetic-data prototype. Work planning and execution status live in Linear; this document records requirements, not implementation progress.

See [confirmed product context](product-design-context.md) for scope decisions, [local development stack](decisions/0001-local-development-stack.md) for architecture, and [development access](development-access.md) for access boundaries. Later explicit product decisions take precedence over older source material.

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
- **Specified contract — Intake feedback:** Validation preserves entered input. Empty, request-error and missing-record states are clear. Editing one field preserves unrelated known details.
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
- **Specified contract — Document review:** Extracted text is reviewable before interpretation. Empty, scanned, unsupported or oversized files receive clear guidance without invented content.
- **Locked — Debrief input:** Pasted notes, pasted transcripts and supported TXT/MD/text-based PDF/DOCX sources are in scope. Audio/video recording, speech transcription, arbitrary formats and OCR are not.
- **Locked — AI debrief:** Generate an editable draft preserving explicit interviewer feedback separately from candidate impressions/inference, then permit human review and correction. Gap observations point to saved evidence. No attendance, outcome or future schedule mutation is inferred.
- **Locked — Audit/provenance:** Every meaningful update distinguishes source, actor, authorization, target record, verified outcome and permissible Undo. Research fixture, user report and AI inference must remain distinguishable.
- **Locked — UX:** Minimal desktop-first surfaces with clear focus states, textual warning/status indicators, and no pointer-only scheduling requirement. Selected product palette may be used; a full design system is deferred.

### Representative synthetic fixture (locked acceptance assumptions)

- Real research context: **Google**; fictional frontend opportunity requisition, interview and all user workload. No connection to the user's actual applications or calendar.
- Resetting the intake baseline yields one opportunity and zero interviews; alternate variants have stable, documented records.
- Fixed/resettable reference clock, confirmed interview five days later, plus a separate date-TBD variant; one protected deadline; one reusable prep task.
- Day target **6 hours**, configured maximum **8 hours**, baseline **4 hours** (3h task workload and one unique 1h commitment), including one movable 2h task.
- Adding 3h prep without moving existing work yields **7h** (target overload). An approved flexible 2h move to a day with space yields **5h** on the original day. A further 2h recommendation yields **9h** without moves (maximum override).
- Fixture variants must cover tentative, duplicate-input, target-overload, max-overload, stale-proposal, injected partial-failure and debrief-gap observations.

### Boundaries and still-open engineering selections

- **Selected foundation:** React + Next.js App Router, TypeScript, CSS Modules, SQLite with stable Drizzle, and the repository-pinned Node/pnpm runtime. Local single-user synthetic data, loopback binding and no login are the current access decision; see [local development stack](decisions/0001-local-development-stack.md) and [development access](development-access.md).
- **Open:** exact feature API/module interfaces, natural-language/debrief model providers, any needed background processing, and the full workflow test harness. Hosting and real-data privacy/retention would require separate scope decisions; they are not requirements of this slice.
- **Open:** exact module interfaces and logical IDs should follow the existing `src/domain` and `src/server` boundaries; this contract mandates behavior rather than new module names or signatures.
- **Proposed seam:** Test through **a user-visible workflow boundary backed by authoritative persisted domain actions**: submit form or natural-language input; inspect the resulting record and history after reload; preview/approve; inspect only actual committed state; complete and debrief. This is the highest practical seam suggested by the accepted behavior. Existing `node:test` database and HTTP startup tests establish foundation checks, but no cross-feature workflow harness exists yet. Use these conventions where appropriate and select the feature acceptance seam during implementation; this document does not claim browser interaction coverage already exists.

## Testing Decisions

### What constitutes a good test

- Test **observable behavior at the highest available seam**: user action in → displayed result, persisted canonical records and audit events out. Do not assert internal algorithms, module layout, prompts, private helper calls, or framework-specific implementation details.
- Prefer one cross-feature acceptance seam that traverses the full workflow; introduce narrower tests only where they reveal an independent observable requirement (identity ambiguity, date arithmetic, overloaded selection, stale consent, document parsing failure, partial write recovery).
- Use one fixed, resettable synthetic scenario rather than the actual user's inbox, calendar, Notion databases or interview data. Control the reference date and timezone for repeatability.
- Verify _non-events_ as first-class outcomes: no duplicate interview, no schedule write on preview, no protected task move, no unauthorized approval, no mastery claim after skipped reflection, no automatic replan after debrief.
- Verify failure states by injecting a failure in one approved operation, then inspecting itemized results and safe retry. A generic error banner is insufficient.
- Preserve accessibility coverage for all required actions through keyboard-operable controls and textual state cues, not drag-only or color-only interactions.

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
- **Progress proof:** Each implemented behavior must be verified with persisted records and a relevant failure case, not screenshots alone. All T1–T8 must pass to finish the full slice.

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

## Visual direction

The selected brand palette is background `#FAFBF7`, ink `#293A32`, primary eucalyptus `#42735E`, pale eucalyptus `#E9F0E8`, and border `#D9E6DA`. A full design system is outside this slice.
