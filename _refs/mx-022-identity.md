---
doc_id: "MX-022"
title_en: "Identity and Sessions"
title_ar: "الهوية والجلسات"
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
derived_from: ["MX-DESIGN-001 Part 4", "MX-DESIGN-001 Part 6", "MX-DESIGN-001 Part 11"]
last_reviewed: "2026-08-30"
domain_tags: ["identity", "security", "privacy", "governance"]
ai_disclosure_url: "mx-007-ai-use-and-disclosure.md"
hreflang: "en, ar"
---

# MX-022 — Identity and Sessions

**Governs:** `auth.metax.academy`, `me.metax.academy`, the session model, and the identity
overlay that appears across the content plane.

> **Numbering.** [MX-DESIGN-001](../../sources/MetaX.Academy_UI-UX_and_Design_System_Documentation.md)
> Part 11 requested this instrument as `MX-021`. `MX-020` and `MX-021` were already allocated in
> this release, and numbers are immortal from first assignment
> ([ST-01 Rule 2](../standards/st-01-identifier-and-url-grammar.md#3-rule-2--numbers-are-immortal)).
> Reasoning at [R-25](../00-governance-map/reconciliation-ledger.md#r-25--the-mx-020-numbering-collision).

> **Status.** New instrument, ratification pending. `auth.` may not publish until
> [B-11](../00-governance-map/launch-blockers.md#b-11--the-instruments-the-new-plane-requires-do-not-exist--hard-blocker)
> and [B-15](../00-governance-map/launch-blockers.md#b-15--auth-is-unaudited--hard-blocker) close.

---

## §22.1 Why MetaX holds identity at all

It did not, until v2026.09.2. Adding it required amending a published doctrine
([MX-001 §1.6](mx-001-about-metax.md#16-the-static-principle-as-partitioned)), and the amendment
is only defensible if identity does a job that cannot be done without it.

The job: **credentials that mean something require a person to attach them to, and artefacts that
serve as evidence require custody.** A credential no one holds is a certificate template. An
artefact anyone could substitute after certification is not evidence. Both need identity.

What identity is **not** for, and this constrains everything below: it is not for personalising
content, not for measuring engagement, not for building a profile, and not for making the estate
feel attentive. See §22.5.

---

## §22.2 One authority, and one only

`auth.metax.academy` is the sole authentication authority for the entire estate, **including
every academy subdomain**.

**No academy ever collects a MetaX credential.** Not a password, not a code, not a passkey
challenge. An academy that presents its own login form is in breach of its charter, and the
breach is a chartering matter, not a technical one.

### §22.2.1 Design posture as a security control

`auth.` is deliberately austere and deliberately **identical everywhere**: single column, 400 px
maximum, locked Vault gradient, no mega-nav, no footer links except one *"Return to
metax.academy"*, no advertising slot, and no marketing copy of any kind.

**The visual sameness is the control.** A user who sees a colourful, branded, academy-themed
login screen is being phished — and MetaX says exactly that, in plain words, on
`/how-we-protect-you/`. This is why the Vault and Ledger gradients are locked against academy
theming ([DS-01 §3.3](../design/ds-01-foundations-and-tokens.md#33-the-five-rules)): a login
screen that can look different is a login screen that can be imitated.

---

## §22.3 The session model

### §22.3.1 Flow

Authorization-code with PKCE. A relying host redirects to
`https://auth.metax.academy/authorize` with its registered `client_id`, a `redirect_uri` **drawn
from an allowlist**, `state`, `nonce`, and a code challenge. On success the user returns to
`https://{host}/auth/callback`, which exchanges the code at the edge and sets:

1. a **host-scoped** session cookie, and
2. a short-lived signed **identity token** (10 minutes, silently refreshed) readable by the
   island script on the content plane.

### §22.3.2 No wildcard cookie — the load-bearing decision

The session cookie is **never** scoped to `.metax.academy`. Each host holds its own.
Cross-host continuity comes from a silent re-authorize against the auth host's own first-party
session.

This is what lets `me.` appear estate-wide **without a shared cookie that any single compromised
academy could steal.** With a thousand academy subdomains, a wildcard cookie means the security of
every learner's session equals the security of the least careful academy curator. That is not an
acceptable coupling, and no convenience justifies it.

**Consequence, stated because it is easy to miss:** every content-plane host must therefore expose
exactly one non-static route, `/auth/callback`, since a purely static host cannot set a cookie.
That route serves no content and renders no page. Specified at
[ST-19 §4](../standards/st-19-two-plane-architecture.md#4-the-callback-route); recorded as
[R-32](../00-governance-map/reconciliation-ledger.md#r-32--an-unstated-consequence-the-content-plane-needs-an-edge-callback).

### §22.3.3 The callback registry

`clients.json` holds one record per relying host: client id, display name, exact redirect URIs,
allowed scopes, logo, charter status.

| Rule | Value |
|---|---|
| Wildcard redirect URIs | **Rejected at registration.** No exceptions, no configuration flag |
| Academy auto-registration | At charter grant, fixed URI `https://{slug}.metax.academy/auth/callback` |
| Academy scope ceiling | `profile openid entitlements:read` — and no mechanism exists to raise it |
| Custom domains | Chartered level only, second exact URI, **after** domain verification |

---

## §22.4 Methods

In order of preference, and the order is normative:

| Method | Posture |
|---|---|
| **Passkeys** | The **default**, presented as the default and not as an advanced option |
| Email one-time code | Universal fallback |
| Recovery codes | Issued once at enrolment, shown once, downloadable as a printable card |
| TOTP | Required for reviewers, academy curators, and any holder of a P3 credential |

**Refused: SMS.** **Refused: social login** — a third-party identity provider inside a corpus
about provenance would be an unforced contradiction. MetaX would be asking readers to trust a
provenance chain whose first link it does not control and cannot audit.

### §22.4.1 Anti-phishing

At first enrolment the user picks a **safety glyph** from the `mx-glyph` set and a **two-word
phrase**. Both are shown on the authorization screen *before any credential entry*, on every
subsequent sign-in.

The screen also prints the requesting client's display name **and charter status** from
`clients.json` — so a sandbox academy cannot present itself as a chartered one. Charter status on
a login screen is an unusual thing to show; it is there because the estate's trust model makes
"which academy is asking" a question with a real answer.

### §22.4.2 Screen copy intent

| Screen | Intent |
|---|---|
| `/authorize` | States plainly **which site is asking and for what** |
| `/signin` | Leads with the passkey button |
| `/otp` | Expiry shown as a countdown that is **informational, never pressuring** |
| `/consent` | Scopes in human sentences — *"See which courses you have access to"* — never scope strings |
| `/devices` | Active sessions with device, approximate location, last use; one revoke per row plus revoke-all |
| `/recover` | Deliberately slow, and **states the delay honestly** |
| `/error` | Explains failure classes in plain language and **never blames the user** |
| `/signout` | Confirms which sessions ended |

---

## §22.5 `me.metax.academy` — and what it is forbidden to become

### §22.5.1 The MetaX Bar

A 48 px bar injected at the top of every content-plane page by the island script when a valid
identity token exists: glyph and name, current path, one contextual chip, a link to `me.`

**Anonymous visitors see nothing** — no login prompt, no dismissible banner, and **no reserved
space**, because space reserved for an absent bar is layout shift charged to every reader who
never signs in. Sticky on desktop, static on mobile, where vertical space is scarcer than
convenience.

Bounded by the island contract at
[ST-19 §3](../standards/st-19-two-plane-architecture.md#3-the-island-contract): ≤ 4 KB, purely
additive, failure-transparent.

### §22.5.2 Sections

*Path* · *Artefacts* · *Credentials* · *Entitlements* · *Reviews* (reviewers only) · *Academy*
(founders only) · *Decay Watch* · *Settings* · *Data* · *Devices* · *Digest*.

**Progress is measured in artefacts, not minutes.** No video-percentage bar exists anywhere,
because a percentage of a video watched is not evidence of anything. A series shows, per course,
three binary states: artefact submitted, artefact reviewed, capstone pre-registered. **No
fabricated continuum.**

### §22.5.3 The anti-engagement commitments

Refused: **streaks · leaderboards · infinite feed · notification badges with counts designed to
itch.**

Notifications are a **weekly digest, off by default**, except for three classes with real
consequences: credential status changes, review deadlines, decay alerts.

**Published falsifier**, on `/me/digest/`:

> *If MetaX ever ships a streak counter, that page becomes a published defect.*

That sentence is what makes this section canon rather than copy. Under
[ST-04](../standards/st-04-falsifiability-and-claim-cards.md) a commitment without a named
falsifier is a value statement, and value statements survive their own violation.

### §22.5.4 Data rights, stated with the exception

Export, deletion, and device revocation are available at `me…/data/` and `me…/devices/`.

**The exception is stated on the page rather than in a policy:** *public credential records
revoke rather than delete.* A revoked credential's record page remains at
`verify…/c/{id}/`, its status flips, and the ground for revocation is stated.

This is a genuine limit on a data right and it is not disguised. A verification system that can
be emptied on request cannot be relied on by the third parties it exists to serve — and a
credential holder's interest in erasure does not outweigh an employer's interest in knowing that
a credential was withdrawn. If that trade is unacceptable to a reader, the honest response is not
to hold a MetaX credential.

---

## §22.6 Data classification and retention

Authentication and session data is **Class 4** under
[MX-003 §3.0](mx-003-privacy-notice.md#30-data-classification-canon) — the class added by this
release. Retention periods, with their statutory basis stated rather than asserted, are at
[MX-018](mx-018-data-retention.md).

`auth.`, `pay.` and `me.` are `noindex` by header **and** meta, and are **never archived** — no
mirror, no snapshot, no Wayback submission. These pages contain other people's data, and the
estate's archival commitments do not extend to them.

---

## §22.7 What agents may never do here

Absolute refusals, binding **even under a valid Curator prompt**:

- Mint an identity token
- Revoke a session
- Change an entitlement
- Issue or revoke a credential

The test is not "is this sensitive?" but **"would performing this action forge evidence or move
value?"** Any operation meeting it is absolutely refused
([AG-009 §2](../agents/ag-009-prohibited-actions.md),
[Charter §0.5.5](mx-000-charter.md#5-what-the-agents-may-never-do-under-any-prompt)).

This is stated in a corpus instrument and not only in an agent instrument, because it is a limit
on what the Curator can delegate — not merely on what an agent may accept.

---

**Related:** [MX-021 Payments and Commerce](mx-021-payments-and-commerce.md) ·
[MX-003 Privacy Notice](mx-003-privacy-notice.md) ·
[MX-011 Security and Disclosure](mx-011-security-and-disclosure.md) ·
[MX-018 Data Retention](mx-018-data-retention.md) ·
[ST-19 Two-Plane Architecture](../standards/st-19-two-plane-architecture.md) ·
[ST-16 Security Architecture](../standards/st-16-security-architecture.md) ·
[DS-02 Motion and Attention](../design/ds-02-motion-and-attention.md)

*Curated by Maher. MetaX held no identity until this release. It now holds the minimum required
for a credential to mean something, and nothing beyond it.*
