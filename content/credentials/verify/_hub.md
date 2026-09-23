---
title: Verification
eyebrow: CREDENTIALS · VERIFICATION
deck: The public surface — verify a credential, how verification works, what it does not prove, and the revocation list.
status: live
evidence: E2
version: v2026.10.1
reviewed: 2026-09-01
jsonld: WebPage
up: [["Credentials","/credentials/"],["Lifecycle","/credentials/lifecycle/"]]
beside: [["The Ladder","/credentials/ladder/"],["Review","/credentials/review/"],["Lifecycle","/credentials/lifecycle/"]]
depends: [["Registry Spec","/credentials/lifecycle/registry-spec/"],["Revocation List","/credentials/verify/revocations/"]]
governs: [["Verify a Credential","/credentials/verify/lookup/"],["What It Does Not Prove","/credentials/verify/limits/"]]
deeper: ["Verify a credential","/credentials/verify/lookup/"]
sideways: ["See the lifecycle","/credentials/lifecycle/"]
---

# The public surface that makes a credential checkable by a stranger

Verification is the group that turns a credential from a private claim into a public, checkable fact. It exists because a credential no one can verify is indistinguishable from a forgery, and the estate's whole method is that claims are checkable by strangers. This group holds the lookup surface where anyone can verify a credential by its identifier, an explanation of how verification works, an honest page on what verification does not prove, and the revocation list. Its four pages are verify a credential, how verification works, what it does not prove, and the revocation list.

## Why verification is a lookup, not an act of trust

The estate's verification surface is a flat, static record store: a credential resolves to a public record showing what it certifies, its evidence class, its decay date, and its current status. Anyone can look it up without an account and without asking the holder or the estate. This converts trust into inspection — a relying party does not take the holder's word, they read the record. And because the revocation list is part of the same surface, a verifier can see not just that a credential was issued but whether it has since been withdrawn, which is the check most credential systems omit.

## The map — what lives in this group

**Verify a Credential** is the lookup — enter an identifier, see the record. **How Verification Works** explains the static-record mechanism and why it needs no live database. **What It Does Not Prove** states, honestly, the limits of a verified credential. **Revocation List** publishes withdrawn credentials so a verifier can check status, not just issuance.

## The worked instance — the "what it does not prove" page

The "what it does not prove" page is the group's clearest instance of the estate's honesty, and its most important. A verified MetaX credential proves that, on a stated date, a named reviewer judged a specific dossier to meet a published rubric. It does **not** prove present competence — competence decays, which is why the credential carries a renewal date — and it does **not** prove the holder is honest or safe to hire. Stating this plainly is not a weakness; it is what distinguishes a credential that means something narrow and true from one that implies something broad and false. A verification surface that let a credential imply more than it certifies would be committing the semantic-capture harm the License names.

## Limits of this group

Verification proves the record, not the person presenting it — it confirms the credential exists and its status, not that the holder is who they claim. It is a static record store, not a live identity system. And it certifies what was reviewed on a date, which the "what it does not prove" page states rather than lets the reader assume. This page is thin-by-nature-adjacent but carries real prose because its limits matter.

## The falsifier for this group

The group's governing claim is that public, lookup-based, revocation-aware verification carries more information than an unverifiable certificate. The refutation: if relying parties who verify a credential make no better hiring or trust decisions than those who accept an unverified certificate, the verification surface adds infrastructure without signal.

## What this group obliges

Verify a credential by its identifier rather than trusting a copy — the lookup is public and needs no permission. Check the revocation list, not just issuance: a credential can be valid at issue and revoked since. And read what verification does not prove before you rely on it to carry more than it claims — the estate is honest about the narrow, true thing a credential means.
