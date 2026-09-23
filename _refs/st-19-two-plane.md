---
doc_id: "ST-19"
title_en: "Two-Plane Architecture and the Island Contract"
title_ar: "معمارية المستويين وعقد الجزيرة"
family: "standard"
version: "v2026.09.2"
status: "canonical"
authority: "governing"
prevailing_text: "en"
audience_tier: 4
evidence_class: "durable"
review_interval_months: 36
curator: "Maher"
license: "ML-2.1 · Work of Foundational Character"
derived_from: ["MX-DESIGN-001 Part 0", "MX-DESIGN-001 Part 4", "MX-DESIGN-001 Part 12"]
supersedes: ["The three dynamic exceptions, v2026.09.1"]
last_reviewed: "2026-08-30"
domain_tags: ["architecture", "security", "delivery"]
ai_disclosure_url: "../corpus/mx-007-ai-use-and-disclosure.md"
hreflang: "en, ar"
---

# ST-19 — Two-Plane Architecture and the Island Contract

**Governs:** which MetaX hosts may hold state, what may cross between them, and what a content
page is permitted to do at request time.

**Why this standard exists.** Until v2026.09.2 the estate was wholly static, and the
[Static Principle](../corpus/mx-001-about-metax.md) at `/about/static/` said so in absolute
terms: *no database, no login wall, no client-side fetch*. Authentication, payment and per-user
dashboards make that sentence false. The principle is therefore **partitioned** — narrowed to a
defined plane, with the narrowing published and dated — rather than abandoned or, worse, left
standing while being contradicted in practice. See
[Reconciliation Ledger R-26](../00-governance-map/reconciliation-ledger.md#r-26--the-static-principle-is-partitioned-not-abandoned).

This standard is the boundary. If a proposed feature cannot be placed on one side of it, the
feature is not ready — not the standard.

---

## 1. The two planes

### 1.1 Content Plane

**Hosts:** `metax.academy`, `toptech.metax.academy`, `bcia.metax.academy`,
`academies.metax.academy`, `library.metax.academy`, `lexicon.metax.academy`,
`verify.metax.academy`, and every `{academy}.metax.academy`.

**Obligations, each independently testable:**

| # | Obligation | Test |
|---|---|---|
| C-1 | Every page is pre-rendered at build time. | No page is generated at request time. |
| C-2 | Every page renders completely, correctly and legibly for an anonymous visitor with JavaScript disabled. | Rendered with JS off; primary text, navigation and exit pair present. |
| C-3 | No page gates its primary text behind a session. | No selector hides content pending an identity token. |
| C-4 | Every page is archivable — a saved copy remains true. | Saved HTML opened offline shows the same claims. |
| C-5 | Every page is crawlable and indexed. | Present in the sitemap; no `noindex`. |
| C-6 | No third-party origin is contacted at request time. | Zero cross-origin requests except the island's own origin. |

C-2 is the one that gets quietly broken first, and it is the one
[ST-13](st-13-static-build-and-sentinel.md) tests mechanically rather than by inspection.

### 1.2 Identity & Commerce Plane

**Hosts:** `auth.metax.academy`, `pay.metax.academy`, `me.metax.academy`.

**Obligations:**

| # | Obligation | Note |
|---|---|---|
| I-1 | `noindex` on every route, enforced by header **and** meta, not by `robots.txt` alone. | `robots.txt` is a request, not a control. |
| I-2 | Never archived. No mirror, no snapshot, no Wayback submission. | These pages contain other people's data. |
| I-3 | Holds sessions, entitlements, payment intents and learner artefacts — and is the **only** plane that may. | |
| I-4 | Retention governed by [MX-018](../corpus/mx-018-data-retention.md); classification Class 4 under [MX-003](../corpus/mx-003-privacy-notice.md). | |
| I-5 | Publishes no doctrine, no curriculum and no claim. | A claim on a page nobody can cite is unfalsifiable. |

I-5 has a consequence worth stating: **anything worth citing must live on the content plane.**
If a governance fact appears only inside `me.`, it is not published.

### 1.3 What this plane split is not

It is not a public/private split — much of the content plane concerns private matters and
nothing on the identity plane is secret from its own owner. It is a **statefulness** split. The
question is never "is this sensitive?" but "does rendering this correctly require knowing who
is asking?"

---

## 2. The boundary rule

> **The content plane may be *decorated* by the identity plane, but never *depends* on it.**

This sentence is normative and is quoted verbatim in
[MX-001](../corpus/mx-001-about-metax.md) and on `/about/static/`.

**Permitted (decoration).** A signed-in visitor on a series page receives the same HTML as an
anonymous visitor, **plus** a hydrated identity bar and up to three inline entitlement chips.

**Forbidden (dependence).** Any of the following makes a content page dependent, and each is a
build failure, not a code-review note:

- Primary text, headings, navigation or the exit pair rendered only after a token resolves.
- Content removed, reordered or replaced based on identity.
- A price, count or status fetched at request time rather than built in.
- Space reserved for the identity bar in the anonymous render.
- A redirect to `auth.` from any content route other than `/auth/callback`.
- A "sign in to continue" interstitial on any content page, in any form.

**The distinguishing test.** Delete the island script and reload. If a reasonable visitor could
not tell that anything was missing except a bar they never had, the page decorates. If the page
is degraded, empty, misaligned or confusing, the page depends — and it is broken.

---

## 3. The island contract

Exactly one request-time script is sanctioned on the content plane. It is called the
**island**. It is the only exception to "no client-side fetch", and `/about/static/` names it
explicitly with its date in *Where the principle bends*.

### 3.1 Hard limits

| Constraint | Value |
|---|---|
| Size | ≤ 4 KB, compressed, including its own polyfills |
| Count | Exactly one script. Not one per feature. |
| Origin | First-party only. No CDN, no third-party, no dynamic import from elsewhere. |
| Dependencies | None. No framework, no runtime. |
| Reads | One short-lived signed identity token (10 minutes, silently refreshed) |
| Writes | DOM injection only. No storage write except the token cache. |
| Timeout | 800 ms. On expiry it aborts and removes itself. |

### 3.2 What it may inject

1. **The MetaX Bar** — 48 px, top of page: visitor glyph and name, current path, one contextual
   chip, a link to `me.`. `position: sticky` on desktop, static on mobile, where vertical space
   is scarcer than convenience.
2. **Up to three entitlement chips**, inline, e.g. *"You have access to this series"*,
   *"Rung 4 of 10"*.
3. **Nothing else.** Not a modal, not a toast, not a nag, not an upsell, not a survey.

### 3.3 What it may never do

- Remove, replace, reorder or unhide existing DOM.
- Alter any price, count, status badge, credential state or claim.
- Contact any origin other than its own.
- Run on `auth.` or `pay.` — those hosts hydrate their own way.
- Show anything at all to an anonymous visitor. No login prompt, no dismissible banner, no
  skeleton. **Anonymous visitors see nothing**, and see it with zero layout shift.

### 3.4 Failure transparency, and how it is proved

If the island fails, throws, times out, is blocked by an extension, is blocked by policy, or
JavaScript is disabled: **the page is unchanged and unbroken.**

This is proved, not asserted. [ST-13](st-13-static-build-and-sentinel.md) builds the estate
twice — once normally, once with the island stubbed to throw immediately — and diffs the
rendered content trees. Any difference outside the bar's own subtree fails the build. Cumulative
Layout Shift attributable to the island must be **0.00**, since the bar occupies space that was
never reserved and must therefore push nothing.

An exception that is not mechanically tested is a promise, and this corpus does not accept
promises as controls.

---

## 4. The callback route

**The correction.** "The content plane is fully static" is imprecise, and the imprecision hides
a real requirement. Sessions are host-scoped by design — there is deliberately **no**
`.metax.academy` wildcard cookie, because a wildcard cookie means one compromised academy
subdomain harvests estate-wide sessions. But a purely static host cannot set a cookie.

**The precise rule, and the one that governs:**

> Every content-plane **page** is static. Every content-plane **host** additionally exposes
> exactly one non-static route, `/auth/callback`, which serves no content and renders no page.

**Specification.**

| Property | Value |
|---|---|
| Path | `/auth/callback` — on all seven content hosts and every academy subdomain |
| Method | `GET` only |
| Behaviour | Exchanges the authorization code at the edge; sets a host-scoped session cookie; issues the short-lived identity token; redirects to the `state`-recorded path |
| Renders | Nothing. Never HTML. Never a visible page. |
| Indexing | `noindex`; absent from every sitemap |
| Cookie scope | The exact host. Never a wildcard. Never a parent domain. |
| Failure | Redirects to the originating content path **unauthenticated**. Never to an error page, never to a dead end. |
| Counted as | Not a page. Excluded from all published route counts ([R-30](../00-governance-map/reconciliation-ledger.md#r-30--the-property-count-changes-again--seven-becomes-seven-plus-three)) |

Cross-host continuity comes from a silent re-authorize against the auth host's own first-party
session, not from a shared cookie. This is the mechanism that lets `me.` appear estate-wide
without a single credential crossing a host boundary.

Recorded as [R-32](../00-governance-map/reconciliation-ledger.md#r-32--an-unstated-consequence-the-content-plane-needs-an-edge-callback)
and filed as [DEF-011](../00-governance-map/defect-register.md) against the source wording.

---

## 5. Placing a feature

Answer in order. The first "yes" decides.

1. **Does rendering it correctly require knowing who is asking?** → Identity plane.
2. **Does it write anything, ever?** → Identity plane.
3. **Does it hold data belonging to an identifiable person?** → Identity plane.
4. **Is it a permanent public record that must survive the institution?** → Content plane,
   static, archived.
5. **Otherwise** → Content plane.

### 5.1 The read/write seam

Most features that look like they straddle the boundary do not: they contain a **ledger** and a
**transaction**, and the seam runs between them. The ledger is public, static, citable and
archived. The transaction is private, stateful and unarchived.

| Feature | Content plane (ledger) | Identity plane (transaction) |
|---|---|---|
| Pre-Registration Desk | `toptech…/prereg/{id}/` — mirror of a closed filing | `me…/prereg/` — filing, amend-with-public-diff |
| Correction Bounty | `library…/corrections/` — register incl. **rejected** submissions with reasons | `me…/corrections/new/` |
| Decay Watch | `library…/decay/` — overdue counts by pillar | `me…/digest/` — per-series subscription |
| Adversarial Review | Inter-reviewer agreement in the Integrity Report | `me…/reviews/` |
| Certification | `verify…/c/{id}/` — permanent record | `me…/credentials/` |
| Artefact Vault | Optional public artefact URL | `me…/artefacts/` |
| Bridge Passport | Rung gating rules, published | `me…/passport/` |
| Academy admin | Directory entry, standing strip | `me…/academy/{slug}/` |

The last row is the pattern at its clearest: the academy admin surface lives on `me.`, **not**
on the academy's own subdomain, which keeps every academy subdomain entirely static and puts
every privileged operation behind one audited plane.

### 5.2 One unresolved case

**Deterministic Scenario Assessment** (`/s/{id}/c/{nn}/scenario/`) does not split cleanly: a
seeded branching assessment whose full decision tree ships in the static HTML is not an
assessment, and one that hides the tree needs request-time state. The three options and the
provisional resolution are at
[RAT-11](../00-governance-map/open-questions-and-ratifications.md#rat-11--how-the-scenario-assessment-resolves-against-the-plane-boundary).
Provisionally: the tree is fully public and the exercise is described as a **rehearsal, not a
gate** — the only option that keeps the page honest under §2.

---

## 6. Budgets

| Resource | Content plane | Identity plane |
|---|---|---|
| HTML | ≤ 60 KB | ≤ 60 KB |
| CSS | ≤ 40 KB estate-wide, one shared file | shared file |
| JS | **≤ 12 KB** (island ≤ 4 KB of it) | ≤ 60 KB |
| Fonts | ≤ 180 KB subset per locale, `font-display: swap`, metric-compatible fallbacks | same |
| LCP | < 1.8 s on 4G mid-tier | < 1.8 s |
| CLS | target 0.00, ceiling 0.05 | same |
| INP | < 200 ms at p75, mid-tier Android on 4G | same |

**A page exceeding budget fails the build. There is no override flag.** The absence of an
override is the entire control; a budget with an escape hatch is a suggestion, and every
suggestion loses to a deadline.

---

## 7. Build order

From [MX-DESIGN-001 Part 12](../../sources/MetaX.Academy_UI-UX_and_Design_System_Documentation.md),
adopted as normative because the dependencies are real:

1. Token layer and gradient system — everything later inherits from it.
2. Responsive chrome — utility bar, mega-nav drawer, footer, page stamp — **mobile fidelity
   before desktop**.
3. Status spine. Badges are structural and cannot be retrofitted.
4. `auth.`, **alone**, with nothing depending on it, so it can be penetration-tested in
   isolation.
5. `me.` with the identity bar and this island contract — proving the content plane still
   renders perfectly with the island disabled (§3.4).
6. `pay.`, last of the three planes: a payment surface built before its identity foundation is
   stable is a liability.
7. The academy subdomain template.
8. The twelve academic features in order **1, 3, 9, 2, 11, 5, 6, 4, 8, 12, 7, 10** —
   pre-registration, decay watch and the passport first because they make existing doctrine
   binding rather than advisory; the viva and the exchange last because they require human
   capacity that does not yet exist.

**Governance precedes interface.** Per
[R-37](../00-governance-map/reconciliation-ledger.md#r-37--instruments-the-design-doc-obliges-this-corpus-to-amend),
the design work does not ship ahead of the instruments it obliges. Building the payment page
before the payment terms exist is how a universe ends up with a checkout whose refund policy
has never been written.

---

## 8. Conformance

| Rule | Enforced by | Failure mode |
|---|---|---|
| C-1 … C-6 | [ST-13](st-13-static-build-and-sentinel.md) | Build failure |
| §2 boundary | Island-disabled differential build | Build failure |
| §3 island limits | Bundle size gate, origin allowlist | Build failure |
| §4 callback | Route manifest validation | Build failure |
| §6 budgets | Per-page budget gate, no override | Build failure |
| §5 placement | Human review at design sign-off | Defect on publication |

---

**Related:** [ST-16 Security Architecture](st-16-security-architecture.md) ·
[ST-13 Static Build and SENTINEL](st-13-static-build-and-sentinel.md) ·
[DS-01 Foundations and Tokens](../design/ds-01-foundations-and-tokens.md) ·
[MX-022 Identity & Sessions](../corpus/mx-022-identity-and-sessions.md) ·
[MX-021 Payments & Commerce](../corpus/mx-021-payments-and-commerce.md) ·
[Information Architecture](../site/information-architecture.md)

*Curated by Maher. This standard narrowed a published absolute claim. The narrowing is dated,
the old claim is retained as superseded, and the new boundary is machine-tested — because a
doctrine that quietly acquires exceptions is worse than one that never existed.*
