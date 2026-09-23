---
doc_id: "GM-06"
title_en: "Changelog"
title_ar: "سجل التغييرات"
family: "governance-map"
version: "v2026.09.2"
status: "canonical"
authority: "governing"
prevailing_text: "en"
audience_tier: 5
evidence_class: "durable"
curator: "Maher"
license: "ML-2.1 · Work of Foundational Character"
last_reviewed: "2026-08-30"
hreflang: "en, ar"
---

# Changelog

Every release, with **the reason** — not merely the diff. A changelog that records what changed
without recording why lets a future reader see the decision but not the argument, which makes the
decision impossible to revisit properly.

Superseded text is retained permanently in [Archive Register](archive-register.md). Nothing is
deleted and nothing is silently edited
([Charter §0.8](../corpus/mx-000-charter.md#08-amendment)).

---

## v2026.09.2 — 2026-08-30 · **the consolidation and the plane partition**

The release that turned a set of overlapping documents into a corpus, and then had to amend a
published doctrine in the same breath.

### What changed structurally

Four source documents were consolidated into one canonical corpus with a precedence ladder, a
reconciliation ledger, and a single entry point at [`docs/index.md`](../index.md):

- THE METAX CORPUS v2026.09.0
- METAX v2026.09.1 Meta-Review (numbering, grammar, sitemap)
- MetaX.Academy Page Content Specification
- MetaX.Academy UI/UX & Design System Documentation (`MX-DESIGN-001`) — **arrived last and
  changed the most**

They disagreed in **thirty-seven** places. Every disagreement is resolved with its reason in
[Reconciliation Ledger](reconciliation-ledger.md); nothing was resolved silently, and three
resolutions were escalated to the Curator rather than decided editorially.

### The substantive change: the Static Principle is partitioned

`/about/static/` claimed *"no database, no login wall, no client-side fetch."* Authentication,
payment and per-user dashboards made that false.

**What was done, and why this way.** The claim was neither left standing nor quietly deleted. It
is **narrowed, dated, and published as a narrowing**, with the old sentence retained as superseded
text on the doctrine page itself in a new section, *Where the principle bends*. The estate now runs
two planes with a hard boundary — the content plane may be *decorated* by the identity plane but
never *depends* on it — and the boundary is **mechanically tested** rather than asserted.

The reasoning is in the source document's own words: *"a false claim on a doctrine page is exactly
the failure mode this universe exists to prevent."* Quietly contradicting the page would have been
easier and would have been the one failure the estate cannot survive.

New: [ST-19](../standards/st-19-two-plane-architecture.md) ·
[R-26](reconciliation-ledger.md#r-26--the-static-principle-is-partitioned-not-abandoned) ·
[Charter §0.6](../corpus/mx-000-charter.md#06-the-static-principle-as-partitioned) ·
[MX-001 §1.6](../corpus/mx-001-about-metax.md#16-the-static-principle-as-partitioned)

### Instruments added

| Family | Added |
|---|---|
| Corpus | [MX-021 Payments and Commerce](../corpus/mx-021-payments-and-commerce.md), [MX-022 Identity and Sessions](../corpus/mx-022-identity-and-sessions.md) |
| Standards | [ST-19 Two-Plane Architecture](../standards/st-19-two-plane-architecture.md), [ST-20 Payment Integration](../standards/st-20-payment-integration.md), [ST-21 Performance Budgets](../standards/st-21-performance-budgets.md) |
| Design (new family) | [DS-01](../design/ds-01-foundations-and-tokens.md) … [DS-06](../design/ds-06-error-and-empty-states.md) |

### Numbering correction

MX-DESIGN-001 requested Payments as `MX-020` and Identity as `MX-021`. Both were already
allocated. Under [ST-01 Rule 2](../standards/st-01-identifier-and-url-grammar.md#3-rule-2--numbers-are-immortal)
numbers are immortal **from first assignment**, so Payments became MX-021 and Identity MX-022.

The alternative — renumbering Language Authority because nothing is public yet — was rejected on
the ground that the immortality rule exists precisely to stop "nothing has shipped yet" from
licensing a reshuffle. The first time a rule is inconvenient is the only time it is tested.
[R-25](reconciliation-ledger.md#r-25--the-mx-020-numbering-collision)

### Charter amendments

| § | Change | Reason |
|---|---|---|
| §0.2 | Typed series count removed | A number typed into prose is a claim with no falsifier ([R-21](reconciliation-ledger.md#r-21--corpus-claims-about-its-own-counts)) |
| §0.3 | Failure condition added to each Shared DNA property | A property with no failure condition is a slogan |
| §0.4.4 | Dark-pattern refusal added, in commerce **and** doctrinal form | Money entered the estate |
| §0.5.4 | **New** — Successor Prompter authority ceiling | Continuity must not convey founding authority ([R-14](reconciliation-ledger.md#r-14--prompter-succession)) |
| §0.5.5 | **New** — agent absolute-refusal set, as a limit on *delegable* authority | An estate that gains money and sessions while its agents keep old permissions has silently expanded agent authority ([R-33](reconciliation-ledger.md#r-33--agent-authority-must-contract-as-the-estate-gains-state)) |
| §0.6 | **New** — Static Principle partitioned | Above |
| §0.8.3 | Void-on-publication stated as **nullity**, not irregularity | Every other protection can be defeated by a quiet amendment, so the sanction for quietness must be nullity |

### Blockers and open questions added

Five identity-plane blockers ([B-11 … B-15](launch-blockers.md)) and three open questions
([RAT-11, RAT-12, RAT-13](open-questions-and-ratifications.md)).

Three new open questions in one release is not a reconciliation failure — it is what happens when a
document adds money and identity to a universe that had neither. The alternative was to resolve
them by preference and not say so.

### What was corrected against a source

- **The Deep Review was factually wrong** about the corpus never citing the BCIA gates; MX-001 and
  MX-014 both do. The genuine, narrower gap was a missing URL. ([R-16](reconciliation-ledger.md#r-16--whether-the-corpus-points-at-the-bcia-gates))
- **Reserved numbering blocks rejected** in favour of one monotonic counter with branch as
  metadata. ([R-01](reconciliation-ledger.md#r-01--series-numbering-reserved-blocks-vs-one-monotonic-counter))
- **"Eight properties" corrected** to seven fixed, then to seven content-plane plus three
  identity-plane plus an unbounded academy set. A class of sites is not a site.
  ([R-18](reconciliation-ledger.md#r-18--how-many-properties), [R-30](reconciliation-ledger.md#r-30--the-property-count-changes-again--seven-becomes-seven-plus-three))
- **The D-prefix collision** — three unrelated D-prefixed vocabularies, with `domain_tags` wrongly
  populated by rubric dimensions — found by cross-reading and named in no source document.
  ([R-04](reconciliation-ledger.md#r-04--the-d-prefix-collision), [DEF-008](defect-register.md#def-008))
- **MX-DESIGN-001's "fully static" wording** corrected: pages are static, hosts expose exactly one
  non-static callback route. ([DEF-011](defect-register.md#def-011--closed) — closed same day)

### What was deliberately not done

**Nothing was invented to fill a gap.** The steward name, key fingerprint, registry URL, ethics
reviewer, jurisdiction, liability cap and every price remain visible placeholders or `[VERIFY]`
tags. Under [AG-000 §A.5](../agents/ag-000-agent-constitution.md#a5-fabrication-as-the-cardinal-fault)
a plausible placeholder is a fabrication, and fabrication is the cardinal fault.

**No Arabic edition was drafted.** Producing English-authored Arabic and labelling it
*authoritative* would breach the language-authority rule it was meant to satisfy.

**The scenario assessment was not designed.** All three available options surrender something the
corpus values, so the choice is the Curator's. ([RAT-11](open-questions-and-ratifications.md#rat-11--how-the-scenario-assessment-resolves-against-the-plane-boundary))

---

## v2026.09.1 — the Meta-Review

Numbering and grammar rules (one monotonic counter, immortal numbers, branch as metadata,
branch-free canonical URLs, computed counts), nine drafted corpus amendments, and the full sitemap
with route cardinality. **Superseded as a standalone document; consolidated into this release.**

## v2026.09.0 — THE METAX CORPUS

MX-000 … MX-019 and AG-000 … AG-010, plus the ML-2.1 amendment drafts. **Superseded as a
standalone document; consolidated.**

## v2026.08.28 / .14 / .12 — the working set

Series registry, credentialing alignment map, BCIA taxonomy and status patches, TopTech canonical
index, AG-011 charter, canon patch sentences. Retained in [`/sources/`](../../sources/) and indexed
in [Archive Register](archive-register.md). Hash-suffixed duplicate uploads are recorded as
**export artefacts, not versions** ([R-20](reconciliation-ledger.md#r-20--superseded-working-drafts-and-duplicate-uploads)).

---

## Next release

No date is stated, because a release date on unstarted work is a fabricated schedule. The
**contents** of the next release are determined: the remaining MX, AG, ST, RB, REG and BX
instruments, the site specifications, the lexicon and keyword register, and the HTML documentation
portal. Order is dependency-driven per
[Launch Blockers → Publication order](launch-blockers.md#publication-order).

---

**Related:** [Reconciliation Ledger](reconciliation-ledger.md) ·
[Corrections Log](corrections-log.md) ·
[Archive Register](archive-register.md) ·
[Defect Register](defect-register.md) ·
[Launch Blockers](launch-blockers.md)

*Curated by Maher. This release amended a published doctrine. The amendment is dated, the prior
text is retained, and the reason is above.*
