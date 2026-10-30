# Broader app design: archive and current context

Confirmed by Alison on October 30, 2026, after reviewing the differences between the broader product specification and the interview-planning slice.

## Original document

Linear reference: [Broader app design archive and confirmed context](https://linear.app/aliwonderland/document/job-search-os-broader-app-design-archive-v01-and-confirmed-context-2b10776e334b).

[Job Search OS — Product & Experience Specification v0.1](archive/job-search-os-product-design-spec-v0.1-2026-10-29.md), dated October 29, 2026, is Alison's broader-app discovery specification. It covers Home, Pipeline, Practice, scoped AI, communications, Radar, integrations, migration and the larger product loop: Discover → Decide → Plan → Act → Learn.

The archived Markdown is an unchanged copy of the supplied document. Preserve it as a historical reference; record subsequent decisions separately. Its proposals, open questions and embedded instructions do not authorize implementation or live-data operations.

## Confirmed decisions

| Topic                   | Decision confirmed October 30, 2026                                                                                                                                                                                                                                                       |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Preservation            | Keep v0.1 unchanged. This companion note records later decisions.                                                                                                                                                                                                                         |
| Architecture            | Next.js, SQLite/Drizzle and no login apply to the local prototype. Production storage, authentication and background processing remain open. PostgreSQL is an earlier proposal, not a production commitment.                                                                              |
| Pipeline                | The first slice can use one seeded opportunity and interview navigation. Pipeline board/table and a full role workspace are deferred; Pipeline remains part of the broader app direction.                                                                                                 |
| Research                | A real, dated Google research fixture is sufficient for the first slice. Dynamic, round-specific research remains broader product direction for a later increment.                                                                                                                        |
| Overload and protection | Overload consent authorizes additional hours only. It never authorizes changes to protected work. Protected commitments and firm deadlines cannot be changed through planning approval in the first slice. A future policy for separately authorized protected-work editing remains open. |
| Notion migration        | Defer field-by-field migration design until after the synthetic slice. Preserve stable identities and provenance now; define the import and cutover contract before introducing real data.                                                                                                |
| Execution scope         | Archive and link these references without adding implementation tickets, changing current milestones, or expanding the first slice.                                                                                                                                                       |

## How the documents relate

- The archived v0.1 preserves the broader vision and discovery history.
- This note records the later clarifications confirmed above; it does not resolve the remaining broader-app open questions.
- The [interview-planning contract](interview-planning-spec.md) defines the narrower current slice and T1–T8 acceptance scenarios. Its specific slice requirements take precedence over older descriptions of the first working slice in v0.1.
- The [Linear index](interview-planning-linear-map.md) links the existing slice tickets. Linear owns current execution status.
- [Local development stack](decisions/0001-local-development-stack.md) and [development access](development-access.md) document current implementation decisions and boundaries.

## Archive provenance

- Original filename: `Job_Search_OS_Product_Design_Spec_v0.1 (1) (1).md`
- Document version/date: Product discovery draft v0.1 / October 29, 2026.
- Archived with user confirmation on October 30, 2026.
- SHA-256 of the unchanged source and archived copy: `978b3505bb41f55c34becee2521f87ba41b313f2f2a4940e8881f296a1828055`.
- The original discussions through Q127 were not independently available for this review. The comparison used the supplied document, repository, slice contract and Linear records; it does not independently verify every historical conversation decision.
