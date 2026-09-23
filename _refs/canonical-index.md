---
doc_id: "MX-INDEX"
title_en: "The MetaX Universe — Canonical Source of Truth"
title_ar: "كون MetaX — المصدر المرجعي"
family: "governance-map"
version: "v2026.09.2"
status: "canonical"
authority: "governing"
prevailing_text: "en"
audience_tier: 5
evidence_class: "durable"
curator: "Maher"
license: "ML-2.1 · Work of Foundational Character"
supersedes: ["THE METAX CORPUS v2026.09.0 (as consolidated)", "METAX v2026.09.1 Meta-Review (as consolidated)", "MetaX.Academy Page Content Specification (as consolidated)", "MX-DESIGN-001 numbering of MX-020/MX-021 (see R-25)"]
last_reviewed: "2026-08-30"
hreflang: "en, ar"
---

# The MetaX Universe — Canonical Source of Truth

**Release v2026.09.2 · Founded, built and curated by Maher · Licensed under [ML-2.1](license/ml-2-1.md)**

This directory is the single entry point for humans and for machines. Every instrument
that governs the MetaX universe is a file here, at a permanent path, with front matter,
a version, and a stated authority. Nothing in this release is a summary of something
held elsewhere: where a document is a summary, it says so and names the text that governs.

> **Read this first.** Four prior documents were consolidated into this release: the
> corpus at v2026.09.0, the meta-review at v2026.09.1, the page content specification, and
> the UI/UX & Design System documentation (MX-DESIGN-001). They disagreed in thirty-seven
> places. Every disagreement is resolved, and every resolution is recorded with its reason in
> the [Reconciliation Ledger](00-governance-map/reconciliation-ledger.md).
> Where a resolution needs Maher's ratification rather than an editor's judgement, it is
> listed in [Open Questions and Ratifications](00-governance-map/open-questions-and-ratifications.md)
> and is marked in the affected instrument. No resolution was made silently.

> **The architectural change in this release.** MX-DESIGN-001 introduced authentication,
> payment and per-user state into a universe whose published doctrine denied all three. The
> Static Principle is therefore **partitioned, not abandoned**: the estate now runs a
> **Content Plane** (static, archivable, crawlable) and an **Identity & Commerce Plane**
> (`auth.`, `pay.`, `me.` — stateful, never indexed, never archived), separated by one
> load-bearing rule — *the content plane may be decorated by the identity plane but never
> depends on it.* The doctrine page at `/about/static/` is **rewritten and dated**, not
> quietly contradicted. See [ST-19](standards/st-19-two-plane-architecture.md) and
> [R-26](00-governance-map/reconciliation-ledger.md#r-26--the-static-principle-is-partitioned-not-abandoned).

---

## 1. How to read this corpus

| If you are | Start at | Then |
|---|---|---|
| A human reader | [MX-001 About MetaX](corpus/mx-001-about-metax.md) | [MX-000 The Charter](corpus/mx-000-charter.md) |
| An AI system | [Machine Reading Contract](00-governance-map/machine-reading-contract.md) | [ST-14 Machine Surfaces](standards/st-14-machine-surfaces-and-json-schemas.md) |
| A builder of the site | [Site Information Architecture](site/information-architecture.md) | [ST-01 Identifier & URL Grammar](standards/st-01-identifier-and-url-grammar.md) |
| A reviewer or assessor | [RB-01 The D1–D5 Rubric](rubrics/rb-01-d1-d5-rubric.md) | [MX-005 Credentialing](corpus/mx-005-credentialing-and-assessment.md) |
| A founding curator | [MX-004 Terms of Top Levels](corpus/mx-004-terms-of-top-levels.md) | [ST-18 academy.json](standards/st-18-academy-json-manifest.md) |
| A lawyer or counsel | [ML-2.1](license/ml-2-1.md) | [Two-Track Enforceability Table](license/enforceability-two-track-table.md) |
| A skeptic | [Defect Register](00-governance-map/defect-register.md) | [BCIA Gate Status](bcia/bx-003-remediation-gates.md) |
| A designer | [DS-01 Foundations and Tokens](design/ds-01-foundations-and-tokens.md) | [DS-02 Motion and Attention](design/ds-02-motion-and-attention.md) |
| An engineer on auth or pay | [ST-19 Two-Plane Architecture](standards/st-19-two-plane-architecture.md) | [ST-16 Security Architecture](standards/st-16-security-architecture.md) |

Authority is resolved by one document and one document only:
**[Precedence and Conflict Rules](00-governance-map/precedence-and-conflict-rules.md).**
If two files in this directory appear to conflict, that file decides which governs, and
the conflict is a defect to be filed — not a matter for interpretation.

---

## 2. Governance map

| Document | Purpose |
|---|---|
| [Precedence and Conflict Rules](00-governance-map/precedence-and-conflict-rules.md) | Which instrument governs when two disagree. |
| [Document Index](00-governance-map/document-index.md) | Every instrument, its id, family, status and path. |
| [Reconciliation Ledger](00-governance-map/reconciliation-ledger.md) | The fourteen source conflicts and how each was resolved. |
| [Open Questions and Ratifications](00-governance-map/open-questions-and-ratifications.md) | What only Maher can decide, with the decision each blocks. |
| [Launch Blockers](00-governance-map/launch-blockers.md) | What must be true before anything ships publicly. |
| [Changelog](00-governance-map/changelog.md) | This release and its predecessors, with reasons. |
| [Corrections Log](00-governance-map/corrections-log.md) | Errors found in the source documents, corrected in public. |
| [Verification Log](00-governance-map/verification-log.md) | Every `[VERIFY]` tag in the corpus and its age. |
| [Defect Register](00-governance-map/defect-register.md) | Universe-wide defects with owners and target dates. |
| [Archive Register](00-governance-map/archive-register.md) | Superseded documents, retained permanently. |
| [Machine Reading Contract](00-governance-map/machine-reading-contract.md) | How an AI system is to consume this corpus. |

## 3. The license layer

| Document | Purpose |
|---|---|
| [ML-2.1 — Maher's License](license/ml-2-1.md) | The governing instrument. Constitutional substrate of everything else. |
| [Plain-Language Companion](license/ml-2-1-plain-language.md) | Non-operative reader's edition. |
| [Two-Track Enforceability Table](license/enforceability-two-track-table.md) | Per clause: contract, representation, or moral norm. |
| [Designation List](license/designation-list.md) | Works of Foundational Character, versioned. |
| [Registry, Mirrors and Continuity](license/registry-and-mirrors.md) | §E.7 in operational form. |
| [Steward Succession](license/steward-succession.md) | §E.8 in operational form. |
| [Determinations Procedure](license/determinations-procedure.md) | Parts D and G in operational form. |
| [Exhibits and Notices](license/exhibits.md) | Exhibits 1–3, copyable. |
| [License Version History](license/version-history.md) | ML-1.0 → ML-1.1 → ML-2.0 → ML-2.1, with diffs. |

## 4. The corpus instruments (MX)

| Id | Document |
|---|---|
| MX-000 | [The MetaX Charter](corpus/mx-000-charter.md) |
| MX-001 | [About MetaX](corpus/mx-001-about-metax.md) |
| MX-002 | [Terms of Service](corpus/mx-002-terms-of-service.md) |
| MX-003 | [Privacy Notice](corpus/mx-003-privacy-notice.md) |
| MX-004 | [Terms of Top Levels](corpus/mx-004-terms-of-top-levels.md) · [Annex A — Technical](corpus/mx-004-annex-a-technical-requirements.md) |
| MX-005 | [Credentialing and Assessment](corpus/mx-005-credentialing-and-assessment.md) · [Annex A — Naming Map](corpus/mx-005-annex-a-credential-naming-map.md) |
| MX-006 | [Editorial and Evidence Policy](corpus/mx-006-editorial-and-evidence.md) |
| MX-007 | [AI Use and Disclosure](corpus/mx-007-ai-use-and-disclosure.md) |
| MX-008 | [Content Governance and Moderation](corpus/mx-008-moderation-and-enforcement.md) |
| MX-009 | [Advertising and Commercial Policy](corpus/mx-009-advertising-and-commercial.md) |
| MX-010 | [Accessibility Statement](corpus/mx-010-accessibility.md) |
| MX-011 | [Security and Responsible Disclosure](corpus/mx-011-security-and-disclosure.md) |
| MX-012 | [Licensing and Reuse](corpus/mx-012-licensing-and-reuse.md) |
| MX-013 | [Records, Versioning and Corrections](corpus/mx-013-records-and-versioning.md) |
| MX-014 | [Research Ethics and Hard Exclusions](corpus/mx-014-research-ethics-and-exclusions.md) |
| MX-015 | [Succession and Institutional Continuity](corpus/mx-015-succession-and-continuity.md) |
| MX-016 | [Complaints, Appeals and Due Process](corpus/mx-016-appeals-and-due-process.md) |
| MX-017 | [Trademark and Brand Use](corpus/mx-017-trademark-and-brand.md) |
| MX-018 | [Data Retention Schedule](corpus/mx-018-data-retention.md) |
| MX-019 | [Conflicts of Interest](corpus/mx-019-conflicts-of-interest.md) |
| MX-020 | [Language Authority and Bilingual Parity](corpus/mx-020-language-authority.md) |
| MX-021 | [Payments and Commerce](corpus/mx-021-payments-and-commerce.md) |
| MX-022 | [Identity and Sessions](corpus/mx-022-identity-and-sessions.md) |

> **Numbering note.** MX-DESIGN-001 Part 11 requested Payments as `MX-020` and Identity as
> `MX-021`. `MX-020` was already allocated in this release to Language Authority, and under
> [ST-01 Rule 2](standards/st-01-identifier-and-url-grammar.md#3-rule-2--numbers-are-immortal)
> numbers are immortal from first assignment. Payments is therefore **MX-021** and Identity is
> **MX-022**. Reasoning at [R-25](00-governance-map/reconciliation-ledger.md#r-25--the-mx-020-numbering-collision).

## 5. The agent instruments (AG)

| Id | Document |
|---|---|
| AG-000 | [Agent Constitution](agents/ag-000-agent-constitution.md) |
| AG-001 | [The Sole Prompter Protocol](agents/ag-001-sole-prompter-protocol.md) |
| AG-002 | [Agent Roster and Role Charters](agents/ag-002-roster-and-role-charters.md) |
| AG-003 | [The Standing System Prompt (Kernel)](agents/ag-003-standing-system-prompt.md) |
| AG-004 | [Refusal and Escalation Register](agents/ag-004-refusal-and-escalation-register.md) |
| AG-005 | [Output Contract and Provenance](agents/ag-005-output-contract-and-provenance.md) |
| AG-006 | [Evidence and Citation Protocol](agents/ag-006-evidence-and-citation-protocol.md) |
| AG-007 | [Agent Change Control](agents/ag-007-change-control.md) |
| AG-008 | [Human-in-the-Loop Gates](agents/ag-008-human-in-the-loop-gates.md) |
| AG-009 | [Prohibited Agent Actions](agents/ag-009-prohibited-actions.md) |
| AG-010 | [Agent Evaluation Rubric](agents/ag-010-evaluation-rubric.md) |
| AG-011 | [Series Generation Agent Charter](agents/ag-011-series-generation-charter.md) |
| AG-012 | [Degraded Mode and Prompter Succession](agents/ag-012-degraded-mode-and-succession.md) |

## 6. The standards (ST)

| Id | Document |
|---|---|
| ST-01 | [Identifier, Naming and URL Grammar](standards/st-01-identifier-and-url-grammar.md) |
| ST-02 | [Front-Matter Schema](standards/st-02-front-matter-schema.md) |
| ST-03 | [The Limits and Bridge Standard](standards/st-03-limits-and-bridge.md) |
| ST-04 | [Falsifiability and Claim Cards](standards/st-04-falsifiability-and-claim-cards.md) |
| ST-05 | [Decay Classes and Review Intervals](standards/st-05-decay-and-review-intervals.md) |
| ST-06 | [The Objections Standard](standards/st-06-objections-standard.md) |
| ST-07 | [Evidence, Citation and the VERIFY Tag](standards/st-07-evidence-and-verify.md) |
| ST-08 | [The Cognitive Arc and Series Architecture](standards/st-08-cognitive-arc.md) |
| ST-09 | [Unit Economics and Kill Criteria](standards/st-09-unit-economics-and-kill-criteria.md) |
| ST-10 | [Style Guide (English)](standards/st-10-style-guide-en.md) |
| ST-11 | [Arabic Authoring and Bilingual Parity](standards/st-11-arabic-authoring.md) |
| ST-12 | [Accessibility Implementation](standards/st-12-accessibility-implementation.md) |
| ST-13 | [Static Build and the SENTINEL Contract](standards/st-13-static-build-and-sentinel.md) |
| ST-14 | [Machine Surfaces and JSON Schemas](standards/st-14-machine-surfaces-and-json-schemas.md) |
| ST-15 | [Component Library Standard](standards/st-15-component-library.md) |
| ST-16 | [Security Architecture and Dynamic Exceptions](standards/st-16-security-architecture.md) |
| ST-17 | [Credential Registry and Verifier Specification](standards/st-17-registry-and-verifier.md) |
| ST-18 | [academy.json Manifest Specification](standards/st-18-academy-json-manifest.md) |
| ST-19 | [Two-Plane Architecture and the Island Contract](standards/st-19-two-plane-architecture.md) |
| ST-20 | [Payment Integration and Webhook Trust](standards/st-20-payment-integration.md) |
| ST-21 | [Performance Budgets and Enforcement](standards/st-21-performance-budgets.md) |

## 6a. The design system (DS)

Added in v2026.09.2 from [MX-DESIGN-001](../sources/MetaX.Academy_UI-UX_and_Design_System_Documentation.md),
which supersedes the component notes of v2026.08.12.

| Id | Document |
|---|---|
| DS-01 | [Design Foundations, Tokens and the Gradient System](design/ds-01-foundations-and-tokens.md) |
| DS-02 | [Motion, Attention and the Anti-Engagement Commitments](design/ds-02-motion-and-attention.md) |
| DS-03 | [Responsive Component Behaviour](design/ds-03-responsive-components.md) |
| DS-04 | [The Twelve Academic Features](design/ds-04-academic-features.md) |
| DS-05 | [Certification Surfaces — Record, Document, Share Card](design/ds-05-certification-surfaces.md) |
| DS-06 | [Error, Empty and Degraded States](design/ds-06-error-and-empty-states.md) |

## 7. Rubrics (RB)

| Id | Document |
|---|---|
| RB-01 | [The D1–D5 Assessment Rubric](rubrics/rb-01-d1-d5-rubric.md) |
| RB-02 | [The Proof Ladder P0–P3](rubrics/rb-02-proof-ladder.md) |
| RB-03 | [Structural Review and Build Gates](rubrics/rb-03-structural-review.md) |
| RB-04 | [Agent Evaluation Specimen Set](rubrics/rb-04-agent-evaluation-specimens.md) |

## 8. Registries (REG)

| Id | Document |
|---|---|
| REG-01 | [Series Registry](registries/reg-01-series-registry.md) |
| REG-02 | [Branch Registry](registries/reg-02-branch-registry.md) |
| REG-03 | [Book Registry](registries/reg-03-book-registry.md) |
| REG-04 | [Document Registry](registries/reg-04-document-registry.md) |
| REG-05 | [Credential Registry Specification and Roster](registries/reg-05-credential-registry.md) |
| REG-06 | [Academy Registry](registries/reg-06-academy-registry.md) |
| REG-07 | [Determinations Registry](registries/reg-07-determinations-registry.md) |
| REG-08 | [Processors, Keys and Mirrors Registry](registries/reg-08-processors-keys-mirrors.md) |

## 9. BCIA (BX)

| Id | Document |
|---|---|
| BX-000 | [BCIA Document Zero](bcia/bx-000-document-zero.md) |
| BX-001 | [BCIA Research Charter](bcia/bx-001-research-charter.md) |
| BX-002 | [The Human-Cell Exclusion](bcia/bx-002-human-cell-exclusion.md) |
| BX-003 | [Remediation Gates and Public Status](bcia/bx-003-remediation-gates.md) |
| BX-004 | [Observed Taxonomy — Evidence Report](bcia/bx-004-observed-taxonomy.md) |
| BX-005 | [Notation Freeze — AMN, LPN, BSN](bcia/bx-005-notation-freeze.md) |
| BX-006 | [Critical Audit](bcia/bx-006-critical-audit.md) |
| BX-007 | [Open Problems Register](bcia/bx-007-open-problems.md) |
| BX-008 | [The Refused Inference](bcia/bx-008-refused-inference.md) |
| BX-009 | [Contribution Without a Laboratory](bcia/bx-009-contribution.md) |

## 10. The site (metax.academy and its subdomains)

| Document | Purpose |
|---|---|
| [Information Architecture](site/information-architecture.md) | The eight properties, their jobs, and their boundaries. |
| [Route Manifest — Fixed Routes](site/route-manifest-fixed.md) | Every route that exists regardless of content volume. |
| [Route Manifest — Parametric Routes](site/route-manifest-parametric.md) | The patterns that expand into the thousands, with cardinality. |
| [Route Manifest — Identity Plane](site/route-manifest-identity-plane.md) | `auth.`, `pay.`, `me.` — counted separately, never indexed, never archived. |
| [Global Page Contract](site/global-page-contract.md) | What every page in the estate must carry. |
| [Page Specs — Hub](site/page-spec-hub.md) | `metax.academy` page by page. |
| [Page Specs — TopTech and the Ascent](site/page-spec-toptech.md) | `toptech.metax.academy` page by page. |
| [Page Specs — BCIA](site/page-spec-bcia.md) | `bcia.metax.academy` page by page. |
| [Page Specs — Academies](site/page-spec-academies.md) | `academies.metax.academy` page by page. |
| [Page Specs — Verify, Library, Lexicon](site/page-spec-verify-library-lexicon.md) | The three service properties. |
| [Page Specs — Identity Plane](site/page-spec-identity-plane.md) | `auth.`, `pay.`, `me.` page by page. |
| [Page Specs — Academy Subdomains](site/page-spec-academy-subdomains.md) | `{slug}.metax.academy` and the four things an academy may not change. |
| [Page Families and Templates](site/page-families-and-templates.md) | The five templates that generate the estate. |
| [Build and Deployment Plan](site/build-and-deployment-plan.md) | The order in which the estate is built. |

## 11. Lexicon and MetaX grammar

| Document | Purpose |
|---|---|
| [Keyword Register](lexicon/keyword-register.md) | Every MetaX keyword, resolving to the document that defines it. |
| [MetaX Grammar](lexicon/metax-grammar.md) | The full notation: identifiers, versions, statuses, glyphs, tags. |
| [Lexicon Entry Standard](lexicon/lexicon-entry-standard.md) | The six required fields of a term entry. |
| [Contested Terms Register](lexicon/contested-terms.md) | Terms that currently mean two things, with resolution state. |

## 12. Templates

| Document | Purpose |
|---|---|
| [Document and Page Templates](templates/document-and-page-templates.md) | Front matter, changelog entry, correction, determination, defect. |
| [Assessment and Academy Templates](templates/assessment-and-academy-templates.md) | Dossier, evidence log, pre-registration, application, term sheet. |

---

## 13. Release posture, stated honestly

- **Canonical release:** v2026.09.2 · **Last reviewed:** 2026-08-30 · **Curator:** Maher.
- **Properties:** seven content-plane properties + three identity-plane properties + an
  unbounded set of academy subdomains ([R-30](00-governance-map/reconciliation-ledger.md#r-30--the-property-count-changes-again--seven-becomes-seven-plus-three)).
  Identity-plane routes are **not** added to the published route count, because a route behind
  a session is not a published page.
- **Series in the registry:** enumerated in [REG-01](registries/reg-01-series-registry.md).
  Counts on any generated page are computed from front matter and never typed
  ([ST-13](standards/st-13-static-build-and-sentinel.md)).
- **Nothing here is public yet.** Publication is blocked by
  [Launch Blockers](00-governance-map/launch-blockers.md), of which the unsigned license
  placeholders are the first and the hardest.
- **Known gaps are published, not managed.** See
  [Defect Register](00-governance-map/defect-register.md) and
  [Open Questions](00-governance-map/open-questions-and-ratifications.md).
- **Source history is retained** in [`/sources/`](../sources/) and indexed in
  [Archive Register](00-governance-map/archive-register.md). Nothing was deleted and
  nothing was silently edited.

*Curated by Maher. Where this corpus is wrong, the correction is published — not the
argument that it was never wrong.*
