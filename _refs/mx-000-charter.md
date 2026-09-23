---
doc_id: "MX-000"
title_en: "The MetaX Charter"
title_ar: "ميثاق ميتا إكس"
family: "corpus"
version: "v2026.09.2"
status: "canonical"
authority: "governing"
prevailing_text: "en"
audience_tier: 5
evidence_class: "durable"
review_interval_months: 36
curator: "Maher"
license: "ML-2.1 · Work of Foundational Character"
designated: true
last_reviewed: "2026-08-30"
domain_tags: ["governance", "ethics", "foundational"]
ai_disclosure_url: "mx-007-ai-use-and-disclosure.md"
hreflang: "en, ar"
---

# MX-000 — The MetaX Charter

**The founding instrument.** Everything else in this corpus derives its authority from this
document, and this document derives its authority from
[ML-2.1](../license/ml-2-1.md). Where any instrument conflicts with this Charter, the Charter
governs, except where [Precedence and Conflict Rules](../00-governance-map/precedence-and-conflict-rules.md)
places a matter above it — which happens in exactly the places named in §0.7.

> **Status.** This Charter is unsigned, because
> [ML-2.1](../license/ml-2-1.md) is unsigned. Under §0.1 the Charter's authority is derived
> from an accountable author, so until the License is signed against a published key
> fingerprint, this instrument states its own authority as **pending**. See
> [B-01](../00-governance-map/launch-blockers.md#b-01--the-license-is-unsigned--hard-blocker).
> An unsigned charter that presented itself as operative would be the first breach of the
> principle it opens with.

---

## §0.1 Founding statement

MetaX exists to build professional and scientific education that can be **checked**.

Not education that is trusted because of who published it, not education that is persuasive,
and not education that is popular. Education whose every substantive claim carries the
information a stranger needs in order to find out that it is wrong.

This is a narrower ambition than it sounds, and a more demanding one. It means MetaX must
publish its own limits, its own defects, its own staleness and its own unresolved questions —
continuously, as a condition of publishing anything at all. An institution that publishes only
what flatters it has no mechanism by which anyone outside could correct it, and an
uncorrectable institution is indistinguishable from one that is right by decree.

MetaX was founded, is built, and is curated by **Maher**. Authorship is stated because
accountability requires a name: a corpus with no author has no one who can be wrong, and a body
of knowledge no one can be wrong about is not knowledge.

**Sidq** — truthfulness — is the operative constraint, not an aspiration. In this corpus it has
a specific and testable meaning: *no page asserts more than its evidence supports, and no page
conceals what would weaken it.* Every standard in this corpus is a mechanism for making that
constraint enforceable by something other than the good intentions of the author.

---

## §0.2 The three pillars

MetaX is organised into three pillars with distinct evidentiary standing. They are **not** three
brands of the same thing, and conflating them would be the single most misleading thing this
corpus could do.

### Meta-X — authoritative

The professional and technical education core, delivered through
[TopTech](../site/page-spec-toptech.md) and the series curriculum enumerated in
[REG-01](../registries/reg-01-series-registry.md).

**Standing:** authoritative within its declared scope. Claims are sourced, limits are declared,
and every series carries its [Limits and Bridge](../standards/st-03-limits-and-bridge.md)
apparatus.

*The count of series is computed from the registry at build time and appears nowhere in prose.*
A number typed into a charter is a claim with no falsifier — see
[R-21](../00-governance-map/reconciliation-ledger.md#r-21--corpus-claims-about-its-own-counts).

### Transition — bridging

Material connecting established professional practice to unresolved research questions.

**Standing:** explicitly bridging. It may describe an open question accurately; it may not
resolve one. Where Transition material touches BCIA, it inherits BCIA's gate status and says so.

### Higher-Order / BCIA — under remediation, gated

The [Biological Computing and Intelligence Architecture](../bcia/bx-000-document-zero.md)
research programme.

**Standing: gated, and publicly so.** Seven remediation gates govern what BCIA may claim, and
their live state is published at [BX-003](../bcia/bx-003-remediation-gates.md). At this release
not all seven are closed, Gate 3 is recorded as currently unresolvable, and the book corpus
carries ingestion debt including a **`[GAP IN SOURCE]`** on Book 9
([REG-03](../registries/reg-03-book-registry.md)).

BCIA's unfinished state is published rather than managed. What is gated is **promotion, not
disclosure**: the status page, the audit and the defect list *are* the compliant form of an
unfinished research programme. The BCIA notation triad (BSN, LPN, AMN) is
[frozen](../bcia/bx-005-notation-freeze.md) — referenced where the sources reference it, never
taught as settled.

---

## §0.3 Shared DNA

Four properties are common to every pillar, every property and every page. Each is stated with
the condition under which it has **failed**, because a property with no failure condition is a
slogan.

| Property | What it requires | Failed when |
|---|---|---|
| **Sidq** (truthfulness) | No page asserts more than its evidence supports; no page conceals what weakens it | A claim outlives its evidence, or a weakening fact is known and unpublished |
| **Falsifiability** | Every substantive claim carries what would refute it | A page makes a claim no reader could disprove even in principle |
| **Declared limits** | Every body of teaching states what it does not cover and cannot do | A series teaches a method without stating where it stops working |
| **Correctability** | Any reader can file a defect; accepted and **rejected** corrections are both published with reasons | A correction queue exists that outsiders cannot see into |

These are enforced mechanically wherever mechanical enforcement is possible
([ST-13](../standards/st-13-static-build-and-sentinel.md)), because editorial enforcement of a
discipline the editor also authors is not enforcement. Where enforcement is presently
specification rather than running pipeline, that is stated as
[B-06](../00-governance-map/launch-blockers.md#b-06--the-build-cannot-yet-enforce-its-own-rules--hard-blocker)
and not as a fact.

---

## §0.4 What MetaX refuses

These refusals are structural. They are not policies that a future commercial pressure may
revisit, and each is enforced somewhere concrete.

### 1. Attention-economic mechanics

No streaks, no leaderboards, no infinite feed, no engagement-optimised notification, no
celebratory animation, no metric that rewards time spent over evidence produced.

Progress is measured in **artefacts, not minutes**, because a percentage of a video watched is
not evidence of anything. Enforced at
[DS-02 §5](../design/ds-02-motion-and-attention.md#5-the-anti-engagement-commitments), which
attaches a falsifier: *if MetaX ever ships a streak counter, that page becomes a published
defect.*

### 2. Core Riba instruments

No interest-bearing instalments, no financing partners, no late fees computed as a percentage of
an outstanding balance, no buy-now-pay-later integrations. The four cumulative elements and
seven exclusions are defined at [ML-2.1 §C.9](../license/ml-2-1.md#c9--core-riba).

Permitted: single payment, zero-markup split payment where the total never exceeds the
single-payment price, sponsored seats, needs-based waivers. The pricing page must **display**
that split payment costs exactly the same as paying at once — that displayed equality is the
compliance evidence, rather than an assertion the reader must accept.

*Whether the implementation satisfies the obligation is unreviewed and is treated as a launch
blocker, not a settled question:* [RAT-12](../00-governance-map/open-questions-and-ratifications.md#rat-12--riba-review-in-three-domains).

### 3. Claims beyond evidence

No comparison the evidence does not license, no interpolation across incommensurable systems,
no borrowed authority. Specific prohibitions, including the banned DishBrain-versus-DeepMind
comparison, are at
[MX-006 §6.6](mx-006-editorial-and-evidence.md#66-banned-comparisons). The
[human-cell exclusion](../bcia/bx-002-human-cell-exclusion.md) is absolute and is not subject to
gate progress.

### 4. Dark patterns, in commerce and in doctrine

No countdown timers on prices, no fake scarcity, no strike-through anchoring, no pre-ticked
boxes, no upsell interstitial between payment and receipt, no cancellation friction —
cancellation is a primary-weight control, not a grey whisper.

The doctrinal form of the same refusal, and the more important one: **no constraint is disclosed
at the moment it bites.** A payment limitation belongs on the pricing page, not at checkout. A
gap in a curriculum belongs on the series page, not in a footnote after enrolment.

---

## §0.5 Powers placed beyond the Curator

An institution in which the founder holds every power is a personality, and a personality does
not survive its holder. Four powers are therefore placed beyond Maher's reach. Each is a real
constraint, which means each can produce an outcome he does not want.

### 1. The ethics veto

A named holder, not the Curator, may veto publication of any bio-adjacent material. The veto is
final. It cannot be overridden by the Curator, and its exercise is logged publicly.

**Holder: `[VERIFY]` — unnamed at this release.** This is the honest state and it is a hard
blocker ([B-03](../00-governance-map/launch-blockers.md#b-03--the-ethics-reviewer-is-unnamed--hard-blocker)),
because MetaX's central claim is that governance was architecture from the first release rather
than remediation after the first incident. A veto with no holder on the day of publication makes
that claim retrospective. Mechanism at
[MX-014 §14.3](mx-014-research-ethics-and-exclusions.md#143-the-ethics-veto).

### 2. The correction obligation

The Curator cannot decline a valid correction, cannot delete a published defect, and cannot
remove a superseded claim from the record. Corrections are published including those that are
**rejected**, with reasons — which is what stops the queue becoming a black box.

Revocation is the same principle applied to credentials: a revoked credential's record page
remains, its status flips, and the ground for revocation is stated. *A verification system that
can quietly delete is not a verification system.*

### 3. The license's own limits

[ML-2.1 §G.5](../license/ml-2-1.md#g5--humility-clause) (the humility clause) and
[§C.9](../license/ml-2-1.md#c9--core-riba) bind the Steward and are outside the amendment power
the Charter otherwise confers. See §0.7.

### 4. Limits on the Successor Prompter

*Added v2026.09.2 per [R-14](../00-governance-map/reconciliation-ledger.md#r-14--prompter-succession).*

A Successor Prompter, appointed under
[AG-000 §A.6](../agents/ag-000-agent-constitution.md#a6-degraded-mode-and-prompter-succession),
operates under a **permanent authority ceiling** that neither the Curator nor the successor may
raise. Specifically the successor may not: amend this Charter, amend the License, designate a
Work of Foundational Character, override an ethics veto, or issue or revoke a credential.

The ceiling survives the 45-day incapacity trigger and the 180-day retirement window, and it
does not lapse if the Curator never returns. This is deliberate: succession exists to keep the
institution running, not to transfer founding authority. A continuity mechanism that conveys
the power to redefine the institution is not continuity — it is inheritance, and inheritance of
doctrinal authority is how a corpus about checkability becomes a corpus about lineage.

### 5. What the agents may never do, under any prompt

*Added v2026.09.2 per [R-33](../00-governance-map/reconciliation-ledger.md#r-33--agent-authority-must-contract-as-the-estate-gains-state).*

No agent may perform an operation that **forges evidence or moves value** — even under a valid
Curator prompt. This is the absolute-refusal set: payment mutation, session revocation,
entitlement change, credential issuance or revocation, writes to the artefact vault, amendment
of a pre-registration after filing, signing a revocation list, and minting an identity token.

Listed under this section rather than only in
[AG-009](../agents/ag-009-prohibited-actions.md) because it is a limit on the Curator's
delegable authority, not merely a limit on the agents: it means there are operations Maher
cannot instruct an agent to perform, and must perform himself, under his own name.

---

## §0.6 The Static Principle, as partitioned

*Amended v2026.09.2. The prior absolute form is retained as superseded, not deleted — see
[R-26](../00-governance-map/reconciliation-ledger.md#r-26--the-static-principle-is-partitioned-not-abandoned).*

**Superseded text (v2026.09.1 and earlier):** *"No database, no login wall, no client-side
fetch."*

That claim became false when authentication, payment and per-user state entered the estate. It
is not edited away, because a doctrine page that quietly acquires exceptions is worse than one
that never existed.

**Current text.** The estate runs two planes with a hard boundary:

- The **Content Plane** — `metax.academy`, `toptech.`, `bcia.`, `academies.`, `library.`,
  `lexicon.`, `verify.`, and every `{academy}.metax.academy` — is static, pre-rendered,
  archivable and crawlable. **Every content page renders completely, correctly and legibly for
  an anonymous visitor with JavaScript disabled. No content page gates its primary text behind
  a session.**
- The **Identity & Commerce Plane** — `auth.`, `pay.`, `me.` — is stateful, never indexed and
  never archived. It publishes no doctrine, no curriculum and no claim.

**The boundary rule, normative and quoted verbatim wherever it appears:** *the content plane may
be **decorated** by the identity plane but never **depends** on it.*

The narrowing is published with its date at `/about/static/`, in a section titled *Where the
principle bends*, and is mechanically tested rather than asserted: the estate builds twice, once
with the identity script stubbed to throw, and any difference in the rendered content fails the
build ([ST-19 §3.4](../standards/st-19-two-plane-architecture.md#34-failure-transparency-and-how-it-is-proved)).

What survives the partition is the thing that mattered: **everything MetaX asks anyone to rely
on remains readable, citable and archivable by a stranger with no account.**

---

## §0.7 What is outside this Charter's power

The Charter cannot amend the following, and says so to prevent the appearance of an authority it
does not hold:

| Instrument | Why it is outside |
|---|---|
| [ML-2.1 §C.9](../license/ml-2-1.md#c9--core-riba) — Core Riba | A refusal grounded outside the corpus; the Charter inherits it and cannot relax it |
| [ML-2.1 §G.5](../license/ml-2-1.md#g5--humility-clause) — humility clause | Binds the Steward, including in his capacity as Curator |
| §0.4 and §0.5 of this Charter | Amendable only under §0.8, and §0.5.1–§0.5.5 not at all while their subject matter exists |
| [The human-cell exclusion](../bcia/bx-002-human-cell-exclusion.md) | Absolute; independent of gate progress and of Curator intent |

---

## §0.8 Amendment

1. Any amendment to this Charter is published **before** it takes effect, with its reason and
   its date.
2. The superseded text is retained permanently in the
   [Archive Register](../00-governance-map/archive-register.md). No prior version is deleted or
   silently edited.
3. **Void on publication.** An amendment that takes effect without having been published, or
   whose published reason misstates its actual effect, is void — not merely irregular. It has no
   force, and any decision taken in reliance on it is reversible.
4. §0.4 and §0.5 require a stated reason that addresses the argument the original made, not
   merely a statement of the new position. A refusal repealed without engaging why it was
   adopted is presumptively a commercial convenience.
5. §0.5.1–§0.5.5 may not be amended to enlarge the Curator's power while their subject matter
   exists. They may be amended only to constrain it further.

Rule 3 is the load-bearing one. Every other protection in this Charter can be defeated by an
amendment made quietly, so the sanction for quietness has to be nullity rather than criticism.

---

## Annotations

| § | Change in v2026.09.2 | Authority |
|---|---|---|
| §0.2 | Typed series count removed; counts computed from [REG-01](../registries/reg-01-series-registry.md) | [R-21](../00-governance-map/reconciliation-ledger.md#r-21--corpus-claims-about-its-own-counts) |
| §0.2 | BCIA gate-status pointer added with live URL | [R-16](../00-governance-map/reconciliation-ledger.md#r-16--whether-the-corpus-points-at-the-bcia-gates) |
| §0.3 | Failure condition added to each Shared DNA property | Editorial, per [ST-04](../standards/st-04-falsifiability-and-claim-cards.md) |
| §0.4.2 | Riba refusal given its interface consequences | [R-34](../00-governance-map/reconciliation-ledger.md#r-34--riba-compliance-becomes-a-ui-obligation) |
| §0.4.4 | Dark-pattern refusal added, commerce and doctrinal forms | [R-35](../00-governance-map/reconciliation-ledger.md#r-35--crypto-only-payment-is-an-access-constraint-and-the-design-doc-says-so) |
| §0.5.1 | Ethics-veto holder marked `[VERIFY]` rather than described as filled | [AG-000 §A.5](../agents/ag-000-agent-constitution.md#a5-fabrication-as-the-cardinal-fault) |
| §0.5.4 | **New** — Successor Prompter authority ceiling | [R-14](../00-governance-map/reconciliation-ledger.md#r-14--prompter-succession) |
| §0.5.5 | **New** — agent absolute-refusal set as a limit on delegable authority | [R-33](../00-governance-map/reconciliation-ledger.md#r-33--agent-authority-must-contract-as-the-estate-gains-state) |
| §0.6 | **New** — Static Principle partitioned; prior text retained as superseded | [R-26](../00-governance-map/reconciliation-ledger.md#r-26--the-static-principle-is-partitioned-not-abandoned) |
| §0.8.3 | Void-on-publication rule stated as nullity | Editorial |

---

**Related:** [ML-2.1](../license/ml-2-1.md) ·
[MX-001 About MetaX](mx-001-about-metax.md) ·
[MX-014 Research Ethics](mx-014-research-ethics-and-exclusions.md) ·
[MX-015 Succession](mx-015-succession-and-continuity.md) ·
[AG-000 Agent Constitution](../agents/ag-000-agent-constitution.md) ·
[ST-19 Two-Plane Architecture](../standards/st-19-two-plane-architecture.md) ·
[Precedence and Conflict Rules](../00-governance-map/precedence-and-conflict-rules.md)

*Curated by Maher. This Charter is unsigned and says so. Where it is wrong, the correction is
published — not the argument that it was never wrong.*
