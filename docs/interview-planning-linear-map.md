# Interview-planning Linear map

Published project document: [JSOS-VS-001 — Product contract and issue map](https://linear.app/aliwonderland/document/jsos-vs-001-interview-planning-product-contract-and-issue-map-41d0b51c5d4a).

The [product contract](interview-planning-spec.md) records behavior; [Linear](https://linear.app/aliwonderland/project/job-search-os-interview-planning-vertical-slice-3044c395c70e) records current execution status. Planning IDs below map to existing tickets, not additional work items.

| Planning ID | Linear issue                                                                                                               | Behavior                                                            | Blocked by                            | Acceptance scenarios |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------- | -------------------- |
| F1          | [ALI-5](https://linear.app/aliwonderland/issue/ALI-5/define-resettable-google-frontend-interview-demo-fixture)             | Define resettable Google frontend interview demo fixture            | —                                     | T1–T8                |
| F2          | [ALI-6](https://linear.app/aliwonderland/issue/ALI-6/create-minimal-app-shell-and-interview-entry-navigation)              | Create minimal app shell and interview entry navigation             | —                                     | T1                   |
| F3          | [ALI-7](https://linear.app/aliwonderland/issue/ALI-7/implement-shared-validated-record-action-foundation)                  | Implement shared validated record-action foundation                 | F1 / ALI-5                            | T1, T7               |
| I1          | [ALI-8](https://linear.app/aliwonderland/issue/ALI-8/create-an-interview-from-structured-input)                            | Create an interview from structured input                           | F1 / ALI-5, F2 / ALI-6, F3 / ALI-7    | T1, T7               |
| I2          | [ALI-9](https://linear.app/aliwonderland/issue/ALI-9/open-and-reopen-saved-interview-details)                              | Open and reopen saved interview details                             | I1 / ALI-8                            | T1, T2               |
| I3          | [ALI-10](https://linear.app/aliwonderland/issue/ALI-10/edit-and-confirm-tentative-interview-details)                       | Edit and confirm tentative interview details                        | I2 / ALI-9                            | T2                   |
| I4          | [ALI-11](https://linear.app/aliwonderland/issue/ALI-11/resolve-opportunity-identity-and-dedupe-interview-reports)          | Resolve opportunity identity and dedupe interview reports           | I1 / ALI-8, I2 / ALI-9                | T7                   |
| I5          | [ALI-12](https://linear.app/aliwonderland/issue/ALI-12/report-interviews-in-natural-language-using-shared-actions)         | Report interviews in natural language using shared actions          | I3 / ALI-10, I4 / ALI-11              | T2, T7               |
| B1          | [ALI-13](https://linear.app/aliwonderland/issue/ALI-13/create-dated-google-interview-research-snapshot)                    | Create dated Google interview research snapshot                     | F1 / ALI-5                            | T1, T2               |
| B2          | [ALI-14](https://linear.app/aliwonderland/issue/ALI-14/display-sourced-interview-brief-on-the-interview)                   | Display sourced interview brief on the interview                    | B1 / ALI-13, I2 / ALI-9               | T1, T2               |
| B3          | [ALI-15](https://linear.app/aliwonderland/issue/ALI-15/display-actionable-preparation-recommendation-cards)                | Display actionable preparation recommendation cards                 | B2 / ALI-14                           | T1                   |
| P1          | [ALI-16](https://linear.app/aliwonderland/issue/ALI-16/display-synthetic-workload-deadlines-and-commitments)               | Display synthetic workload, deadlines and commitments               | F1 / ALI-5, I2 / ALI-9                | T1, T3, T4           |
| P2          | [ALI-17](https://linear.app/aliwonderland/issue/ALI-17/compute-daily-targetmax-capacity-without-double-counting)           | Compute daily target/max capacity without double counting           | P1 / ALI-16                           | T3, T4               |
| P3          | [ALI-18](https://linear.app/aliwonderland/issue/ALI-18/identify-relevant-existing-prep-tasks-for-reuse)                    | Identify relevant existing prep tasks for reuse                     | P1 / ALI-16, B3 / ALI-15              | T1                   |
| P4          | [ALI-19](https://linear.app/aliwonderland/issue/ALI-19/generate-a-read-only-capacity-aware-proposed-schedule)              | Generate a read-only capacity-aware proposed schedule               | P2 / ALI-17, P3 / ALI-18, I3 / ALI-10 | T1, T2               |
| P5          | [ALI-20](https://linear.app/aliwonderland/issue/ALI-20/show-full-beforeafter-plan-review)                                  | Show full before/after plan review                                  | P4 / ALI-19                           | T1, T3, T4           |
| A1          | [ALI-21](https://linear.app/aliwonderland/issue/ALI-21/select-individual-activities-and-proposed-moves)                    | Select individual activities and proposed moves                     | P5 / ALI-20                           | T3, T4               |
| A2          | [ALI-22](https://linear.app/aliwonderland/issue/ALI-22/recalculate-the-selected-change-set-and-warnings)                   | Recalculate the selected change set and warnings                    | A1 / ALI-21, P2 / ALI-17              | T3, T4               |
| A3          | [ALI-23](https://linear.app/aliwonderland/issue/ALI-23/commit-safe-selected-changes-with-authorization-and-version-checks) | Commit safe selected changes with authorization and version checks  | A2 / ALI-22, F3 / ALI-7               | T1, T3–T6            |
| A4          | [ALI-24](https://linear.app/aliwonderland/issue/ALI-24/apply-explicitly-approved-task-moves-and-deferrals)                 | Apply explicitly approved task moves and deferrals                  | A3 / ALI-23, P1 / ALI-16              | T1, T3, T4           |
| A5          | [ALI-25](https://linear.app/aliwonderland/issue/ALI-25/confirm-and-persist-target-capacity-overload)                       | Confirm and persist target-capacity overload                        | A2 / ALI-22, A3 / ALI-23              | T3                   |
| A6          | [ALI-26](https://linear.app/aliwonderland/issue/ALI-26/require-stronger-override-above-maximum-capacity)                   | Require stronger override above maximum capacity                    | A5 / ALI-25                           | T4                   |
| A7          | [ALI-27](https://linear.app/aliwonderland/issue/ALI-27/show-stale-proposal-refresh-and-renewed-approval)                   | Show stale-proposal refresh and renewed approval                    | A3 / ALI-23, P5 / ALI-20              | T5                   |
| A8          | [ALI-28](https://linear.app/aliwonderland/issue/ALI-28/report-partial-failures-retry-failed-steps-and-undo-eligible-moves) | Report partial failures, retry failed steps and Undo eligible moves | A4 / ALI-24, A7 / ALI-27              | T6                   |
| H1          | [ALI-29](https://linear.app/aliwonderland/issue/ALI-29/show-confirmed-interviews-and-approved-work-on-minimal-home)        | Show confirmed interviews and approved work on minimal Home         | A3 / ALI-23, I2 / ALI-9               | T1                   |
| H2          | [ALI-30](https://linear.app/aliwonderland/issue/ALI-30/complete-a-practice-task-and-undo)                                  | Complete a practice task and Undo                                   | H1 / ALI-29                           | T1, T6               |
| H3          | [ALI-31](https://linear.app/aliwonderland/issue/ALI-31/offer-optional-one-click-practice-reflection)                       | Offer optional one-click practice reflection                        | H2 / ALI-30                           | T1                   |
| D1          | [ALI-32](https://linear.app/aliwonderland/issue/ALI-32/enter-interview-notes-or-paste-transcript-text)                     | Enter interview notes or paste transcript text                      | I2 / ALI-9                            | T1, T8               |
| D2          | [ALI-33](https://linear.app/aliwonderland/issue/ALI-33/accept-txtmdpdfdocx-debrief-documents)                              | Accept TXT/MD/PDF/DOCX debrief documents                            | D1 / ALI-32                           | T1, T8               |
| D3          | [ALI-34](https://linear.app/aliwonderland/issue/ALI-34/extract-structured-ai-debrief-from-submitted-content)               | Extract structured AI debrief from submitted content                | D1 / ALI-32                           | T8                   |
| D4          | [ALI-35](https://linear.app/aliwonderland/issue/ALI-35/review-correct-save-and-reopen-structured-debrief)                  | Review, correct, save, and reopen structured debrief                | D3 / ALI-34                           | T1, T8               |
| D5          | [ALI-36](https://linear.app/aliwonderland/issue/ALI-36/persist-and-retrieve-gap-observations-for-future-planning)          | Persist and retrieve gap observations for future planning           | D4 / ALI-35                           | T1, T8               |

## Milestone gates

M0 tracks the development foundation separately (ALI-37–ALI-42); consult Linear for current progress. It does not replace the 32 product tickets.

| Milestone                    | Product issues           | Exit evidence                                                                                                                                                         |
| ---------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| M1 — Create & reopen         | F1–F3, I1–I2 (5)         | Form creates one interview; its identity and fields survive navigation and reload.                                                                                    |
| M2 — Intake & read-only prep | I3–I5, B1–B3, P1–P5 (11) | Tentative and duplicate/chat intake work; dated sources are visible; the full plan preview changes no task or interview records.                                      |
| M3 — Approve & execute       | A1–A8, H1–H3 (11)        | Selected-only writes, separate overload consent, stale rejection, itemized failures, safe retry/Undo, and Home completion/reflection use canonical persisted records. |
| M4 — Debrief & verify        | D1–D5 (5)                | Supported pasted/uploaded text produces an editable debrief with confirmed gap evidence; T1–T8 all pass with persisted-record checks.                                 |

## Verification ownership

Each issue verifies its own observable behavior and a relevant failure case. The scenario column shows contribution, not a claim that an individual issue completes a whole scenario. T1–T8 are defined in the product contract; passing all eight is the M4 exit gate. M0 database/startup checks do not satisfy that gate. Record verification evidence in the relevant issue and milestone when implemented.

Read-only planning precedes commit. A3 must reject stale, unauthorized and unconfirmed overloaded changes from its first write; A5–A7 add consent and refresh interfaces. H1 reads the approved records written by A3. D2 document extraction and D3 interpretation may proceed independently after D1; extracted file text must be reviewable before interpretation.

## Per-issue acceptance criteria

Use these criteria with the issue links and dependencies above. Cross-feature requirements and T1–T8 remain in the [product contract](interview-planning-spec.md).

- **F1:** Resetting the intake baseline yields one opportunity and zero interviews; alternate variants have their documented, stable records. Example day totals 3h existing tasks + 1h meeting + proposed 3h practice = 7h. A second option brings total to 9h for maximum override. No real private recruiting or calendar data appears in fixtures.
- **F2:** User can open the app and reach interview entry with keyboard or pointer. Empty and request-error states are intelligible. Navigation does not require a seeded interview.
- **F3:** Create and update survive reload. Replaying the same logical operation does not duplicate records. Activity records identify actor/source and the affected record. Invalid or unauthorized mutation is rejected without side effects.
- **I1:** Valid submission creates exactly one interview associated with existing opportunity. Double-submitting the same request does not create duplicates. Validation feedback preserves entered data; no invented details.
- **I2:** Navigate away, reload and reopen: identical interview ID and confirmed fields appear. Unknown values are labeled unknown/tentative, not silently filled. A missing record produces a clear not-found state.
- **I3:** A report missing a date remains tentative. Confirming a date changes that record, not a new one. Updating one field does not overwrite unrelated known details.
- **I4:** Same identifiable round reported twice yields one interview record. Two genuinely distinct rounds remain separate. Ambiguous match is blocked pending review; no silent merge.
- **I5:** One supported report via chat and equivalent form produce matching canonical state. Rephrased duplicate reports do not create extra rounds. Unknown date/format remains unknown; user can correct interpretation.
- **B1:** Every substantive research claim has a source or an explicit inference label. Snapshot remains repeatable without a new live research call. No blanket assertion that a specific Google round will test a topic.
- **B2:** Interview opens associated brief correctly. Sources are navigable and distinguishable by type. Missing guidance is shown as unknown, not a generic promise.
- **B3:** Every displayed recommendation contains all required attributes. Weak or inferred recommendations are clearly distinguished from confirmed instructions. Cards are usable as inputs to the later proposal without inventing new tasks.
- **P1:** Protected work and firm deadlines are visible and distinguishable. Existing workload matches fixture records after reload. Calendar commitments are not rendered as synthetic task clones.
- **P2:** Fixture day load is 4h before prep. Meeting mirrored as interview/calendar record counts once. Target and maximum capacity are separately reported. Calculation is deterministic for identical input.
- **P3:** Known equivalent task is marked reused rather than created anew. Unrelated task is not reused. Existing task identity and status are preserved.
- **P4:** Proposals have dated or unscheduled outcomes and explain why. Tentative interview with unknown date receives no date-dependent placement. Repeated generation changes zero task/interview records. Protected work is never proposed as a silent move.
- **P5:** Every affected existing task appears by identity with old/new planned day. 7h target overload and 9h max overload are visually distinct. Opening/closing proposal does not mutate data.
- **A1:** Selection can include activity but reject move. Unselected items do not become implicitly approved. No database mutation occurs when toggling selection.
- **A2:** Selecting 3h practice and rejecting 2h move shows 7h target overload. Changing selection changes preview immediately and correctly. No undisclosed tasks or date moves appear.
- **A3:** Approved feasible selection persists exactly once; replay is idempotent. Unselected tasks and unrelated records unchanged. Stale proposal rejected without unauthorized writes. Overloaded proposals blocked until opt-in override workflow exists.
- **A4:** Selected flexible task moves to intended day. Task deadline remains unchanged. Rejected move is not applied. Deferral never deletes the task.
- **A5:** 7h day on 6h target cannot commit via ordinary approval. Explicit confirmation permits selected work when under maximum. Post-approval day remains labeled 7h and over target.
- **A6:** 9h selection cannot commit with only target-overload acknowledgment. Deliberate maximum override is recorded with scope. Protected commitments and deadlines remain unchanged.
- **A7:** Change underlying task after preview; old approval cannot commit. Updated diff displays changed workload/moves. No material change silently inherits old approval.
- **A8:** One injected failure produces truthful per-item outcomes. Retry fails/succeeds safely without duplicating prior successes. Eligible Undo restores only appropriate local change; does not overwrite newer conflicting edits. No blanket success message on partial failure.
- **H1:** Approved task appears immediately and after reload. Unapproved proposal item never appears as a task. Agenda does not invent times or duplicate commitments.
- **H2:** Done persists after reload. Undo restores prior status without modifying another task. Completion never assigns mastery.
- **H3:** Task completion occurs before reflection. No reflection means no proficiency inference. Saved reflection remains attached to original practice task.
- **D1:** Pasted content remains associated with correct interview. User can review input before extraction. Input never sets interview outcome/attendance without explicit report.
- **D2:** TXT and Markdown text are reviewable. PDF and DOCX text extraction works for supported text-based files. Unsupported or unextractable document returns clear guidance without inventing content.
- **D3:** Clear source-backed fields extracted from example notes. Unknown/unsupported feedback is marked missing or tentative. No fabricated interview result, decision or attendance.
- **D4:** User can edit a wrong extracted topic prior to saving. Saved corrections survive reload. Raw input and confirmed/corrected summary remain distinguishable.
- **D5:** A reported React hooks difficulty becomes an associated, source-attributed gap. A gap can be retrieved from that interview. No scheduling changes or fake proficiency scores occur.
