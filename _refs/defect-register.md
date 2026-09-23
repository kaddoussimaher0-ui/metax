---
doc_id: "GM-09"
title_en: "Defect Register"
title_ar: "سجل العيوب"
family: "governance-map"
version: "v2026.09.2"
status: "canonical"
authority: "governing"
prevailing_text: "en"
audience_tier: 5
evidence_class: "perishable"
review_interval_months: 3
curator: "Maher"
license: "ML-2.1 · Work of Foundational Character"
last_reviewed: "2026-08-30"
hreflang: "en, ar"
---

# Defect Register

Known shortfalls in the MetaX estate, each with an owner and a target date. **This register is
published with the site, deliberately** — it is not an internal tracker that leaked.

**Why a public register.** [Charter §0.3](../corpus/mx-000-charter.md#03-shared-dna) makes
correctability one of four Shared DNA properties, and §0.5.2 places the correction obligation
beyond the Curator: he cannot decline a valid correction, cannot delete a published defect, and
cannot remove a superseded claim from the record. A defect register that only the author can see
satisfies none of that.

**Defect vs blocker vs open question.** A **defect** is a published shortfall that does not make
publication dishonest — the site ships with it visible. A
[**blocker**](launch-blockers.md) makes publication dishonest. An
[**open question**](open-questions-and-ratifications.md) needs the Curator's decision.

**Anyone may file.** Public submission is at `library.metax.academy/corrections/`
([DS-04 feature 11](../design/ds-04-academic-features.md#11--the-correction-bounty)), and
**rejected submissions are published with reasons** — which is what stops the queue becoming a
black box.

---

## Open defects

| Id | Defect | Class | Owner | Target |
|---|---|---|---|---|
| [DEF-001](#def-001) | SENTINEL is a specification, not a running pipeline | Build integrity | Maher / build | Wave 1 |
| [DEF-002](#def-002) | No Arabic editions of any instrument exist | Translation divergence | Maher | Wave 2 |
| [DEF-003](#def-003) | Accessibility conformance committed to but never tested | Accessibility | Maher | Wave 1 |
| [DEF-004](#def-004) | Book 9 chapters 2–9 absent from the source itself | Source gap | Maher | Unset — see [RAT-05](open-questions-and-ratifications.md) |
| [DEF-005](#def-005) | Books 7, 8, 10 un-ingested | Source gap | Maher | Wave 2 |
| [DEF-006](#def-006) | BCIA Gate 3 currently unresolvable | Research state | Maher | Unset, honestly |
| [DEF-007](#def-007) | BSN / LPN / AMN referenced but never defined | Notation inconsistency | Maher | Frozen pending [RAT-03](open-questions-and-ratifications.md) |
| [DEF-008](#def-008) | `domain_tags` wrongly populated with rubric dimensions in v2026.08.12 front matter | Notation inconsistency | Build | Wave 1 |
| [DEF-009](#def-009) | Dated claims in the book corpus checkable but unchecked | Stale claim | VERIFIER + human gate | Wave 2 |
| [DEF-010](#def-010) | Governing instruments unreviewed by counsel | Legal | Maher + counsel | Wave 1 |
| [DEF-011](#def-011) | MX-DESIGN-001 describes content-plane hosts as "fully static" while requiring a cookie-setting callback | Factual error in a source | Editorial — **closed** | Closed 2026-08-30 |
| [DEF-012](#def-012) | Scenario assessment has no plane-compliant design | Architecture | Maher | Blocked on [RAT-11](open-questions-and-ratifications.md#rat-11--how-the-scenario-assessment-resolves-against-the-plane-boundary) |
| [DEF-013](#def-013) | Riba compliance asserted structurally, unreviewed substantively | Governance | Maher + 3 reviewers | Wave 9 |
| [DEF-014](#def-014) | Single crypto payment rail excludes part of the target audience | Access | Maher | Wave 9 |
| [DEF-015](#def-015) | Island failure transparency untested | Build integrity | Build | Wave 8 |

---

### DEF-001

**Every mechanical-enforcement claim in this corpus currently describes an intention.**
[ST-13](../standards/st-13-static-build-and-sentinel.md) and
[ST-21](../standards/st-21-performance-budgets.md) specify front-matter validation, computed
counts, dangling-link detection, falsifier presence, single-source drift checks, budget gates and
build-failure-over-placeholder. None of it runs.

This is the estate's most consequential defect because
[MX-006 §6.3](../corpus/mx-006-editorial-and-evidence.md#63-falsifiability) states that
falsifiability is enforced mechanically *"because editorial enforcement of a discipline the editor
also authors is not enforcement."* Until the pipeline runs, that sentence is the strongest claim in
the corpus and the least supported. Also
[B-06](launch-blockers.md#b-06--the-build-cannot-yet-enforce-its-own-rules--hard-blocker).

### DEF-002

Arabic is described as *authoritative*, not as a translation target
([MX-020](../corpus/mx-020-language-authority.md)). No Arabic edition of any instrument exists.
Parity is stated as a standing target and never as a present state; no toggle resolves silently to
a homepage. Also [B-09](launch-blockers.md#b-09--arabic-parity-is-claimed-but-not-built--soft-blocker).

### DEF-003

WCAG 2.2 AA is committed to across all properties
([MX-010](../corpus/mx-010-accessibility.md)). No test matrix has been run. The defect closes with
the **first** audit and its published gap list, not with full conformance — publishing the gaps is
the compliant state.

### DEF-004

Book 9 chapters 2–9 were never provided in the upload. Marked `[GAP IN SOURCE]` in
[REG-03](../registries/reg-03-book-registry.md). **No amount of drafting closes this** — it is a
source gap, and only Maher can supply the text. Any Ascent rung depending on those chapters is
`PREVIEW` at best and may not claim chapter-level fidelity.

### DEF-005

Book 7 chapters 3–12 and Books 8 and 10 exist but are un-ingested. Marked
`[PENDING INGESTION]`. Distinguished from DEF-004 on the 404 surface, because "not ingested yet"
and "the source is incomplete" are different facts about MetaX
([DS-06 §6.2](../design/ds-06-error-and-empty-states.md#62-the-404-routes-intelligently)).

### DEF-006

[Gate 3](../bcia/bx-003-remediation-gates.md) is recorded as currently unresolvable. The target is
deliberately unset: a target date on a gate whose closure condition is unknown would be a
fabricated schedule. Published as unresolvable rather than as pending.

### DEF-007

BSN, LPN and AMN are referenced throughout the BCIA sources and defined nowhere. The triad is
[frozen](../bcia/bx-005-notation-freeze.md) — referenced where the sources reference it, never
taught as settled. Blocked on [RAT-03](open-questions-and-ratifications.md).

### DEF-008

v2026.08.12 front matter populated `domain_tags: [D1..D5]` with **rubric dimensions**, conflating
three unrelated D-prefixed vocabularies: the frozen D1–D5 assessment rubric, the retired D1–D10
domain tags, and Branch D. Resolved editorially at
[R-04](reconciliation-ledger.md#r-04--the-d-prefix-collision); the defect remains open until the
migration runs across all affected files.

### DEF-009

Landauer 1961, Shannon 1937, EDVAC 1945, Bell Labs 1947, the Setun era, He Jiankui 2018, a 2024
Neuralink matter — all became *checkable* on ingestion and none has been checked. Each carries
`[VERIFY]` and is counted in [Verification Log](verification-log.md). The banned
DishBrain-versus-DeepMind comparison is **not** awaiting verification; it is prohibited outright
([MX-006 §6.6](../corpus/mx-006-editorial-and-evidence.md#66-banned-comparisons)) because it is not
comparable at any level of verification.

### DEF-010

MX-002, MX-003, MX-004, MX-018, MX-021, MX-022 and the ML-2.1 enforceability assertions are
drafting work product. Governing law, forum and the liability cap are unset. Also
[B-05](launch-blockers.md#b-05--counsel-review-of-the-legal-instruments--hard-blocker).

### DEF-011 — closed

**Filed against the source's wording, not its architecture.**
[MX-DESIGN-001](../../sources/MetaX.Academy_UI-UX_and_Design_System_Documentation.md) Part 0
describes content-plane hosts as "fully static" while Part 4 requires each host to set its own
host-scoped session cookie — which a purely static host cannot do.

The architecture is sound and the wildcard-cookie refusal is correct: it is what stops one
compromised academy subdomain from harvesting estate-wide sessions. Only the description was
wrong.

**Closed 2026-08-30** by adopting the precise formulation: every content-plane *page* is static;
every content-plane *host* additionally exposes exactly one non-static route, `/auth/callback`,
which serves no content and renders no page
([ST-19 §4](../standards/st-19-two-plane-architecture.md#4-the-callback-route),
[R-32](reconciliation-ledger.md#r-32--an-unstated-consequence-the-content-plane-needs-an-edge-callback)).

Retained in this register rather than deleted, per
[Charter §0.5.2](../corpus/mx-000-charter.md#2-the-correction-obligation).

### DEF-012

The sixth beat of the lesson arc has no design that satisfies both assessment integrity and the
plane boundary. Three options exist, each surrendering something the corpus values. **Not resolved
editorially** — blocked on
[RAT-11](open-questions-and-ratifications.md#rat-11--how-the-scenario-assessment-resolves-against-the-plane-boundary).
Provisionally the tree is fully public and the exercise is described as a rehearsal, not a gate.

### DEF-013

The payment structure implements [ML-2.1 §C.9](../license/ml-2-1.md#c9--core-riba) at the interface
layer and **no qualified person has reviewed whether it succeeds.** Review is required in three
domains — law, finance, and Islamic finance scholarship — and the source document's author states
plainly that they hold none of those qualifications. No page asserts Riba compliance as a reviewed
conclusion. Also [B-12](launch-blockers.md#b-12--riba-structure-and-payment-rails-are-unreviewed--hard-blocker).

### DEF-014

Binance Pay is the only rail. Filed as a defect on the source document's **own** reasoning: it
will exclude a meaningful share of the intended audience, *particularly in Arabic-speaking markets
where Meta-X is authoritative*, and couples estate commerce to one company's regional availability.
Disclosed on the pricing page with affected markets named, never at checkout. Also
[B-13](launch-blockers.md#b-13--single-payment-rail--hard-blocker).

### DEF-015

[ST-19 §3.4](../standards/st-19-two-plane-architecture.md#34-failure-transparency-and-how-it-is-proved)
requires a differential build proving every content page is unchanged with the island stubbed to
throw. It does not exist. Until it does, the partitioned Static Principle rests on a promise —
and the island will become load-bearing gradually, through reasonable-looking commits, unless a
machine refuses them. Also [B-14](launch-blockers.md#b-14--the-island-contract-is-untested--hard-blocker-standing).

---

## Closed defects

| Id | Closed | How |
|---|---|---|
| DEF-011 | 2026-08-30 | Precise static-host formulation adopted; `/auth/callback` specified as the single non-content route |

Closed defects are **never deleted** ([Charter §0.5.2](../corpus/mx-000-charter.md#2-the-correction-obligation)).
A register that removes its resolved entries cannot be audited for how long a defect stayed open,
which is the only number that reveals whether the correction obligation is real.

---

## Counts

Defect counts on any generated page are **computed from this register at build time and never
typed** ([ST-13 §4](../standards/st-13-static-build-and-sentinel.md#4-computed-counts)). A typed
count is a claim with no falsifier, and a typed count that undercounts defects is the specific
failure this register exists to prevent.

---

**Related:** [Launch Blockers](launch-blockers.md) ·
[Open Questions and Ratifications](open-questions-and-ratifications.md) ·
[Corrections Log](corrections-log.md) ·
[Verification Log](verification-log.md) ·
[Reconciliation Ledger](reconciliation-ledger.md)

*Curated by Maher. Fifteen defects, one closed. A register with no entries would mean nobody
looked.*
