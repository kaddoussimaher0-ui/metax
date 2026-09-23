---
doc_id: "GM-05"
title_en: "Launch Blockers"
title_ar: "معوّقات الإطلاق"
family: "governance-map"
version: "v2026.09.2"
status: "canonical"
authority: "governing"
prevailing_text: "en"
audience_tier: 5
evidence_class: "semi-durable"
curator: "Maher"
license: "ML-2.1 · Work of Foundational Character"
last_reviewed: "2026-08-29"
review_interval_months: 3
hreflang: "en, ar"
---

# Launch Blockers

Nothing on any MetaX property goes public until every item on this list is closed. A blocker
is not a task with a high priority. It is a condition whose absence makes a public claim
false, and publishing a false claim about our own governance would breach *Sidq* on the front
page of an instrument that asserts *Sidq*.

**Distinguish three things.** A **blocker** makes publication dishonest. A **defect** is a
published shortfall with an owner and a date ([Defect Register](defect-register.md)) — those
are published *with* the site, deliberately. An **open question** needs the Curator
([Open Questions](open-questions-and-ratifications.md)). Some open questions are blockers;
most are not.

---

## B-01 · The License is unsigned — **hard blocker**

**Condition.** [ML-2.1](../license/ml-2-1.md) carries `[STEWARD NAME / ORGANIZATION]`,
`[REGISTRY URL]`, `[DATE]` and the key fingerprint `[FPR]` unfilled, and the text is unsigned.

**Why it blocks.** The whole architecture rests on accountable authorship. An unsigned
governing charter has no author, so every downstream claim of accountability is unsupported.
This blocker is upstream of all the others: the Charter derives its authority from the
License ([MX-000 §0.1](../corpus/mx-000-charter.md#01-founding-statement)), so an unsigned
License makes the Charter's authority unstated too.

**Closes when.** Fields are filled, the text is signed against a published key fingerprint,
and the signed text is live in the Registry with its mirrors
([Registry and Mirrors](../license/registry-and-mirrors.md)).

**Owner.** Maher. **Tracked as** [RAT-01](open-questions-and-ratifications.md#rat-01--fill-and-sign-the-license-placeholders).

---

## B-02 · The Registry and its three mirrors do not exist — **hard blocker**

**Condition.** [ML-2.1 §E.7](../license/ml-2-1.md#e7--registry-continuity-and-canonical-text-redundancy)
requires the canonical text, version history and all Determinations in at least three
independent publicly readable locations, one content-addressed and one jurisdictionally
distinct and outside the Steward's operational control.

**Why it blocks.** §E.4 reliance protection is untestable without it, and a license that
depends on one domain resolving is not durable on the horizon this corpus claims. The corpus
cites the Registry as the authority for canonical text, succession instruments, delegation
notices, and the agent channel definition — it is load-bearing in five instruments.

**Closes when.** Three mirrors are live and signed, and their addresses are published in
[REG-08](../registries/reg-08-processors-keys-mirrors.md).

**Owner.** Maher.

---

## B-03 · The ethics reviewer is unnamed — **hard blocker**

**Condition.** [Charter §0.5](../corpus/mx-000-charter.md#05-powers-placed-beyond-the-curator)
places the ethics veto beyond the Curator. No holder is named.

**Why it blocks.** MetaX's central public claim is that governance was architecture from the
first release rather than remediation after the first incident. If the veto has no holder on
the day of publication, that claim is retrospective at best. The veto is also the mechanism
[MX-014 §14.3](../corpus/mx-014-research-ethics-and-exclusions.md#143-the-ethics-veto)
relies on for every bio-adjacent page, and BCIA cannot publish without it.

**Closes when.** A named holder has accepted in writing, the acceptance is published, and the
veto log exists — even empty.

**Owner.** Maher. **Tracked as** [RAT-04](open-questions-and-ratifications.md#rat-04--name-the-ethics-reviewer-and-the-successors).

---

## B-04 · Succession instruments are not deposited — **hard blocker**

**Condition.** Three separate instruments are required and none exists: the Steward
succession instrument ([ML-2.1 §E.8](../license/ml-2-1.md#e8--steward-succession-and-incapacity)),
the Curator succession instrument ([MX-015](../corpus/mx-015-succession-and-continuity.md)),
and the sealed prompter-succession credential
([AG-000 §A.6.3](../agents/ag-000-agent-constitution.md#a6-degraded-mode-and-prompter-succession)).

**Why it blocks.** The corpus argues that an institution which cannot survive its founder is
a personality rather than an institution — and it publishes a bus factor of one. Publishing
that honestly is acceptable. Publishing it while the three instruments designed to reduce it
are absent turns an honest disclosure into an unaddressed one.

**Closes when.** All three are signed and deposited, their hashes published, and the ten-year
archival prefunding under MX-015 is arranged and disclosed.

**Owner.** Maher.

---

## B-05 · Counsel review of the legal instruments — **hard blocker**

**Condition.** MX-002, MX-003, MX-004, MX-018 and the ML-2.1 enforceability assertions have
not been reviewed by qualified counsel in any operating jurisdiction. Governing law, forum,
and the liability cap figure are unset.

**Why it blocks.** The corpus's own standing disclaimer states that every instrument is
drafting work product for counsel and names the license amendments, the enforceability
assertions and the data-protection provisions as the parts where the flag is the most
important sentence in the clause. Publishing consumer-facing terms in that state is the one
failure that could harm a reader rather than merely embarrass the author.

**Closes when.** Counsel has reviewed, the jurisdiction and cap are stated, and the
mandatory-language carve-out in [MX-020](../corpus/mx-020-language-authority.md) is confirmed
against each operating market.

**Owner.** Maher plus counsel. **Tracked as** [RAT-07](open-questions-and-ratifications.md#rat-07--jurisdiction-governing-law-and-the-liability-cap).

---

## B-06 · The build cannot yet enforce its own rules — **hard blocker**

**Condition.** [ST-13](../standards/st-13-static-build-and-sentinel.md) specifies the
SENTINEL contract: front-matter validation, computed counts, dangling-link detection,
Limits-and-Bridge presence, falsifier presence, single-source drift checks, and build failure
rather than placeholder rendering. It is a specification, not a running pipeline.

**Why it blocks.** [MX-006 §6.3](../corpus/mx-006-editorial-and-evidence.md#63-falsifiability)
states that falsifiability is enforced mechanically and not editorially, "because editorial
enforcement of a discipline the editor also authors is not enforcement". Until the pipeline
runs, that sentence describes an intention. Publishing it as a present-tense fact would be a
silent downgrade of the strongest claim in the corpus.

**Closes when.** The pipeline runs in CI, fails a deliberately broken specimen, and its
failure output is published.

**Owner.** Maher / build.

---

## B-07 · No page may render a placeholder as a value — **hard blocker, standing**

**Condition.** Prices, counts, holder names, key fingerprints, jurisdictions and dates appear
in the corpus as `[VERIFY]` or as bracketed placeholders.

**Why it blocks.** A placeholder rendered as though it were a value is a fabrication, and
fabrication is the cardinal fault
([AG-000 §A.5](../agents/ag-000-agent-constitution.md#a5-fabrication-as-the-cardinal-fault)).
This blocker never closes; it converts into the standing build rule that an unresolved
placeholder fails the build.

**Closes when.** Converted to a SENTINEL check under B-06 and enforced permanently.

---

## B-08 · Accessibility conformance is unverified — **soft blocker**

**Condition.** [MX-010](../corpus/mx-010-accessibility.md) commits to WCAG 2.2 AA across all
properties, with known gaps published with owners and dates. No test matrix has been run and
no gap list exists.

**Why it is soft.** The commitment plus a published gap list is publishable; a commitment with
no test behind it and no gap list is a claim without evidence. This blocker closes with the
*first* audit, not with full conformance — publishing the gaps is the compliant state.

**Closes when.** The matrix has been run once, results published, and every failure entered
in the Defect Register with an owner and a date.

---

## B-09 · Arabic parity is claimed but not built — **soft blocker**

**Condition.** No Arabic editions of the MX instruments exist.

**Why it is soft.** Parity may honestly be described as a standing target. It may not be
described as a present state, and no toggle may resolve silently to a homepage.

**Closes when.** Every published page either has its Arabic mirror or renders the honest
untranslated notice with a target date, verified by SENTINEL rather than by inspection.
**Tracked as** [RAT-09](open-questions-and-ratifications.md#rat-09--the-arabic-authoritative-editions).

---

## B-10 · BCIA-specific gate — **standing, property-scoped**

**Condition.** Branch E and any BCIA content beyond the status, audit and charter surfaces
are gated until all seven remediation gates close and one independent external read is
complete.

**Why it is not universal.** BCIA's remediation state is publishable *because* it is
published: the status page, the audit and the defect list are the compliant form of an
unfinished research programme. What is blocked is promotion, not disclosure.

**Closes when.** [BX-003](../bcia/bx-003-remediation-gates.md) shows seven closed gates and
the external read is published.

---

# Identity-plane blockers (added v2026.09.2)

[MX-DESIGN-001](../../sources/MetaX.Academy_UI-UX_and_Design_System_Documentation.md) adds
`auth.`, `pay.` and `me.` to the estate. Its Part 11 states the governing fact plainly:
*"Adding identity and money to the corpus is a governance event, not a design event."* The
blockers below follow from that. They are **plane-scoped**: none of them blocks the content
plane, and B-11 exists specifically to keep it that way.

---

## B-11 · The instruments the new plane requires do not exist — **hard blocker, identity plane**

**Condition.** Fifteen instruments must be written or amended before any identity-plane surface
ships. The full schedule is
[R-37](reconciliation-ledger.md#r-37--instruments-the-design-doc-obliges-this-corpus-to-amend);
the load-bearing ones are [MX-021 Payments & Commerce](../corpus/mx-021-payments-and-commerce.md)
and [MX-022 Identity & Sessions](../corpus/mx-022-identity-and-sessions.md) (both new),
[MX-002](../corpus/mx-002-terms-of-service.md) purchase and refund terms,
[MX-003](../corpus/mx-003-privacy-notice.md) Class 4 data,
[MX-018](../corpus/mx-018-data-retention.md) payment retention with statutory basis, and
[AG-009](../agents/ag-009-prohibited-actions.md)'s absolute-refusal set.

**Why it blocks.** A checkout page whose refund terms have never been written is not an
incomplete feature — it is a page making a commitment no instrument backs. The source document
is explicit that *"the design work should not ship ahead of them."*

**Closes when.** Every row of the R-37 schedule is published.

**Owner.** Maher. **Scope.** Blocks `auth.`, `pay.`, `me.` only. The content plane is unaffected,
which is the point of the partition.

---

## B-12 · Riba structure and payment rails are unreviewed — **hard blocker**

**Condition.** The payment structure implements
[ML-2.1 §C.9](../license/ml-2-1.md#c9--core-riba) at the interface layer — no interest-bearing
instalments, no financing partners, no percentage late fees, no BNPL; permitted patterns are
single payment, zero-markup split, sponsored seats, needs-based waivers. It has not been
reviewed by anyone qualified.

**Why it blocks.** The source document carries its author's own disclaimer, and it is carried
forward here rather than dropped: not a lawyer, not a financial adviser, **not a scholar of
Islamic finance**. The structural rule is clear; whether the implementation satisfies it is a
question three different qualified people must answer. Additionally, *"jurisdictional
availability of crypto payment rails varies considerably and will need its own check."*

Publishing a Riba-compliance claim that no qualified reviewer has tested would be the most
consequential unverified assertion in the corpus — it concerns a religious obligation, not a
preference.

**Closes when.** Reviewed in all three domains, each review published or its existence stated,
and per-jurisdiction rail availability documented.

**Owner.** Maher plus three reviewers. **Related** [B-05](#b-05--counsel-review-of-the-legal-instruments--hard-blocker).

---

## B-13 · Single payment rail — **hard blocker**

**Condition.** Binance Pay is the only method.

**Why it blocks.** This is a blocker on the source document's **own recommendation against its
own design**, quoted because the reasoning is the substance: crypto-only *"will exclude a
meaningful share of the audience this curriculum is written for, particularly in the
Arabic-speaking markets where Meta-X is authoritative,"* and it couples estate commerce to one
company's regional availability and terms. The recommendation is explicit — treat a second
payment method as *"a launch-blocking item rather than a roadmap item."*

There is a second, independent ground. [MX-020](../corpus/mx-020-language-authority.md) commits
to Arabic as an authoritative language, not a translation. A commerce rail that is
disproportionately unavailable in Arabic-speaking markets makes that commitment partly
decorative.

**Closes when.** A second processor is live **or** the constraint is stated on the pricing page
with the affected markets named. The interface is method-agnostic by construction, so this is
configuration, not redesign.

**Note.** The limitation is disclosed **on the pricing page**, never discovered at checkout — a
constraint revealed at the moment of payment is a dark pattern by omission, already forbidden by
[MX-009](../corpus/mx-009-advertising-and-commercial.md).

---

## B-14 · The island contract is untested — **hard blocker, standing**

**Condition.** [ST-19 §3](../standards/st-19-two-plane-architecture.md#3-the-island-contract)
requires that with the island script disabled, failing or timing out, every content page is
byte-for-byte unchanged and unbroken. No differential build exists.

**Why it blocks.** This single test is what keeps the partitioned Static Principle true. If the
island can silently become load-bearing, `/about/static/` is false again — and it will become
load-bearing gradually, through reasonable-looking commits, unless a machine refuses them.

**Closes when.** The estate builds twice — once with the island stubbed to throw — and the
rendered content trees are diffed, with any difference outside the identity bar's own subtree
failing the build. Island-attributable CLS must be 0.00.

**Standing.** Converts into a permanent [ST-13](../standards/st-13-static-build-and-sentinel.md)
gate rather than closing. **Related** [B-06](#b-06--the-build-cannot-yet-enforce-its-own-rules--hard-blocker).

---

## B-15 · `auth.` is unaudited — **hard blocker, identity plane**

**Condition.** The authorization-code + PKCE flow, `clients.json` callback registry, host-scoped
cookie model, passkey and recovery-code handling, and the anti-phishing glyph/phrase mechanism
have had no penetration test and no independent review.

**Why it blocks.** `auth.` is the single authority for the entire estate including every academy
subdomain, and *no academy ever collects a MetaX credential*. One authority means one
catastrophic failure mode. [ST-19 §7](../standards/st-19-two-plane-architecture.md#7-build-order)
therefore requires `auth.` to be built **alone, with nothing depending on it, so it can be
penetration-tested in isolation** — a build-order rule that only pays off if the test actually
happens.

**Closes when.** An independent penetration test is complete, findings are remediated or
published as defects, wildcard redirect-URI rejection is verified at registration, and screen
readers have been run against `auth.` and `pay.` **in both locales** — the two surfaces where an
accessibility failure has material consequence.

**Owner.** Maher plus an external reviewer.

---

## Publication order

Waves 1–6 are content plane. Waves 7–10 are identity plane and depend on the content plane
being published first, never the reverse — a dependency direction that is itself the plane
boundary expressed as a schedule.

| Wave | Plane | What may publish | Preconditions |
|---:|---|---|---|
| 0 | — | Nothing | — |
| 1 | Content | Charter, License, About (incl. the rewritten `/about/static/`), governance map, the Record | B-01 … B-07 closed |
| 2 | Content | TopTech catalog, series, Limits/Bridge standards, credentials spec | Wave 1 + B-08 |
| 3 | Content | Verifier and the credential registry | Wave 2 + [ST-17](../standards/st-17-registry-and-verifier.md) signing live |
| 4 | Content | Academies application and directory | Wave 3 + [ST-18](../standards/st-18-academy-json-manifest.md) validator live |
| 5 | Content | BCIA status, audit, charter, open problems | Wave 1 + B-03 |
| 6 | Content | Branch E and BCIA promotion | B-10 closed |
| 7 | Identity | `auth.` **alone** | B-11 + B-15; nothing depends on it yet |
| 8 | Identity | `me.` + the identity bar and island | Wave 7 + **B-14** |
| 9 | Identity | `pay.` | Wave 8 + B-11 + B-12 + B-13 |
| 10 | Content | Academy subdomain template, then the twelve features in order 1, 3, 9, 2, 11, 5, 6, 4, 8, 12, 7, 10 | Wave 9 |

The order is not a project plan; it is a dependency graph. Wave 1 is first because a property
that publishes curriculum before it publishes the rules it holds itself to has the priorities of
a school rather than an institution. Wave 9 is last of the three planes because **a payment
surface built before its identity foundation is stable is a liability**, and wave 8 precedes it
because the island contract must be proven before anything commercial relies on the identity it
carries.
