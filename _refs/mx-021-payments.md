---
doc_id: "MX-021"
title_en: "Payments and Commerce"
title_ar: "المدفوعات والتجارة"
family: "corpus"
version: "v2026.09.2"
status: "canonical · ratification pending"
authority: "governing"
prevailing_text: "en"
audience_tier: 4
evidence_class: "semi-durable"
review_interval_months: 12
curator: "Maher"
license: "ML-2.1"
derived_from: ["MX-DESIGN-001 Part 5", "MX-DESIGN-001 Part 11"]
last_reviewed: "2026-08-30"
domain_tags: ["commerce", "riba", "governance", "accessibility"]
ai_disclosure_url: "mx-007-ai-use-and-disclosure.md"
hreflang: "en, ar"
---

# MX-021 — Payments and Commerce

**Governs:** `pay.metax.academy`, all commerce in the estate — for MetaX itself and on behalf of
chartered academies.

> **Numbering.** Requested as `MX-020` by
> [MX-DESIGN-001](../../sources/MetaX.Academy_UI-UX_and_Design_System_Documentation.md) Part 11;
> `MX-020` was already allocated to Language Authority in this release and numbers are immortal
> from first assignment. See
> [R-25](../00-governance-map/reconciliation-ledger.md#r-25--the-mx-020-numbering-collision).

> **Status — this instrument may not be relied upon yet.** `pay.` is blocked by three separate
> conditions: [B-11](../00-governance-map/launch-blockers.md#b-11--the-instruments-the-new-plane-requires-do-not-exist--hard-blocker)
> (instruments), [B-12](../00-governance-map/launch-blockers.md#b-12--riba-structure-and-payment-rails-are-unreviewed--hard-blocker)
> (Riba and rails unreviewed), and [B-13](../00-governance-map/launch-blockers.md#b-13--single-payment-rail--hard-blocker)
> (single rail). **No page asserts Riba compliance as a reviewed conclusion.** The structure below
> is drafting work product, and the disclaimer at §21.2.3 is the most important sentence in it.

---

## §21.1 Design posture

Ledger gradient, sober, near-monochrome, generous whitespace, **no imagery**.

### §21.1.1 Dark patterns, forbidden by name

The estate's no-dark-patterns rule ([MX-009](mx-009-advertising-and-commercial.md)) is enforced
hardest here, because this is the only surface where a manipulation costs the reader money:

- No countdown timers on prices
- No fake scarcity
- No strike-through anchoring
- No pre-ticked boxes
- **No upsell interstitial between payment and receipt**
- No *"are you sure you want to miss out"* on cancel
- **Cancellation is a primary-weight link, not a grey whisper**

### §21.1.2 The disclosure rule

**No commercial constraint is disclosed at the moment it bites.** Price, currency, rail
availability, refund policy, storage quotas and split-payment arithmetic all appear **before**
the reader commits — on the pricing page, not at checkout.

`/refunds` states the policy **before purchase rather than after**. A refund policy discovered
after payment is a dark pattern by omission, which is a category MX-009 already forbids and which
is easy to commit accidentally by ordering the pages wrongly.

---

## §21.2 The Riba constraint

[Charter §0.4.2](mx-000-charter.md#2-core-riba-instruments) refuses Core Riba instruments, and
[ML-2.1 §C.9](../license/ml-2-1.md#c9--core-riba) defines the four cumulative elements and seven
exclusions. This instrument is the first to give that refusal an interface.

### §21.2.1 Forbidden

| Pattern | Status |
|---|---|
| Interest-bearing instalments | **Forbidden** |
| Financing partners | **Forbidden** |
| Late fees computed as a percentage of an outstanding balance | **Forbidden** |
| Buy-now-pay-later integrations | **Forbidden** |

### §21.2.2 Permitted

| Pattern | Condition |
|---|---|
| Single payment | — |
| Split payment | **Zero markup.** The total must never exceed the single-payment price |
| Sponsored seats | Sponsor disclosed per [MX-019](mx-019-conflicts-of-interest.md) |
| Needs-based waivers | Criteria published; decisions not published |

**The mechanism that makes this checkable:** the pricing page must **show** that split payment
costs exactly the same as paying at once — the arithmetic displayed, both totals side by side.

*That equality is the compliance evidence, displayed rather than asserted.* This is the pattern
[ST-04](../standards/st-04-falsifiability-and-claim-cards.md) requires everywhere else in the
corpus, applied to a doctrinal claim: instead of asking the reader to trust that no markup exists,
the page shows them the two numbers and lets them subtract.

### §21.2.3 The disclaimer, carried forward and not dropped

The author of the source design document recorded, in the document itself:

> *"I should note plainly that I am not a lawyer, a financial adviser, or a scholar of Islamic
> finance; the structural rule is clear, but before launch this should be reviewed by someone
> qualified in each of those three domains, and jurisdictional availability of crypto payment
> rails varies considerably and will need its own check."*

That disclaimer is canon, not a courtesy. **The structural rules above are structure, not a
compliance finding.** Whether the implementation satisfies the obligation is unreviewed, and this
matters more than the other open questions in the corpus for one reason: it concerns a religious
obligation. Publishing a compliance claim that no competent person has checked would be MetaX
asserting something about permissibility on grounds it does not have.

Tracked at [RAT-12](../00-governance-map/open-questions-and-ratifications.md#rat-12--riba-review-in-three-domains)
and [B-12](../00-governance-map/launch-blockers.md#b-12--riba-structure-and-payment-rails-are-unreviewed--hard-blocker).

---

## §21.3 Methods, and the constraint MetaX chose to publish

Binance Pay is the first and currently the **only** method. The interface is method-agnostic from
day one, so adding a second processor is a configuration change and not a redesign.

### §21.3.1 The access constraint, stated plainly

Crypto-only payment via a single processor is a **real access constraint**, and MetaX states it
rather than letting readers discover it:

- It will exclude a meaningful share of the audience this curriculum is written for —
  **particularly in the Arabic-speaking markets where Meta-X is authoritative.**
- It couples estate commerce to one company's regional availability and terms.

There is a governance dimension beyond the commercial one.
[MX-020](mx-020-language-authority.md) commits to Arabic as an *authoritative* language rather
than a translation target. A commerce rail disproportionately unavailable in Arabic-speaking
markets makes that commitment partly decorative — a reader could study in Arabic but not transact
in it.

**A second payment method is therefore treated as launch-blocking, not as a roadmap item**
([B-13](../00-governance-map/launch-blockers.md#b-13--single-payment-rail--hard-blocker),
[RAT-13](../00-governance-map/open-questions-and-ratifications.md#rat-13--the-second-payment-rail)).
Until then the limitation is stated **on the pricing page with the affected markets named**.

---

## §21.4 Flow, and why the return URL is not proof

1. A content-plane page carries a **static price** and a single link to
   `https://pay.metax.academy/checkout/{sku}`.
2. `pay.` creates an intent and displays the order summary.
3. On confirmation the user is redirected to the Binance Pay checkout.
4. Binance returns the user to `https://pay.metax.academy/return/{intent}`.
5. **The authoritative state change arrives independently, via a signed webhook.**
6. On webhook confirmation an entitlement record is written and the user is redirected to
   `https://me.metax.academy/entitlements/?new={intent}`.

> **The return URL is treated as a hint, never as proof of payment.**

This is the single most important rule in the flow. A return URL is attacker-controllable — a user
can construct it, replay it, or arrive at it having abandoned payment. Any system that grants
entitlement on a return URL grants entitlement to anyone who can type one. Specified at
[ST-20](../standards/st-20-payment-integration.md).

If the webhook is slow, `/processing/{intent}` polls with an honest message and an explicit
statement: **"you may close this page; your receipt will be emailed."** A processing screen that
implies the user must wait is a designed anxiety.

### §21.4.1 Routes

`/checkout/{sku}` · `/methods` · `/confirm/{intent}` · `/processing/{intent}` ·
`/receipt/{id}` — **permanent, static, individually addressable, printable** ·
`/failed/{intent}` — plain diagnosis, retry **reusing the intent** ·
`/refunds` — policy stated before purchase · `/entitlements` → redirects to `me.` ·
`/invoices` — academy payouts.

`/receipt/{id}` is the one identity-plane route that is permanent and static, because a receipt
that cannot be retrieved a year later is not a receipt.

---

## §21.5 Currency and volatility

Prices are declared in a **single fiat display currency** and settled in the crypto amount quoted
at intent creation, with the quote's validity window stated on screen.

**The receipt records both** the fiat display figure **and** the settled amount and asset —
because a receipt that records only the crypto amount is useless for accounting a year later,
when the asset's value bears no relation to what was actually charged.

---

## §21.6 Accessibility of money

| Rule | Reason |
|---|---|
| Every price is **text, never an image** | An image price is unreadable to a screen reader and unsearchable |
| Currency symbols carry `aria-label` | `$` and `£` are ambiguous when announced |
| Amount fields use `inputmode="decimal"` | |
| Arabic locale renders numerals per the user's locale preference, **with the Latin-numeral equivalent available** | Financial ambiguity across numeral systems is a real error source, not a theoretical one |

Screen-reader testing on `pay.` **in both locales** is a launch condition, not a later audit
([B-15](../00-governance-map/launch-blockers.md#b-15--auth-is-unaudited--hard-blocker)) — this and
`auth.` are the two surfaces where an accessibility failure has material consequence rather than
inconvenience.

---

## §21.7 Academy commerce

`pay.` handles commerce on behalf of chartered academies. An academy may not collect payment
itself, may not theme the Ledger gradient, and may not alter any `pay.` screen — for the same
reason it may not theme `auth.`: a payment screen that looks different on every subdomain is a
phishing surface.

Payouts run through `/invoices`. Academy standing, level and last audit date remain visible on the
academy's own footer strip, which the academy cannot modify
([Page Specs — Academy Subdomains](../site/page-spec-academy-subdomains.md)).

---

## §21.8 What agents may never do here

Absolute refusals, binding **even under a valid Curator prompt**: payment mutation, entitlement
change, refund issuance, invoice generation, and any write to a payment intent.

Money moves under a human name or it does not move
([AG-009 §2](../agents/ag-009-prohibited-actions.md),
[Charter §0.5.5](mx-000-charter.md#5-what-the-agents-may-never-do-under-any-prompt)).

---

**Related:** [MX-022 Identity and Sessions](mx-022-identity-and-sessions.md) ·
[MX-002 Terms of Service](mx-002-terms-of-service.md) ·
[MX-009 Advertising and Commercial](mx-009-advertising-and-commercial.md) ·
[MX-018 Data Retention](mx-018-data-retention.md) ·
[ML-2.1 §C.9](../license/ml-2-1.md#c9--core-riba) ·
[ST-20 Payment Integration](../standards/st-20-payment-integration.md) ·
[DS-01 Foundations and Tokens](../design/ds-01-foundations-and-tokens.md)

*Curated by Maher. The structure here refuses Riba by construction. Whether it succeeds is a
question for three qualified reviewers, and until they answer, this instrument claims only to
have tried.*
