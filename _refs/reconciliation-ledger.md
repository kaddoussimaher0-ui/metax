---
doc_id: "GM-03"
title_en: "Reconciliation Ledger"
title_ar: "سجل المواءمة"
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

# Reconciliation Ledger

The v2026.09.2 release consolidates three top-level source documents and eighteen working
documents into one canonical corpus. They disagreed. This file records every disagreement,
what governs, and why — because a corpus that resolves its own contradictions silently has
the same defect as a page that edits itself silently.

**Sources consolidated.** [THE METAX CORPUS v2026.09.0](../../sources/THE_METAX_CORPUS.md)
(hereafter *Corpus*), [METAX v2026.09.1 Meta-Review](../../sources/Meta-Review_Corpus_Adjustments_Numbering_Grammar_Complete_Sitemap.md)
(*Meta-Review*), [MetaX.Academy Page Content Specification](../../sources/MetaX.Academy_Page_Content_Specification.md)
(*Page Spec*), [MetaX — Deep review](../../sources/MetaX_Deep_review.md) (*Review*),
[Maher's License ML-2.0](../../sources/Maher-license-ml-2.0.md) (*ML-2.0*), and the
v2026.08.12 / .14 / .28 / .29 working set.

**How to read a row.** *Disposition* is one of: **ADOPTED** (a source text is carried
forward as canon), **CORRECTED** (a source text was wrong and is fixed, with the error
logged in [Corrections Log](corrections-log.md)), **MERGED** (two texts were both partly
right), or **RATIFICATION PENDING** (the editorial resolution is applied provisionally and
is listed in [Open Questions](open-questions-and-ratifications.md)).

**Structure.** Part 1 (R-01 … R-24) reconciles the three top-level sources and the working set.
Part 2 (R-25 … R-37) reconciles
[MX-DESIGN-001](../../sources/MetaX.Academy_UI-UX_and_Design_System_Documentation.md), which
arrived afterwards and forced a doctrine-level change rather than a stylistic one.

---

# Part 1 — Entries arising from the three top-level sources

## R-01 · Series numbering: reserved blocks vs one monotonic counter

**Conflict.** *Review* §6 and the v2026.08.28 series registry allocate reserved blocks —
S051–S099 for Branch B expansion, S100–S149 for new operator domains, S150–S199 for Branch D
continuation. *Meta-Review* Part C rejects reserved blocks outright and specifies a single
monotonic counter with branch held as metadata.

**Disposition — ADOPTED (Meta-Review Part C).** Reserved blocks require predicting each
branch's growth rate at the moment of allocation; growth is never proportional to the
reservation, so one block exhausts while three sit empty and a second, uglier allocation
gets appended. The deeper objection is that block allocation couples branch membership to
identity, which forbids a series from ever changing branch without lying about its number.
One counter, branch as a front-matter field, branch-free URLs.

**Now governed by** [ST-01 §2](../standards/st-01-identifier-and-url-grammar.md#2-rule-1--one-monotonic-counter)
and [REG-01](../registries/reg-01-series-registry.md). The v2026.08.28 reserved-block table
is superseded and archived.

---

## R-02 · The F1/F2 identifiers and the "52 series" arithmetic

**Conflict.** *Corpus* MX-000 §0.2 states fifty-two series. The series registry lists
`F1`, `F2`, and `S01`–`S50` — which is fifty-two objects but only fifty `S` numbers.
*Meta-Review* Rule 1 then states that "`S001`–`S050` are the current canon" and that `S051`
is the next allocation, which cannot both be true and account for F1 and F2.

**Disposition — CORRECTED and MERGED.** F1 and F2 are pre-counter identifiers issued before
the counter existed. Under Rule 2 a number once allocated is immortal, so they are **not**
renumbered into the S-space and their URLs never move. They are recorded in
[REG-01](../registries/reg-01-series-registry.md) as legacy identifiers with permanent
canonical URLs, and the counter's next allocation remains `S051`. The corpus total is
therefore fifty-two series carrying fifty-two identifiers in two generations of the
grammar, which is an honest description of a corpus that grew.

**Consequence.** No page states "fifty-two" as typed text. Every count is computed from
front matter per [ST-13](../standards/st-13-static-build-and-sentinel.md). The narrative
figure in MX-000 §0.2 is replaced by a computed reference.

---

## R-03 · Identifier zero-padding

**Conflict.** Source files use `S01`, `s38`, `S038`, and `S001` interchangeably; filenames
add a hash suffix (`s38_computing-substrate-literacy_v2026.08.12_e52a78e0.md`).

**Disposition — CORRECTED.** One form: `S` plus three digits, uppercase in prose and
front matter, lowercase in URLs — `S038`, `/s/s038-computing-substrate-literacy/`. Hash
suffixes were an artefact of an export process and carry no meaning; they are dropped.
Two-digit forms are permanent 301 aliases, never canonical.

**Now governed by** [ST-01 §7](../standards/st-01-identifier-and-url-grammar.md#7-normalisation-and-aliases).

---

## R-04 · The D-prefix collision: rubric dimensions vs domain tags vs BCIA layers

**Conflict.** This is the most consequential inconsistency in the source set, and none of the
three top-level documents names it. Three unrelated schemes all use a `D` prefix:

- `D1`–`D5` as the **frozen assessment rubric dimensions** ([RB-01](../rubrics/rb-01-d1-d5-rubric.md)), per *Corpus* MX-005 §5.2;
- `D1`–`D10` as **domain tags** in v2026.08.12 front matter (`domain_tags: [D1, D2, D3, D4, D5]`);
- `D` as the **branch letter** for the Meta-X Ascent.

Worse, the v2026.08.12 files populate `domain_tags` with `[D1…D5]` — the rubric dimensions —
on documents that have nothing to do with assessment. The tag scheme and the rubric were
being conflated in the metadata itself, and *Corpus* MX-014 §14.4 then describes the open
defect as a conflict "between the D1–D10 scheme and the seven layers", which reads as though
D1–D10 were BCIA vocabulary. [BX-004](../bcia/bx-004-observed-taxonomy.md) establishes it is not:
D1–D10 appears zero times in the book corpus.

**Disposition — CORRECTED, with one part RATIFICATION PENDING.**

1. `D1`–`D5` are reserved permanently and exclusively for the **rubric dimensions**.
2. `D1`–`D10` as domain tags is **retired**. `domain_tags` becomes a controlled free
   vocabulary of lowercase topic slugs ([ST-02 §4](../standards/st-02-front-matter-schema.md#4-field-reference)).
   Existing D-tag values are dropped, not translated — they never carried topic meaning.
3. Branch `D` keeps its letter; branch is metadata and lives in `branch`, never in an
   identifier or a URL.
4. The BCIA layer question is separate and is handled at [R-05](#r-05--the-bcia-taxonomy-three-layers-seven-layers-or-d1d10).

**Filed as** [DEF-004](defect-register.md) and
[Correction C-0003](corrections-log.md).

---

## R-05 · The BCIA taxonomy: three layers, seven layers, or D1–D10

**Conflict.** *Corpus* MX-014 §14.4 lists as an open defect "the taxonomy conflict between
the D1–D10 scheme and the seven layers". The v2026.08.12 status page frames Gate 2 the same
way. [BX-004](../bcia/bx-004-observed-taxonomy.md), built from a full-text scan, finds that
the books self-declare **three** layers — Meta-X (Books 1–3), Transition (Books 4–9),
Higher-Order (Book 10) — and that both "seven layers" and "D1–D10" occur zero times in the
corpus.

**Disposition — RATIFICATION PENDING (provisionally adopted: three observed layers).** The
evidence report describes what the drafts contain, and the three-layer map is adopted as the
working map *because the books declare it on their own covers*. It is not adopted as
doctrine. Gate 2 moves from **Open** to **Triangulated — pending owner ratification**, and
what remains is Maher's formal retirement of "seven layers" and "D1–D10" as BCIA vocabulary.

**Now governed by** [BX-003 Gate 2](../bcia/bx-003-remediation-gates.md#gate-2--taxonomy-reconciliation)
and [BX-004](../bcia/bx-004-observed-taxonomy.md). Listed as
[Ratification RAT-02](open-questions-and-ratifications.md#rat-02--retire-the-seven-layer-and-d1d10-framings).

---

## R-06 · The proof ladder: three rungs, or four, and what P2 means

**Conflict.** Three incompatible statements. *Corpus* MX-005 §5.3 gives **three** rungs:
assertion, artefact, third-party verification. *Meta-Review* B.8 gives **four**: P0
self-report, P1 artefact, **P2 instrumented evidence**, P3 third-party verification.
*Page Spec* §6 also gives four but defines **P2 as peer-reviewed**. *Page Spec* §2 then
refers to "the three-rung proof requirement" in the same document.

**Disposition — ADOPTED (Meta-Review B.8) and CORRECTED (Page Spec).** Four rungs, with P2
as **instrumented evidence** — the artefact plus a measurement whose method is disclosed.
"Peer-reviewed" is a different axis from evidence strength: peer review is *who looked*,
instrumentation is *what was measured*, and collapsing them would let a reviewed but
unmeasured claim outrank a measured one. Any outcome claim carrying a number requires P3.
MX-005 §5.3 is amended to the four-rung form; the *Page Spec* "three-rung" phrase is an
internal inconsistency and is corrected.

**Now governed by** [RB-02](../rubrics/rb-02-proof-ladder.md). Logged as
[Correction C-0001](corrections-log.md).

---

## R-07 · Credential track naming

**Conflict.** Working documents from v2026.08.3–.5 used a badge → practitioner →
professional → master/fellow ladder. *Corpus* MX-005 §5.1 names four tracks: Series
Practitioner, Professional Operator, Master-Fellow, MetaX Contributor.

**Disposition — ADOPTED (Corpus MX-005).** *Meta-Review* A.6 is correct that there was less
divergence than the *Review* reconciliation table claimed: three of the four names already
matched. The corpus names prevail over every shorthand and local variant.

**Now governed by** [MX-005 §5.1](../corpus/mx-005-credentialing-and-assessment.md#51-the-four-tracks)
with the full mapping in [MX-005 Annex A](../corpus/mx-005-annex-a-credential-naming-map.md).

---

## R-08 · The completion badge

**Conflict.** Early working documents treated a completion badge as the ladder's bottom
rung. *Corpus* MX-005 §5.1 has four tracks and no badge.

**Disposition — ADOPTED (Meta-Review B.7).** The badge is **not a credential**, is renamed
**Completion Marker** corpus-wide, never enters the registry or the verifier or the
Integrity Report counts, and may not be displayed in credential typography or the credential
badge shape. It asserts that a person finished a series and asserts nothing about assessment.

**Now governed by** [MX-005 §5.12](../corpus/mx-005-credentialing-and-assessment.md#512-the-completion-marker).

---

## R-09 · Branch URLs: `/a/` `/b/` `/c/` vs `/b/{letter}/`

**Conflict.** *Page Spec* §2 addresses branches at `toptech.metax.academy/a/`, `/b/`, `/c/`.
*Meta-Review* D.1.2 addresses the branch index at `/b/` and individual branches at
`/b/a/`, `/b/b/`, `/b/c/`. Under the *Page Spec* form, `/b/` means Branch B; under the
*Meta-Review* form, `/b/` means the branch index. The same URL means two different pages.

**Disposition — ADOPTED (Meta-Review D.1.2).** `/b/` is the branch index; `/b/{letter}/` is
one branch; every future branch takes the next Latin letter with no new route shape. The
*Page Spec* single-letter form is superseded, not aliased — aliasing `/b/` to Branch B while
`/b/` is also the index is exactly the collision being removed.

**Now governed by** [ST-01 §5](../standards/st-01-identifier-and-url-grammar.md#5-rule-4--canonical-urls-are-branch-free)
and [Route Manifest — Fixed](../site/route-manifest-fixed.md).

---

## R-10 · Course and lesson URL forms

**Conflict.** *Meta-Review* D.2 gives `toptech/s/{sid}/c{nn}-{slug}/` and
`/s/{sid}/c{nn}/l{n}-{slug}/` — note the parent segment drops the slug. *Page Spec* §9 gives
`/s/{S###}-{slug}/c/{NN}-{slug}/` and `.../l/{N}-{slug}/`, keeping the slug in the parent.

**Disposition — MERGED, canonical form is the Page Spec's.** Two forms of the series segment
(`s038-slug` on the series page, `s038` on its children) would give the same series two
parent addresses and split its link equity and its JSON-LD. The canonical form keeps one
series segment everywhere and separates the child collection with its own segment:

- `…/s/s038-computing-substrate-literacy/`
- `…/s/s038-computing-substrate-literacy/c/03-memory-and-energy/`
- `…/s/s038-computing-substrate-literacy/c/03-memory-and-energy/l/4-lab-schema-audit/`

The identifier-only forms (`/s/s038/…`) resolve permanently as 301 aliases, because the
identifier is authoritative and the slug is decorative — which is the *Meta-Review*'s own
slug-stability rule applied consistently.

**Now governed by** [ST-01 §6](../standards/st-01-identifier-and-url-grammar.md#6-canonical-route-forms).

---

## R-11 · Four further route collisions

| Object | *Meta-Review* | *Page Spec* | Canonical | Alias |
|---|---|---|---|---|
| Credential record | `verify/{cid}/` | `verify/c/{cid}/` | `verify/c/{cid}/` | `verify/{cid}/` |
| Ascent rung | `/ascent/r{nn}-{slug}/` | `/ascent/r/{NN}-{slug}/` | `/ascent/r/{nn}-{slug}/` | `/ascent/r{nn}-{slug}/` |
| Lexicon term | `/t-{root}-{nn}/` | `/t/{term}/` | `/t/{root}-{nn}/` | `/t-{root}-{nn}/` |
| Academy profile | `academies/directory/{slug}/` | `academies/a/{slug}/` | `academies/directory/{slug}/` | `academies/a/{slug}/` |
| Proof ladder page | `/credentials/proof/` | `/credentials/proof-ladder/` | `/credentials/proof-ladder/` | `/credentials/proof/` |
| AI policy page | `/about/ai/` | `/about/ai-use/` | `/about/ai-use/` | `/about/ai/` |

**Disposition — MERGED.** Credential records take a `/c/` collection segment because a bare
`/{cid}/` at the verifier root would compete with the fixed routes `/how/`, `/keys/`,
`/spec/`, `/offline/` and `/revocations/`, and a credential identifier is exactly the kind of
value that must never be able to shadow a governance page. Rungs and terms take a collection
segment for the same consistency reason applied to the *Page Spec*'s series form. Every
losing form is a permanent 301 alias, never deleted.

**Now governed by** [ST-01 §6](../standards/st-01-identifier-and-url-grammar.md#6-canonical-route-forms).

---

## R-12 · Machine reading: mirror the license, or reference it

**Conflict.** *Review* §1 gap 5 requires that MX-002 §2.6 "mirror ML §C.10 exactly".
*Meta-Review* A.5 rejects exact mirroring.

**Disposition — ADOPTED (Meta-Review A.5).** Two copies of a normative provision drift at
the first amendment, and the drift is invisible until it is exploited — which is the seam the
*Review* was trying to close. Single-source instead: §C.10 is the sole operative text;
MX-002 §2.6 states the operative subset a reader needs at the point of use, carries a
conspicuous summary notice, and resolves all conflict to the License. SENTINEL fails the
build if the summary asserts an obligation absent from §C.10 or omits one marked
summary-required.

**Now governed by** [MX-002 §2.6](../corpus/mx-002-terms-of-service.md#26-machine-reading-and-ai-training),
[ML-2.1 §C.10](../license/ml-2-1.md#c10--machine-learning-model-training-and-synthetic-derivation),
[GM-01 §3](precedence-and-conflict-rules.md#3-summaries-never-govern).

---

## R-13 · Language hierarchy

**Conflict.** *Review* §1 gap 4 proposes "Arabic canonical for the book library, English
canonical for legal instruments". *Meta-Review* A.3 accepts the gap but corrects the rule as
unsafe: MetaX serves an Arabic-primary audience, and several jurisdictions apply mandatory
language rules to consumer-facing terms that no prevailing-text clause can override.

**Disposition — ADOPTED (Meta-Review A.3 / B.3), four limbs.** Arabic authoritative for the
Meta-X and BCIA libraries and the Lexicon; English authoritative for the License and MX
instruments, save where mandatory local law requires the consumer's language; every
instrument states its own prevailing text on its face; divergence between an authoritative
text and a translation is a **defect** entering the Corrections Log, not a matter for
interpretation.

**Now governed by** [MX-020](../corpus/mx-020-language-authority.md) and the
`prevailing_text` field in [ST-02](../standards/st-02-front-matter-schema.md).

---

## R-14 · The prompter-succession window

**Conflict.** ML §E.8 governs Steward succession and MX-015 governs Curator succession, but
AG-000 §A.2 vests all agent authority in one authenticated channel and AG-001 §1.5 makes
delegation per-task and non-standing. Together they produce a state where an incapacitated
Curator cannot delegate, no successor can inherit prompter authority, and the agent layer
freezes with no lawful path to unfreeze.

**Disposition — ADOPTED (Meta-Review B.1), as AG-000 §A.6.** Freezing is the correct failure
mode; being unable to recover from it is not. Automatic Degraded Mode on declared
unavailability, 45 days without an authenticated instruction, or a dual-control incapacity
declaration; a sealed pre-committed succession credential in the Registry; a permanent
ceiling on what a Successor Prompter may ever do; reversion on the Curator's signed notice;
and retirement of the agent layer if no successor accedes within 180 days.

**Now governed by** [AG-000 §A.6](../agents/ag-000-agent-constitution.md#a6-degraded-mode-and-prompter-succession),
with the operational runbook in [AG-012](../agents/ag-012-degraded-mode-and-succession.md).
The runbook is procedure only and asserts no obligation absent from §A.6.

---

## R-15 · Privacy classification boundary

**Conflict.** MX-003 §3.4 enumerates the three public-by-design categories but states the
exceptions without stating the default rule, while MX-005 §5.4 handles ON REQUEST evidence as
confidential. Nothing said which way an unclassified document falls.

**Disposition — ADOPTED (Meta-Review B.2), as MX-003 §3.0.** Public by design applies to
curriculum, governance, standards, audits, determinations, and the factual registers.
Learner evidence, review notes, reviewer deliberations, appeals correspondence, escrowed
identity, and all personal data are **private by default**. Where a document could be read
as falling in both categories, it is private, and that rule prevails over any contrary
implication elsewhere in the corpus.

**Now governed by** [MX-003 §3.0](../corpus/mx-003-privacy-notice.md#30-data-classification-canon).

---

## R-16 · Whether the corpus points at the BCIA gates

**Conflict.** *Review* §1 gap 6 asserts the corpus never mentions the BCIA remediation
gates. *Meta-Review* A.4 corrects this on the facts: MX-001 §1.2 and MX-014 §14.4 both do,
and §14.4 enumerates all seven by name.

**Disposition — CORRECTED (Review was wrong) and MERGED.** The genuine gap is narrower:
neither passage carried the canonical URL of the status page, so a reader could not navigate
from the governing document to live gate status. Both passages now carry the pointer
sentence. No redundant normative text was added, because accepting a phantom gap would have
lengthened a corpus whose principal risk is already length.

**Now governed by** [MX-001 §1.3](../corpus/mx-001-about-metax.md#13-the-three-pillars-and-their-authority-boundaries)
and [MX-014 §14.4](../corpus/mx-014-research-ethics-and-exclusions.md#144-evidentiary-status-of-bcia).

---

## R-17 · Governance/Record and Status/Audit overlap

**Conflict.** The *Page Spec*'s own closing note flags that
`metax.academy/about/governance/` overlaps materially with `library.metax.academy/record/`,
and `bcia.metax.academy/status/` overlaps with `/audit/`.

**Disposition — ADOPTED (the Page Spec's own fix).** Governance and status pages hold
**current state only**; record and audit pages hold **history and findings**. Left merged,
both pairs drift, and drift in a governance surface is the failure mode this architecture
exists to prevent. Each of the four pages now carries an explicit scope line naming what it
does *not* contain and linking to its counterpart.

**Now governed by** [Page Specs — Hub](../site/page-spec-hub.md),
[Page Specs — BCIA](../site/page-spec-bcia.md),
[Page Specs — Verify, Library, Lexicon](../site/page-spec-verify-library-lexicon.md).

---

## R-18 · How many properties

**Conflict.** *Corpus* MX-001 §1.1 states eight properties, counting "one subdomain per
member academy" as the eighth. The *Page Spec* search page says "one index across seven
subdomains", and its §0 says every page has an Arabic mirror across "eight properties".

**Disposition — CORRECTED.** Seven **fixed** properties, plus an unbounded set of member
academy subdomains. The count of fixed properties is seven and is stated as seven; the eighth
"property" was a class, not a site, and describing a class as a site produced a number that
could not be computed. Search indexes all seven fixed properties plus every chartered academy
subdomain, and says so.

**Now governed by** [MX-001 §1.1](../corpus/mx-001-about-metax.md#11-what-metax-is)
and [Information Architecture](../site/information-architecture.md).

---

## R-19 · `ai_disclosure_url` target

**Conflict.** v2026.08.12 files point `ai_disclosure_url` at the EU AI Act transparency FAQ.
v2026.08.28 files point it at a third-party file URL. *Review* §3 notes it should point first
at MX-007.

**Disposition — ADOPTED (Review).** The field points at
[MX-007](../corpus/mx-007-ai-use-and-disclosure.md), which is MetaX's own policy and the
thing MetaX is accountable for. The EU AI Act FAQ is retained as a **regulatory reference**
in MX-007 itself, not as the value of the field. A policy field that points at somebody
else's regulator states that MetaX has no policy of its own.

**Now governed by** [ST-02 §4](../standards/st-02-front-matter-schema.md#4-field-reference).

---

## R-20 · Superseded working drafts and duplicate uploads

**Conflict.** The source set contains exact-duplicate uploads under different names
(`00_TOPTECH_CANONICAL_INDEX_v2026.08.12.md` and `…_fda4bf14.md`;
`00_TOPTECH_TO_BCIA_TRANSITION_v2026.08.12.md` and `…_8733d3e5.md`; three copies of the S050
gateway stub), and community legal drafts from the v2026.08.11 phase that MX-002 and MX-003
have since replaced.

**Disposition — ADOPTED (register and archive).** One canonical copy per document, one
canonical index, explicit superseded headers on archived duplicates. Hash-suffixed duplicates
are recorded as export artefacts, not as versions. The v2026.08.11 community legal drafts are
superseded by MX-002 and MX-003 and are retained for archive only.

**Now governed by** [Archive Register](archive-register.md).

---

## R-21 · Corpus claims about its own counts

**Conflict.** The v2026.08.12 root index states "Published series count (script-generated):
48" alongside a branch map that enumerates fifty-two, and MX-000 §0.2 states fifty-two in
prose.

**Disposition — CORRECTED.** No index page and no instrument contains a typed count. Every
count is resolved at build from front matter, and where the generator cannot resolve a count
the build fails rather than rendering a placeholder. A number typed into prose is a claim
with no falsifier, which [ST-04](../standards/st-04-falsifiability-and-claim-cards.md)
forbids anywhere in the corpus.

**Now governed by** [ST-13 §4](../standards/st-13-static-build-and-sentinel.md#4-computed-counts)
and [MX-013](../corpus/mx-013-records-and-versioning.md).

---

## R-22 · The master generation prompt was not an instrument

**Conflict.** *Review* §3 identifies a real gap on its own side: the master course series
generation prompt had no sole-prompter integrity mechanism and was not registered as an
agent instrument, so a governing artefact was operating outside AG-000.

**Disposition — ADOPTED.** The prompt is registered as
[AG-011](../agents/ag-011-series-generation-charter.md), inherits AG-000 §A.2 and §A.3
verbatim, carries the no-persona clause, and hooks into
[AG-010](../agents/ag-010-evaluation-rubric.md)'s six dimensions with the gated fidelity
dimension. A prompt that generates canon is an instrument whether or not anyone numbered it.

---

## R-23 · Documents referenced but absent from the source set

**Conflict.** Several instruments are cited across the sources with no text behind them: the
BCIA Document Zero and research charter, the Limits & Bridge Standard as a document, the
front-matter schema and its validator, the `academy.json` schema, the registry and verifier
specification, the component library standard, the reviewer handbook at spec depth, and the
Lexicon entry standard. *Meta-Review* A.6 states plainly that some referenced artefacts were
not in front of its author.

**Disposition — GENERATED.** Each is now written as a first-class instrument rather than left
as a dangling reference: [BX-000](../bcia/bx-000-document-zero.md),
[BX-001](../bcia/bx-001-research-charter.md), [ST-03](../standards/st-03-limits-and-bridge.md),
[ST-02](../standards/st-02-front-matter-schema.md), [ST-18](../standards/st-18-academy-json-manifest.md),
[ST-17](../standards/st-17-registry-and-verifier.md), [ST-15](../standards/st-15-component-library.md),
[RB-01](../rubrics/rb-01-d1-d5-rubric.md), [Lexicon Entry Standard](../lexicon/lexicon-entry-standard.md).
Where an instrument required a fact only Maher holds, the fact is marked `[VERIFY]` and
listed in [Verification Log](verification-log.md) rather than invented — per
[AG-000 §A.5](../agents/ag-000-agent-constitution.md#a5-fabrication-as-the-cardinal-fault),
fabrication is the cardinal fault and a plausible placeholder is a fabrication.

---

## R-24 · Ingestion debt in the book corpus

**Conflict.** The v2026.08.14 annex records that Books 1–6 are fully ingested, Book 7
chapters 3–12 and Books 8 and 10 exist but are un-ingested, and **Book 9 is incomplete in the
upload itself** — chapters 2–9 were never provided.

**Disposition — RECORDED, not resolved.** This is a source gap, not an editorial one, and no
amount of drafting closes it. Book 9 is marked `[GAP IN SOURCE]` and Books 7, 8, 10 are marked
`[PENDING INGESTION]` in [REG-03](../registries/reg-03-book-registry.md). Any Ascent rung
depending on un-ingested chapters is `PREVIEW` at best and may not claim chapter-level
fidelity.

**Listed as** [RAT-05](open-questions-and-ratifications.md#rat-05--supply-book-9-chapters-29)
because only Maher can supply the missing text.

---

# Part 2 — Entries arising from MX-DESIGN-001 (v2026.09.2)

[MetaX.Academy — UI/UX & Design System Documentation](../../sources/MetaX.Academy_UI-UX_and_Design_System_Documentation.md)
(*Design Doc*, corpus ref MX-DESIGN-001) arrived after R-01 … R-24 were settled. It is not a
design document in effect. Its Part 0 introduces authentication, payment and per-user state
into a universe whose published doctrine denies all three, and its Part 11 concedes the point:
*"Adding identity and money to the corpus is a governance event, not a design event."*

The entries below are therefore governance entries, not styling entries. Two of them (R-25,
R-30) contradict resolutions already recorded in Part 1 of this ledger; both say so.

---

## R-25 · The MX-020 numbering collision

**Conflict.** *Design Doc* Part 11 requires "two new instruments — **MX-020 Payments &
Commerce** and **MX-021 Identity & Sessions**". `MX-020` was already allocated in this same
release to **Language Authority and Bilingual Parity**, derived from *Meta-Review* B.3
(§1.5-bis language authority), and is cited by that number in
[Launch Blockers B-05](launch-blockers.md#b-05--counsel-review-of-the-legal-instruments--hard-blocker)
and in the MX table of [the index](../index.md#4-the-corpus-instruments-mx).

**Disposition — CORRECTED (against the Design Doc).** Under
[ST-01 Rule 2](../standards/st-01-identifier-and-url-grammar.md#3-rule-2--numbers-are-immortal)
a number is immortal once allocated, and it is allocated at first assignment inside a release
— not at publication. Language Authority holds MX-020. Payments becomes **MX-021** and
Identity becomes **MX-022**.

The tempting alternative — renumber Language Authority to MX-022 because nothing is public yet
— was rejected for a reason worth stating: the immortality rule exists precisely to stop
"nothing has shipped yet" from being used as licence to reshuffle identifiers, and the first
time the rule is inconvenient is the only time it is ever tested. A rule that yields on its
first test is a preference.

**Now governed by** [MX-021 Payments & Commerce](../corpus/mx-021-payments-and-commerce.md),
[MX-022 Identity & Sessions](../corpus/mx-022-identity-and-sessions.md). The Design Doc's
numbering is superseded; the Design Doc text is retained unedited in `/sources/` with this
entry as its correction record.

---

## R-26 · The Static Principle is partitioned, not abandoned

**Conflict.** `metax.academy/about/static/` states, as doctrine, "no database, no login wall,
no client-side fetch". *Design Doc* Part 0 adds sessions, payment intents, entitlements and an
injected identity bar. The Design Doc names the collision itself: *"As of this release that
claim becomes false, and a false claim on a doctrine page is exactly the failure mode this
universe exists to prevent."*

**Disposition — ADOPTED (Design Doc Part 0), with the doctrine page rewritten.** The two-plane
model governs:

| Plane | Hosts | Properties |
|---|---|---|
| **Content Plane** | `metax.academy`, `toptech.`, `bcia.`, `academies.`, `library.`, `lexicon.`, `verify.`, every `{academy}.metax.academy` | Static, pre-rendered, archivable, crawlable. Must render completely and legibly for an anonymous visitor with JavaScript disabled. No content page may gate its primary text behind a session. |
| **Identity & Commerce Plane** | `auth.`, `pay.`, `me.` | Dynamic, stateful, `noindex`, never archived. Holds sessions, entitlements, payment intents, learner artefacts. |

The boundary rule, load-bearing and quoted verbatim into canon: **the content plane may be
*decorated* by the identity plane but never *depends* on it.**

What matters is that this is a **narrowing of the original claim, published as a narrowing**.
The doctrine page gains a dated section, *Where the principle bends*, and the old sentence is
not edited out of history — it is shown superseded with its date, per
[MX-013](../corpus/mx-013-records-and-versioning.md). A partition published honestly is
governance; the same partition applied quietly is the exact failure the page warns about.

**Now governed by** [ST-19 §1](../standards/st-19-two-plane-architecture.md#1-the-two-planes),
[MX-001 §1.6](../corpus/mx-001-about-metax.md), and
[Page Specs — Hub](../site/page-spec-hub.md) for `/about/static/`.

---

## R-27 · The three dynamic exceptions are superseded by the island contract

**Conflict.** The pre-Design-Doc architecture permitted exactly three dynamic exceptions: R2
presigned uploads, a Worker+KV token-gated ON REQUEST evidence route, and a Worker signing the
revocation list. *Design Doc* Part 0 sanctions a fourth and much broader one: a ~4 KB island
script on **every** content page, reading a short-lived signed identity token.

**Disposition — MERGED and re-based.** The three old exceptions are not deleted; they are
re-expressed as consequences of the plane boundary rather than as ad-hoc carve-outs. Presigned
uploads and the ON REQUEST route belong to the identity plane by definition. Revocation-list
signing stays on the content plane as a **build-time** operation, not a request-time one.

The island is then the **only** request-time exception on the content plane, and it is bounded
by four conditions, all of which must hold or the island is a defect:

1. ≤ 4 KB, one script, no dependencies, no third-party origin.
2. Purely additive to the DOM: it may inject the identity bar and at most three entitlement
   chips. It may not remove, replace, reorder or unhide existing content.
3. Failure-transparent: if it fails, times out, is blocked, or the visitor has JS disabled, the
   page is byte-for-byte the page an anonymous visitor sees, and nothing is broken.
4. No reserved space. Anonymous visitors get no skeleton, no placeholder, no dismissible
   banner — because reserved space for an absent bar is layout shift charged to every reader
   who never signs in.

Condition 3 is testable, and [ST-13](../standards/st-13-static-build-and-sentinel.md) is
extended to test it: the estate is built twice, once with the island stubbed to throw, and the
rendered content trees must be identical. An exception that is not mechanically tested is a
promise.

**Now governed by** [ST-19 §3](../standards/st-19-two-plane-architecture.md#3-the-island-contract),
[ST-16](../standards/st-16-security-architecture.md).

---

## R-28 · Gradients against the Ink-and-Paper identity

**Conflict.** The established visual identity is Ink and Paper — austere, print-derived,
deliberately unfashionable. Maher asked for gradients and animation. Taken naively, both
dissolve the identity.

**Disposition — ADOPTED (Design Doc Part 0 and 1.2).** One rule carries it: **gradients are
chrome, never substrate.** Gradients live in hero fields, section rules, badge fills, focus
states and edge treatments. Body copy always sits on flat Paper or flat Ink. *Any gradient
appearing behind running text is a defect and is logged as one.*

Ten named ramps, one per brand surface, defined once as custom properties with mandated solid
fallbacks. Five governing rules: gradients carry no semantic meaning (semantic state is
`mx-statusbadge` colour only); at most two gradient surfaces per viewport;
`background-clip: text` only at ≥ 32 px and always with a solid fallback; contrast tested
against the **darkest and lightest stop, not the midpoint**; `auth` and `pay` ramps are locked
against academy theming.

The locking of `auth` and `pay` is a security decision wearing a design costume, and the
Design Doc's reason is correct: *"a payment screen that looks different on every subdomain is a
phishing surface."*

**Now governed by** [DS-01 §3](../design/ds-01-foundations-and-tokens.md#3-the-gradient-system).

---

## R-29 · Animation against the refusal of attention economics

**Conflict.** [Charter §0.4](../corpus/mx-000-charter.md#04-what-metax-refuses) refuses
attention-economic mechanics. Maher asked for animation that draws attention to important
elements. *Design Doc* Part 2 states the problem in its own words: *"a corpus that rejects
attention economics cannot itself run on attention mechanics."*

**Disposition — ADOPTED (Design Doc Part 2), with the budget treated as normative.** Motion is
admitted only where it **carries information**, across four tiers: T0 static (≈80% of the
estate by page count — *a budget, not an accident*), T1 one-shot entrance reveal, T2 state
feedback on input, T3 persistent signal.

T3 is the tier that could have broken the Charter, so it is the tier that is capped hardest:
exactly four elements may ever loop — a `DEFECT` badge, a `GATED` badge on the BCIA Gateway, a
revoked credential on the verifier, and an expired-decay chip. All four are **bad news**. The
loop stops permanently after eight cycles or on any interaction. *"Nothing celebratory loops.
There is no confetti in this universe."*

That asymmetry is what reconciles the request with the Charter: motion is spent on what the
reader would be harmed by missing, never on what MetaX would benefit from them noticing.
Cursor-following and parallax are prohibited estate-wide. `prefers-reduced-motion` is honoured
absolutely — T3 degrades to a static high-contrast outline **plus a text label**, so the
information survives when the motion does not.

**Now governed by** [DS-02](../design/ds-02-motion-and-attention.md).

---

## R-30 · The property count changes again — seven becomes seven plus three

**Conflict.** [R-18](#r-18--how-many-properties) resolved the property count to "seven fixed
properties plus an unbounded set of academy subdomains". *Design Doc* Parts 4–6 add `auth.`,
`pay.` and `me.`

**Disposition — CORRECTED (this ledger's own R-18 is amended).** The count is now **seven
content-plane properties + three identity-plane properties + an unbounded set of academy
subdomains**. R-18's substance survives: a class of sites is still not a site, and the fixed
count is still stated as a number rather than as prose.

Two consequences that are easy to miss and are recorded here so they are not discovered later.
**First, search.** Site search indexes the content plane only; `auth.`, `pay.` and `me.` are
`noindex` and are excluded from the search corpus by construction, not by robots directive
alone. **Second, the sitemap arithmetic.** *Meta-Review* D.3's route total (≈7,600 EN /
≈13,300 with Arabic) counted the content plane exclusively. Identity-plane routes are
**not added to that figure**; they are counted separately, because a route behind a session is
not a published page and folding it into a public route count would inflate a number the
corpus offers as verifiable.

**Now governed by** [MX-001 §1.1](../corpus/mx-001-about-metax.md#11-what-metax-is),
[Information Architecture](../site/information-architecture.md),
[Route Manifest — Identity Plane](../site/route-manifest-identity-plane.md).

---

## R-31 · Content-plane routes in Part 9 that cannot be static

**Conflict.** *Design Doc* Part 9 places several new features on **content-plane** hosts while
describing behaviour that requires request-time state:

| Feature | Stated route | Why it collides |
|---|---|---|
| 6 · Deterministic Scenario Assessment | `/s/{id}/c/{nn}/scenario/` | An assessment whose full decision tree is in the static HTML is not an assessment; one that hides it needs server state. |
| 11 · Correction Bounty | `library.metax.academy/corrections/` | Public *submission* needs a write path. |
| 3 · Decay Watch (subscriptions) | `library.metax.academy/decay/` | Per-learner subscription is per-user state. |
| 1 · Pre-Registration Desk (public mirror) | `toptech.metax.academy/prereg/{id}/` | Filing is stateful; the mirror is not. |

**Disposition — MERGED, by splitting each feature at the read/write seam.** In every case the
**ledger is content-plane and static** and the **transaction is identity-plane**. So:
`library…/corrections/` publishes the register, including rejected submissions with reasons,
and links to `me…/corrections/new/` to file one. `library…/decay/` publishes overdue counts by
pillar; subscription lives in `me…/digest/`. `toptech…/prereg/{id}/` is a build-generated
mirror of a filing that closed; the desk itself is `me…/prereg/`.

Feature 6 does not split cleanly and is **not resolved editorially**. Three options exist —
seeded client-side tree with published scoring logic and the tree omitted from the initial
payload; identity-plane hosting at `me…/scenario/`; or content-plane delivery with the tree
fully public and the assessment openly acknowledged as a rehearsal rather than a gate. Each
trades something the corpus claims to value, so the choice is Maher's.

**Provisional state:** the third option (fully public tree, assessment reframed as rehearsal),
because it is the only one that keeps the page honest under the plane boundary. **Listed as**
[RAT-11](open-questions-and-ratifications.md#rat-11--how-the-scenario-assessment-resolves-against-the-plane-boundary).

---

## R-32 · An unstated consequence: the content plane needs an edge callback

**Conflict.** None in the sources — this is a gap found by cross-reading, recorded here because
it will otherwise surface during the build as a surprise.

*Design Doc* Part 4 specifies host-scoped session cookies, explicitly **not** a
`.metax.academy` wildcard cookie, with cross-host continuity by silent re-authorize. Part 0
requires the content plane to be "fully static". These are both right, and together they imply
something neither states: **every content-plane host must expose a request-time
`/auth/callback` route** to exchange the code and set its own host-scoped cookie. A purely
static host cannot set a cookie.

**Disposition — RECORDED as a correction to the description, not to the design.** The design is
sound and the wildcard-cookie refusal is the right call — it is what stops one compromised
academy subdomain from harvesting estate-wide sessions. What is wrong is the phrase "fully
static" applied to the host. The precise claim, and the one canon adopts, is: **every
content-plane *page* is static; every content-plane *host* additionally exposes exactly one
non-static route, `/auth/callback`, which serves no content and renders no page.**

That route is added to the fixed-route manifest for all seven content hosts and for every
academy subdomain, is `noindex`, returns only a redirect, and is covered by
[ST-19 §4](../standards/st-19-two-plane-architecture.md#4-the-callback-route). Filed as a
defect against the Design Doc's wording, not its architecture:
[DEF-011](defect-register.md).

---

## R-33 · Agent authority must contract as the estate gains state

**Conflict.** *Design Doc* Part 11 requires AG-000 to place "all payment mutation, session
revocation and entitlement changes in the absolute-refusal set". [AG-000](../agents/ag-000-agent-constitution.md)
as drafted has no such class, because when it was drafted no such operation existed.

**Disposition — ADOPTED, and widened.** The Design Doc's three operations are added to
[AG-009](../agents/ag-009-prohibited-actions.md) as absolute refusals — refused **even under a
valid Curator prompt**, which is what "absolute" means here and is a stronger constraint than
anything previously in the refusal register.

Widened, because the same reasoning covers operations the Design Doc did not enumerate:
issuing or revoking a credential, writing to the artefact vault, altering a pre-registration
after filing, signing a revocation list, and minting an identity token. The test is not "is
this financial" but **"would performing this action forge evidence or move value?"** Any
operation meeting that test is absolutely refused.

This is the governance answer to a real hazard: an estate that acquires money and sessions
while its agents keep their old permissions has quietly expanded agent authority without
amending a single instrument.

**Now governed by** [AG-009 §2](../agents/ag-009-prohibited-actions.md),
[AG-000 §A.6](../agents/ag-000-agent-constitution.md#a6-degraded-mode-and-prompter-succession).

---

## R-34 · Riba compliance becomes a UI obligation

**Conflict.** [ML-2.1 §C.9](../license/ml-2-1.md#c9--core-riba) and
[Charter §0.4](../corpus/mx-000-charter.md#04-what-metax-refuses) refuse Core Riba
instruments. *Design Doc* Part 5 is the first document to give that refusal an interface.

**Disposition — ADOPTED.** Forbidden at the interface layer: interest-bearing instalments,
financing partners, late fees computed as a percentage of an outstanding balance, and
buy-now-pay-later integrations. Permitted: single payment, zero-markup split payment where the
total never exceeds the single-payment price, sponsored seats, and needs-based waivers.

The mechanism that matters is the Design Doc's, and it is a genuinely good one: **the pricing
page must display that split payment costs exactly the same as paying at once — "that equality
is the compliance evidence, displayed rather than asserted."** That converts a doctrinal claim
into something a reader can check on the page, which is the pattern
[ST-04](../standards/st-04-falsifiability-and-claim-cards.md) requires everywhere else.

The Design Doc also records its author's own disclaimer — not a lawyer, not a financial
adviser, not a scholar of Islamic finance — and asks for review in all three domains before
launch. That disclaimer is carried forward rather than dropped, as
[B-12](launch-blockers.md#b-12--riba-structure-and-payment-rails-are-unreviewed--hard-blocker).

**Now governed by** [MX-021](../corpus/mx-021-payments-and-commerce.md),
[Page Specs — Identity Plane](../site/page-spec-identity-plane.md).

---

## R-35 · Crypto-only payment is an access constraint, and the Design Doc says so

**Conflict.** *Design Doc* Part 5 makes Binance Pay the only method; its closing paragraph
then argues against its own choice: crypto-only *"will exclude a meaningful share of the
audience this curriculum is written for, particularly in the Arabic-speaking markets where
Meta-X is authoritative,"* and couples estate commerce to one company's regional availability.

**Disposition — ADOPTED (including the Design Doc's own recommendation against itself).** The
interface is method-agnostic from day one so a second processor is configuration, not redesign.
A second payment method is treated as **launch-blocking, not roadmap**, per the Design Doc's
explicit recommendation. And the limitation is stated **on the pricing page** rather than
discovered at checkout.

The last point is the substantive one. A payment constraint disclosed at the moment of payment
is a dark pattern by omission, and [MX-009](../corpus/mx-009-advertising-and-commercial.md)
already forbids the class.

**Now governed by** [MX-021 §3](../corpus/mx-021-payments-and-commerce.md) and
[B-13](launch-blockers.md#b-13--single-payment-rail--hard-blocker).

---

## R-36 · Anti-engagement commitments are given falsifiers

**Conflict.** None — this is the Design Doc doing something the rest of the corpus asks for and
it is recorded so it is not lost in a styling document.

**Disposition — ADOPTED and promoted to canon.** Part 6 commits: no streaks, no leaderboards,
no infinite feed, no itch-inducing notification counts; notifications are a weekly digest, off
by default except for credential status changes, review deadlines and decay alerts. Progress
is measured in **artefacts, not minutes** — three binary states per course, *"no fabricated
continuum"*, because a percentage of a video watched is not evidence of anything.

Critically, Part 6 attaches a falsifier: *"if MetaX ever ships a streak counter, that page
becomes a published defect."* Under
[ST-04](../standards/st-04-falsifiability-and-claim-cards.md) that is exactly the required
form, so these commitments are promoted from design intent to **claim cards** with named
falsifiers on `me…/digest/`.

**Now governed by** [MX-022 §5](../corpus/mx-022-identity-and-sessions.md),
[DS-02 §5](../design/ds-02-motion-and-attention.md).

---

## R-37 · Instruments the Design Doc obliges this corpus to amend

**Conflict.** *Design Doc* Part 11 lists required amendments. Two of its targets were already
resolved differently in Part 1 of this ledger.

**Disposition — ADOPTED, with the amendment schedule below binding on this release.** Each row
is an obligation on an instrument that is drafted or yet to be drafted; none may publish
without it.

| Instrument | Required amendment | Source |
|---|---|---|
| `/about/static/` spec | Two-plane model + dated *Where the principle bends* | Part 0 |
| [MX-002](../corpus/mx-002-terms-of-service.md) | Purchase, entitlement and refund terms | Part 11 |
| [MX-003](../corpus/mx-003-privacy-notice.md) | **Class 4** — authentication and payment data — added to the classification canon of [R-15](#r-15--privacy-and-the-data-classification-canon) | Part 11 |
| [MX-008](../corpus/mx-008-moderation-and-enforcement.md) | Scope extended to academy subdomains | Part 11 |
| [MX-011](../corpus/mx-011-security-and-disclosure.md) | Session, key and webhook handling | Part 11 |
| [MX-018](../corpus/mx-018-data-retention.md) | Payment record periods **with their statutory basis** | Part 11 |
| [MX-021](../corpus/mx-021-payments-and-commerce.md) | New instrument (renumbered per [R-25](#r-25--the-mx-020-numbering-collision)) | Part 11 |
| [MX-022](../corpus/mx-022-identity-and-sessions.md) | New instrument (renumbered per R-25) | Part 11 |
| [AG-009](../agents/ag-009-prohibited-actions.md) | Absolute-refusal set, widened per [R-33](#r-33--agent-authority-must-contract-as-the-estate-gains-state) | Part 11 |
| [ST-15](../standards/st-15-component-library.md) | Responsive behaviour of named components (Part 3) | Part 3 |
| [ST-16](../standards/st-16-security-architecture.md) | PKCE flow, host-scoped cookies, webhook-as-truth, `clients.json` | Parts 4–5 |
| [ST-19](../standards/st-19-two-plane-architecture.md) | New standard: planes, boundary, island contract, callback route | Part 0 |
| [ST-12](../standards/st-12-accessibility-implementation.md) | Gradient contrast at both extreme stops; screen-reader tests on `auth` and `pay` in both locales | Part 10 |
| [ST-13](../standards/st-13-static-build-and-sentinel.md) | Performance budgets as build failures; island-disabled differential build | Parts 10, 12 |
| [DS-01](../design/ds-01-foundations-and-tokens.md) … [DS-04](../design/ds-04-academic-features.md) | New design family | Parts 1–3, 9 |

**One ordering constraint is carried verbatim from Part 11 because it is the whole point of the
entry:** *"the design work should not ship ahead of them."* Interface first, governance later,
is how a universe acquires a payment page whose terms do not exist.

---

## Summary

| Disposition | Count |
|---|---:|
| ADOPTED from a source | 17 |
| CORRECTED against a source | 10 |
| MERGED | 6 |
| RATIFICATION PENDING | 3 |
| GENERATED to close a dangling reference | 1 |

Two entries in Part 2 amend Part 1 of this same ledger ([R-25](#r-25--the-mx-020-numbering-collision)
supersedes nothing but constrains the index; [R-30](#r-30--the-property-count-changes-again--seven-becomes-seven-plus-three)
amends [R-18](#r-18--how-many-properties)). They are left visible as amendments rather than
edited into Part 1, because a ledger that rewrites its own earlier rows to look consistent is
performing the failure it was built to prevent.

Every row above is traceable to a source file retained in [`/sources/`](../../sources/).
Nothing was resolved by preference. Where the ledger says CORRECTED, the error is also in
[Corrections Log](corrections-log.md), because a reconciliation that only records its
victories is a marketing document.
