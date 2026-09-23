# METAX v2026.09.1
## Meta-Review · Corpus Adjustments · Numbering Grammar · Complete Sitemap

---

# PART A — REVIEW OF THE REVIEW

The review is good and it is worth having. It catches one real structural defect that I missed entirely, sharpens three points I had raised weakly, gets one point factually wrong, and proposes one solution that would create a maintenance problem larger than the one it solves. I'll take them in that order, because a reviewer who is right about the hardest thing deserves to be told so before being corrected on the easy ones.

## A.1 Accepted in full — the one I missed

**The prompter-succession window is a genuine defect and it is the most serious finding in the review.** ML §E.8 handles Steward succession. MX-015 handles Curator succession. AG-000 §A.2 vests all agent authority in a single authenticated channel, and AG-001 §1.5 makes delegation per-task, published by the Curator, and non-standing. Every one of those provisions is individually correct. Together they produce a state in which an incapacitated Curator cannot delegate, no successor can inherit prompter authority, and the agent layer freezes with no lawful path to unfreeze. Freezing is the correct failure mode. Being unable to recover from it is not.

The reviewer's phrasing — "agents enter read-only archival mode and a named successor inherits prompter authority only through a pre-committed credential" — is essentially the right design. I have drafted it as AG-000 §A.6 in Part B, with two additions the review did not specify: a dual-control requirement so that no single successor can self-declare incapacity, and a hard ceiling on what degraded-mode authority can ever reach, so that the recovery mechanism cannot become a bypass of §A.3.

That is the finding I would have wanted a reviewer to find. It is also, uncomfortably, an instance of exactly the failure MX-015 was written to prevent, appearing one layer below where I looked for it.

## A.2 Accepted with refinement

**Two-track enforceability.** I raised this in Part I §I.3 as an internal tension between §1.5 and §C.9.5 and proposed drafting to resolve it. The review is right that resolving it inside the license text is insufficient — the risk is that an adopter's counsel reads §C.9 as a use restriction, prices in litigation exposure, and declines. The fix is presentational and belongs on the public license page: a plain table stating, per condition, what is asserted as a contractual condition of use, what is asserted as a condition of representation and association, and what is asserted as a moral norm with no enforcement claim at all. Drafted in B.5.

**Foundational-work designation.** My rebuttable presumption plus two-of-five characteristics test bounds the fallback. The review's versioned public designation list solves a different problem — predictability for a party evaluating adoption. Both are needed, and they compose: the list is the operative designation, the test governs disputes about works not yet listed. Drafted in B.6.

**Determination publication.** Accepted without reservation. Extending the Integrity Report habit to licensing determinations is the same argument as publishing revocation counts, applied one layer up.

**Placeholders as launch blocker.** Correct, and I should have flagged it with that word. An unsigned charter whose entire architecture rests on accountable authorship is self-refuting. Nothing public ships before Exhibit 1's fields are filled and the text is signed against a published key fingerprint.

**Privacy classification boundary.** MX-003 §3.4 enumerates the three public categories, which is more than the review credits, but it states the exceptions without stating the default rule. A canon sentence is cheap and closes the ambiguity. Drafted in B.2.

## A.3 Accepted in substance, corrected in content

**Language hierarchy.** The gap is real; the proposed rule is not quite safe. "English is canonical for legal instruments" is a defensible drafting choice, but MetaX serves an Arabic-primary audience, and several jurisdictions apply mandatory-language rules to consumer-facing terms that a prevailing-text clause cannot override. Declaring English canonical without that carve-out creates a consumer-protection exposure in precisely the markets the Arabic corpus is built for.

The corrected rule has four limbs rather than two: Arabic is authoritative for the Meta-X and BCIA book libraries and for the Lexicon, because those were authored in Arabic and the English is derivative; English is authoritative for the License and the MX governing instruments, save that consumer-facing terms are authoritative in the reader's own language where mandatory local law so requires; each instrument states its own prevailing text on its face rather than relying on a global rule; and a divergence between an authoritative text and its translation is a defect that enters the Corrections Log rather than a matter for interpretation. Drafted in B.3.

## A.4 Corrected — the review is wrong on the facts

**"The corpus never mentions the BCIA remediation gates."** It does, twice and prominently. MX-001 §1.2 states that BCIA "is currently under remediation, it publishes its own critical audit, and it maintains seven open defects in public with owners and dates." MX-014 §14.4 enumerates all seven by name — the duplicated Volume I, the taxonomy conflict, the AMN/LPN contradiction, the universality question, the stewardship tension, the unverified quantitative claims, and the missing exclusion — states that the formal notation is frozen and must not be taught or cited, and prohibits any TopTech course from presenting BCIA's contested claims as settled.

What is genuinely missing is narrower and worth fixing: neither passage carries the canonical URL of the status page, so a reader cannot navigate from the governing document to the live gate status. That is a one-line addition, not a gap in canon. I flag the correction because accepting a phantom gap would have added redundant normative text to a corpus whose principal risk is already length.

## A.5 Rejected, with a better alternative

**"MX-002 §2.6 must mirror ML §C.10 exactly."** Exact textual mirroring between a license and a terms-of-service document is a known drafting failure mode. Two copies of a normative provision drift at the first amendment, and the drift is invisible until someone exploits it — which is the very seam the review is trying to close. The correct structure is single-source: §C.10 of the License is the sole normative text on machine reading; MX-002 §2.6 incorporates it by reference, states only the operative subset a reader needs at the point of use, carries a conspicuous notice that it is a summary and not the operative text, and is governed by an explicit conflict rule resolving to the License. SENTINEL then enforces the relationship mechanically by failing the build if the summary asserts any obligation absent from the source. Drafted in B.4.

**The reserved-block numbering scheme.** The proposal — S051–S099 for Branch B expansion, S100–S149 for new operator domains, S150–S199 for Branch D continuation — is a familiar pattern and it fails in a familiar way. Reserved blocks require predicting the relative growth rate of each branch at the moment of allocation. Growth is never proportional to the reservation, so one block exhausts while three sit empty, and the response is always the same: a second, uglier allocation appended somewhere else. Within five years the scheme encodes the founder's guesses from year one rather than the corpus's actual shape.

The failure is avoidable because it is caused by an unnecessary coupling. Branch membership is metadata about a series. It is not part of the series' identity. A series can plausibly move branches — an operator-craft series that deepens into engineering, an Ascent rung that becomes foundational to Branch B — and under block allocation that move is either forbidden or produces a number that lies about where the series lives.

The alternative is in Part C: a single monotonic counter allocating branch-agnostic identifiers, branch as a front-matter field, and URLs that do not encode branch at all. It gives unbounded growth in every direction, permits rebranching without renumbering, and makes the reviewer's two survival rules — immortal numbers, computed counts — strictly easier to enforce.

## A.6 One note on the reconciliation table

Several artefacts in the review's section 3 and 4 — the v2026.08.13 Arabic TOC realignment, the v2026.08.14 full-text corpus adjustments, the P0–P3 proof ladder, the badge tier from v2026.08.3 — are the reviewer's own outputs and are not documents I have in front of me. I can specify the reconciliation rule; I cannot verify the edit. Two of the conflicts it identifies also dissolve on inspection: MX-005 §5.1 already names the tracks Series Practitioner, Professional Operator, Master-Fellow, and MetaX Contributor, so there is no naming divergence to arbitrate, only a question of whether the fourth track and the earlier badge tier survive. Both questions are answered in B.7 and B.8.

---

# PART B — ADJUSTMENTS

Nine drafted amendments. Each is additive; no existing normative sentence is altered except where marked.

## B.1 New — AG-000 §A.6: Degraded Mode and Prompter Succession

> **A.6.1 The problem this Section solves.** §A.2 vests prompter authority in one person. §A.3 places certain authorities beyond every agent. MX-015 and License §E.8 govern the succession of the Curator and the Steward. None of these provisions supplies a lawful path by which agent operations resume if the Curator becomes unavailable. This Section supplies it, and is deliberately constrained so that it cannot become a route around §A.3.
>
> **A.6.2 Automatic degraded mode.** On any of (a) the Curator's declared unavailability, (b) 45 consecutive days without an authenticated instruction, or (c) a signed incapacity declaration under §A.6.4, every agent enters **Degraded Mode** automatically. In Degraded Mode an agent may perform only read, validate, and report operations: SENTINEL may continue to fail builds, VERIFIER may continue to check claims already in the corpus, and CLERK may continue to append to the Anomaly Register. No agent may generate publishable prose, and no artefact produced in Degraded Mode may enter the corpus.
>
> **A.6.3 Pre-committed succession credential.** The Curator shall deposit, and maintain in the Registry, a sealed prompter-succession instrument naming a Successor Prompter and one alternate, the authentication material by which each will assume the channel, and the conditions of accession. The instrument is signed, its hash is published, and its contents are disclosed only on accession.
>
> **A.6.4 Dual control on incapacity.** Incapacity may not be declared by the Successor Prompter alone. A declaration requires the concurrent signatures of the named ethics reviewer and one Level 5 institution representative, or a competent medical or judicial determination. A declaration made without dual control is void and the agents remain in Degraded Mode.
>
> **A.6.5 Accession and its ceiling.** On valid accession, the Successor Prompter assumes prompter authority under §A.2 and the agents leave Degraded Mode. The Successor Prompter **may not**, in any circumstance: exercise any authority reserved by §A.3; amend AG-000 §A.2, §A.3, or this Section; amend Charter §0.4 or §0.5; issue any Determination; or publish under Maher's name. These limits survive accession permanently and are not curable by any subsequent instrument.
>
> **A.6.6 Reversion.** If the Curator returns to capacity, prompter authority reverts on his signed notice. Every instruction issued during the succession period remains in the log, permanently, attributed to the Successor Prompter.
>
> **A.6.7 Failure of succession.** If no Successor Prompter accedes within 180 days of entry into Degraded Mode, the agent layer is retired. Kernels and role charters remain published as historical record. The corpus continues to be readable and verifiable under MX-015; it simply stops being generated. This is the intended outcome, not a failure state.

## B.2 New — MX-003 §3.0: Data Classification Canon

> Public by design applies to curriculum, governance, standards, audits, determinations, and the factual registers of credentials and academies. Learner evidence, review notes, reviewer deliberations, appeals correspondence, escrowed identity, and all personal data are **private by default** and become public only by the data subject's explicit, specific, and prospectively revocable written consent. Where a document could be read as falling in both categories, it is private. This rule prevails over any contrary implication elsewhere in the corpus.

## B.3 New — MX-001 §1.5-bis: Language Authority

> **(a)** Arabic is the authoritative text of the Meta-X layer library, the BCIA book library, and the Lexicon. English editions of those works are translations, and a divergence is resolved in favour of the Arabic.
>
> **(b)** English is the authoritative text of Maher's License and of the MX governing instruments, **except** that where mandatory law in a reader's jurisdiction requires consumer-facing terms to be authoritative in a specified language, that language governs for that reader to the extent of the requirement.
>
> **(c)** Every instrument states its own prevailing text on its face. This general rule applies only where an instrument is silent.
>
> **(d)** A divergence between an authoritative text and any translation is a **defect**. It enters the Corrections Log with a target date and is not resolved by interpretation, by preference, or by silence.

## B.4 Revised — MX-002 §2.6: Machine Reading (single-source form)

> **§C.10 of Maher's License is the sole operative text governing machine reading, model training, retrieval, and synthetic derivation of MetaX materials. This Section is a summary for the convenience of readers and creates no obligation not found in §C.10. In any conflict, §C.10 governs.**
>
> In summary: training, indexing, retrieval, and evaluation are permitted and encouraged. Provenance must be retained where technically practicable. Outputs must not be configured to present MetaX material as originating elsewhere. No system may be presented as speaking for MetaX or for Maher; a system may truthfully state that it was trained on or can cite MetaX material. Using a model principally to strip attribution or version identity is a breach.
>
> *Build rule:* SENTINEL fails the build if this Section asserts any obligation absent from the current §C.10, or omits any obligation §C.10 marks as summary-required. The two texts cannot drift.

## B.5 New — public license page component: the Two-Track Table

Published at `metax.academy/license/enforceability/`, and mirrored on the Registry license page.

| Provision | Asserted as a condition of **use** (contractual) | Asserted as a condition of **representation and association** | Asserted as a **moral norm only** |
|---|---|---|---|
| §6 Attribution, §6-bis integrity | Yes, where forum enforces | Yes | — |
| §B.6 Source availability | Yes | Yes | — |
| §C.1–C.5 Ethical conditions | Reinforcing only, per §1.5 | Yes | Where forum declines |
| §C.9 Core Riba | Yes, to the maximum any forum enforces | **Yes, universally and independently** | — |
| §C.10 Machine reading | Yes | Yes | — |
| Part G Charter conditions | No | Yes | Yes |

> **Read this honestly.** Where a column says "reinforcing only," MetaX is telling you that a court may decline to enforce that provision as a limit on your conduct, and that MetaX has no intention of pretending otherwise. What survives everywhere is the right to say your work is ML-licensed. That right is the sanction. Publishing this table is required by *Sidq* and is the reason no adopter should need to reverse-engineer our enforcement posture from clause structure.

## B.6 New — License §2.2 addendum and public Designation List

> The Steward maintains a versioned **Designation List** in the Registry enumerating every Work designated as one of Foundational Character. Designation is effective on publication in the List and is prospective. The two-of-five characteristics test governs only disputes concerning Works not on the List. A Work removed from the List ceases to be foundational prospectively; Determinations already issued stand as historical record.

Initial List: the MetaX Charter (MX-000); the Meta-X layer library, ten volumes; the BCIA corpus, all series; the Lexicon; the D1–D5 rubric; the Limits & Bridge Standard; Maher's License itself.

## B.7 Resolved — the badge tier

The completion badge is **not a credential** and never enters the registry, the verifier, or the Integrity Report counts. It is a machine-readable completion marker asserting that a person finished a series, asserting nothing about assessment. It is renamed **Completion Marker** corpus-wide to remove the implication, it may not be displayed using credential typography or the credential badge shape, and MX-005 §5.1 is amended to say so in one sentence. The four credential tracks are unchanged.

## B.8 Resolved — the proof ladder

Four rungs, replacing my three: **P0 Self-report** — accepted for context only, never for an outcome claim. **P1 Artefact** — the thing itself, inspectable. **P2 Instrumented evidence** — the artefact plus a measurement whose method is disclosed. **P3 Third-party verification** — an independent party attests. Any outcome claim carrying a number requires P3. MX-005 §5.3 is amended accordingly, and the review's P0–P3 naming is adopted because it is better than mine.

## B.9 New — MX-001 §1.2 and MX-014 §14.4 pointer

Both passages gain the sentence: *"Live gate status, defect owners, and target dates are published at `https://bcia.metax.academy/status/` and are updated on every release."*

---

# PART C — IDENTIFIER AND URL GRAMMAR

This is the part that makes the sitemap infinite. Six rules.

**Rule 1 — One monotonic counter.** Series identifiers are allocated `S001, S002, S003 …` from a single counter in the registry, with no branch semantics, no reserved blocks, and no gaps. `S001`–`S050` are the current canon. `S051` is the next allocation regardless of which branch requests it. There is no ceiling and no exhaustion condition.

**Rule 2 — Numbers are immortal.** A number, once allocated, is never reused, never reassigned, and never freed. A retired series keeps its number and its URL forever with `status: retired` and a pointer to whatever replaced it. A superseded series keeps its number and gains a superseded header.

**Rule 3 — Branch is metadata, not identity.** Branch membership lives in front matter. A series may change branch by changing one field; no URL moves, no redirect is written, no number changes. The branch index pages regenerate from the field at the next build. This is the single decision that makes the whole scheme survive a decade.

**Rule 4 — Canonical URLs are branch-free.** The canonical address of a series is `toptech.metax.academy/s/{id}-{slug}/`. Branch pages at `/b/{letter}/` are indexes that link to canonical addresses. A series appearing in two branch indexes has one canonical URL, one JSON-LD record, and no duplicate-content problem.

**Rule 5 — Families for non-series objects.** Books use `bk-{family}-{NNN}` where family is `mx` for the Meta-X layer library, `bx` for BCIA, `cv` for Codex Vitae, and any future family gets the next two-letter code. Corpus instruments use `MX-NNN`, agent charters `AG-NNN`, standards `ST-NN`, rubric documents `RB-NN`, credentials `cr-{track}-{NNNNNN}`, determinations `det-{YYYY}-{NNN}`, defects `def-{pillar}-{NNN}`, lexicon terms `t-{root}-{NN}`. Series and book namespaces cannot collide because their prefixes differ.

**Rule 6 — Every count is computed.** No index page contains a typed number. The generator resolves counts from front matter or fails the build.

**Slug stability.** The slug in a URL is decorative for humans; the identifier is authoritative for machines. A slug change emits a 301 from the old form and both forms resolve permanently. `catalog.json` carries both.

---

# PART D — THE SITEMAP

Presented in two layers, because that is how a sitemap for an unbounded corpus is actually specified. **D.1** enumerates every fixed route literally — routes that exist regardless of how much content is added. **D.2** gives the parametric patterns that expand into the thousands, with cardinality formulas and worked examples. **D.3** gives the count math. Enumerating twelve thousand literal URLs in prose would be unmaintainable the day after content is added; the pattern grammar is the deliverable that survives growth.

Every route below exists in both `en` and `ar` unless marked **[EN]**. Arabic mirrors carry `/ar/` after the host.

---

## D.1 — Fixed routes

### D.1.1 `metax.academy` — the hub

| URL | Description |
|---|---|
| `/` | Universe home. Three pillars, the Shared DNA with its four operational tests, the founding axiom, honest state-of-the-universe counts, and Maher's note. |
| `/start/` | The six-question routing diagnostic. Terminal nodes each name one series, an hour estimate, and the prerequisite most likely missing. Works with JavaScript disabled. |
| `/search/` | Prebuilt static index across all eight properties, faceted by pillar, branch, status, audience, language, evidence class. |
| `/menu/` | Full expanded navigation as a single page. The no-JavaScript fallback target for the mega-menu and a genuine site index. |
| `/404/` | Not-found page routing to the four visitor intents. States that nothing is silently deleted and points to the archive. |
| `/sitemap/` | Human-readable sitemap generated from `tree.json`, grouped by property. |
| `/about/` | About index. |
| `/about/universe/` | What MetaX is, the eight properties, the three pillars, and what is finished versus not. |
| `/about/dna/` | The four inherited properties, each with the operational test that proves compliance. |
| `/about/curator/` | Maher: what he authored, what he governs, the three powers placed beyond his reach, and the published bus-factor position. |
| `/about/mission/` | The standard of mastery, defined operationally as judgement tested under scrutiny. |
| `/about/what-metax-is-not/` | Not accredited, not an employer, not a laboratory, not open source in the OSI sense, not a neutral platform. |
| `/about/governance/` | Roles, the ethics veto, the review board, decision rights, and who may overrule whom. |
| `/about/static/` | The Static Principle: static hosting as an epistemic commitment, with the three dynamic exceptions enumerated. |
| `/about/succession/` | MX-015 in public form: the succession instrument, the Continuity Register, and the ten-year archival prefunding. |
| `/about/continuity-register/` | Every remaining dependency on the Curator, as a dated defect list with owners. |
| `/about/funding/` | Revenue sources, the no-sponsorship rule, and the disclosure commitment. |
| `/about/conflicts/` | MX-019 in public form, including the Curator's own declared conflicts. |
| `/about/accessibility/` | MX-010: the WCAG 2.2 AA commitments and the published list of known gaps with target dates. |
| `/about/security/` | MX-011: posture, disclosure process, scope, signing, and the three dynamic exceptions. |
| `/about/security/txt/` | Human-readable companion to `/.well-known/security.txt`. |
| `/about/ai/` | MX-007: where AI is used, where it is forbidden absolutely, disclosure format, and the impersonation rule. |
| `/about/contact/` | Contact routes by purpose: support, security, appeals, press, legal, accessibility. |
| `/about/press/` | Press kit, marks, approved descriptions, and what may not be claimed. |
| `/about/changelog/` | Hub-scoped changelog. |
| `/charter/` | MX-000, the constitutional document, printed whole. |
| `/charter/pillars/` | Charter §0.2: the three pillars and their ordering. |
| `/charter/dna/` | Charter §0.3. |
| `/charter/refusals/` | Charter §0.4: the three absolute refusals, verbatim, never collapsed. |
| `/charter/reserved-powers/` | Charter §0.5: the three powers beyond the Curator, and why each is the evidence for the others. |
| `/charter/amendment/` | Charter §0.6: how the Charter changes and what may never be weakened. |
| `/license/` | Maher's License landing page: what it is, why it is not OSI, and how to apply it. |
| `/license/ml-2-1/` | ML-2.1 full text. **[EN authoritative]** |
| `/license/ml-2-0/` | ML-2.0, superseded, retained permanently with a superseded header. |
| `/license/ml-1-1/` · `/license/ml-1-0/` | Prior versions, retained; still valid for works licensed under them. |
| `/license/plain-language/` | The reader's edition: what you may and may not do, in ordinary sentences. Expressly non-operative. |
| `/license/enforceability/` | The Two-Track Table (B.5) with the honest reading. |
| `/license/riba/` | §C.9 explained: the four cumulative elements, the seven exclusions, and the presumption toward permission at the boundary. |
| `/license/riba/safe-harbour/` | Non-binding pre-classified fact patterns so counsel need not rebuild the analysis for every ordinary payment integration. |
| `/license/machine-reading/` | §C.10 explained: what is permitted, the provenance obligation, anti-laundering, and the impersonation bar. |
| `/license/attribution/` | §6-bis: modification labelling, the repudiation right, and the version-identifier rule. |
| `/license/foundational-works/` | Part G explained, plus the two-of-five test. |
| `/license/designation-list/` | The versioned list of Works designated as Foundational Character. |
| `/license/steward/` | Steward identity, key fingerprint, contact, and the signed succession instrument hash. |
| `/license/registry/` | The Registry: canonical text, mirrors, signing, and the 180-day continuity rule. |
| `/license/registry/mirrors/` | The three independent mirrors, one content-addressed, one jurisdictionally distinct. |
| `/license/determinations/` | Index of all Compatibility and Charter Conformity Determinations. |
| `/license/determinations/compatibility/` | Part D determinations: the four-test rubric, the three tiers, and every evaluated license with recorded pros and cons. |
| `/license/determinations/charter/` | Part G determinations, each with reasons mapped to §G.2 and the affected party's response. |
| `/license/evaluated-licenses/` | The evaluated-licenses list, faceted by tier. |
| `/license/how-to-apply/` | Exhibits 1, 2, 3 with copyable notices. |
| `/license/faq/` | Adoption questions, honestly answered, including the ones that discourage adoption. |
| `/license/changelog/` | License version history with diffs and reasons. |
| `/credentials/` | The ladder: four tracks, what each asserts and what it does not. |
| `/credentials/practitioner/` · `/professional/` · `/master-fellow/` · `/contributor/` | One page per track: evidence required, portfolio scope, review depth, renewal, revocation triggers, published acceptance rate. |
| `/credentials/completion-marker/` | The Completion Marker: what it is, why it is not a credential, and the display restrictions. |
| `/credentials/guide/` | The learner-facing end-to-end guide with a worked timeline. |
| `/credentials/pack/` | The submission pack index. |
| `/credentials/templates/` | Template index. |
| `/credentials/templates/dossier/` · `/competency-map/` · `/evidence-log/` · `/role-statement/` · `/reflection/` · `/ai-disclosure/` · `/checklist/` | Seven templates, each with blank, filled, and annotated failing specimens. |
| `/credentials/proof/` | The four-rung proof ladder, P0 through P3, and what each rung is accepted for. |
| `/credentials/on-request/` | ON REQUEST evidence: when it is permitted, the minimal-and-justified test, and the token-gated disclosure mechanism. |
| `/credentials/rubric/` | The frozen D1–D5 rubric, with the void prior scheme linked in the archive. |
| `/credentials/rubric/d1/` … `/d5/` | One page per dimension: definition, what evidences it, the four performance levels, and common misreadings. |
| `/credentials/reviewers/` | Reviewer index. |
| `/credentials/reviewers/handbook/` | The Reviewer Handbook. |
| `/credentials/reviewers/calibration/` | Calibration process, cadence, and the published calibration record. |
| `/credentials/reviewers/apply/` | Reviewer application and eligibility. |
| `/credentials/reviewers/conflicts/` | Reviewer conflict rules and published declarations index. |
| `/credentials/operations/` | The assessment operations layer: intake, assignment, SLA, decision, notification. |
| `/credentials/registry/` | Registry specification: identifier format, fields, JSON-LD shape, and the public/private boundary. |
| `/credentials/appeals/` | MX-016 applied to assessment: grounds, timeline, panel composition, outcomes. |
| `/credentials/integrity/` | Annual Integrity Report index. |
| `/credentials/integrity/{year}/` | Per-year report: issued, rejected, expired, revoked, appeals filed and upheld, agent refusal aggregates. |
| `/credentials/fees/` | What a fee buys and what it does not. Rejection rates as the evidence. |
| `/legal/` | Legal index. |
| `/legal/terms/` | MX-002, full text. |
| `/legal/privacy/` | MX-003, full text. |
| `/legal/privacy/processors/` | The versioned processor register: name, jurisdiction, function. |
| `/legal/privacy/retention/` | MX-018, the retention schedule as a table. |
| `/legal/privacy/rights/` | How to exercise access, rectification, erasure, portability, objection, and the two honest limits. |
| `/legal/cookies/` | The short one: no cookies on public reading, what the three exceptions set, and why. |
| `/legal/advertising/` | MX-009: the one-slot rule, the excluded page classes, and the disclosure commitment. |
| `/legal/trademark/` | MX-017: permitted uses, prohibited uses, and the §5-bis defensive termination rule. |
| `/legal/moderation/` | MX-008: prohibited content, the knowledge standard, process, sanctions, and the transparency report. |
| `/legal/moderation/report/` | How to report, what happens, and the 24-hour escalation for Charter §0.4. |
| `/legal/appeals/` | MX-016 in full. |
| `/legal/dmca/` | Copyright complaint route and counter-notice. |
| `/legal/accessibility-statement/` | The formal statement. |
| `/legal/archive/` | Index of superseded legal instruments, each at its original URL with a superseded header. |
| `/corpus/` | The MX document set index. |
| `/corpus/mx-000/` … `/corpus/mx-019/` | Twenty corpus instruments, each at its own permanent URL, versioned, printable, diffable. |
| `/corpus/agents/` | Agent instrument index, public-facing. |
| `/corpus/agents/ag-000/` … `/ag-010/` | Eleven agent charters published in full. |
| `/corpus/agents/kernel/` | The standing system prompt, published verbatim. Publishing it is the point. |
| `/corpus/agents/roster/` | The eight roles and the declared pipelines. |
| `/corpus/agents/refusal-register/` | Aggregate refusal and escalation statistics. |
| `/corpus/agents/evaluation/` | AG-010 results in aggregate, per quarter. |
| `/corpus/agents/degraded-mode/` | AG-000 §A.6 explained: what freezes, who can unfreeze, and the ceiling on succession authority. |

### D.1.2 `toptech.metax.academy` — the curriculum

| URL | Description |
|---|---|
| `/` | Pillar home: five branches, the founding axioms, why every series now teaches its limits, build-generated counts. |
| `/start/` | Curriculum-scoped entry routing. |
| `/catalog/` | The full filterable catalog of every series across every branch. |
| `/catalog/live/` · `/planned/` · `/preview/` · `/gated/` · `/retired/` | Prebuilt status-filtered views so filtering works without JavaScript. |
| `/catalog/by-branch/` · `/by-surface/` · `/by-hours/` · `/by-prerequisite/` | Prebuilt facet views. |
| `/b/` | Branch index. |
| `/b/a/` | Branch A, Operator Craft: series grouped by the nine surfaces. |
| `/b/b/` | Branch B, Engineering & IT, with the placement gate first. |
| `/b/c/` | Branch C, Institution Building. |
| `/b/d/` | Branch D, the Meta-X Ascent, as a ten-rung ladder. |
| `/b/e/` | Branch E, BCIA Gateway. Gated, with live gate status. |
| `/b/{letter}/` | Every future branch, allocated the next Latin letter. Unbounded. |
| `/b/b/gate/` | Course 0, the placement gate: twelve items, four verdicts, no consolation tier. |
| `/surfaces/` | The nine surfaces conceptual map. The property's primary answer-engine asset. |
| `/surfaces/{surface}/` | Nine pages: owned-audience, answer-engines, commerce-agents, first-party-data, monetization, trust, community, growth, platform-migration. |
| `/paths/` | Five operator archetypes. |
| `/paths/{archetype}/` | Per-archetype: ordered series list, hours, the two series this archetype skips and regrets, characteristic failure mode. |
| `/rails/` | The six Companion Rails. |
| `/rails/{rail}/` | One page per rail with the rubric dimension it feeds. |
| `/arc/` | The Cognitive Arc, with one lesson rendered as a full specimen. |
| `/standard/` | Standards index. |
| `/standard/limits-bridge/` | The Limits & Bridge Standard: four limit classes, the three-sentence bridge contract, the rubric consequence. |
| `/standard/falsifiability/` | Nulls, decision rules, and why a claim card without a falsifier fails the build. |
| `/standard/decay/` | The three decay classes and their review intervals. |
| `/standard/objections/` | The objections contract and the total-victory flag. |
| `/standard/unit-economics/` | When a commercial claim requires unit economics and what form they take. |
| `/standard/kill-criteria/` | Writing a condition under which you stop. |
| `/ascent/` | The Ascent ladder home. |
| `/ascent/limits/` | The Limits of Silicon: five limit classes, counter-arguments, and the refused inference. |
| `/ascent/limits/{class}/` | Thermal, energetic, economic, environmental, philosophical. |
| `/ascent/exclusions/` | What Ascent is not. No CTA except the Charter. |
| `/ascent/paths/` | Blue, Green, Gold reading paths. |
| `/ascent/paths/{colour}/` | Per-path hours, rung order, and what it deliberately omits. |
| `/ascent/status/` | Per-rung production status and the questions the curriculum cannot yet answer. |
| `/ascent/bridge/` | The transition document: the ladder map, the contribution table, the seven gates. |
| `/toptech-to-bcia/` | Public form of MX-TRANSITION: why the bridge exists, and the gate that keeps it shut. |
| `/changelog/` | Curriculum changelog. |
| `/glossary/` | Curriculum-scoped term index resolving to the Lexicon. |

### D.1.3 `bcia.metax.academy` — the research umbrella

| URL | Description |
|---|---|
| `/` | What BCIA is and is not, in two symmetrical columns, with the remediation statement above the fold. |
| `/status/` | The seven open defects with severity, owner, target date, and current state. The canonical gate page. |
| `/status/gate/{n}/` | One page per gate, 1 through 7, with its remediation history. |
| `/audit/` | The full critical audit, unedited, dated, versioned, with a preface stating why it is public. |
| `/audit/finding/{n}/` | Each numbered finding at its own permanent, citable URL with evidence, recommendation, response, and state. |
| `/audit/{year}/` | Successive annual audits, retained. |
| `/charter/` | The BCIA charter and its binding limits. |
| `/charter/human-cell-exclusion/` | Own H2, own permalink, full reasoning, and the logged S1 defect that one version omitted it. |
| `/charter/exclusions/` | The full exclusion set, verbatim. |
| `/document-zero/` | The seven binding bases, printed whole and annotated with what each forbids. |
| `/document-zero/basis/{n}/` | One permalink per basis. |
| `/governance/` | The Cloister and Atrium: roles, thresholds, the ethics veto, disclosure duty, appeal route. |
| `/governance/ethics-veto/` | How the veto works and why there is no appeal to the Curator. |
| `/governance/succession/` | The "after Maher" principle applied to the research programme. |
| `/readiness/` | The publication readiness protocol and the three-pass review. |
| `/notation/` | Formal notation, frozen, with the banner and the side-by-side conflicting definitions. |
| `/notation/amn/` · `/notation/lpn/` · `/notation/bsn/` | One page per contested symbol showing every definition, its source file, and resolution status. |
| `/series/` | The eight series index. |
| `/series/foundations/` · `/roots/` · `/tools/` · `/field/` · `/education/` · `/wisdom/` · `/vision/` · `/codex-vitae/` | One page per series: founding question, volumes declared, written, contested, and the issues specific to it. Tools carries the no-laboratory-instruction statement. |
| `/roadmap/` | Every volume with declared status, actual status, and blocking issue. |
| `/roadmap/volume-i-duplication/` | The duplicated Volume I in detail: both texts, the divergence, the resolution path. |
| `/taxonomy/` | The taxonomy conflict: the D1–D10 scheme, the layers the books actually self-declare, and the evidence for each. |
| `/open-problems/` | Numbered, citable open problems, each with the evidence that would close it. |
| `/open-problems/{n}/` | One permalink per problem, with the submission route for rebuttal. |
| `/contribute/` | The contribution table mapping TopTech competence to BCIA need. |
| `/contribute/credential/` | The MetaX Contributor track and its explicit non-authority over doctrine. |
| `/contribute/submit/` | How to submit a rebuttal, a correction, or a terminology proposal. |
| `/bibliography/` | The canonical source of truth for citations across all pillars, classed and dated. |
| `/gateway/` | Branch E: what S048–S050 will contain, the live gate checklist, and notification signup. |
| `/scope-limits/` | What this programme cannot currently answer. |
| `/refused-inference/` | Why MetaX will not argue from "silicon has ceilings" to "therefore biology." |
| `/changelog/` | BCIA changelog. |

### D.1.4 `academies.metax.academy` — the community

| URL | Description |
|---|---|
| `/` | How the community works and the four inherited principles. |
| `/levels/` | The five-level rights table. |
| `/levels/applicant/` · `/sandbox/` · `/provisional/` · `/chartered/` · `/institution/` | Per level: entry and exit criteria, duration, issuing rights, and the most common reason applicants stall there. |
| `/requirements/` | The eleven binding groups. |
| `/requirements/curator-eligibility/` | Credential, identity, escrow, conflicts, no active revocation. |
| `/requirements/thesis-and-scope/` | The 800–2,000 word thesis and the 30% overlap rule. |
| `/requirements/curriculum-minimum/` | Six courses minimum, the arc, Limits, Bridge, capstone, null, kill criteria. |
| `/requirements/assessment/` | The frozen rubric, three calibrated reviewers, one external, twice-yearly calibration, no pay-for-pass. |
| `/requirements/governance/` | Charter, ethics veto, conflicts, moderation, succession clause. |
| `/requirements/publication/` | Version control, patch notes, changelog, no silent edits, AI disclosure, dated citations, decay. |
| `/requirements/technical/` | Own Pages project, auditable repo, WCAG 2.2 AA, chrome freshness, `academy.json`. |
| `/requirements/language/` | Primary language and the mandatory bilingual term sheet per series. |
| `/requirements/legal/` | Terms and Privacy by reference, CC BY-SA with the twelve-month clause, trademark, advertising, Riba refusal. |
| `/requirements/red-lines/` | The absolute prohibitions, rendered as an exclusion notice, never collapsed. |
| `/requirements/review/` | Annual audit, 90-day remediation, suspension, revocation, tombstone. |
| `/path/` | The four-step founding path with the artefact and realistic time per step. |
| `/apply/` | Application with the R2 upload, the review SLA, and the appeal route stated before submission. |
| `/sandbox/` | What Level 2 gives you and its constraints. |
| `/directory/` | Every member academy, including suspended and revoked, generated from manifests. |
| `/directory/{level}/` | Prebuilt level-filtered views. |
| `/audits/` | Index of all academy audit reports. |
| `/technical/` | Curator technical guide. |
| `/technical/academy-json/` | The manifest schema with a validator and worked example. |
| `/technical/chrome/` | Consuming the shared header, nav, footer, and stamp partials at build time. |
| `/technical/accessibility/` | The curator accessibility checklist. |
| `/technical/deploy/` | Pages project setup and the deployment-equals-publication rule. |
| `/terms/` | MX-004, Terms of Top Levels, full text. |
| `/terms/annex-a/` | The technical requirements annex. |
| `/privacy/` | Community-scoped privacy application. |
| `/moderation/` | Community moderation and the enforcement ladder. |
| `/enforcement/` | Advisory note through revocation, each step published and appealable. |
| `/tombstones/` | Index of revoked academies, retained permanently and stated dignifiedly. |
| `/changelog/` | Community changelog. |

### D.1.5 `verify.metax.academy` — the verifier

| URL | Description |
|---|---|
| `/` | Credential lookup. Three unambiguous states and an explicit never-issued response. |
| `/how/` | How verification works, what is signed, and what a verification does and does not assert. |
| `/revocations/` | The public revocation list, human-readable. |
| `/revocations/statuslist.json` | The signed StatusList2021 document. |
| `/offline/` | The signed offline verification bundle for use when the verifier is unavailable. |
| `/keys/` | Signing keys and fingerprints, with rotation history. |
| `/spec/` | The verification specification for third-party implementers. |
| `/{credential-id}/` | One pre-rendered static page per issued credential. Unbounded. |

### D.1.6 `library.metax.academy` — the reference library

| URL | Description |
|---|---|
| `/` | The Stack Explainer: how curriculum, assessment, credentialing and registry fit together. |
| `/layers/` | Layer spec index. |
| `/layers/credentialing/` · `/assessment-operations/` · `/registry-verifier/` | The three layer specifications, versioned and diffable. |
| `/authoring/` | Authoring standards index. |
| `/authoring/generation-prompt/` | The master course series generation prompt, with the mandatory Limits and Bridge outputs. |
| `/authoring/style-guide/` | The publishing style guide, including the Arabic discipline. |
| `/authoring/style-guide/arabic/` | Vocalisation rules, numeral form, punctuation, citation form. |
| `/authoring/three-pass-review/` | Language, then science, then ethics, and why merging them destroys the third. |
| `/authoring/symbols/` | The closed glyph set and its fixed meanings. |
| `/authoring/front-matter/` | The unified schema with a validator. |
| `/authoring/component-library/` | Every `mx-*` component with anatomy, variables, states, and accessibility contract. |
| `/authoring/component-library/{component}/` | One page per component. Currently ~55, unbounded. |
| `/books/` | The book library index across all families. |
| `/books/mx/` | The Meta-X layer library, ten volumes. |
| `/books/bx/` | The BCIA library. |
| `/books/cv/` | Codex Vitae. |
| `/record/` | The Record index. |
| `/record/changelog/` | Universe-wide changelog, reverse chronological. |
| `/record/changelog/{version}/` | One permalink per release with diff, reasons, and what it invalidates. |
| `/record/corrections/` | The Corrections Log. |
| `/record/corrections/{id}/` | One permalink per correction. |
| `/record/verification/` | The Verification Log tracking the age of every `[VERIFY]` tag. |
| `/record/archive/` | Every superseded document at its original URL with a superseded header. |
| `/record/processors/` | The versioned processor register. |
| `/record/incidents/` | Post-incident reports, published within 30 days regardless of legal requirement. |
| `/record/defects/` | The universe-wide defect register across all pillars. |
| `/record/defects/{id}/` | One permalink per defect. |
| `/downloads/` | Versioned bundles with size, checksum, manifest, licence. |
| `/downloads/{bundle}/{version}/` | Per-bundle, per-version download pages. |
| `/machine/` | Machine surfaces documented for implementers and answer engines. |
| `/machine/catalog.json` · `/credentials.json` · `/lexicon.json` · `/tree.json` · `/defects.json` | Stable machine endpoints. |

### D.1.7 `lexicon.metax.academy` — the dictionary

| URL | Description |
|---|---|
| `/` | Root-indexed bilingual dictionary home. |
| `/roots/` | Index by Arabic root. |
| `/roots/{root}/` | All terms deriving from one root, with the root's original sense. |
| `/en/` · `/ar/` | Alphabetical indexes per language. |
| `/fields/{field}/` | Terms grouped by domain or layer. |
| `/contested/` | The Contested Terms register. |
| `/contested/{term}/` | Side-by-side conflicting definitions with source files and resolution status. |
| `/submit/` | Term sheet submission route for member academies. |
| `/style/` | Lexicon entry standard: the six required fields. |
| `/changelog/` | Lexicon changelog. |
| `/t-{root}-{nn}/` | One page per term. Currently ~1,200, unbounded. |

### D.1.8 Machine and well-known surfaces **[EN]**

`/robots.txt` · `/llms.txt` · `/sitemap.xml` per host · `/sitemap-index.xml` at the hub · `/.well-known/security.txt` · `/feed.xml` and `/feed.json` for the changelog · `/corrections.xml` · `/defects.xml` · `/humans.txt` · `/opensearch.xml`.

---

## D.2 — Parametric routes

These are the patterns that expand into the thousands. Each row gives the pattern, the cardinality formula, and a worked example.

| Pattern | Cardinality | Description | Example |
|---|---|---|---|
| `toptech/s/{sid}-{slug}/` | = number of series (52 now, unbounded) | Canonical series page: claim, audience and non-audience, twelve-course arc, Limits, Bridge, capstone with null, prerequisites, objections, sources. | `/s/s014-answer-engine-mastery/` |
| `toptech/s/{sid}-{slug}/limits/` | = series | The Limits module as its own citable page across the four classes. | `/s/s014-.../limits/` |
| `toptech/s/{sid}-{slug}/bridge/` | = series | The Bridge lesson: successor named, inheritance stated, discard stated. | `/s/s014-.../bridge/` |
| `toptech/s/{sid}-{slug}/capstone/` | = series | The 90-day capstone with pre-registered hypothesis, null, and kill criteria. | `/s/s014-.../capstone/` |
| `toptech/s/{sid}-{slug}/objections/` | = series | Objections and Answers at full strength, with concessions. | `/s/s014-.../objections/` |
| `toptech/s/{sid}-{slug}/sources/` | = series | Dated source list with decay classes and last-verified dates. | `/s/s014-.../sources/` |
| `toptech/s/{sid}-{slug}/credential/` | = series | What this series contributes to which credential track and what evidence is required. | `/s/s014-.../credential/` |
| `toptech/s/{sid}/c{nn}-{slug}/` | ≈ series × 12 | Course page: six named lessons, the course artifact, and its assessment scenario. | `/s/s014/c03-entity-modelling/` |
| `toptech/s/{sid}/c{nn}/l{n}-{slug}/` | ≈ series × 12 × 6 | Lesson page across the six stations. The atomic citable unit and the corpus's principal answer-engine surface. | `/s/s014/c03/l4-lab-schema-audit/` |
| `toptech/ascent/r{nn}-{slug}/` | = rungs (10, unbounded) | Ascent rung: founding question, five stations, limits chapter in full, bridge chapter, exclusions from r06 onward. | `/ascent/r06-electron-to-cell/` |
| `toptech/ascent/r{nn}/st{n}-{slug}/` | ≈ rungs × 5 | Station pages within a rung. | `/ascent/r06/st3-membrane-logic/` |
| `library/books/{family}/{bid}-{slug}/` | = books (≈66, unbounded) | Book page: arc, chapters, limits chapter, bridge chapter, authoritative language, translation status. | `/books/mx/bk-mx-006-life-bridge/` |
| `library/books/{family}/{bid}/ch{nn}-{slug}/` | ≈ books × 12 | Chapter page with its own citation identifier. | `/books/mx/bk-mx-006/ch09-the-bridge/` |
| `lexicon/t-{root}-{nn}/` | = terms (≈1,200, unbounded) | Term entry: vocalised form, English equivalent, root and original sense, field definition, layer placement, related terms. | `/t-jsr-01/` |
| `verify/{cid}/` | = credentials issued (unbounded) | Pre-rendered credential page with JSON-LD and revocation state. | `/cr-pro-000412/` |
| `{academy}.metax.academy/*` | = academies × ~40 | Each member academy's full tree, mirroring the shared chrome and route conventions. | `sahm.metax.academy/s/a001-.../` |
| `academies/directory/{academy}/` | = academies | Directory profile: level, curator, series, last audit, status. | `/directory/sahm/` |
| `academies/audits/{academy}/{year}/` | ≈ academies × years | Dated public audit with findings and remediation state. | `/audits/sahm/2027/` |
| `bcia/audit/finding/{n}/` | = findings (unbounded) | One permalink per audit finding. | `/audit/finding/23/` |
| `bcia/open-problems/{n}/` | = problems (unbounded) | One permalink per open problem. | `/open-problems/7/` |
| `library/record/changelog/{version}/` | = releases (unbounded) | One permalink per release. | `/record/changelog/v2026.09.1/` |
| `library/record/corrections/{id}/` | = corrections (unbounded) | One permalink per correction. | `/record/corrections/c-0087/` |
| `library/record/defects/{id}/` | = defects (unbounded) | One permalink per defect across all pillars. | `/record/defects/def-bcia-003/` |
| `metax/license/determinations/{det-id}/` | = determinations (unbounded) | One permalink per Determination with reasons and the affected party's response. | `/license/determinations/det-2027-004/` |
| `toptech/catalog/{facet}/{value}/` | = facets × values | Prebuilt filtered catalog views so filtering functions without JavaScript. | `/catalog/by-surface/answer-engines/` |
| `*/ar/*` | ≈ 0.75 × all | Arabic mirror of every route with a translation, correct RTL and hreflang. | `/ar/s/s014-.../` |

---

## D.3 — Count math and growth behaviour

At the v2026.09 corpus, English only: 52 series pages, 312 series sub-pages, 624 course pages, 3,744 lesson pages, 10 rungs with 50 stations, 66 book pages with roughly 792 chapter pages, about 1,200 lexicon terms, roughly 340 fixed governance and hub routes, roughly 400 prebuilt facet and index pages, plus credentials and academies which are unbounded from day one. That is approximately **7,600 English routes** before a single credential is issued or a single academy is chartered. With Arabic mirrors at 75% coverage the figure is approximately **13,300**. Twenty chartered academies at forty pages each adds 800. Five hundred issued credentials adds 500.

The growth behaviour is what matters more than the number. Adding one series adds one series page, six sub-pages, twelve course pages and seventy-two lesson pages — ninety-one routes — and requires zero edits anywhere else, because every index that must mention it is generated from its front matter. Adding a branch adds one index page and changes one field on the series that join it. Adding a book family adds a two-letter code. Adding a language adds a mirror tree. Nothing in the scheme has a ceiling, nothing requires renumbering, and nothing requires a human to type a count.

That is the whole design goal, and it rests on the two rules the review got exactly right: a number, once issued, is immortal even in death, and every index count is computed rather than typed. The only thing I would add is the third rule that makes those two survive branch reorganisation — that branch is metadata and never identity. With all three, S050 is not a ceiling. It is not even a landmark. It is just the fiftieth number the counter happened to issue.