---
doc_id: "GM-01"
title_en: "Precedence and Conflict Rules"
title_ar: "قواعد الأولوية وتعارض النصوص"
family: "governance-map"
version: "v2026.09.2"
status: "canonical"
authority: "governing"
prevailing_text: "en"
audience_tier: 5
evidence_class: "durable"
curator: "Maher"
license: "ML-2.1 · Work of Foundational Character"
last_reviewed: "2026-08-29"
hreflang: "en, ar"
---

# Precedence and Conflict Rules

A corpus with a hundred instruments and one author will contain contradictions. The
question is not whether they occur but whether they are resolved by a published rule or
by whoever is reading at the time. This document is that rule.

---

## 1. The precedence ladder

Where two instruments in this corpus conflict, the higher tier governs. Within a tier,
[§2](#2-same-tier-conflicts) applies.

| Tier | Instrument class | Examples |
|---:|---|---|
| 1 | **Maher's License** | [ML-2.1](../license/ml-2-1.md), including Part G and §C.9 |
| 2 | **The Charter** | [MX-000](../corpus/mx-000-charter.md) — §0.4 and §0.5 are unamendable toward weakness |
| 3 | **Corpus instruments** | [MX-001](../corpus/mx-001-about-metax.md) … [MX-020](../corpus/mx-020-language-authority.md) |
| 4 | **Agent instruments** | [AG-000](../agents/ag-000-agent-constitution.md) … [AG-012](../agents/ag-012-degraded-mode-and-succession.md) |
| 5 | **Standards and rubrics** | [ST-01](../standards/st-01-identifier-and-url-grammar.md) … [ST-18](../standards/st-18-academy-json-manifest.md), [RB-01](../rubrics/rb-01-d1-d5-rubric.md) … [RB-04](../rubrics/rb-04-agent-evaluation-specimens.md) |
| 6 | **Registries** | [REG-01](../registries/reg-01-series-registry.md) … [REG-08](../registries/reg-08-processors-keys-mirrors.md) |
| 7 | **Site specifications** | [Route manifests](../site/route-manifest-fixed.md), [page specs](../site/page-spec-hub.md) |
| 8 | **Published pages and generated artefacts** | Anything the build emits |

Two clarifications that matter more than the ladder itself.

**The License is above the Charter and says so.** [MX-000 §0.1](../corpus/mx-000-charter.md#01-founding-statement)
states that where the Charter and the License conflict, the License governs, and that any
inconsistent Charter provision is void from the moment of inconsistency rather than from
its discovery. That is not a courtesy to the License; it is what makes the Charter
falsifiable.

**A lower tier may be stricter, never laxer.** A standard may impose a requirement the
corpus does not mention. It may not relieve anyone of a corpus requirement. A registry may
record more fields than a standard requires; it may not record a value a standard forbids.

---

## 2. Same-tier conflicts

Within a tier, in order:

1. **The more specific instrument governs the specific case**, and the general instrument
   continues to govern everything else.
2. **The later release governs**, where both texts are in the same release family and the
   later one addresses the same question. Release order is fixed by
   [Changelog](changelog.md).
3. **The prohibition governs the permission.** Where one text permits and another forbids
   the same conduct, the conduct is forbidden until the conflict is resolved. This rule is
   deliberately asymmetric: the cost of an unnecessary refusal is delay, and the cost of an
   unauthorised permission is a breach of the Charter.
4. **If none of the above resolves it, the conflict is a defect.** It is filed in the
   [Defect Register](defect-register.md), escalated under
   [AG-004](../agents/ag-004-refusal-and-escalation-register.md), and decided by Maher. No
   agent and no editor resolves a same-tier conflict by choosing.

---

## 3. Summaries never govern

Several documents in this corpus restate a rule that is operative somewhere else. Restating
is permitted; drifting is not. Every summary carries three things:

- a conspicuous notice that it is a summary and creates no obligation absent from the source;
- a link to the governing text;
- an explicit conflict rule resolving to that text.

The pattern was adopted because exact textual mirroring between two instruments is a known
drafting failure: two copies of a normative sentence drift at the first amendment, and the
drift is invisible until somebody exploits it. The canonical instance is
[MX-002 §2.6](../corpus/mx-002-terms-of-service.md#26-machine-reading-and-ai-training),
which summarises [ML-2.1 §C.10](../license/ml-2-1.md#c10--machine-learning-model-training-and-synthetic-derivation)
and is mechanically checked against it by
[SENTINEL](../standards/st-13-static-build-and-sentinel.md#5-single-source-checks).

**Single-source pairs currently under mechanical check:**

| Summary | Governing text | Check |
|---|---|---|
| [MX-002 §2.6](../corpus/mx-002-terms-of-service.md#26-machine-reading-and-ai-training) | [ML-2.1 §C.10](../license/ml-2-1.md#c10--machine-learning-model-training-and-synthetic-derivation) | Build fails if the summary asserts an obligation absent from §C.10 |
| [MX-012](../corpus/mx-012-licensing-and-reuse.md) | [ML-2.1](../license/ml-2-1.md), [Designation List](../license/designation-list.md) | Build fails on a designation not in the List |
| [MX-007](../corpus/mx-007-ai-use-and-disclosure.md) | [AG-000](../agents/ag-000-agent-constitution.md), [AG-009](../agents/ag-009-prohibited-actions.md) | Build fails if a public refusal is missing from the agent instruments |
| [Hub governance page](../site/page-spec-hub.md) | [MX-000](../corpus/mx-000-charter.md), [MX-016](../corpus/mx-016-appeals-and-due-process.md) | Current state only; history lives in the Record |

---

## 4. Language authority

Precedence between an authoritative text and a translation is not decided here. It is
decided by [MX-020 Language Authority](../corpus/mx-020-language-authority.md), which has
four limbs: Arabic governs the Meta-X and BCIA book libraries and the Lexicon; English
governs the License and the MX instruments, subject to a mandatory-consumer-law carve-out;
every instrument states its own prevailing text on its face; and a divergence between an
authoritative text and its translation is a defect rather than a matter for interpretation.

Every document in this corpus carries `prevailing_text` in its front matter. That field, not
a global assumption, is the operative statement for that document.

---

## 5. What is outside precedence entirely

Four things are not subject to the ladder because they cannot be traded away by any
instrument at any tier:

1. **[Charter §0.4](../corpus/mx-000-charter.md#04-the-three-refusals) — the three refusals.**
   Laboratory instruction in biology; Core Riba; the sexualisation of minors. No research
   exception, no artistic exception, no contextual reframing, no amendment toward weakness.
2. **[ML-2.1 §C.9](../license/ml-2-1.md#c9--absolute-prohibition-of-core-riba) — Core Riba.**
   Non-severable by private agreement; reformable by a court only to the narrowest
   enforceable form, and surviving in every forum as a limit on representation.
3. **[Charter §0.5](../corpus/mx-000-charter.md#05-powers-placed-beyond-the-curator) — the
   powers beyond the Curator.** The ethics veto, unilateral revocation, and unilateral
   amendment of the succession instrument.
4. **[ML-2.1 §G.5](../license/ml-2-1.md#g5-humility-clause) — the humility clause.** A
   determination issued in bad faith, to suppress dissent, or to entrench the Steward's
   advantage is void. This clause protects the corpus against its own author, which is the
   only reason the rest of the corpus is credible.

---

## 6. Filing a conflict

Anyone may file. The route is the corrections address in
[MX-001 §1.7](../corpus/mx-001-about-metax.md#17-contact-and-recourse). A filing needs three
things: the two texts quoted verbatim with their paths and versions, the conduct or decision
that turns on the difference, and the resolution you believe is correct. Filings receive a
reasoned reply, and the reply is published in the
[Corrections Log](corrections-log.md) whether or not the filing succeeded.

A conflict report is never treated as an attack on the corpus. It is the corpus working.
