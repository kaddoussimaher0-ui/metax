---
doc_id: "MX-001"
title_en: "About MetaX"
title_ar: "عن ميتا إكس"
family: "corpus"
version: "v2026.09.2"
status: "canonical"
authority: "governing"
prevailing_text: "en"
audience_tier: 2
evidence_class: "durable"
review_interval_months: 36
curator: "Maher"
license: "ML-2.1 · Work of Foundational Character"
designated: true
last_reviewed: "2026-08-30"
domain_tags: ["governance", "orientation"]
ai_disclosure_url: "mx-007-ai-use-and-disclosure.md"
hreflang: "en, ar"
---

# MX-001 — About MetaX

The reader-facing description of what MetaX is, what it publishes, and what it refuses. This is
a **governing** instrument, not marketing copy: every sentence here is one MetaX can be held to,
and where a claim is aspirational it is labelled.

Authority derives from [MX-000 The Charter](mx-000-charter.md). Where this document and the
Charter differ, the Charter governs.

---

## §1.1 What MetaX is

MetaX is a professional and scientific education estate built on one constraint: **every
substantive claim carries the information a stranger needs in order to find out that it is
wrong.**

### The properties

**Seven content-plane properties**, fixed:

| Property | Job |
|---|---|
| `metax.academy` | The hub. Doctrine, governance, the record, orientation. |
| `toptech.metax.academy` | The professional curriculum and the Ascent. |
| `bcia.metax.academy` | The gated research programme and its published status. |
| `academies.metax.academy` | Chartering, the directory, the exchange. |
| `library.metax.academy` | The archive, the citation ledger, decay watch, corrections. |
| `lexicon.metax.academy` | Terms, notation, and what each one is contested about. |
| `verify.metax.academy` | Credential records. Permanent, static, individually addressable. |

**Three identity-plane properties**, added v2026.09.2: `auth.metax.academy` (one authentication
authority for the whole estate), `pay.metax.academy` (all commerce), `me.metax.academy` (profile,
dashboard, and the source of the identity overlay).

**Plus an unbounded set of member academy subdomains**, one per chartered academy at
`{slug}.metax.academy`.

> **Why the count is stated this way.** A class of sites is not a site. Earlier drafts described
> "eight properties" by counting *"one subdomain per member academy"* as the eighth, which
> produced a number no one could compute. The fixed count is seven plus three; the academy set
> is unbounded and is described as unbounded. See
> [R-18](../00-governance-map/reconciliation-ledger.md#r-18--how-many-properties) and
> [R-30](../00-governance-map/reconciliation-ledger.md#r-30--the-property-count-changes-again--seven-becomes-seven-plus-three).

Search indexes the seven content-plane properties plus every chartered academy subdomain. It
does **not** index `auth.`, `pay.` or `me.`, which are excluded from the search corpus by
construction and not merely by robots directive.

---

## §1.2 What MetaX publishes about itself

Four things, continuously, as a condition of publishing anything else:

| Surface | What it publishes |
|---|---|
| [Defect Register](../00-governance-map/defect-register.md) | Known shortfalls, with owners and dates |
| [Decay Watch](../design/ds-04-academic-features.md) at `library…/decay/` | Which of MetaX's own claims are past their review date |
| [Corrections](../00-governance-map/corrections-log.md) at `library…/corrections/` | Accepted **and rejected** corrections, with reasons |
| [Determination Queue](../site/page-spec-hub.md) at `/about/governance/queue/` | Pending governance decisions, with an escalation timer that turns amber then red **in public** when a service target is missed |

The last one is the one that costs something. It makes the Curator's own performance falsifiable
by a stranger, which is the only kind of accountability that means anything.

---

## §1.3 The three pillars and their authority boundaries

The pillars have **different evidentiary standing**, and treating them as interchangeable would
be the most misleading thing this estate could do.

### Meta-X — authoritative

Professional and technical education. Sourced claims, declared limits,
[Limits and Bridge](../standards/st-03-limits-and-bridge.md) apparatus on every series.
Authoritative **within its declared scope**, and the scope is declared on each series page rather
than inferred.

### Transition — bridging

Connects established practice to open questions. May describe an open question accurately; may
not resolve one.

### Higher-Order / BCIA — gated

**Live gate status: [BX-003 Remediation Gates and Public Status](../bcia/bx-003-remediation-gates.md).**

Seven remediation gates govern what BCIA may claim. At this release not all are closed; Gate 3
is recorded as currently unresolvable; the book corpus carries ingestion debt including a
`[GAP IN SOURCE]` on Book 9. The BCIA notation triad (BSN, LPN, AMN) is
[frozen](../bcia/bx-005-notation-freeze.md) — referenced where the sources reference it, never
taught as settled. The [human-cell exclusion](../bcia/bx-002-human-cell-exclusion.md) is
absolute and does not move with gate progress.

**What is gated is promotion, not disclosure.** BCIA's status page, audit and open-problems
register are the compliant form of an unfinished research programme — publishing them is how the
programme stays honest, not an admission that it should not exist.

---

## §1.4 How to check a claim

Every substantive page carries:

1. A **claim card** with the falsifier — what would have to be true for the claim to be wrong
   ([ST-04](../standards/st-04-falsifiability-and-claim-cards.md)).
2. A **decay class and review date** — Durable 36 months, Semi-durable 12, Perishable 3
   ([ST-05](../standards/st-05-decay-and-review-intervals.md)). Past the date, the page says so
   on its own face.
3. **Objections at full strength** — the strongest available counter-argument, not a
   straw version ([ST-06](../standards/st-06-objections-standard.md)).
4. **`[VERIFY]` tags** on anything checkable but unchecked, counted publicly in the
   [Verification Log](../00-governance-map/verification-log.md).
5. A **page stamp** — version, last review, decay class, curator, and the instrument that
   governs it.

**Summaries never govern.** Where a page summarises a governing text, it says so and names the
text. The build fails if a summary asserts an obligation that its governing text does not
contain ([ST-13](../standards/st-13-static-build-and-sentinel.md)) — because a summary that
quietly adds an obligation has legislated by paraphrase.

---

## §1.5 What MetaX refuses

The full list with its enforcement points is
[Charter §0.4](mx-000-charter.md#04-what-metax-refuses). In brief: no attention-economic
mechanics, no Core Riba instruments, no claims beyond evidence, no dark patterns.

Two of these have visible consequences a reader can check without trusting us:

- **Progress is measured in artefacts, not minutes.** There is no video-percentage bar anywhere
  in the estate. Three binary states per course — artefact submitted, artefact reviewed, capstone
  pre-registered. No fabricated continuum.
- **Split payment costs exactly the same as paying at once**, and the pricing page displays the
  arithmetic. That displayed equality is the compliance evidence.

---

## §1.6 The Static Principle, as partitioned

*Amended v2026.09.2. Full text at [Charter §0.6](mx-000-charter.md#06-the-static-principle-as-partitioned);
the doctrine page is `/about/static/`.*

**What the principle used to say:** *"No database, no login wall, no client-side fetch."*

**Why it changed.** Authentication, payment and per-user dashboards entered the estate. That made
the old sentence false. A false claim on a doctrine page is precisely the failure mode this
estate exists to prevent, so the sentence was not left standing and was not quietly deleted.

**What it says now.** Two planes, one boundary:

| | Content Plane | Identity & Commerce Plane |
|---|---|---|
| Hosts | The seven properties + every academy subdomain | `auth.`, `pay.`, `me.` |
| State | None | Sessions, entitlements, intents, artefacts |
| JS disabled | **Renders completely and legibly** | Requires JS |
| Indexed | Yes | Never |
| Archived | Yes | Never |
| Publishes claims | Yes | **No** |

> **The boundary rule:** the content plane may be *decorated* by the identity plane but never
> *depends* on it.

Concretely: a signed-in visitor on a series page receives **the same HTML** as an anonymous
visitor, plus an identity bar and up to three entitlement chips injected by a single ≤ 4 KB
script. If that script fails, times out, or is blocked, the page is unchanged and unbroken. This
is the only sanctioned exception to "no client-side fetch", and it is
[mechanically tested](../standards/st-19-two-plane-architecture.md#34-failure-transparency-and-how-it-is-proved),
not merely promised — the estate is built twice, once with the script stubbed to throw, and any
difference in the rendered content fails the build.

**What survives the partition, and it is the part that mattered:** everything MetaX asks anyone
to rely on — every claim, every credential record, every doctrine page, every curriculum page —
remains readable, citable and archivable by a stranger with no account, no JavaScript and no
permission.

**What was genuinely given up:** the estate is no longer *wholly* static, and it is no longer
true that MetaX holds no personal data. It holds sessions, entitlements and learner artefacts on
three named hosts, classified as Class 4 under [MX-003](mx-003-privacy-notice.md) and retained
under [MX-018](mx-018-data-retention.md). Saying "partitioned" rather than "abandoned" is a
description, not a defence, and the reader is entitled to judge the trade for themselves.

---

## §1.7 Language

English is the **prevailing text** for every instrument in this release, and each instrument's
front matter says so in `prevailing_text`. Arabic is intended to be *authoritative*, not a
translation target — but no Arabic editions of the MX instruments exist yet.

That gap is stated as a gap. Parity is a **standing target**, not a present state, and no
language toggle resolves silently to a homepage: a page without its mirror renders an honest
untranslated notice with a target date. Tracked at
[B-09](../00-governance-map/launch-blockers.md#b-09--arabic-parity-is-claimed-but-not-built--soft-blocker)
and [RAT-09](../00-governance-map/open-questions-and-ratifications.md).

Mandatory-language rules in consumer markets are carved out and prevail over this section where
local law requires it ([MX-020](mx-020-language-authority.md)).

---

## §1.8 What is not built yet

Publication is currently blocked. The complete list is
[Launch Blockers](../00-governance-map/launch-blockers.md); the honest summary is:

- The [License](../license/ml-2-1.md) is **unsigned**, so the Charter's authority is stated as
  pending.
- The ethics veto has **no named holder**.
- The build cannot yet enforce its own rules — SENTINEL is a specification, not a running
  pipeline.
- No Arabic editions exist.
- Accessibility conformance is committed to but **unverified**.
- The identity and commerce plane has no instruments behind it yet, and `pay.` additionally
  awaits Riba review in three domains and a second payment rail.

**Nothing in this list is a secret being managed.** Each item is published, owned and dated, and
this section exists so that a reader encountering the estate mid-construction is not misled about
its state by the confidence of its prose.

---

**Related:** [MX-000 The Charter](mx-000-charter.md) ·
[MX-006 Editorial and Evidence](mx-006-editorial-and-evidence.md) ·
[MX-007 AI Use and Disclosure](mx-007-ai-use-and-disclosure.md) ·
[ST-19 Two-Plane Architecture](../standards/st-19-two-plane-architecture.md) ·
[BX-003 Remediation Gates](../bcia/bx-003-remediation-gates.md) ·
[Information Architecture](../site/information-architecture.md)

*Curated by Maher. Where this page is wrong, the correction is published — not the argument that
it was never wrong.*
