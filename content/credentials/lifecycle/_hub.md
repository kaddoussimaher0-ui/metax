---
title: Lifecycle
eyebrow: CREDENTIALS · LIFECYCLE
deck: A credential over time — decay and renewal, revocation grounds, the integrity report, and the registry spec that defines credentials.json.
status: live
evidence: E2
version: v2026.10.1
reviewed: 2026-09-01
jsonld: WebPage
up: [["Credentials","/credentials/"],["Review","/credentials/review/"]]
beside: [["The Ladder","/credentials/ladder/"],["Evidence & Proof","/credentials/evidence/"],["Verification","/credentials/verify/"]]
depends: [["The Decay Standard","/method/epistemics/decay-standard/"],["Registry Spec","/credentials/lifecycle/registry-spec/"]]
governs: [["Decay & Renewal","/credentials/lifecycle/renewal/"],["Revocation Grounds","/credentials/lifecycle/revocation/"]]
deeper: ["Read decay & renewal","/credentials/lifecycle/renewal/"]
sideways: ["Verify a credential","/credentials/verify/"]
---

# What happens to a credential after it is earned

Lifecycle is the group that governs a credential over time — because a credential is not a permanent fact but a dated judgement that decays, can be renewed, and can be revoked. It exists because most credentials pretend to be permanent, which is a quiet lie: competence fades, and a certificate that never expires certifies a past that may no longer be true. This group states how a credential decays and renews, the grounds on which it is revoked, the integrity report that tracks the system's health, and the registry spec that defines the credentials.json record. Its four pages are decay and renewal, revocation grounds, the integrity report, and the registry spec.

## Why credentials decay

A credential certifies competence on a date, and competence in a fast-moving field decays. The estate makes this explicit: every credential carries a review interval implied by the decay class of what it certifies, and a credential past its interval is marked expired rather than silently trusted. This is the decay-awareness rail applied to credentials — the same discipline that dates a lesson's claims dates the credential that certifies them. Renewal is available: a holder demonstrates continued competence and the credential's date resets. An expired credential is not revoked; it is simply no longer current, and verification shows the difference.

## The map — what lives in this group

**Decay & Renewal** states the review intervals and how a credential is renewed. **Revocation Grounds** states the conditions under which a credential is revoked — distinct from expiry, and more serious. **Integrity Report** tracks the health of the credentialing system as a whole. **Registry Spec (credentials.json)** defines the machine-readable record every credential resolves to.

## The worked instance — expiry versus revocation

The distinction between expiry and revocation is the group's clearest instance of the estate's precision. An **expired** credential is one whose review interval has passed — the holder's competence is simply no longer current, and renewal is straightforward. A **revoked** credential is one withdrawn for cause — evidence of fraud, or a violation of the terms under which it was issued — and it is far more serious. Verification shows both states distinctly, so a relying party can tell a lapsed credential from a withdrawn one. Collapsing the two, as many systems do, would either over-punish a holder who simply needs to renew or under-signal a genuine revocation.

## Limits of this group

Lifecycle governs the credential, not the holder's actual present competence, which only renewal re-checks. Revocation is a reputational and registry action, not a legal one. And the registry spec defines the record, but the record is only as accurate as the events written to it — which is why the integrity report exists to surface anomalies.

## The falsifier for this group

The group's governing claim is that decaying, renewable, revocable credentials carry more accurate information than permanent ones. The refutation: if holders of decayed-but-unrenewed credentials perform as well as current ones, the decay interval is arbitrary and adds friction without tracking real competence.

## What this group obliges

Renew before your credential lapses; an expired credential is not revoked, but verification will show it as expired. Understand the difference between expiry and revocation before you rely on a credential's status. And read the registry spec if you build on credential data — the credentials.json record is the machine-readable source of truth the verification surface reads.
