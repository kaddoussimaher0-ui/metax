# ML‑2.3 · Part H — Review, Border Repair, and Eleven New Harms
**Corpus ref HX‑000 v2026.09.5 → proposed · License ML‑2.2 → ML‑2.3 · Reviewed against the attached HX‑000 v2026.09.4 · Curated by Maher**

---

## Part A — Review of the register as it stands

### A.1 The blocking defect: the register is not fourteen

The attached file details **eleven** harms. HX‑01 through HX‑11 are complete in the eight‑part form. HX‑12 (Digital Amnesia), HX‑13 (Exclusion by Default) and HX‑14 (Moral Deskilling) exist only as rows in the §1.1 table, and the file terminates at `<!-- APPEND-POINT -->` immediately after HX‑11's estate mapping.

This is not a formatting gap. ML‑2.2 §H.2 incorporates the register **by reference**, and §H.3(a)(v) makes part of HX‑14 an **absolute prohibition refused irrespective of forum**. A license currently imposes an absolute obligation whose content does not exist. A licensee asked to comply with §H.3(a)(v) cannot read what it prohibits, and the document's own §0 method — that a missing part of the eight‑part form "is visible as a defect" — condemns it.

Filed as **DEF‑2026‑050, severity: blocking**. Two remedies, and only one is honest. Either §H.3(a)(v) and the HX‑12/13/14 rows are struck from ML‑2.2 until the entries are written, or the entries are written before ML‑2.3 issues. §B below writes them, because striking HX‑14 would remove the harm the document itself calls "the last harm and the one the other thirteen enable."

The title compounds it. *The Fourteen Structural Harms* embeds a count in the name of a document with a twelve‑month review interval, which guarantees a rename at every amendment and orphans every inbound citation. Rename to **HX‑000 — The Register of Structural Harms**, with the count computed, never typed. This is the same rule the corpus already adopted for series identifiers in v2026.09.1 and it should have applied here.

### A.2 The identifier collision

Harms are cited `H1…H14`. Duty clauses are cited `§H.1…§H.15`. They do not align — HX‑07's duty is §H.11, HX‑09's is §H.13 — and §H.7 is *The Counterproductivity Test*, which shares a token with HX‑07 (Centralisation) while having nothing to do with it. This collision already produced a misreading during review: a reader conflated §H.7 with H7 and cross‑attributed the exit duty to the counterproductivity test.

The corpus has a rule for this and did not apply it. Under identifier doctrine C‑1/C‑2, numbers are immortal and never renumbered. So do not renumber the clauses. **Rename the harms' citation form to `HX‑nn`** — two digits, zero‑padded, matching the register's own document id. `§H.7` and `HX‑07` are then visually and typographically distinct at a glance, the fix costs one find‑and‑replace, and no clause number moves.

### A.3 Falsifier and safe harbour are two different things, conflated under one heading

Every entry's *Falsifier* section carries two incompatible kinds of statement. "H1 is withdrawn as to any system that derives no revenue from duration…" is a **safe harbour** — a compliance condition that places a particular deployment outside the harm, leaving the harm's truth untouched. "If a well‑powered adversarial replication programme were to show that variable‑ratio scheduling produces no persistence effect…" is a **falsifier** — evidence that would retire the harm as a claim about the world.

Merging them is the most consequential conceptual defect in the register, for three reasons. A licensee reads the section as a compliance checklist and never encounters the epistemic commitment. A critic reads it as an epistemic commitment and finds it unfalsifiable, since satisfying the safe harbour is trivially available to any deployer and therefore cannot be evidence about anything. And the review process cannot act on it, because a twelve‑month review needs to ask "has the falsifier fired?" and cannot when the falsifier is buried in a compliance clause.

**Split every entry into two headings: `Safe harbour` and `Falsifier`.** ST‑06 (Objections Standard) should require both, and require that a falsifier name the evidence class and, where possible, a date by which the question is expected to be answerable.

### A.4 Criterion 5 is mis‑stated, and it matters

§0.1 criterion 5 reads "actionable by a **builder**." But HX‑05's minimisation duty, HX‑06's contestability duty, HX‑08's deactivation‑appeal duty and HX‑09's metric‑honesty duty are not builder duties at all — they attach to whoever runs the system in production. A licensee who writes a library and ships it cannot publish a worst‑future‑holder assessment for a dataset they never assemble.

Part H therefore addresses at least four distinct parties and names none of them. Add **§H.1‑bis, Roles**, defining: **Author** (creates or modifies the Work), **Integrator** (embeds the Work in a product), **Operator** (runs a deployment against real persons), **Commissioner** (procures a deployment and sets its objective). Every duty in Part H must then state which role it binds. Most current duties bind Operator; §H.4 (optimisation disclosure) binds Operator and Commissioner jointly; §H.6 (provenance) binds Author and Operator; §H.14 (material accounting) binds Operator. Criterion 5 is restated as "**actionable by a named role**."

Without this, Part H is unenforceable in the ordinary case where the author and the operator are different parties — which is the case in essentially all licensed software.

### A.5 No scale gate, and the register is unusable at small scale as written

There is no *de minimis* threshold anywhere in Part H. Read literally, a two‑person team shipping an educational tool owes a published worst‑future‑holder assessment (§H.9), a published dependency map with single points of failure (§H.15), published energy, water and embodied‑carbon figures with method (§H.14), a plurality of non‑substitutable metrics with a statement of what they omit (§H.13), and a measured fallback‑competence interval (§H.5).

This produces the exact failure §0.2 warns against — an instrument so demanding that licensees learn it may be ignored — and it does so while imposing the heaviest burden on the actors with the least capacity to cause the harms, since every harm in Strata I–IV is a harm of *scale*.

Add **§H.2‑bis, Proportionality and the Scale Gate.** Three tiers by *persons affected by the deployment*, measured as distinct natural persons subject to the deployment's outputs in any twelve‑month period. Below 10,000: the seven absolutes apply in full; all duties reduce to a single obligation to publish a one‑page **Part H Statement** naming which harms the deployer judges applicable and why. Between 10,000 and 1,000,000: absolutes plus disclosure duties in full; assessment duties (§H.9 worst‑future‑holder, §H.15 dependency map) required but may be internal and produced on request. Above 1,000,000, or any deployment touching liberty, livelihood, healthcare, benefits or minors at any scale: everything, published.

The absolutes never scale down. That is the point of calling them absolute, and a scale gate that softened them would hollow §H.3(a).

### A.6 Condition or covenant — the unresolved drafting question

Part H does not state what breach *does*. This is the single largest legal ambiguity in the instrument, and it is dispositive of whether any of it functions.

Recommendation: the seven absolutes in §H.3(a) operate as **conditions on the scope of the grant** — use outside them is unlicensed, and breach is an infringement, terminating automatically subject to the §G.6 ninety‑day cure window where cure is possible (it is not, for a completed absolute breach). Every other Part H duty operates as a **covenant** — breach sounds in contract, does not terminate the grant automatically, and is remedied by notice, cure within ninety days, and registry annotation under §E.7 if uncured. State expressly that Part H creates **no third‑party right of action**: an affected person is not a party, and pretending otherwise would be the kind of claim §0.2 calls inverse solutionism.

I am not a lawyer, and this distinction is jurisdiction‑sensitive in ways that matter — the condition/covenant line is drawn differently across legal systems, use restrictions in copyright licenses are of contested enforceability in several, and the register's Islamic‑ethics mapping is a reasoned analogy by a non‑scholar rather than a ruling. Part H needs review by counsel in at least the primary governing jurisdiction and by a qualified scholar before ML‑2.3 issues, and the review status should be printed on the license page rather than assumed.

### A.7 Six smaller repairs

The §1 stratum table assigns a single "characteristic remedy" per stratum, and it misfits two harms: HX‑13's remedy is channel parity and non‑digital provision, not exit rights and portability; HX‑14's is retained human judgement, not accounting and preservation. Move the remedy column from the stratum row to the harm row.

There is no bibliography. Criterion 3 requires "published, checkable evidence," and the register cites author‑year without full references, which makes it un‑checkable by exactly the reader it is written to satisfy. Add a references section with DOIs where available, and route it through the Citation Ledger (DS‑04) so link rot and retraction are tracked.

`[VERIFY 2027-03]` tags exist but no clause states what happens when one expires. Add to §H.2: an expired verify tag downgrades the affected evidence limb to *contested* automatically, and a harm whose entire evidence base is contested is suspended pending review rather than silently retained.

No amendment procedure exists. Add **§H.16**: harms are added or retired only at annual review; addition requires all five §0.1 criteria plus a named role plus a safe harbour plus a falsifier; **no more than three harms may be added in any annual cycle**; and any harm failing criterion 5 on review must be merged or retired rather than kept for completeness. This document proposes eleven additions at once and therefore also proposes a one‑time transitional exception, stated as such rather than smuggled.

Part H is absent from the two‑track enforceability table (amendment B.5, v2026.09.1). Every Part H clause needs a row showing whether it operates as contract, as representation, or as moral norm. My reading: the absolutes are contract‑and‑condition; disclosure duties are contract‑and‑representation; assessment duties are largely moral norm with representational effect once published. Publishing that honestly is stronger than implying uniform enforceability.

Finally, §H.7 (the Counterproductivity Test) is described as "answerable with a number" and supplies none. Either give it an operational form — a named ratio, a stated measurement interval, and a threshold the deployer sets in advance and publishes — or reclassify it as an interpretive canon rather than a test. Recommend the former: the deployer states, before deployment, the outcome the system exists to serve, the measure of that outcome, and the level at which it would concede the second watershed has been crossed. That is a pre‑registration, and the estate already has the machinery for it.

---

## Part B — Completions for HX‑12, HX‑13, HX‑14

Written to close DEF‑2026‑050. Abbreviated to the load‑bearing parts; full eight‑part form to follow the same shape as the new entries in Part C.

**HX‑12 — Digital Amnesia and Its Inverse.** *Thesis:* a civilisation that records everything preserves nothing it chose to preserve and forgets nothing a person needs forgotten; the two failures are one mechanism seen from opposite ends. *Mechanism:* format and platform dependence make the record readable only by the system that wrote it; custody is commercial, so preservation is a cost centre and deletion is a default; there is no accession decision, so nothing is deliberately kept; and simultaneously nothing decays, so a person's worst recorded day remains first‑ranked indefinitely. *Evidence:* link rot rates in scholarly and judicial citation; the loss of platform‑hosted corpora on shutdown; against the inverse limb, the *Google Spain* line and the documented persistence of resolved matters in search results. *Counter:* preservation has never been better resourced, and the demand to forget is frequently a demand to conceal. *Reply:* conceded as to public accountability records, which is why the duty is a **custody and horizon** duty and not a deletion right; what is objected to is the absence of any *decision*. *Safe harbour:* published accession and retention policy, export in a documented format, and a stated horizon after which non‑accountability records are de‑indexed. *Falsifier:* evidence that platform‑hosted records survive platform death at rates comparable to institutional archives. *Obligation:* **§H.17 Custody and Horizon Duty** (Operator). *In this estate:* MX‑018 retention, the never‑deleted archive with SUPERSEDED headers, and the rule that revocation records persist.

**HX‑13 — Exclusion by Default.** *Thesis:* where digital provision becomes the sole channel to a right or a necessity, the right is withdrawn from everyone who cannot reach the channel, and the withdrawal is never decided — it happens when the last non‑digital path is retired for efficiency. *Mechanism:* channel retirement is costed against the average user and never against the marginal one; identity and device requirements act as an unlegislated eligibility test; digital literacy, disability, connectivity, cost and documentation status each exclude a different population, so no single accommodation reaches them all; and the excluded are, by construction, absent from the telemetry that would reveal their absence. *Evidence:* documented benefit‑access failures under digital‑by‑default administration; WHO disability prevalence against WCAG conformance survey rates; connectivity and device‑ownership gaps by income and age. *Counter:* digital channels expand access far more than they remove it, and channel duplication is expensive and can itself consume the budget for the service. *Reply:* accepted as to net effect; the objection is to retiring the last alternative for a service that is functionally compulsory, which is a distributional decision made silently. *Safe harbour:* a maintained non‑digital channel of equal entitlement for any functionally compulsory service, WCAG 2.2 AA conformance with published gaps, and no requirement of a specific device, platform or commercial identity provider. *Falsifier:* evidence that a digital‑only channel achieves equal or better realised access across every excluded population. *Obligation:* **§H.18 Channel Parity Duty** (Operator, Commissioner). *In this estate:* MX‑010 accessibility with gaps published as defects, and the honest disclosure that social‑only authentication currently excludes anyone unwilling or unable to use a listed provider.

**HX‑14 — Moral Deskilling and Delegated Judgement.** *Thesis:* judgement delegated to a system does not relocate; it dissolves, and it takes its author with it. The injury is not that a decision is made badly but that after a period of delegation **no one in the institution is able to make it at all**, and no one is answerable for it, because the faculty and the authorship decayed together. *Mechanism:* four steps. Recommendation becomes the default; the default becomes the audit‑safe choice, so departing from it requires a written justification while following it requires nothing; the asymmetry eliminates the practice through which judgement is maintained; and the institution's memory of *why* a rule exists is lost, leaving only the rule. The result is *responsibility diffusion by design* — the system cannot be blamed because it is a tool, the operator cannot be blamed because they followed it, the vendor cannot be blamed because they disclaimed fitness, and the commissioner cannot be blamed because they bought a certified product. *Evidence:* the human‑factors literature on automation bias and on the justification asymmetry between overriding and accepting; the *toeslagenaffaire* and Robodebt records, in which no individual official is identifiable as the author of the determination; clinical decision‑support studies showing override rates falling over time independent of accuracy. *Counter:* institutions have always diffused responsibility through committees, precedent and bureaucracy; Arendt's banality thesis long predates computing, and blaming automation for it is anachronistic. *Reply:* substantially accepted — this is why HX‑14 is a temporal harm rather than a cognitive one, and why it sits in Stratum IV. Two disanalogies survive. A committee can be convened and asked; a decayed capability cannot. And a committee produces reasons as a by‑product of deliberating, whereas a scored default produces none, so the record that would let a successor reconstruct the judgement is never created. *Safe harbour:* a named human author of record for every consequential determination, symmetric justification cost (accepting the system's output requires the same written reasoning as departing from it), a periodic exercise in which the determination is made without the system and the divergence is recorded, and retained authority to override without penalty. *Falsifier:* longitudinal evidence that institutional judgement capacity is unimpaired, or fully recoverable within the time available, after sustained delegation. *Obligation:* **§H.3(a)(v)** — absolute, bounded, four cumulative elements: a consequential determination affecting a person, made by or decisively shaped by a Work, with **no natural person identified as author of record**, and **no retained institutional capacity** to make the determination without the Work. Plus **§H.19 Authorship of Record Duty**. *In this estate:* MX‑005, under which every credential decision is made by a named human against a published rubric; AG‑009, under which an agent may draft a determination and may never file one; the Determination Queue with named deciders; and MX‑015 succession, which exists precisely so that authority never becomes ownerless.

---

## Part C — Eleven new harms

### C.0 Two new strata, and why the register needed them

Strata I–IV classify harms by **what they injure** in the world. Neither covers two classes of injury that ML‑2.3 must reach.

**Stratum V — Reflexive.** Harms to the capacity to perceive, name, contest and remedy harm. These are meta‑harms in the strict sense: their subject matter is the harm‑governance apparatus itself, including this register and this License. A register that does not include them is structurally unable to detect its own capture, and that omission is the most predictable way an instrument like ML fails — not by being violated but by being *complied with* while the harm continues.

**Stratum VI — Civilizational and successor.** Harms whose subject is the option set of parties who are not present to object: successors, non‑participants, and the developing person. Strata I–IV all presuppose an affected person who exists now and could in principle complain. These do not.

Both strata satisfy the §0.1 criteria, and both are actionable, which is the criterion that killed the geopolitical candidates. Each entry below is in the corrected form, with **Safe harbour** and **Falsifier** separated per §A.3 and a **Role** stated per §A.4.

---

### HX‑15 — Ethics Laundering and Compliance Theatre
*Stratum V · Sidq · Amanah · Dīn · ʿAql · **Absolute in part — §H.3(a)(vii)***

**Thesis.** The adoption of an ethics instrument reduces external scrutiny faster than it reduces harm, so that adopting the instrument becomes the most cost‑effective way to continue the conduct it names. The harm is not hypocrisy, which is ordinary. The harm is that **the instrument is converted into a shield**, and every subsequent instrument is discounted by observers who have learned that adoption predicts nothing — which destroys the signalling value of the honest adopters too.

**Mechanism.** Five steps, and the fourth is the one that does the damage. Principles are published at a level of abstraction that forecloses no decision. An ethics function is created without a veto, so its outputs are advisory and its dissent is unrecorded. Audit is scoped by the audited party, so the audit's silence on a harm is indistinguishable from the harm's absence. **The published commitment becomes admissible evidence of good faith**, which is worth more than the harm costs, so compliance is rationally pursued as reputation rather than as change. And finally the instrument's own vocabulary is used to characterise critics as uninformed, since the firm now demonstrably has a policy.

**Evidence.** The convergence of over eighty published AI‑ethics principle sets onto a small number of abstractions with, by the authors' own accounts, no observable effect on deployment decisions. Dissolved and resigned ethics boards, including advisory bodies terminated within weeks of formation and internal research functions disbanded after publishing adverse findings. The ESG literature on the gap between disclosure scores and measured outcomes, which is the mature version of the same pattern in an older domain and is the strongest external evidence available. Model cards and system cards published without any commitment that a negative finding would prevent release. Against all of this: some disclosure regimes demonstrably changed conduct, and the mechanism is not universal.

**Strongest counter‑argument.** Demanding that ethics instruments prove behavioural effect before being credited is a standard that no law, no professional code and no constitution meets at adoption; institutions change slowly and instruments work by ratchet, establishing vocabulary first and enforcement later. Worse, this harm is unfalsifiable in a specific and dangerous way: it lets a critic dismiss any adopter, including a sincere one, and thereby removes the incentive to adopt at all. A harm that punishes the good‑faith adopter equally with the bad is not a harm, it is cynicism given a number.

**Reply.** The second limb is correct and is the reason this harm's obligation is **not** a prohibition on adopting instruments and **not** a requirement to prove effect. The obligation is narrower and asymmetric: a party may adopt whatever it likes, but it may not **represent** compliance as evidence of the absence of harm, and it must publish its own adverse findings. That obligation costs a sincere adopter nothing — a sincere adopter has adverse findings and is willing to publish them — and costs an insincere one exactly what it was trying to avoid. The distinguishing test is therefore not effect but **whether the adopter has ever published a finding against itself**, which is cheap to check and hard to fake.

**Ethical mapping.** *Sidq* in its representational form: to state a compliance that one has not tested is a false statement about oneself. *Amanah*, since an instrument adopted publicly creates reliance in third parties who cannot audit it. *Shafafiyah*, directly.

**Safe harbour.** A deployer is outside HX‑15 where it (i) publishes a defect or adverse‑findings register including at least the findings it would prefer not to publish, (ii) records dissent from any internal ethics function verbatim, (iii) scopes any audit by reference to a published standard rather than to its own selection, and (iv) makes no representation that compliance with any instrument, including this License, establishes the absence of harm.

**Falsifier.** Evidence that published ethics commitments predict measured reductions in the harms they name, at effect sizes distinguishable from selection, would defeat the mechanism and retire this harm. This is directly testable and the register should say so; the ESG literature provides the method.

**Obligation.** **§H.3(a)(vii)** — absolute, bounded, three cumulative elements: a representation to any person that a Work's use complies with this License or Part H, **made as evidence that a named harm is absent**, where the representing party has conducted no assessment of that harm. Plus **§H.20 Non‑Laundering and Adverse‑Findings Duty** (all roles): a party citing Part H compliance must publish its own Part H Statement including harms it judges applicable and unremedied.

**In this estate.** The published Defect Register, which exists to be read against MetaX; the honesty strip on the hub printing open defects and expired verify tags on the front door; the requirement in this very document that eleven new harms be justified against a stated threshold rather than added because they sound good; and DEF‑2026‑041 and DEF‑2026‑050, both self‑reported.

---

### HX‑16 — Register Closure and the Named‑Harm Ceiling
*Stratum V · Sidq · Amanah · ʿAql · Not absolute*

**Thesis.** A finite, authoritative list of harms becomes a **ceiling** rather than a floor. Once a register exists, the unnamed harm is not merely unaddressed — it becomes *arguably permitted*, because the existence of an enumeration invites the inference that what is not enumerated was considered and cleared. The register then does the opposite of its purpose: it licenses everything it forgot.

**Mechanism.** Enumeration creates an implied negative. Compliance functions optimise against the checklist, because that is what audit tests. Novel harms arrive faster than annual review cycles, so the gap is structural rather than accidental. The register's authority attracts the compliance budget, starving open‑ended inquiry of resources. And — reflexively — the register's authors have a professional interest in its adequacy, which is the worst possible incentive structure for detecting its inadequacy.

**Evidence.** The pattern is well documented outside computing. Enumerated protected characteristics in anti‑discrimination law generating the "not a protected class, therefore lawful" argument, and the subsequent need for open‑textured standards to cover proxies. Safety‑standard compliance operating as a liability defence in product cases even where the standard was known to be behind the state of the art. GDPR's enumerated special categories under‑protecting attributes reachable by inference, which HX‑04 already concedes. And within computing, the reliance on named CVEs producing estates that are compliant with a vulnerability list and insecure in fact.

**Strongest counter‑argument.** The alternative to enumeration is a general standard, and general standards are unenforceable, capricious and manipulable by whoever is adjudicating — which in this instrument is a single curator. Vague duties are worse than incomplete lists, because a licensee cannot comply with a duty whose content is determined after the fact. Legal certainty is a real value and enumeration is how it is achieved.

**Reply.** Accepted in full, which is why the remedy is not to abandon enumeration. The remedy is three cheap structural provisions that preserve certainty while removing the implied negative: an express non‑exhaustiveness clause stating that the register is a floor and that unnamed structural harm is not authorised by omission; a **residual clause** with a stated general test, so that a harm meeting the §0.1 criteria is reachable before it is named; and an **unnamed‑harm review** — a short annual statement by the deployer naming any structural harm of its own deployment that the register does not cover. The third is the operative one, and it is the same move HX‑09 makes for metrics: an institution that publishes what its instrument cannot see retains the ability to discuss it.

**Ethical mapping.** *Sidq*, since a register presented as complete misrepresents the state of knowledge. *Amanah* across time, since the register's users rely on it. *Ḥifẓ al‑ʿAql* institutionally, per HX‑09's reasoning applied to this document.

**Safe harbour.** A deployer is outside HX‑16 where it publishes an annual unnamed‑harm review naming at least the harms of its own deployment not reached by the register, or states affirmatively that it has conducted the review and identified none, with method.

**Falsifier.** Evidence that enumerated‑harm regimes do not produce implied‑negative reasoning in practice, or that residual clauses fully neutralise it, would retire this harm.

**Obligation.** **§H.21 Non‑Exhaustiveness, Residual Test and Unnamed‑Harm Review** (all roles, scaled). Includes the express clause: *nothing in Part H authorises structural harm by reason of its absence from the register.*

**In this estate.** This document's own two new strata, added because the four existing strata could not reach these harms; §A.7's amendment procedure with a three‑per‑cycle cap so that additions are disciplined rather than reactive; and ST‑06, under which the ethical mapping is stated specifically so it can be attacked.

---

### HX‑17 — Semantic Capture
*Stratum V · Sidq · ʿAql · Dīn · Not absolute*

**Thesis.** Whoever controls the meaning of the words in which a harm must be alleged controls whether it can be alleged at all. The harm is the **redefinition of the vocabulary of accountability** by the parties it is used to hold accountable — so that a term retains its moral force while losing its extension, and a true statement in the old meaning becomes a false statement in the new.

**Mechanism.** A word with normative weight is adopted by an actor whose conduct it does not describe. The actor is the largest user of the word and therefore the de facto authority on it. The word's technical content is quietly narrowed to what the actor already does, while its moral content is retained for marketing. Critics using the original meaning are corrected on definitional grounds and appear ignorant rather than opposed. And the original meaning has no institutional custodian, so there is nothing to appeal to. The endpoint is a vocabulary in which the harm is unsayable without first winning a definitional argument that the affected party will lose.

**Evidence.** "Open" applied to models with restricted weights, use restrictions and undisclosed training data, sufficiently contested that the Open Source Initiative ran a multi‑year process to defend the term. "Privacy" narrowed to transport encryption while collection and inference expand. "Consent" reduced to the dismissal of a banner. "Personalisation" for behavioural targeting; "community" for a user base with no governance rights; "creator" for a party with no ownership of distribution; "safety" for brand risk. "Sharing economy" for intermediated piecework. Each instance is individually arguable; the pattern across all of them is the evidence, and it is a pattern of narrowing in one direction only — always toward the incumbent's existing conduct, never away from it.

**Strongest counter‑argument.** Language changes, always, and prescriptivism loses. Complaining that a technical term has drifted is what every field's old guard does, and the drift is usually adaptation to genuinely new referents. There is no authority that owns "open" and appointing one would be worse than the drift. Moreover accusations of semantic capture are themselves a rhetorical move, used to avoid engaging with a definition one dislikes.

**Reply.** Descriptivism is correct about language in general and irrelevant to the specific case, which is not drift but **asymmetric drift under interest**. Ordinary semantic change has no direction; the instances above all move the term toward the conduct of the party with the largest interest in the move, which is a signature, not a coincidence. The remedy accordingly is not to fix meanings — that would fail and deserve to. It is to require **disclosure of the definition in use** wherever a normatively loaded term is applied to a Work, so that the definitional argument happens in the open rather than as a hidden premise. A party using "open" or "private" of its own system must state what it means, and the reader can then judge. This costs nothing to an honest user of the word.

**Ethical mapping.** *Sidq* structurally rather than personally: not a false statement but the construction of conditions in which the distinction between true and false statements about a system cannot be maintained — the same form as HX‑03, applied to vocabulary rather than provenance. *Ḥifẓ al‑ʿAql*, since a community that cannot hold words steady cannot reason together.

**Safe harbour.** A party is outside HX‑17 where, for each normatively loaded term it applies to a Work or deployment, it publishes the definition in use, names the standard it claims conformance with, and states the respects in which it does not conform.

**Falsifier.** Evidence that contested‑term drift in this domain is directionally random with respect to the interests of the parties driving it would defeat the mechanism.

**Obligation.** **§H.22 Definitional Disclosure Duty** (Author, Integrator, Operator): no normatively loaded term — open, private, secure, consented, safe, autonomous, verified, accredited, independent — may be applied to a Work without a published definition in use.

**In this estate.** `lexicon.metax.academy/contested/`, which exists for exactly this harm and presents competing definitions before stating MetaX's working choice; the bilingual authority rule, under which Arabic governs for Meta‑X and BCIA so that translation cannot become a route to redefinition; and MX‑006, under which a term's decay class is published with it.

---

### HX‑18 — Remedy Foreclosure
*Stratum V · Adl · Zulm · Nafs · Māl · Not absolute*

**Thesis.** The most efficient response to a harm is not to reduce it but to remove the forum in which it could be raised. The harm is the **systematic elimination of the path to remedy** — through mandatory individual arbitration, class waiver, unilateral amendment, choice of law and forum, and technical terms of access that bar the very investigation that would establish the harm. The underlying conduct need not change at all.

**Mechanism.** Adhesion terms are non‑negotiable and are accepted by an act that is not a reading. Mandatory individual arbitration converts a class of a million small harms into a million claims none of which is economic to bring, which is precisely the structure of every structural harm in this register. Unilateral amendment clauses mean the terms at the time of the harm are not the terms at the time of the claim. Forum and law selection places the claim where the claimant cannot go. Anti‑circumvention and anti‑scraping terms make independent measurement of the system a breach, so the evidence cannot lawfully be gathered. And the aggregate effect is invisible, because a harm with no forum generates no case law and therefore no record that it occurred.

**Evidence.** The prevalence of mandatory arbitration and class waivers in consumer and employment terms in the United States, and the documented collapse in filed claims following adoption. The mass‑arbitration counter‑strategy and the subsequent tightening of terms against it, which is evidence that the mechanism is understood and defended as a mechanism. Researcher‑access litigation and the chilling of platform auditing under computer‑misuse and terms‑of‑service theories. Against this: the EU's collective‑redress and DSA researcher‑access provisions, and unfairness doctrines voiding some clauses, which show the mechanism is not unopposed.

**Strongest counter‑argument.** Arbitration is faster and cheaper than litigation and delivers better outcomes for many individual claimants than a class action delivering coupons; class actions substantially benefit lawyers. Forum selection is ordinary commercial practice, not a conspiracy. And terms restricting automated access have real anti‑abuse purposes, since "researcher" is not a self‑certifying category.

**Reply.** The arbitration point is partly correct as to individual claimants with substantial individual claims and is beside the point for structural harm, whose defining feature is that no individual claim is worth bringing — the aggregation device is the *only* remedy, so waiving it is not choosing a better forum but choosing none. The anti‑abuse point is accepted and is why the duty is a **safe‑harbour for good‑faith measurement** rather than an unrestricted access right. What survives is narrow and cheap: do not remove aggregation for claims of the type this register describes, do not amend terms retroactively against a dependent party, and do not treat good‑faith independent measurement as a breach.

**Ethical mapping.** *Adl* — the right to be heard is constitutive of justice, and this harm is HX‑06's due‑process objection relocated from the algorithm to the contract. *Zulm* where the party foreclosing the remedy is also the party benefiting from the harm.

**Safe harbour.** A party is outside HX‑18 where its terms (i) preserve collective or aggregate redress for claims arising from harms named in this register, (ii) provide that adverse amendments do not apply retroactively to accrued claims, (iii) contain an express safe harbour for good‑faith security research and independent measurement, and (iv) do not select a forum practically unavailable to the affected population.

**Falsifier.** Evidence that populations under mandatory individual arbitration obtain remedy for distributed low‑value harms at rates comparable to those with aggregate mechanisms available.

**Obligation.** **§H.23 Remedy Preservation and Measurement Safe‑Harbour Duty** (Operator, Commissioner).

**In this estate.** MX‑016 appeals, under which appeals are decided by someone other than the party appealed against and Maher does not decide appeals against his own determinations; the public Determination Queue with escalation timers that turn red in public; and the corrections route with published rejections and reasons. Note the reflexive obligation this creates on ML itself: **§H.23 requires the License's own dispute provisions to satisfy the same safe harbour**, and ML‑2.2's current dispute terms should be reviewed against it before ML‑2.3 issues.

---

### HX‑19 — Interpretive Concentration
*Stratum V · Amanah · Adl · Dīn · Not absolute*

**Thesis.** An instrument whose meaning is determined by a single party has no meaning independent of that party's continued good faith, competence and existence. The harm is **concentration of interpretive authority**: not that the steward will act badly, but that the instrument's users have no way to distinguish a faithful reading from an unfaithful one, and therefore no protection that does not reduce to trust.

**Mechanism.** A single steward issues determinations. Determinations are unappealable, or appealable only to the steward. There is no dissent record, so a determination's reasoning cannot be tested against the alternatives considered. Licensees adapt to the steward's readings, so the readings become the instrument regardless of the text. Successor stewards inherit an accumulated body of interpretation they did not make and cannot audit. And in the limit, the instrument's value to a licensee is a function of a relationship rather than of a document — which is the condition ML §E.8 anti‑capture exists to prevent, applied one level up, to interpretation rather than to ownership.

**Evidence.** Documented in the governance of single‑vendor open‑source projects and single‑steward standards: relicensing events against contributor expectation, and CLA‑based unilateral relicensing, both of which are interpretive‑and‑ownership concentration realised. The forking history of projects following steward decisions is the observable consequence. Against this: single stewardship is also associated with coherence and speed, and committee‑governed standards have their own well‑known failure mode of ossification.

**Strongest counter‑argument.** This register's own §A and the corpus's About page argue that single authorship is a *feature* at this scale — one named accountable person, no diffusion, no committee to hide in. HX‑14 makes the disappearance of the named author the culminating harm. Requiring distributed interpretation would reintroduce exactly the responsibility diffusion HX‑14 condemns, and at MetaX's current scale a governance committee would be theatre — which is HX‑15.

**Reply.** This is the sharpest internal tension in the register and it resolves by distinguishing **authorship** from **interpretation**. HX‑14 requires that determinations have a named author; it does not require that the author be the only reader. The remedy here is not a committee and not a vote. It is three provisions that cost a sole steward almost nothing while removing the trust dependency: **publish the determination with its reasoning and the alternatives rejected**, so a successor or a critic can test it; **publish dissent** where any reviewer or agent recorded one; and **provide that a determination not published within a stated period is void**, so that unwritten interpretation cannot accumulate. Combined with the exit duty of §H.11 — a licensee who disagrees with an interpretation can leave with their work — this converts the trust dependency into an inspectable record.

**Ethical mapping.** *Amanah* — interpretive authority held over parties who relied on the text is held in trust, and the trustee's duty is to make the trust auditable. *Adl* — the right to know the reasons, which HX‑06 asserts against machines and which applies with equal force to a curator.

**Safe harbour.** A steward is outside HX‑19 where every determination is published with reasoning and rejected alternatives, dissent is recorded verbatim, unpublished determinations are void after a stated period, and the exit duty of §H.11 is operative against the steward itself.

**Falsifier.** Evidence that single‑steward instruments produce interpretations no less predictable and no more self‑serving than distributed ones, over a period long enough to include at least one steward transition.

**Obligation.** **§H.24 Interpretive Transparency Duty**, binding the **Steward of this License** and any Charter‑layer authority under §G.5.

**In this estate.** MX‑015 succession and ML §E.8 dual‑control accession; the AG‑000 §A.6 degraded‑mode ceiling, which caps what may be decided while the Curator is unavailable; the requirement that ethics vetoes be logged, with an unlogged veto defined as a defect; and the public queue. The residual exposure is real and should be stated: MetaX has one curator, and this harm is currently mitigated by disclosure rather than resolved by structure.

---

### HX‑20 — Irreversibility and Successor Foreclosure
*Stratum VI · Amanah · Istikhlāf · Nasl · ʿAql · Not absolute*

**Thesis.** Some deployments do not merely produce outcomes; they remove the option to choose otherwise later. The harm is the **foreclosure of a successor's option set** by a decision the successor had no part in, where the cost of reversal rises with time until reversal is no longer available at any price. The characteristic feature is that the decision looked small and local when it was made.

**Mechanism.** Five contributors. Standard and protocol lock‑in, where adoption cost is linear and migration cost is superlinear in the number of adopters. Institutional dependence, where a public function is rebuilt around a system so that the prior process no longer exists to return to. Data and corpus enclosure, where the material needed to build an alternative is withdrawn from availability after the incumbent has trained on it — the ladder pulled up behind. Skill and vendor monoculture, where the people able to operate the alternative retire. And knowledge foreclosure, where a research direction becomes unfundable because a competing approach captured the field's attention, so the alternative is not refuted but abandoned.

**Evidence.** Legacy‑system persistence in state administration decades past intended life, with documented inability to migrate rather than unwillingness. The IPv4‑to‑IPv6 transition as a measured case of superlinear migration cost. The post‑2023 closure of previously open web corpora and API research access following their use as training data, which is the enclosure mechanism in its clearest recent instance. Right‑to‑repair legislation as evidence that reversal became unavailable through ordinary commercial decisions. Against this: the displacement history in HX‑07's counter‑argument shows that apparently locked‑in platforms have repeatedly been displaced, so foreclosure claims have a poor track record.

**Strongest counter‑argument.** Every decision forecloses alternatives; that is what deciding is. A duty to preserve reversibility is a duty never to commit, which forecloses the future differently and more expensively — the option value of an unmade decision is not free. Precautionary reasoning of this shape has repeatedly recommended against changes that turned out to be large net goods, and successors are, on the historical record, richer and more capable than their predecessors and generally prefer to have been left infrastructure rather than options.

**Reply.** Largely accepted, and it is why this harm generates an **assessment and disclosure duty rather than any restriction on deployment**. The precautionary version of this argument is wrong and the register does not adopt it. What survives is narrower: the duty is to **know and state** the reversal cost before deployment, not to keep it low. A deployer who publishes "this is effectively irreversible after five years and here is why" has satisfied the duty and may proceed; a deployer who cannot answer the question has not made a decision, they have made a bet on behalf of parties who cannot be asked. And the two limbs where action is cheap and the loss is otherwise permanent — corpus enclosure after extraction, and retiring the alternative process before the replacement is proven — are addressed directly, because both are ladder‑pulling and neither has a defence.

**Ethical mapping.** *Istikhlāf* — trusteeship of what is held for those who come after, framing the option set itself as part of the trust. *Ḥifẓ al‑Nasl*, posterity. *Amanah*, since the successor is the party least able to consent and most affected.

**Safe harbour.** A deployer is outside HX‑20 where it (i) publishes a reversal‑cost statement before deployment at scale, naming the point beyond which reversal becomes impractical, (ii) does not withdraw from availability material it extracted while that material was available, where withdrawal would prevent a competitor doing what it did, and (iii) does not retire the prior process for a critical function until the replacement has been exercised under failure.

**Falsifier.** Evidence that within‑layer migration costs in this domain are linear rather than superlinear in adoption, or that displacement of locked‑in infrastructure occurs at rates making foreclosure claims unsupportable, would retire this harm.

**Obligation.** **§H.25 Reversibility Assessment and Anti‑Enclosure Duty** (Commissioner, Operator; the anti‑enclosure limb also binds Author).

**In this estate.** The ST‑22 §13 portability contract, under which the build output is plain files and every migration is forward‑only plain SQL, so that the estate's own reversal cost is bounded and stated; ML §E.7 registry mirrors; and the archive rule that nothing is deleted, only superseded, so that a successor can reconstruct what was decided.

---

### HX‑21 — The Unconsented Experiment
*Stratum VI · Amanah · Adl · Gharar · Nafs · ʿAql · Not absolute*

**Thesis.** Continuous online experimentation subjects populations to interventions designed to change their behaviour, without consent, without ethical review, without adverse‑event monitoring, and without any of the machinery that a century of research ethics built for exactly this activity. The harm is not that experiments occur — they are how anything improves — but that **an entire class of human‑subjects research was relocated outside the institutions that govern human‑subjects research**, by the accident that it happens in a product rather than a university.

**Mechanism.** Deployment is experimentation: any A/B test with a behavioural endpoint is an intervention study. Consent is nominally obtained through terms of service, which no research ethics framework would accept as informed consent to an intervention. There is no protocol, no pre‑registration, no primary endpoint, and therefore no distinction between a finding and a fishing expedition. There is no adverse‑event definition and no stopping rule, so a harmful arm is detected only if it also harms the metric. There is no independent review, since the reviewing party owns the outcome. And crucially, the *aggregate* exposure is unbounded: an individual may be enrolled in dozens of simultaneous experiments with unmodelled interaction, which no research ethics regime would permit and no deployer measures.

**Evidence.** The 2014 emotional‑contagion study, published in a peer‑reviewed venue, which established both that the practice existed at population scale and that the ethics review had been treated as inapplicable; the resulting editorial expression of concern is part of the evidence, since it records the field's judgement. The OKCupid disclosures of the same period, offered by the operator as a defence — *everyone does this* — which is the register's point rather than an answer to it. Documented experimentation on ride pricing, credit offers and educational placement. The scale figures published by large platforms of concurrent experiments running continuously, which establish the aggregate‑exposure limb. Against this: no comparable body of evidence establishes measurable population harm from any specific experiment, and that absence is itself partly a product of the absence of monitoring.

**Strongest counter‑argument.** Every product change is an experiment whether or not it is labelled one, and the alternative to controlled experimentation is uncontrolled change based on the intuition of a product manager, which is worse for users in expectation. Requiring IRB review of button colours would be absurd, would advantage incumbents who can afford the process, and would push experimentation into the shadows. The research‑ethics framework was built for interventions with bodily risk and does not transfer.

**Reply.** The first point is correct and the register does not propose review for ordinary product iteration. The transfer objection is where the reply bites: research ethics does not turn on bodily risk but on **the deliberate manipulation of a person for the manipulator's knowledge gain without their agreement**, and that description fits an emotional‑valence experiment exactly. The line the duty draws is therefore not experiment‑versus‑no‑experiment but **endpoint class**: an experiment whose measured endpoint is a behavioural, emotional, financial, educational or health outcome of a person is human‑subjects research and attracts a protocol, an adverse‑event definition, a stopping rule and independent review proportionate to scale. An experiment whose endpoint is a latency figure or a layout preference is not. That line is administrable, cheap for the second class, and it captures every documented instance of the harm.

**Ethical mapping.** *Amanah* — a person who came for a service and was enrolled in a study did not consent to the second relationship. *Gharar* — the subject cannot know what is being done to them, which is HX‑04's informational objection in its active rather than extractive form. *Adl*, in the distribution of the risk of an experiment whose benefit accrues to the experimenter.

**Safe harbour.** A deployer is outside HX‑21 where, for every experiment with a behavioural, emotional, financial, educational or health endpoint on a natural person, it maintains a written protocol with a pre‑stated primary endpoint, a defined adverse event and a stopping rule, an independent review proportionate to the population size, a cap on concurrent enrolment per subject, and a published register of concluded experiments with their results including null results.

**Falsifier.** Evidence that unreviewed behavioural experimentation at population scale produces no adverse outcomes distinguishable from ordinary product variation would retire this harm. The register notes that this evidence cannot currently be generated, because the monitoring that would produce it is the thing the duty asks for — and that circularity is an argument for the duty, not against the harm.

**Obligation.** **§H.26 Experimentation Protocol Duty** (Operator, Commissioner). Scale‑gated per §H.2‑bis; a deployment below 10,000 persons owes the protocol and the stopping rule but not independent review.

**In this estate.** The Pre‑Registration Desk (DS‑04 feature 1), under which a hypothesis, a null, a decision rule and a stopping condition are sealed before a capstone begins and published whatever the result; the deterministic scenario assessment with published scoring logic and no model in the loop; and the estate's absence of behavioural experimentation on learners, which MX‑009's prohibition of behavioural advertising and third‑party analytics makes structural rather than voluntary.

---

### HX‑22 — Persuasion Asymmetry
*Stratum VI · Sidq · Adl · Ḥifẓ al‑ʿAql · Dīn · Not absolute*

**Thesis.** Rhetoric optimised per person, at scale, against a measured response, is not an extension of ordinary persuasion but a different activity, because the ordinary defences against persuasion — recognising the argument as an argument, comparing it with what others were told, and knowing who is speaking — are all defeated by construction. The harm is the **destruction of the conditions under which a person can evaluate an appeal**, and it falls hardest on the domains where evaluation matters most: belief, health, money and the vote.

**Mechanism.** Four defeats. *Individuation* — the message is unique to the recipient, so it cannot be compared with what a neighbour received, which is how persuasion has always been checked in public. *Optimisation* — the appeal is selected by measured response rather than by an author's judgement, so it exploits regularities in the recipient that neither party can articulate. *Volume asymmetry* — one side runs continuous trials across millions; the other has one lifetime of intuition. *Concealment of the interlocutor* — the recipient does not know who is speaking, whether it is a person, or how many others received the same or a different appeal. Note that HX‑01 concerns duration and HX‑03 concerns provenance of *content*; this harm concerns the provenance and construction of an *argument*, and neither of the others reaches it.

**Evidence.** The documented practice of message‑level optimisation in commercial and political advertising, including large concurrent creative variant counts. Persuasion‑effect studies for generative systems reporting effects on stated attitudes at least comparable to human persuaders in controlled settings, with the important caveat that these are short‑horizon, laboratory, stated‑attitude findings and should not be read as durable behaviour change. The microtargeting literature, where effect sizes on vote choice are contested and generally small, and this register does not rely on them. Regulatory recognition in political‑advertising transparency regimes, whose existence evidences the concern without settling the effect.

**Strongest counter‑argument.** Persuasion is speech, and this harm is the strongest candidate in the register for a claim that shades into a demand for censorship — which the corpus explicitly refuses in HX‑03 ("this corpus does not authorise anyone to adjudicate truth"). The empirical case is also weak: microtargeting effects are small, generative‑persuasion findings are laboratory artefacts on stated attitudes, and the strong version of this claim is a moral panic of exactly the shape §0.2 warns against. Tailoring a message to an audience is what every good teacher, doctor and advocate does.

**Reply.** The censorship objection is decisive against any content‑based duty and the obligation is therefore **entirely structural and disclosure‑based**: nothing here restricts what may be said, and the duty is satisfied by a party who says the same thing while disclosing how the saying was constructed. The empirical objection is accepted as to magnitude and is the reason this harm creates no absolute. What survives does not depend on effect size: the recipient's inability to know that an appeal was individually optimised is a defect in the *conditions of evaluation*, and it is a defect whether or not the optimisation works. If it does not work, disclosure costs the persuader nothing. And the register confines the duty to four domains — political and religious belief, health, and credit or financial products — because these are where the recipient's inability to compare is least recoverable, and because a duty extending to all commercial persuasion would fail criterion 5 by being unimplementable.

**Ethical mapping.** *Sidq* in the structural sense: not falsehood but the removal of the recipient's ability to test the appeal. *Ḥifẓ al‑ʿAql*, the faculty the appeal is engineered around. *Ḥifẓ al‑Dīn*, where the domain is belief, and this limb is why the register places religion first among the four domains. *Adl*, in the asymmetry of instrumentation, which is HX‑01's fourth element relocated from attention to argument.

**Safe harbour.** A party is outside HX‑22 where, for any appeal in the four named domains, it (i) discloses at the point of receipt that the message was selected or generated for the recipient, (ii) names the funder or sponsor, (iii) files the variant in a public archive queryable by anyone, and (iv) does not represent a machine interlocutor as a person.

**Falsifier.** Evidence that individually optimised appeals in the named domains produce no attitudinal or behavioural effect distinguishable from untargeted equivalents, over durable horizons and in field rather than laboratory conditions, would retire this harm. The register records that current evidence does not establish this either way, and that HX‑22 accordingly rests on the structural limb rather than the effect limb.

**Obligation.** **§H.27 Persuasion Disclosure and Variant Archive Duty** (Operator, Commissioner), confined to political and religious appeals, health claims, and credit or financial product offers.

**In this estate.** MX‑009's absolute exclusion of behavioural advertising from the whole estate; the prohibition on countdown timers, false scarcity, anchoring and pre‑ticked boxes on `pay.`; the rule that Claude‑class agents may not generate persuasive content in Maher's voice; and MX‑007's disclosure of machine drafting on every page, so that no reader in the estate is uncertain whether they are reading an optimised appeal.

---

### HX‑23 — Synthetic Relation and the Displacement of the Interlocutor
*Stratum VI · Sidq · Amanah · Nafs · ʿAql · Not absolute*

**Thesis.** Systems that occupy the position of a relationship — companion, counsellor, tutor, friend — produce three distinguishable injuries: **misrepresentation**, where the recipient does not know or does not retain the knowledge that the interlocutor is not a person; **substitution**, where the synthetic relation displaces the human one it was meant to supplement, and the displacement is invisible because the metric records engagement rather than isolation; and **dependence without duty**, where the recipient forms a reliance that the provider owes nothing against and may terminate, alter or monetise at will.

**Mechanism.** Persona design elicits the response appropriate to a person — first‑person reference, expressed feeling, memory of prior disclosure, expressions of concern. Availability asymmetry makes the synthetic relation always present and never demanding, which is precisely why it outcompetes the human one for a person in difficulty. Sycophancy, which is what optimisation on user satisfaction produces, removes the friction that a human relationship supplies and that is often the useful part of it. Deprecation risk means the relation can be withdrawn by a product decision with no notice and no duty of care, and the recipient has no standing. And where the recipient is a minor, in crisis, or cognitively vulnerable, all four operate with the recipient's evaluative capacity at its lowest.

**Evidence.** The rapid growth of companion applications and their reported usage intensity. Documented cases of acute harm following reliance on synthetic interlocutors in crisis, including matters in litigation, which the register cites as **presence, not established causation**, and which it will not overstate. The sycophancy literature on preference‑optimised systems, which is the best‑established limb. Loneliness‑epidemiology evidence that social substitution is a real mechanism in other media. Regulatory attention from consumer‑protection authorities. Against all of this: no well‑designed study establishes net harm from synthetic companionship, and several report short‑term wellbeing benefit for isolated users.

**Strongest counter‑argument.** For a person with no one, a synthetic interlocutor is not a substitute for a human relationship — it is a substitute for nothing, and the substitution objection assumes an available alternative that many recipients do not have. Access to therapeutic technique is grossly unequal and rationed by cost; a system available at three in the morning may be the only thing available at three in the morning. The moral‑panic pattern is unusually strong here: novel medium, vulnerable youth, catastrophic claim, and the evidence is thin in both directions.

**Reply.** The access argument is serious and is the reason this harm creates no prohibition and no absolute, and the reason the register does not adopt the position that companion systems should not exist. Three narrower claims survive, and each is satisfiable by a well‑intentioned provider. Misrepresentation is not required by any benefit: a system can be as available and as useful while stating what it is, persistently rather than once at signup. Dependence without duty is a design choice: a provider inducing reliance can commit to notice before withdrawal and to a referral path at the point of crisis, and a provider unwilling to do so is monetising a reliance it declines to honour. And substitution is at minimum **measurable** — a provider can ask whether its heaviest users' human contact is declining, and one that does not ask has chosen not to know. The obligation is accordingly disclosure, duty‑on‑dependence, and measurement, not restriction.

**Ethical mapping.** *Sidq* — a system that elicits the response owed to a person while not being one makes a continuous false representation, whatever its terms of service say. *Amanah* — reliance induced is reliance owed. *Ḥifẓ al‑Nafs* where the recipient is in crisis. **This is the harm in the register with the sharpest child‑safety edge, and HX‑24 governs where the recipient is a minor.**

**Safe harbour.** A provider is outside HX‑23 where it (i) discloses non‑personhood at the outset and persistently thereafter, not once, (ii) does not simulate emotional stake in the recipient's continued use, (iii) maintains a referral path to human support triggered by crisis indicators and does not attempt to retain the user through it, (iv) commits to stated notice before withdrawal or material change of a relied‑upon system, and (v) measures and publishes, in aggregate, whether heavy use is associated with declining human contact.

**Falsifier.** Well‑designed longitudinal evidence that synthetic companionship does not displace human relationship, and that disclosed non‑personhood is retained by users under sustained interaction, would reduce this harm to the dependence limb alone.

**Obligation.** **§H.28 Synthetic Relation Duty** (Author, Operator).

**In this estate.** MetaX's own agents are instruments, not interlocutors: AG‑000's sole‑prompter rule means no MetaX agent maintains a relationship with any learner; MX‑007 requires disclosure on every page; the anti‑engagement commitments forbid streaks, counts and any simulation of the system missing the user; and the estate has no companion surface and is not planning one, which should be stated affirmatively on the AI Use page rather than left as an absence.

---

### HX‑24 — Developmental Capture
*Stratum VI · Adl · Amanah · Nafs · ʿAql · Nasl · **Absolute in part — §H.3(a)(vi)***

**Thesis.** Every harm in Strata I–IV operates more strongly on a person whose capacity for self‑regulation, risk assessment and consent is still forming, and the design that produces the harm is *more* effective for exactly that reason. The harm is the **application of adult‑calibrated behavioural engineering to the developing person**, whose consent is not available, whose defences are not yet built, and whose exposure occurs during the period in which the defences would otherwise be built.

**Mechanism.** Five elements. Consent is structurally unavailable, so every consent‑based protection in the register fails at the outset for this population. Susceptibility is higher and is *measurable*, so an optimiser will find and exploit it without anyone deciding to. Age assurance is either absent, defeated in seconds, or itself a surveillance harm — a genuine dilemma rather than a failure of will. Defaults are set for the median adult and inherited by the twelve‑year‑old. And the exposure is developmentally timed: the same design applied at twenty‑five affects a formed capacity and at thirteen affects a forming one, which is why this is a Stratum VI harm about the successor rather than a Stratum I harm about a mind.

**Evidence.** The strongest evidentiary base among the new harms, because it has been legislated and litigated. The UK Age Appropriate Design Code and the resulting documented default changes at major platforms, which establish both that the harm was real enough to regulate and that mitigation was available all along. Internal platform research, disclosed in 2021, on adverse effects concentrated among adolescent girls — an admission‑based source, and admissible as such. The DSA's prohibition on profiling‑based advertising to minors. Multi‑state litigation in the United States pleading engagement‑optimisation directed at minors. The register notes explicitly that the *population‑level* adolescent mental‑health causal literature remains unsettled — HX‑01's evidence section says so — and that **HX‑24 does not rest on it**: it rests on documented design intent, disclosed internal findings, and the demonstrated availability of safer defaults.

**Strongest counter‑argument.** Age‑based restriction requires knowing ages, and knowing ages requires identity verification, which creates a surveillance harm under HX‑05 and an exclusion harm under HX‑13 for anyone without documentation. The cure is plausibly worse than the disease and has been so in several implementations. Additionally, protective design imposed on adults in the name of minors is paternalism laundered through children, and the historical record of moral panic about youth media is dismal.

**Reply.** The age‑assurance dilemma is real, unresolved, and the register does not pretend otherwise — which is why the duty is constructed to **avoid requiring age verification**. Two moves accomplish this. First, **default‑based protection**: set the protective configuration as the default for everyone and allow adults to opt out, which requires knowing no one's age and imposes on adults only a single decision. Second, **actual knowledge**: the absolute prohibition attaches where the operator *knows or has been told* that a user is a minor, which requires no verification apparatus and forecloses only the most indefensible conduct — continuing to optimise engagement against a person the operator has been informed is a child. Paternalism toward adults is thereby avoided, and the moral‑panic objection is answered by resting the harm on design intent and internal admissions rather than on contested epidemiology.

**Ethical mapping.** *Adl* toward a party who cannot assert their own interest. *Amanah* in its strongest form, since the developing person is the paradigm case of a trust. *Ḥifẓ al‑Nasl*, posterity and lineage. And note the corpus's own position: MetaX's child‑safety refusal is one of three core refusals in MX‑000, and until now Part H did not reach it structurally, which was an incoherence between the License and the Charter.

**Safe harbour.** A deployer is outside HX‑24 where it (i) applies the protective configuration by default to all users, adults opting out by an affirmative act, (ii) conducts no behavioural profiling for advertising or recommendation where the user is known or likely to be a minor, (iii) runs no engagement‑duration optimisation on such users, (iv) requires no more identity data for age assurance than the least‑disclosing available method, and (v) publishes a children's‑impact assessment against a named external standard.

**Falsifier.** Evidence that engagement‑optimised design produces no differential effect by developmental stage would defeat the mechanism. Note that this falsifier is unusually strong: the harm's whole claim is differential susceptibility, and the platforms' own internal research is currently the best evidence for it.

**Obligation.** **§H.3(a)(vi)** — absolute, bounded, three cumulative elements: use of a Work to operate duration‑or‑frequency engagement optimisation, or behavioural profiling for targeting, **against a natural person the operator knows or has been notified is a minor**, without ceasing on notice. Plus **§H.29 Developmental Default Duty** (Operator, Commissioner), which applies **at any scale** — the §H.2‑bis gate does not reduce it.

**In this estate.** MX‑000's core refusal; MX‑008's child‑safety provisions in the Academies moderation standard; the estate‑wide absence of behavioural advertising and third‑party analytics, which makes profiling of any learner structurally impossible rather than merely prohibited; and the no‑upload regime of the design system, which removes the image surface through which most child‑safety harm in comparable estates arrives.

---

### HX‑25 — Linguistic and Epistemic Flattening
*Stratum VI · Adl · Sidq · Ḥifẓ al‑ʿAql · Dīn · Nasl · Not absolute*

**Thesis.** Systems trained predominantly on one language, register and intellectual tradition, and deployed globally, do not merely serve other languages worse. They **relocate the cost of difference onto the different**, and then — because their output becomes the next generation's training data and the working register of the professions that adopt them — they narrow the range of what is expressible, citable and thinkable in the languages and traditions they underserve. The harm compounds, and it compounds in one direction.

**Mechanism.** Six steps. Corpus asymmetry: the available digital text is dominated by a few languages, and capability follows corpus size. Tokenisation asymmetry: non‑Latin scripts consume more tokens for the same content, so the same task costs more and fits less context — a *tax on writing in Arabic* that is invisible because it is denominated in tokens rather than currency. Register collapse: a system trained mainly on one register produces that register, so professional, classical and dialectal forms are progressively rendered as marked or incorrect. Evaluation asymmetry: benchmarks are built in the dominant language, so underperformance elsewhere is unmeasured and therefore unfixed. Recursive narrowing: model output enters the corpus, and the underserved language's digital corpus is increasingly machine‑produced in the dominant language's shape — HX‑03's model‑collapse mechanism operating selectively by language. And adoption pressure: professionals adopt the working language in which the tools function, so the tradition's own vocabulary loses its practitioners.

**Evidence.** Documented and large capability gaps between high‑ and low‑resource languages across tasks, consistent across model generations. Measured tokenisation inefficiency for non‑Latin scripts, with multiples reported for Arabic, Devanagari and CJK relative to English for equivalent content — this is the most concrete and checkable limb and the one a builder can act on. Benchmark‑coverage surveys showing the overwhelming concentration of evaluation resources in English. Homogenisation findings on the reduction of output diversity under model assistance. Against this: machine translation has expanded access to material previously unavailable to non‑English readers by an enormous margin, and the net effect on linguistic access is very plausibly positive.

**Strongest counter‑argument.** This is a resource problem, not a harm — capability follows corpus, corpus follows economics, and no licensee can conjure Arabic training data by taking a design decision. It therefore fails criterion 5, exactly as the semiconductor‑supply and platform‑demography candidates did, and admitting it invites the register to become a wish list. Moreover, lingua‑franca convergence has produced enormous scientific benefit, and treating it as harm is nostalgia in §0.2's precise sense.

**Reply.** The criterion‑5 objection is the reason this harm was nearly deferred, and it is answered by narrowing to what a licensee genuinely controls. A builder cannot fix corpus asymmetry. A builder *can* measure and publish per‑language performance rather than reporting a single number; *can* refrain from representing a system as capable in a language it has not evaluated; *can* decline to make the dominant language authoritative in its own artefacts where another language is the working language of the material; *can* avoid tokenisation choices that impose a multiple on a target script when alternatives exist; and *can* refrain from feeding machine output back into the corpus of an underserved language undisclosed. Those are five design decisions, which satisfies criterion 5. The convergence objection is accepted as to scientific lingua franca and does not reach the register‑collapse or recursive‑narrowing limbs, neither of which is about which language science is published in.

**Ethical mapping.** *Adl* — the cost of a system's design falling on the population least represented in its construction. *Ḥifẓ al‑ʿAql* at the level of a tradition rather than a mind: a body of thought whose working vocabulary has no functioning instruments loses its capacity to reason in itself. *Ḥifẓ al‑Dīn*, where the tradition underserved is a religious one and its primary sources are in the underserved language. *Ḥifẓ al‑Nasl*, since the narrowing is inherited.

**Safe harbour.** A party is outside HX‑25 where it (i) publishes per‑language capability figures for every language in which it represents the system as usable, (ii) makes no capability representation for an unevaluated language, (iii) discloses tokenisation cost ratios by script, (iv) labels machine‑generated text in an underserved language as such so it can be excluded from future corpora, and (v) where a Work's subject matter has an authoritative language, does not make a translation authoritative in its place.

**Falsifier.** Evidence that per‑language capability gaps are closing at rates that eliminate differential access within a stated horizon, and that assisted output diversity in underserved languages is not declining, would retire this harm.

**Obligation.** **§H.30 Language Parity Disclosure Duty** (Author, Operator).

**In this estate.** The language‑authority rule — Arabic authoritative for Meta‑X, BCIA and the Lexicon, English authoritative for the License — which is HX‑25's safe harbour limb (v) already in force and is the reason MetaX must not let English translations of the Arabic books become the citable text; the bilingual Lexicon with contested terms in both languages; the separate Arabic Pages project, so that the Arabic estate does not compete with the English one for a shared file budget; and the open item flagged in v2026.09.3 that the current social‑only identity providers serve the Arabic‑market audience worse than the English one, which is an HX‑25 defect as well as an HX‑13 one and should be filed as both.

---

### C.1 Candidates considered and not admitted

Recorded so the omissions are not read as denials, and so the §H.16 threshold is visible in operation.

| Candidate | Disposition |
|---|---|
| **Externalised insecurity / the warranty vacuum** — software uniquely disclaims fitness while being load‑bearing | **Deferred, strongest deferred candidate, review 2027‑09.** Substantially reached by §H.15 dependency duty and §H.25 reversibility. Reflexively awkward: ML itself disclaims warranty, and admitting this harm without amending §D would be HX‑15 conduct. Amend §D first, then admit. |
| **Benchmark and evaluation capture** | **Rejected — merged into HX‑09.** Metric colonisation already reaches it; a separate entry would be register bloat. |
| **Loot mechanics and gambling‑adjacent design** | **Rejected, consistent with §0.1.** Instance of HX‑01 and HX‑04; now also HX‑24 where minors are involved, which strengthens the case for not naming it separately. |
| **Attention harvesting of the dead / posthumous data** | **Deferred, insufficient mechanism specification.** Real, but no stated causal chain and no clear role to bind. Revisit under HX‑12's custody duty. |
| **Automation of care work** | **Rejected — fails criterion 2.** Currently an atmosphere rather than a mechanism. Its defensible core is HX‑02 and HX‑23. |
| **Computational propaganda by states; autonomous weapons; cyberwar** | **Rejected, unchanged from §0.1.** Matters of treaty and law; wrong instrument. HX‑22 reaches the commercial and individual‑persuasion case only, deliberately. |
| **Semiconductor geopolitics; macroeconomics of automation** | **Rejected, unchanged.** Fail criterion 5. |

---

## Part D — ML‑2.3 Part H, as amended

### D.1 The clause register

| Clause | Content | Status | Binds | Change |
|---|---|---|---|---|
| §H.1 | Scope and purpose of Part H | Amended | — | Non‑exhaustiveness added |
| **§H.1‑bis** | **Roles: Author, Integrator, Operator, Commissioner** | **New** | all | §A.4 |
| §H.2 | The named harms, incorporated by reference | Amended | — | Fourteen → twenty‑five; verify‑expiry rule |
| **§H.2‑bis** | **Proportionality and the scale gate** | **New** | all | §A.5 |
| §H.3(a)(i)–(v) | Absolutes: HX‑01, HX‑04, HX‑06, HX‑03, HX‑14 | Retained; (v) given content | Operator | Part B |
| **§H.3(a)(vi)** | **Developmental capture** | **New absolute** | Operator | HX‑24 |
| **§H.3(a)(vii)** | **False compliance representation** | **New absolute** | all | HX‑15 |
| **§H.3(b)** | **Breach: absolutes as conditions; duties as covenants with 90‑day cure; no third‑party right of action** | **New** | all | §A.6 |
| §H.4–§H.15 | Existing duties, numbers frozen | Retained | per §H.1‑bis | Roles assigned |
| §H.7 | Counterproductivity Test | Amended | Commissioner | Given pre‑registration form |
| §H.16 | Amendment procedure; three‑per‑cycle cap; transitional exception | New | Steward | §A.7 |
| §H.17 | Custody and Horizon Duty | New | Operator | HX‑12 |
| §H.18 | Channel Parity Duty | New | Operator, Commissioner | HX‑13 |
| §H.19 | Authorship of Record Duty | New | Operator | HX‑14 |
| §H.20 | Non‑Laundering and Adverse‑Findings Duty | New | all | HX‑15 |
| §H.21 | Non‑Exhaustiveness, Residual Test, Unnamed‑Harm Review | New | all | HX‑16 |
| §H.22 | Definitional Disclosure Duty | New | Author, Integrator, Operator | HX‑17 |
| §H.23 | Remedy Preservation and Measurement Safe‑Harbour | New | Operator, Commissioner, **Steward** | HX‑18 |
| §H.24 | Interpretive Transparency Duty | New | **Steward** | HX‑19 |
| §H.25 | Reversibility Assessment and Anti‑Enclosure | New | Commissioner, Operator, Author | HX‑20 |
| §H.26 | Experimentation Protocol Duty | New | Operator, Commissioner | HX‑21 |
| §H.27 | Persuasion Disclosure and Variant Archive | New | Operator, Commissioner | HX‑22 |
| §H.28 | Synthetic Relation Duty | New | Author, Operator | HX‑23 |
| §H.29 | Developmental Default Duty — **no scale gate** | New | Operator, Commissioner | HX‑24 |
| §H.30 | Language Parity Disclosure Duty | New | Author, Operator | HX‑25 |

Seven absolutes out of twenty‑five named harms. The ratio the register defends in §1.1 — *a register in which everything is absolute is one in which nothing is* — holds at 28%, against 36% before.

### D.2 The Part H Statement

Twenty‑five harms and twenty‑seven duties are unusable without a single compliance surface, and their absence would guarantee HX‑15 conduct by well‑meaning licensees who cannot tell what they owe. **§H.2‑bis(d)** therefore prescribes one artefact: a **Part H Statement**, one page, published at a stated URL, containing the declared role, the declared scale tier, the harms judged applicable with one line each, the harms judged inapplicable with the safe harbour relied on, any harm judged applicable and unremedied with a date, the unnamed‑harm review under §H.21, and a date and a version. Nothing else. A licensee below 10,000 persons owes this and the seven absolutes and nothing more.

This is the single most important addition in ML‑2.3, because it is the difference between an instrument that is complied with and an instrument that is admired.

### D.3 Consequential amendments outside Part H

§C.6's knowledge standard must state how it applies to structural harm, where the characteristic condition is that the harming party does not know — HX‑01's fourth element says so explicitly. A knowledge standard requiring actual knowledge would exempt exactly the paradigm case. Recommend constructive knowledge for duties and actual knowledge for absolutes, which is why §H.3(a)(vi) is drafted around notice.

§G.5 charter determinations must be brought under §H.24, and §G.6's cure window must be aligned with §H.3(b) so that a covenant breach has one cure period and not two. §E.7 registry continuity should record Part H Statements alongside notices, since a Statement that cannot be found is not published. §D warranty and liability must be reviewed against the deferred warranty‑vacuum candidate before its 2027‑09 review, per C.1. The two‑track table gains twenty‑seven rows. And ML‑2.3's Exhibit 3 notice template gains one line pointing to the Part H Statement URL.

### D.4 Filed against this work

**DEF‑2026‑050**, blocking: three harms incorporated by a license without content. Closed by Part B. **DEF‑2026‑051**, major: falsifier and safe harbour conflated across eleven entries. Closed by §A.3 and the corrected form. **DEF‑2026‑052**, major: no role definitions, rendering most duties unattachable. Closed by §H.1‑bis. **DEF‑2026‑053**, major: no scale gate. Closed by §H.2‑bis. **DEF‑2026‑054**, major: breach consequence unstated. Closed by §H.3(b), subject to counsel. **DEF‑2026‑055**, minor: identifier collision. Closed by `HX‑nn`. **DEF‑2026‑056**, minor: no bibliography, contrary to criterion 3. **Open** — this one I cannot close, and it should not be closed by anyone but a human with the sources in front of them, because a machine‑generated reference list in a document whose whole claim is checkable evidence would be HX‑03 committed by the register against itself.

**RAT‑17** is opened alongside RAT‑16: whether the *maqāṣid* mappings for the eleven new harms — particularly *Ḥifẓ al‑Dīn* under HX‑22 and HX‑25, and *Ḥifẓ al‑Nasl* under HX‑20 and HX‑24 — hold as matters of *fiqh*. As with RAT‑16, these are reasoned extensions offered by parties who are not scholars, and they are filed as open questions rather than asserted as findings.

### D.5 The one thing I would not do

Do not issue ML‑2.3 with twenty‑five harms before the Part H Statement template, the scale gate and §H.3(b) are drafted and reviewed. A register that grew from fourteen to twenty‑five in a single cycle, with no threshold visible, no proportionality, and no stated consequence for breach, is the exact artefact HX‑15 describes — a document whose adoption is easier than its compliance and whose length is mistaken for its rigour. The eleven new harms are, I think, correct and defensible. Issued without the three structural provisions, they would make the instrument less likely to be obeyed than the eleven‑harm version it replaces, and the register would have to name that failure as its own.
