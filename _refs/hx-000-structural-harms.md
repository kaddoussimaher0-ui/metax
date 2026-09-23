---
doc_id: "HX-000"
title_en: "The Fourteen Structural Harms of Computing, Networking and Technological Order"
title_ar: "الأضرار البنيوية الأربعة عشر للحوسبة والشبكات والنظام التقني"
family: "harms"
version: "v2026.09.4"
status: "canonical"
authority: "governing"
prevailing_text: "en"
audience_tier: 5
depth: 5
evidence_class: "semi-durable"
review_interval_months: 12
curator: "Maher"
license: "ML-2.2 · Work of Foundational Character"
designated: true
incorporated_by: "ML-2.2 Part H"
last_reviewed: "2026-09-01"
domain_tags: ["ethics", "governance", "technology-criticism", "maqasid", "foundational"]
ai_disclosure_url: "../corpus/mx-007-ai-use-and-disclosure.md"
hreflang: "en, ar"
---

# HX-000 — The Fourteen Structural Harms

**The register of harms that [ML-2.2 Part H](../license/ml-2-2.md#part-h--structural-harms-and-the-duty-of-non-amplification) incorporates by reference.**

> **Standing of this document.** This is the **operative register** of the harms named in
> [ML-2.2 §H.2](../license/ml-2-2.md#h2--the-fourteen-named-harms). The License governs; this
> document supplies the content of each named harm, its mechanism, its evidence, and its
> falsifier. Where this document and the License differ, the
> [License governs](../00-governance-map/precedence-and-conflict-rules.md) and the difference
> is a defect to be filed. Where this document and a summary of it differ, this document
> governs.

> **Why a license needs this document.** [ML-2.1](../license/ml-2-1.md) prohibited exactly one
> thing absolutely — Core Riba (§C.9) — and conditioned use on four substantive grounds:
> deception, harm, oppression, and betrayal of trust. Those four grounds are written for
> *conduct*. They do not reach a class of injury that is the characteristic injury of computing:
> harm that no actor intends, that arises from **structure** rather than from malice, that is
> distributed so thinly across so many people that no individual instance is actionable, and
> that is invisible to the party causing it because the metric by which that party judges itself
> is the very instrument of the harm. A license that conditions use on the absence of *Darar*
> while remaining silent on structural *Darar* has a hole in the middle of Part C. Part H closes
> it. This document is what Part H points at.

---

## §0 — Method

### 0.1 What was selected, and against what criteria

The fourteen harms below are not the fourteen worst things done with computers. Crime,
weaponisation, child exploitation, state repression and fraud are worse in every ordinary sense,
and they are all **already reached** by existing law and by
[ML-2.2 Part C §§C.1–C.7](../license/ml-2-2.md#part-c--ethical-use-conditions). Restating them
here would inflate the register while adding nothing operative.

What is selected instead is the class of harm that is **structural, distributed, and
unactionable one instance at a time**. Five inclusion criteria were applied, and every candidate
had to satisfy all five:

| # | Criterion | Why it excludes things |
|---:|---|---|
| 1 | **Structural, not incidental** | The harm follows from how the system is built and financed, not from a bad actor operating it. Remove every bad actor and the harm remains. |
| 2 | **Mechanism-identified** | A stated causal chain, not a correlation and not an atmosphere. "Technology makes us lonely" fails; a named feedback loop passes. |
| 3 | **Evidence-bearing** | Published, checkable evidence exists — including evidence *against*. Contested effect sizes are admitted **as contested**, never laundered into certainty. |
| 4 | **Falsifiable** | Each harm carries a stated condition under which it would be withdrawn. A harm that cannot be withdrawn is a doctrine, and this corpus does not publish doctrine ([MX-006](../corpus/mx-006-editorial-and-evidence.md)). |
| 5 | **Actionable by a builder** | Each harm implies at least one design decision a licensee can actually make. A harm with no design consequence belongs in an essay, not in a license. |

Criterion 5 is the reason the register is fourteen items rather than forty. Many real harms —
the geopolitics of semiconductor supply, the macroeconomics of automation, the demography of
platform migration — are genuine and are **not here**, because a licensee cannot act on them and
a license that gestures at them buys credibility it cannot pay for.

**Named exclusions, stated so the omissions are not read as denials.** Autonomous weapons,
computational propaganda by states, cyberwar, algorithmic financial instability, and the
gambling-adjacent design of loot mechanics are all excluded — the first four because they are
matters of law and treaty rather than of licensing, the last because it is a straightforward
instance of [H1](#h1--attention-expropriation) and [H4](#h4--the-human-as-product) and needs no
separate line. Their exclusion from this register is not a claim that they are minor. It is a
claim that this instrument is not the right instrument.

### 0.2 The four failure modes this document tries to avoid

Technology criticism fails in four reliable ways, and a register that falls into any of them is
worse than no register, because it discredits the true parts along with the false.

**Nostalgia.** The claim that an earlier arrangement was better, argued from the memory of those
who survived it. Every harm below is therefore stated as a **comparison against an available
alternative design**, never against the past. "Printing did this too" is a real objection and is
answered where it applies rather than dismissed.

**Moral panic.** The pattern Stanley Cohen described and every generation repeats: novel medium,
vulnerable youth, catastrophic claim, retracted quietly. The defence is criterion 3 above.
Where the evidence is weak, this document says the evidence is weak. See especially
[H1 §Counter](#h1--attention-expropriation), where the strongest published critique of the
attention literature is reproduced rather than paraphrased.

**Technological determinism.** The claim that the artefact caused the outcome, which conveniently
absolves everyone who chose the artefact. The frame adopted here is
Kranzberg's — *"technology is neither good nor bad; nor is it neutral"* (Kranzberg 1986) — and
Winner's: artefacts embody political arrangements, which means they were **decided** and can be
decided otherwise (Winner 1980). Determinism and neutrality are the same error twice: both make
the builder not responsible.

**Inverse solutionism.** The belief that a sufficiently strict rule fixes a structural problem.
Part H is therefore written as a **reinforcing layer** under
[§1.5](../license/ml-2-2.md#15-relationship-to-secular-and-international-law-reinforcing-character),
with exactly one bounded absolute prohibition
([§H.3(a)](../license/ml-2-2.md#h3--the-duty-of-non-amplification)), for the same reason
[§C.9](../license/ml-2-2.md#c9--absolute-prohibition-of-core-riba) is bounded by four cumulative
elements: an unbounded prohibition is not stronger, it is unenforceable, and an unenforceable
prohibition teaches licensees that the instrument may be ignored.

### 0.3 The three theses that make the register coherent

**Thesis I — Non-neutrality (Kranzberg).** Every technical artefact makes some actions cheap and
others expensive. That gradient is a moral fact about the artefact regardless of any user's
intention. It follows that "we only built the tool" is not a defence available under this
License, and [§H.3](../license/ml-2-2.md#h3--the-duty-of-non-amplification) removes it
explicitly.

**Thesis II — Embedded politics (Winner; Latour; Lessig).** Artefacts *delegate*: what a
designer declines to decide, the artefact decides for every user, at scale, silently, and
without appeal. Lessig's formulation — code is law — is not a metaphor but a description of a
regulatory substitution in which the regulated party has no standing.
[H6](#h6--algorithmic-governance-without-due-process) is this thesis in its most acute form.

**Thesis III — Counterproductivity (Illich).** Every institution and every tool passes, at a
determinate scale, a **second watershed** beyond which it frustrates the end it was built to
serve: medicine that produces illness, transport that consumes more time than it saves,
schooling that disables learning (Illich 1973, 1975). The thesis is testable and the test is
operative in this corpus as
[§H.7 The Counterproductivity Test](../license/ml-2-2.md#h7--the-counterproductivity-test). Its
importance is that it converts "is this technology good?" — unanswerable — into "**has this
deployment crossed its threshold, and how would we know?**" — answerable, and answerable with a
number.

### 0.4 The ethical frame: *maqāṣid* and the four Foundational Principles

[ML-2.2 §1.2](../license/ml-2-2.md#12-the-four-foundational-principles) grounds the License in
**Amanah** (faithful stewardship), **Sidq** (truthfulness), **Adl** (justice and
proportionality) and **Shafafiyah** (transparency). Part H requires one addition to the
subsidiary norms of §1.3, because none of the four, and none of *Darar*, *Zulm* or *Gharar*,
squarely names what [H1](#h1--attention-expropriation),
[H2](#h2--cognitive-offloading-and-deskilling) and
[H14](#h14--moral-deskilling-and-delegated-judgement) actually injure.

That addition is **Ḥifẓ al-ʿAql — the preservation of the intellect**, one of the five
classical *maqāṣid al-sharīʿah*: the protection of religion (*dīn*), life (*nafs*), **intellect
(*ʿaql*)**, lineage and posterity (*nasl*), and property (*māl*). The classical discussions of
*ḥifẓ al-ʿaql* concern intoxicants; the analogy drawn here is a **reasoned extension, not a
settled ruling**, and it is offered by a curator who is
[not a scholar](#5-what-this-document-refuses-to-claim). The extension is this: an instrument
engineered to degrade a person's capacity for sustained, deliberate reasoning injures the same
faculty that the classical prohibition protects, and it does so without the person's assent and
often without their awareness. Whether that analogy holds as a matter of *fiqh* is
[RAT-16](../00-governance-map/open-questions-and-ratifications.md#rat-16--the-ifz-al-aql-analogy-requires-scholarly-review),
and it is filed as an open question rather than asserted as a finding.

Three further norms are named in Part H because the harms below reach them directly:

- **Tajassus** (spying, prying into what a person has not disclosed) — Qur'ān 49:12 — reached by
  [H5](#h5--ambient-surveillance-and-the-end-of-practical-obscurity).
- **Isrāf / Tabdhīr** (extravagance and squandering) and **istikhlāf** (trusteeship of the
  earth) — reached by [H10](#h10--extractive-materiality).
- **Gharar** (excessive, structurally concealed uncertainty in a dealing) — already in §1.3(iii),
  and reached by [H4](#h4--the-human-as-product), because a transaction in which one party cannot
  know what is being taken from them is the informational form of *gharar*.

**A methodological commitment.** Every harm below is mapped to a principle and a *maqṣad*. That
mapping is a **claim about ethics, not about law**, and the mapping is the part most likely to be
wrong. It is stated explicitly so it can be attacked, per
[ST-06](../standards/st-06-objections-standard.md).

---

## §1 — The taxonomy

The fourteen are grouped in four strata by **what they injure**, not by which technology
produces them. The stratification matters because remedies do not transfer across strata: a
disclosure rule that helps against a Stratum II harm does nothing against a Stratum I harm,
whose mechanism operates below the level at which disclosure is read.

| Stratum | What is injured | Harms | Characteristic remedy |
|---|---|---|---|
| **I — Cognitive** | The faculty of the individual mind | [H1](#h1--attention-expropriation), [H2](#h2--cognitive-offloading-and-deskilling), [H3](#h3--epistemic-collapse) | Design refusal. Disclosure is ineffective. |
| **II — Relational and political** | The standing of the person before others and before power | [H4](#h4--the-human-as-product), [H5](#h5--ambient-surveillance-and-the-end-of-practical-obscurity), [H6](#h6--algorithmic-governance-without-due-process) | Due process, contestability, data minimisation. |
| **III — Economic and structural** | The distribution of power, work and worth | [H7](#h7--centralisation-and-enclosure), [H8](#h8--labour-fragmentation-and-invisible-work), [H9](#h9--metric-colonisation), [H13](#h13--exclusion-by-default) | Exit rights, portability, attribution, non-exclusive metrics. |
| **IV — Material and temporal** | The world and the record | [H10](#h10--extractive-materiality), [H11](#h11--fragility-complexity-and-the-integral-accident), [H12](#h12--digital-amnesia-and-its-inverse), [H14](#h14--moral-deskilling-and-delegated-judgement) | Accounting, redundancy, preservation, retained human judgement. |

[H14](#h14--moral-deskilling-and-delegated-judgement) sits in Stratum IV rather than Stratum I
deliberately, and the placement is an argument: the erosion of the *capacity to judge* is not
primarily a cognitive event in one person but a **temporal** event in an institution — it is how
a body loses, across a generation, the ability to decide anything it has delegated. It is
therefore the last harm and the one the other thirteen enable.

### 1.1 The register, in one table

| Id | Harm | One-line operative statement | Principle | *Maqṣad* | Absolute? |
|---|---|---|---|---|---|
| [H1](#h1--attention-expropriation) | Attention expropriation | Attention is extracted as a resource by design against the holder's own reflective interest. | Darar · Ḥifẓ al-ʿAql | ʿAql | **Partly — §H.3(a)(i)** |
| [H2](#h2--cognitive-offloading-and-deskilling) | Cognitive offloading and deskilling | Competence transferred to a system atrophies in the person, and the atrophy is discovered at failure. | Amanah | ʿAql | No |
| [H3](#h3--epistemic-collapse) | Epistemic collapse | Verification cost rises above production cost; the shared record stops functioning as a record. | Sidq | Dīn · ʿAql | **Partly — §H.3(a)(iv)** |
| [H4](#h4--the-human-as-product) | The human as product | The person is the raw material, not the customer, and cannot know what is taken. | Zulm · Gharar | Nafs · Māl | **Partly — §H.3(a)(ii)** |
| [H5](#h5--ambient-surveillance-and-the-end-of-practical-obscurity) | Ambient surveillance | Aggregation destroys practical obscurity; anonymity is not a property of a dataset. | Tajassus · Amanah | Nafs · Nasl | No |
| [H6](#h6--algorithmic-governance-without-due-process) | Algorithmic governance without due process | Consequential decisions become unappealable because they became automatic. | Adl | Nafs · Māl | **Partly — §H.3(a)(iii)** |
| [H7](#h7--centralisation-and-enclosure) | Centralisation and enclosure | Network effects convert a commons into a landlordship; exit is priced out. | Adl · Amanah | Māl | No |
| [H8](#h8--labour-fragmentation-and-invisible-work) | Labour fragmentation and invisible work | Human labour is disassembled until it is deniable, then denied. | Zulm · Sidq | Nafs · Māl | No |
| [H9](#h9--metric-colonisation) | Metric colonisation | The measure replaces the thing measured, then governs it. | Sidq · Adl | ʿAql · Māl | No |
| [H10](#h10--extractive-materiality) | Extractive materiality | "Immaterial" computing runs on mines, water, power and a waste stream. | Isrāf · Istikhlāf | Nafs · Nasl | No |
| [H11](#h11--fragility-complexity-and-the-integral-accident) | Fragility and the integral accident | Efficiency buys coupling; coupling buys catastrophe; the accident is invented with the system. | Amanah | Nafs | No |
| [H12](#h12--digital-amnesia-and-its-inverse) | Digital amnesia, and its inverse | A civilisation that records everything preserves nothing — and forgets nothing it should. | Amanah · Adl | ʿAql · Nafs | No |
| [H13](#h13--exclusion-by-default) | Exclusion by default | Digital-only provision removes a right from those who cannot reach it. | Adl | Nafs · Māl | No |
| [H14](#h14--moral-deskilling-and-delegated-judgement) | Moral deskilling | Judgement delegated to a system does not move — it disappears, along with its author. | Amanah · Adl | ʿAql · Dīn | **Partly — §H.3(a)(v)** |

"Absolute" means the harm has a **bounded, cumulative-element core** inside
[§H.3(a)](../license/ml-2-2.md#h3--the-duty-of-non-amplification) that is refused irrespective of
forum, on the model of [§C.9](../license/ml-2-2.md#c9--absolute-prohibition-of-core-riba). Five
of the fourteen do. The other nine are **conditions and duties**, not prohibitions, and the
distinction is load-bearing: a register in which everything is absolute is a register in which
nothing is.

---

## §2 — The fourteen harms

Each harm is stated in the same eight-part form, so that the register can be read as a table and
so that a missing part is visible as a defect: **Thesis · Mechanism · Evidence · Strongest
counter-argument · Reply · Ethical mapping · Falsifier · Obligation this creates.**

---

## H1 — Attention Expropriation

> **Thesis.** Where a system's revenue is a function of time-on-system, the system's optimum and
> the user's reflective interest are structurally opposed, and the system will find the
> opposition before the user does. The harm is not distraction. The harm is that **the user's
> capacity for sustained voluntary attention becomes the object of an engineering programme
> conducted against them**, by parties who never state that this is the programme.

### Mechanism

Four elements compose it, and all four are required:

1. **Monetisation coupled to duration or frequency.** Impressions, sessions, or engagement events
   are the unit sold. Nothing in the revenue model registers whether the time was well spent.
2. **Variable-ratio reinforcement.** Unpredictable reward on an unpredictable schedule is the
   most persistence-producing schedule known to operant psychology (Ferster & Skinner 1957), and
   the pull-to-refresh gesture is a precise implementation of it. This is not an analogy; it is
   the same schedule, deployed deliberately, by people who have read the literature.
3. **Removal of natural stopping cues.** A newspaper ends. A chapter ends. An infinite feed
   removes the *terminus* that lets a person notice they have finished, so the decision to stop —
   which the finite artefact made for free — must now be made continuously by depleted executive
   control.
4. **Asymmetry of instrumentation.** One party runs continuous randomised controlled experiments
   on millions of subjects; the other party has an introspective report they cannot calibrate.
   This asymmetry is the harm's engine, and it is why disclosure is a weak remedy: the disclosed
   party does not know what to look for, and the design was selected precisely because it works
   on people who are looking.

The fourth element also explains the harm's invisibility from inside: the metric that certifies
the design as successful (retention) is the metric that measures the injury.

### Evidence

Strongest first, and with the effect sizes as published rather than as summarised.

- **The design intent is documented from the inside.** The mechanism is not inferred from
  outcomes; it is stated by its builders. Tristan Harris's *Distracted Minds* memo (2013) and
  the subsequent public statements by early Facebook and Google staff describe the deliberate
  application of behavioural-psychology findings to increase session frequency. Sean Parker's
  2017 remarks — a "social-validation feedback loop … exploiting a vulnerability in human
  psychology" — are an admission, not a critique, and they are admissible against every "we
  merely built a neutral tool" reply.
- **Interruption cost is measured and large.** Task-switching imposes a reconfiguration cost
  measurable in hundreds of milliseconds per switch (Monsell 2003) and, at the level of real
  work, a resumption lag averaging over twenty minutes for interrupted knowledge tasks (Mark
  et al. 2005, 2008). The 23-minute figure is frequently over-stated in popular writing; the
  finding it rests on is real and is a mean with wide variance.
- **Mere presence effects are replicated but small.** The "brain drain" finding — that a
  phone's presence reduces available working memory even when unused (Ward et al. 2017) — has
  replicated inconsistently, with effect sizes attenuating in larger samples. It is cited here
  **as contested**.
- **The adolescent mental-health literature is genuinely unsettled and is the weakest limb.**
  Twenge & Campbell report population-level associations; Orben & Przybylski's specification-curve
  analyses of the same datasets find associations of a magnitude comparable to *eating potatoes*
  (Orben & Przybylski 2019). Haidt's synthesis argues the effect is real, dose-dependent and
  concentrated in girls; Odgers, Jensen and others argue the causal claim outruns the data. **This
  register does not resolve that dispute and does not rely on it.** H1 stands on the documented
  design intent and the measured interruption costs, which are not in dispute, and it would stand
  if the adolescent literature collapsed entirely.

### Strongest counter-argument

Three, and the second is the serious one.

*(a) Moral panic by precedent.* Socrates objected to writing in the *Phaedrus*; Gessner
objected to printed abundance in 1545; the same structure of complaint has attended the novel,
radio, comics and television. Priors should be low.

*(b) Revealed preference.* People choose these products, repeatedly, with alternatives available.
Calling that choice a harm requires asserting that the critic knows the user's interest better
than the user does — which is the premise of most paternalism and of a good deal of
authoritarianism.

*(c) Selection effects.* Heavy users may be distressed for prior reasons, and the causal arrow
runs the wrong way.

### Reply

To (a): the precedent argument would be decisive if the claim were *novel medium, therefore
harm*. It is not. Writing was not instrumented; the *Phaedrus* had no A/B test. The four-element
mechanism above distinguishes the present case from every prior case by the presence of a
closed measurement-and-optimisation loop aimed at duration. If that loop is absent, H1 does not
apply, and this register says so.

To (b): revealed preference is a valid inference only where preferences are stable and
uninstrumented. Where one party continuously reshapes the choice architecture in which the other
party's preferences form, the resulting choice is not evidence of interest — it is evidence that
the instrumentation worked. The tell is the **divergence between first-order and second-order
preference**: the same users, asked, overwhelmingly report wanting to use these products less,
and act on that report when given tools that work. A preference that its holder reliably
disavows is not the sovereign preference the argument requires. Note the limit of this reply: it
justifies *refusing to build the loop*, not *overriding anyone's choices*, and H1 accordingly
generates a design duty and never a use restriction.

To (c): granted, and it is precisely why H1 does not rest on the mental-health literature.

### Ethical mapping

*Darar* (harm without corresponding benefit to the harmed) and **Ḥifẓ al-ʿAql** — the faculty
injured is the one the *maqṣad* protects. *Gharar* is engaged secondarily: the user cannot
price what the transaction costs them. *Sidq* is engaged where the product is described as a
connection service while being operated as a duration-maximising one.

### Falsifier

H1 is withdrawn as to any system that (i) derives no revenue or internal success metric from
duration, frequency or session count, **and** (ii) publishes its top-line optimisation target,
**and** (iii) ships a natural terminus — a bounded unit that ends. A system meeting all three
is outside this harm regardless of how compelling it is. **Additionally:** if a well-powered
adversarial replication programme were to show that variable-ratio scheduling in software
produces no measurable persistence effect over non-scheduled delivery, element 2 of the mechanism
fails and H1 must be narrowed to elements 1, 3 and 4.

### Obligation this creates

[§H.3(a)(i)](../license/ml-2-2.md#h3--the-duty-of-non-amplification) — **absolute, bounded:** a
Work may not be used to operate a system whose *primary* design objective is the maximisation of
duration or frequency of engagement **and** which employs variable-ratio reinforcement **and**
suppresses a stopping cue **and** does not disclose the objective. All four elements cumulative,
on the §C.9.2 model. Plus [§H.4](../license/ml-2-2.md#h4--the-optimisation-disclosure) —
disclosure of the top-line optimisation target.

**In this estate:** [DS-02 §5](../design/ds-02-motion-and-attention.md), the anti-engagement
commitments with published falsifiers — no streaks, no leaderboards, no infinite feed, no
notification counts; progress in artefacts, never minutes.

---

## H2 — Cognitive Offloading and Deskilling

> **Thesis.** Competence delegated to a reliable system does not remain latent in the person; it
> decays. This is often a correct trade. It becomes a harm when three conditions hold together:
> the decay is **unmeasured**, the delegation is **irreversible in practice**, and the system's
> failure mode requires **exactly the competence that decayed**.

### Mechanism

Offloading is not new — the notebook, the abacus and the sea chart are all offloading, and all
three are net goods. What changes with automated systems is the *shape of the failure*:

1. **Skill decay follows disuse** on a well-characterised curve, faster for procedural skills
   than declarative ones, and fastest for skills that were never overlearned.
2. **Automation induces monitoring rather than performing.** Humans are poor vigilance monitors;
   this is one of the most robust findings in the human-factors literature.
3. **The irony of automation** (Bainbridge 1983): automation handles the routine cases and hands
   back the exceptional ones — so the operator is left with only the hardest cases, having lost
   practice on the easy ones through which competence is maintained.
4. **Confidence decays more slowly than competence.** This gap is the actual danger. A
   practitioner who cannot do the task but believes they can will not seek help, and the belief
   is sustained by years of the system doing it correctly on their behalf.

### Evidence

- **Aviation.** Manual-flying-skill degradation under high automation is documented in NTSB and
  FAA findings and in the Air France 447 (2009) and Asiana 214 (2013) investigations, and the FAA
  issued explicit guidance (SAFO 13002, 2013) encouraging manual flight to maintain proficiency.
  This is the strongest evidence in the register for any harm: an entire industry measured the
  effect and changed policy.
- **Navigation.** Habitual GPS use is associated with reduced hippocampal-dependent spatial
  encoding and poorer subsequent unaided wayfinding (Ishikawa et al. 2008; Dahmani & Bohbot 2020).
  The literature is small and partly cross-sectional.
- **Search and memory.** The "Google effect" — reduced recall for information believed to be
  externally available, with improved recall for *where* it is (Sparrow, Liu & Wegner 2011).
  Replication is mixed; transactive-memory framing is better supported than pure-deficit framing.
- **Code assistants.** Early controlled work finds throughput gains alongside measurable
  increases in accepted-but-defective output and reduced ability to explain accepted code. This
  evidence is new, thin, and moving fast; it is flagged
  `[VERIFY 2027-03]` and carries no weight it has not earned.
- **Medicine.** Deskilling in manual diagnostic tasks under decision-support is documented but
  confounded by concurrent changes in training.

### Strongest counter-argument

**Every literate person has offloaded memory to writing, and no one proposes reversal.** Plato's
*Phaedrus* complaint was correct as prediction — writing *did* erode trained memory — and wrong
as evaluation, because what was gained dwarfed it. Cognition is *extended* by nature (Clark &
Chalmers 1998); treating the unaided brain as the authentic unit is a philosophical position, not
a neutral baseline. Deskilling is simply the visible face of specialisation, which is the
foundation of every advanced economy.

### Reply

Accepted in full as to the general case, and this is why H2 is **not** an absolute prohibition
and creates no duty to refuse automation. The reply is narrower and it is about **failure
modes**: writing does not fail in a way that requires the reader to suddenly recite the
*Iliad*. The harm named here is confined to the case where the fallback plan is a human
competence that the system's own success has silently destroyed. Air France 447 is the canonical
instance: the automation withdrew, and the competence it had substituted for was no longer
present. The obligation is therefore not "do not automate" but **"do not let a fallback plan
depend on an unmeasured competence."**

### Ethical mapping

*Amanah* — a builder who designs a fallback on a competence they have not verified is not a
faithful steward of the operator's trust. **Ḥifẓ al-ʿAql**, in its institutional rather than
individual form.

### Falsifier

H2 is withdrawn as to any deployment that (i) has no human-fallback path, so that no competence
is load-bearing at failure, **or** (ii) measures the retained competence of its fallback
operators at a stated interval and publishes the result. Longitudinal evidence that skill decay
under automation is fully recoverable within the time available at failure would defeat the
harm entirely.

### Obligation this creates

[§H.5](../license/ml-2-2.md#h5--the-fallback-competence-duty) — where a Work is deployed such
that a human competence is the designated fallback, that competence must be **identified,
exercised and measured** at a stated interval, or the fallback must be documented as absent.
Silence is the breach.

**In this estate:** the assessment model — proof rungs P0–P3 with artefacts, not completions
([RB-02](../rubrics/rb-02-proof-ladder.md)), and
[MX-007](../corpus/mx-007-ai-use-and-disclosure.md), under which AI-assisted work is disclosed
and the human remains the author of record.

---

## H3 — Epistemic Collapse

> **Thesis.** When the marginal cost of producing plausible assertions falls below the marginal
> cost of verifying them, the shared record ceases to function as a record. The primary harm is
> **not** that people believe false things — they always have. It is the **second-order
> collapse**: the rational response to unverifiable abundance is to disbelieve everything, and a
> population that disbelieves everything cannot be lied to, but also cannot be informed, warned,
> or held to an account it can check.

### Mechanism

1. **Asymmetric cost.** Generation cost approaches zero; verification cost stays roughly
   constant, because verification requires provenance, expertise or physical access, none of
   which scale with generation. Brandolini's asymmetry, now industrialised.
2. **Provenance stripping as the default.** Copy operations do not carry origin. Every
   re-publication is a laundering step, and the web's default is re-publication.
3. **Recommendation on engagement, not accuracy.** Selection pressure favours the assertion that
   travels, and falsehood travels faster and further than truth in measured cascades (Vosoughi,
   Roy & Aral, *Science*, 2018) — a finding whose mechanism the authors attribute to novelty, not
   to bots.
4. **Model collapse and the closing loop.** Where generative systems are trained on their own
   outputs, distributional tails are progressively lost (Shumailov et al. 2023–24). As synthetic
   text saturates the crawlable web, the corpus that trains the next generation degrades, and
   the degradation is not visible in fluency.
5. **The liar's dividend.** Once forgery is cheap and known to be cheap, **authentic** evidence
   becomes deniable. This is the most under-appreciated element: the harm falls hardest on the
   person holding true evidence of wrongdoing (Chesney & Citron 2019).

### Evidence

- Vosoughi, Roy & Aral (2018): ~126,000 cascades, false news reaching more people, faster, at
  every cascade depth.
- Shumailov et al.: model collapse demonstrated under recursive training; the practical severity
  under real mixed-data conditions is contested and is an active research question.
- Documented deployment of synthetic media in election contexts across multiple jurisdictions
  from 2023 onward; the *effect on outcomes* is far less well established than the *presence*,
  and this register asserts only the presence.
- Institutional trust decline is well documented across OECD democracies over three decades and
  **predates** social media. Attributing it to platforms alone is not supportable; the honest
  claim is contribution and acceleration, not origination.

### Strongest counter-argument

The printing press produced a century of pamphlet warfare, forgery and the *Malleus
Maleficarum* before it produced the scientific revolution; the initial epistemic effect of every
broadening of the means of publication has been chaotic, and the institutional response —
peer review, editorial standards, libel law, the bibliographic apparatus — arrived afterwards.
Extrapolating from the disordered phase is a well-documented error. Furthermore, the strong
"misinformation causes belief change" literature is weaker than commonly presented; exposure is
highly concentrated in small, already-committed audiences (Guess, Nyhan & Reifler and others).

### Reply

The printing analogy is the best objection in this document and it is partly conceded: the
institutional-response argument is historically sound, and it is the reason
[§H.3(a)(iv)](../license/ml-2-2.md#h3--the-duty-of-non-amplification) is bounded to *deception
about origin* rather than reaching falsity in general. Two disanalogies remain and they are not
cosmetic. First, **scale and targeting**: pamphlets were not individually optimised per reader
against a measured response. Second, and decisively, **the printing press did not undermine the
authenticity of pre-existing evidence.** The liar's dividend has no analogue in 1520: a forged
pamphlet did not make genuine documents deniable. That is the novel injury, and it is why H3 is
about provenance rather than about truth.

The concession as to exposure research is real and is why H3's obligation is a **provenance
duty rather than a content duty**. This corpus does not authorise anyone to adjudicate truth,
and it explicitly refuses the role.

### Ethical mapping

*Sidq* directly, in its structural rather than personal form: not "do not lie" but "do not build
the machine that makes the distinction between lying and telling the truth unrecoverable."
*Ḥifẓ al-Dīn* and *Ḥifẓ al-ʿAql*, in that a community that cannot establish what happened cannot
hold to any account, religious or civil.

### Falsifier

H3 narrows as verification cost falls: if durable, widely-adopted content provenance (a working
C2PA-class chain, or equivalent) makes origin cheaply checkable at the point of reading, element
1 fails and the harm reduces to ordinary deception, already covered by §C.3. **Withdrawn** as to
any system that carries verifiable provenance end to end.

### Obligation this creates

[§H.3(a)(iv)](../license/ml-2-2.md#h3--the-duty-of-non-amplification) — **absolute, bounded:** no
Work may be used to present synthetic or machine-generated material **as** human-authored, or to
strip provenance for the purpose of concealing origin (knowledge standard per
[§C.6](../license/ml-2-2.md#part-c--ethical-use-conditions)). Plus
[§H.6](../license/ml-2-2.md#h6--the-provenance-duty) — retain and expose provenance where
technically practicable, extending
[§C.10.2](../license/ml-2-2.md#c10--machine-learning-model-training-and-synthetic-derivation).

**In this estate:** [MX-006](../corpus/mx-006-editorial-and-evidence.md) evidence policy,
[ST-07](../standards/st-07-evidence-and-verify.md) `[VERIFY]` tags with published ages,
[MX-007](../corpus/mx-007-ai-use-and-disclosure.md) AI disclosure on every page, and the
[Citation Ledger](../design/ds-04-academic-features.md) tracking source health.

---

## H4 — The Human as Product

> **Thesis.** Where the person using a system is not the party paying for it, the person becomes
> the raw material of the transaction. The harm is not advertising. The harm is the **structural
> impossibility of informed consent** to a transaction whose subject matter — inferences drawn
> about the person, by systems they cannot inspect, about attributes they never disclosed — is
> unknown to them at the moment of consent and unknowable afterwards.

### Mechanism

1. **Behavioural surplus.** Data collected beyond what service provision requires is retained
   because it has predictive value (Zuboff 2019). The surplus, not the service, is the product.
2. **Inference beyond disclosure.** Models infer pregnancy, sexual orientation, mental-health
   state, financial distress and political alignment from data volunteered for unrelated
   purposes. **Data minimisation cannot protect against inference**, which is why consent
   frameworks built on "what you gave us" systematically under-protect.
3. **Consent theatre.** Notice-and-consent presumes a reader, comprehension, and a real
   alternative. Reading the policies one encounters annually would require weeks of full-time
   attention (McDonald & Cranor 2008), the texts are written at graduate reading level, and the
   alternative is frequently exclusion from a functionally mandatory service. A consent that
   cannot rationally be given is not a consent; it is a formality that transfers liability.
4. **Interest inversion.** Every improvement in prediction is an improvement in the product,
   including improvements the subject would refuse if asked plainly.

### Evidence

- Retention of behavioural data far beyond service necessity is established by regulatory
  findings across GDPR enforcement actions, and by the platforms' own disclosures.
- Inference of sensitive attributes from non-sensitive traces is repeatedly demonstrated in the
  literature (Kosinski et al. and successors), with the caveat that reported accuracies are
  inflated by benchmark conditions and are lower in the wild — a caveat that **cuts both ways**,
  since a wrong sensitive inference acted upon is its own harm.
- Consent-reading cost: McDonald & Cranor's estimate remains the standard figure and is now
  conservative given the growth in the number of services per person.
- Dark-pattern prevalence in consent interfaces is documented in large-scale audits of cookie
  banners, including systematic non-compliance with the equal-prominence requirement.

### Strongest counter-argument

**The bargain is real and it is not obviously bad.** Ad-funded services deliver search, maps,
translation, messaging and encyclopaedic reference at zero marginal price to billions of people,
including people for whom any positive price would be exclusionary. The alternative — universal
subscription — is straightforwardly regressive, producing exactly
[H13](#h13--exclusion-by-default). Calling the exchange exploitative implies the participants
have misvalued their own privacy; surveys showing they say they care while behaving otherwise (the
privacy paradox) are as easily read as evidence that the stated preference is soft.

### Reply

The distributive point is conceded, and it is the reason H4's obligation is a **transparency and
inference duty rather than a prohibition on ad funding**. This register does not hold ad-funded
provision to be impermissible; that position would injure the poor to protect a principle.

The narrower claim survives: a bargain can be genuine in its consideration and defective in its
formation. What is objected to is not the price but the **information structure** — the subject
cannot enumerate what is taken, cannot inspect the inferences, cannot correct them, and cannot
decline them severally while retaining the service. In *fiqh* terms this is textbook *gharar*:
uncertainty about the subject matter of the exchange so severe that consent is vitiated even
where both parties act in good faith. And the privacy-paradox reading is weakened by
transaction-cost analysis: behaviour under a choice architecture engineered to produce that
behaviour is poor evidence of preference — the same reply as [H1](#h1--attention-expropriation),
for the same structural reason.

### Ethical mapping

*Gharar* primarily and precisely. *Zulm* where the inference is used to price, rank or exclude.
*Amanah* — data held about a person is held in trust, and a trustee who sells the corpus of the
trust has breached it regardless of the disclosure they buried in a policy.

### Falsifier

H4 is withdrawn as to any system that (i) charges the user directly or is otherwise
non-behaviourally funded, **or** (ii) publishes an enumerable inference inventory the subject can
read, correct and decline severally without loss of core function. Element 3 fails, and the harm
weakens materially, if empirical work shows consent interfaces at which comprehension is
demonstrably achieved at scale.

### Obligation this creates

[§H.3(a)(ii)](../license/ml-2-2.md#h3--the-duty-of-non-amplification) — **absolute, bounded:** a
Work may not be used to construct or trade inferences about a person's religion, health,
sexuality, or political alignment where those attributes were **not disclosed by that person for
that purpose**, and the inference is used to target, price, rank or exclude them. Four cumulative
elements. Plus [§H.8](../license/ml-2-2.md#h8--the-inference-inventory) — inference inventory and
severable refusal where a Work is used to profile.

**In this estate:** [MX-003](../corpus/mx-003-privacy-notice.md) with its Class 0–4 canon,
[MX-009](../corpus/mx-009-advertising-and-commercial.md) — no behavioural advertising anywhere in
the estate, ever, and no third-party analytics — and the direct-payment model of
[MX-021](../corpus/mx-021-payments-and-commerce.md), which is the structural reason MetaX has no
incentive to profile.

---

## H5 — Ambient Surveillance and the End of Practical Obscurity

> **Thesis.** Privacy in practice was never secrecy; it was **friction**. Most of what a person
> did was technically observable and practically unobserved, because observation cost more than it
> was worth. Digital infrastructure drove that cost to approximately zero, and in doing so
> abolished a protection that no law ever had to grant because physics granted it. The harm is
> the loss of **practical obscurity** — and its most serious form is not exposure but
> **anticipatory self-censorship**, in which the population polices itself and the surveillance
> apparatus never has to act at all.

### Mechanism

1. **Collapse of observation cost.** Following a person once required a person. It now requires a
   query.
2. **Aggregation.** Individually trivial traces compose into a comprehensive account. The
   *mosaic theory* — recognised in *United States v. Jones* (2012), Sotomayor J. concurring, and
   developed in *Carpenter v. United States* (2018) — holds that the aggregate is
   categorically more intrusive than the sum of its parts.
3. **Re-identification defeats anonymisation.** Anonymity is not a property of a dataset; it is a
   property of a dataset **in the context of every other dataset**. Sweeney's k-anonymity work,
   the Netflix Prize de-anonymisation (Narayanan & Shmatikov 2008), and the finding that four
   spatio-temporal points identify 95% of individuals in mobility data (de Montjoye et al. 2013)
   are the standard results. Fifteen demographic attributes suffice for 99.98% (Rocher et al.
   2019).
4. **Function creep, reliably.** Every collection built for purpose A is used for purpose B
   within a decade, because the data exists and the pressure to use it is asymmetric — the cost
   of refusing is borne by whoever refuses, the benefit of using is diffuse.
5. **The chilling effect.** Awareness of observation changes conduct — not the criminal's
   conduct, whose incentives are already priced, but the dissenter's, the patient's, the
   journalist's source's, and the ordinary person's willingness to look something up.

### Evidence

- **Re-identification**: the four results above are robust, replicated, and have survived
  fifteen years of attempted rebuttal. This is among the best-established findings in the
  register.
- **Chilling effects**: measurable declines in Wikipedia views of privacy-sensitive terms
  following the June 2013 revelations (Penney 2016), and in Google search volume for
  privacy-sensitive queries (Marthews & Tucker 2017). Effect sizes are modest; the designs are
  quasi-experimental; the direction is consistent.
- **Function creep**: documented repeatedly — contact-tracing data accessed by police in multiple
  jurisdictions in 2020–21; tax and welfare databases repurposed for immigration enforcement;
  transit smart-card records subpoenaed routinely.
- **Data-broker aggregation** is documented in FTC reports and in enforcement actions concerning
  the sale of precise location histories, including visits to places of worship and medical
  facilities.

### Strongest counter-argument

Village life was **less** private than modern urban existence: everyone knew everyone's business,
enforcement was social and inescapable, and the anonymity of the city is a modern achievement,
not a lost one. Moreover, surveillance capability is not surveillance conduct — Western
democracies with vast capability do not, in the main, imprison people for search queries, and
conflating capability with tyranny is unearned. Solove's own critique of the "nothing to hide"
argument concedes that the harms are diffuse and difficult to specify, which is a weakness in the
account.

### Reply

The village comparison is a real correction to sloppy versions of this argument and is accepted
as such. It fails against the aggregation claim on two grounds: the village's knowledge was
**reciprocal** — the observed also observed — and it was **non-transferable**, dying with the
observers. Modern aggregation is asymmetric and permanent, and permanence is the material
change: the village forgot.

On capability versus conduct: conceded as to present conduct in stable jurisdictions, and this is
why H5 generates a minimisation duty rather than a prohibition. But *Amanah* is about
stewardship across time, and a dataset outlives the government that assembled it. The 1930s
Dutch civil registry recorded religion for benign administrative purposes and was used, by a
subsequent occupying regime, with lethal efficiency. The design question is therefore not "do we
trust the current holder?" but "**what does this dataset make possible for its worst future
holder?**" — a question a builder can actually answer at design time.

### Ethical mapping

*Tajassus* — Qur'ān 49:12 explicitly prohibits prying into what a person has not disclosed, a
prohibition addressed to conduct that is *possible* and nonetheless forbidden. *Amanah* across
custodial time. *Ḥifẓ al-Nafs* and *Ḥifẓ al-Nasl*, since the record outlives its subject and
attaches to their descendants.

### Falsifier

H5 is withdrawn as to any deployment that (i) collects only what the function requires,
demonstrably, **and** (ii) retains it for a stated bounded period, **and** (iii) cannot join it
to another dataset by design. A **provable** anonymisation technique defeating aggregation
re-identification — differential privacy applied end to end with published budgets — narrows
element 3 substantially, and where it is genuinely deployed this register recognises the
narrowing rather than ignoring it.

### Obligation this creates

[§H.9](../license/ml-2-2.md#h9--the-minimisation-and-horizon-duty) — collection limited to
function, retention bounded and stated, and a **written worst-future-holder assessment** for any
Work used to assemble a person-level dataset. Not absolute: surveillance for legitimate,
proportionate and accountable purposes is not refused, because a blanket refusal would forbid
epidemiology, security engineering and fraud prevention.

**In this estate:** [MX-018](../corpus/mx-018-data-retention.md) retention schedule,
[MX-003](../corpus/mx-003-privacy-notice.md) Class 0–4,
[ST-19](../standards/st-19-two-plane-architecture.md) plane separation — the content plane holds
no identity at all, so the great majority of the estate's traffic is unobservable by
construction rather than by policy — and the architectural rule that
[no per-user data enters edge configuration storage](../standards/st-22-platform-and-persistence.md#5-workers-kv--configuration-only).

---

## H6 — Algorithmic Governance Without Due Process

> **Thesis.** Consequential decisions about people — credit, employment, housing, benefits,
> liberty, access to a livelihood — are increasingly made or decisively shaped by systems that
> cannot state their reasons, against which no appeal lies to anything that can revise a
> judgement, and whose errors are **uniform, silent and simultaneous** across an entire
> population. Automation did not make these decisions worse on average. It removed the procedural
> apparatus that made them **contestable**, and contestability, not accuracy, is what due process
> protects.

### Mechanism

1. **Scale removes individuation.** A human adjudicator handling four hundred cases a year makes
   four hundred errors of four hundred different kinds. A model handling four million makes one
   error four million times, and the uniformity of the error makes it invisible as error — it
   looks like a pattern in the world.
2. **Opacity is often structural, not chosen.** Trade-secret protection, adversarial-gaming
   concerns, and genuine model complexity each independently obstruct explanation. Post-hoc
   explanation methods (LIME, SHAP) explain the *approximation*, not the decision, and are
   unstable under small perturbations — a fact frequently omitted when they are offered as
   accountability.
3. **Automation bias makes the human reviewer decorative.** "A human is in the loop" is the
   standard assurance; the human-factors evidence is that reviewers under time pressure, with an
   institutional default toward the system's output and no incentive to dissent, confirm the
   system's output at rates approaching unity. The loop exists on the org chart.
4. **Proxy discrimination survives the removal of protected attributes.** Postcode carries race;
   employment gap carries maternity; typing cadence carries disability. Removing the protected
   field removes the evidence of discrimination, not the discrimination.
5. **The reasons requirement disappears quietly.** Administrative law's core protection is not
   accuracy but the duty to give reasons — because reasons can be argued with. A system that
   outputs a score gives no reasons, and so there is nothing to argue with, and the absence of
   anything to argue with is experienced by the affected person as being told the computer says no.

### Evidence

This harm has the strongest evidentiary base in the register, because several instances have been
adjudicated:

- **The Dutch childcare-benefits scandal (*toeslagenaffaire*).** A risk-classification system
  wrongly accused an estimated 26,000+ families of fraud, with disproportionate impact on dual
  nationality; recovery demands caused documented bankruptcies and family separations; the
  government **resigned** in January 2021. This is the register's clearest single case: a
  scoring system, no effective appeal, uniform error, catastrophic aggregate harm.
- **Robodebt (Australia, 2015–2019).** Automated income-averaging produced approximately 470,000
  unlawful debts; found unlawful; a Royal Commission (2023) reported and a settlement exceeding
  A$1.8 billion followed. The Commission's findings on the **reversal of the burden of proof** are
  the doctrinally important part: the system required the citizen to disprove the algorithm.
- **SyRI (Netherlands, 2020).** A welfare-fraud risk-scoring system held to violate ECHR Article 8
  by the District Court of The Hague — a judicial finding that opacity itself was the defect.
- **Ofqual (UK, 2020).** Algorithmic exam grading downgraded ~40% of teacher assessments, with
  effects patterned by school historical performance, i.e. by class; withdrawn after public
  protest, not through any appeal mechanism, because none existed.
- **COMPAS recidivism scoring.** ProPublica (2016) and the Northpointe rebuttal, plus the
  subsequent formal proof that the fairness criteria in dispute (equal false-positive rates
  versus calibration) are **mathematically incompatible** where base rates differ (Chouldechova
  2017; Kleinberg et al. 2016). This last result is essential and is why H6 does not demand
  "fair algorithms": it demands appealability, which is achievable, rather than a fairness
  property that is provably unavailable.
- **Amazon's recruiting model**, abandoned after it was found to penalise indicators of being
  female — an instance where the discovery happened internally and the response was withdrawal,
  which is the correct response and is recorded here as such.

### Strongest counter-argument

**Human decision-makers are dreadful.** They are inconsistent (the same judge decides differently
before and after lunch — Danziger et al. 2011), demonstrably biased in hiring by name alone
(Bertrand & Mullainathan 2004), unable to report their actual decision criteria, and entirely
unauditable in the one respect that matters most: you cannot inspect a judge's weights. Holding
algorithms to a standard of explicability that no human adjudicator has ever met is a double
standard that, applied consistently, would return decisions to a **less** accountable process.
Algorithmic decisions are at least *consistent* and, in principle, *testable in aggregate*.

### Reply

This is the strongest counter-argument in the entire register and it is largely correct on the
merits of *accuracy*. It is answered on three grounds, none of which requires denying it.

First, it targets a claim H6 does not make. H6 does not claim humans decide better. It claims the
**procedural apparatus** — reasons, appeal, revision, precedent, an identifiable author — is what
protects the subject, and that this apparatus is what automation removes. The correct comparison
is not model-versus-human but **procedure-versus-no-procedure**.

Second, the uniformity asymmetry is real and is not a matter of degree. Distributed human error is
survivable in a way that correlated systemic error is not; the *toeslagenaffaire* is what
correlated error looks like at population scale, and no plausible account of human caseworker
error produces 26,000 identically-wrong outcomes.

Third — and this is the constructive part — the counter-argument's own logic supports H6's actual
obligation. If consistency and aggregate testability are the advantages of automation, then
**publishing the aggregate test and providing an appeal that can revise the decision costs the
deployer nothing they claim to value.** A deployer who resists this is not defending the accuracy
advantage; they are defending the absence of scrutiny. H6 therefore asks for the thing the
counter-argument concedes is possible.

### Ethical mapping

*Adl* — proportionality and the right to be heard are constitutive of justice, not decorations on
it. *Zulm* where the subject bears the burden of disproving a machine. Note the *fiqh* resonance:
the classical evidentiary tradition is procedural to its core — the burden of proof, the standing
of testimony, the requirement of a reasoned finding — and a scoring system that reverses the
burden of proof is objectionable in that tradition on procedural grounds before any question of
outcome arises.

### Falsifier

H6 is withdrawn as to any deployment providing (i) a statement of reasons specific to the
individual decision, (ii) an appeal to a human with **actual authority to reverse**, (iii)
published aggregate error rates disaggregated by affected group, and (iv) a named accountable
office. All four are achievable today; several jurisdictions require versions of them. A
deployment meeting all four is outside this harm entirely, regardless of model opacity.

### Obligation this creates

[§H.3(a)(iii)](../license/ml-2-2.md#h3--the-duty-of-non-amplification) — **absolute, bounded:** a
Work may not be used as the **sole and unappealable** determinant of a decision materially
affecting a person's liberty, livelihood, housing, healthcare, education or benefits. Cumulative
elements: material consequence, automated determination, absence of reasons, absence of an appeal
with reversal authority. Present all four, refused irrespective of forum. Plus
[§H.10](../license/ml-2-2.md#h10--the-contestability-duty).

**In this estate:** [MX-016](../corpus/mx-016-appeals-and-due-process.md) appeals and due process,
[MX-005](../corpus/mx-005-credentialing-and-assessment.md) — every credential decision is made by
a named human against a published rubric, [MX-008](../corpus/mx-008-moderation-and-enforcement.md)
moderation with reasons, and
[AG-009](../agents/ag-009-prohibited-actions.md) — an agent may draft a determination and may
never file one.

---

## H7 — Centralisation and Enclosure

> **Thesis.** Network effects, data returns to scale and switching costs make digital markets
> tend toward concentration, and concentration converts an open protocol into private property.
> The characteristic pattern is a **commons enclosed in stages**: open access to attract, then
> dependency, then extraction from the dependent — a sequence in which each step is individually
> rational for the participants and collectively produces a landlordship.

### Mechanism

1. **Network effects** make the leading product better *because* it leads, independent of merit.
2. **Data returns to scale** compound it: more users, better model, better product, more users.
3. **Switching costs** are engineered, not incidental — non-portable formats, no export, absent
   protocol interoperability, and social graphs that cannot be carried.
4. **The enclosure sequence.** Open API → third-party ecosystem builds dependency → terms
   tighten → pricing extracts the ecosystem's margin → the dependent parties discover that their
   business was always a tenancy. This sequence has run to completion enough times to be treated
   as a prediction rather than a hypothesis.
5. **Protocols become products.** Where an open protocol is displaced by a proprietary equivalent,
   the *ability to compete* is what is lost, not merely a competitor.

### Evidence

- **The enclosure sequence, completed instances**: the Twitter/X API repricing of 2023 which
  ended the third-party client ecosystem and a substantial part of academic research access;
  Reddit's 2023 API pricing and its effect on client and moderation tooling; and, structurally,
  Unity's 2023 runtime-fee announcement, which demonstrated that a *retroactive* term change
  against an existing dependent base is commercially available.
- **Cloud concentration**: three providers hold roughly two-thirds of global cloud
  infrastructure; egress pricing asymmetry as a switching-cost instrument was sufficiently
  established for the EU Data Act (2023) to address it directly. `[VERIFY 2027-03]` on the
  current share figures — these move.
- **App-store gatekeeping**: adjudicated in *Epic v. Apple*, the Japanese JFTC and Korean
  actions, and legislated against in the EU Digital Markets Act, whose existence is the evidence
  that market forces were not resolving it.
- **Search and browser-engine concentration** documented in the CMA and *US v. Google* findings,
  the latter including the default-placement payments that maintain it.

### Strongest counter-argument

**Scale delivers goods that decentralisation demonstrably does not.** Global CDNs, spam filtering
that works, sub-second search over the entire web, and free encyclopaedic reference are products
of concentration. Decentralised alternatives have been available for two decades and have
repeatedly failed on usability, moderation and cost — not because of conspiracy but because
running infrastructure is genuinely hard and most people rationally decline to. Moreover the
history is not monotonic: IBM, Microsoft, Nokia, MySpace, Intel and Yahoo each looked
unassailable, and each was displaced. Concentration may be a **phase** of each technology cycle
rather than a terminus.

### Reply

Both points land. The displacement history is the better one and it materially weakens strong
versions of the enclosure thesis; H7 is accordingly **not** an absolute prohibition and does not
demand decentralisation.

Two narrower claims survive. First, the displacement cases all involved **displacement by a new
platform layer**, not by competition within a layer — which is consistent with, not contrary to,
the thesis that each layer tends to a single occupant. Second, and this is H7's operative core:
whatever the market's long-run tendency, the **switching cost is a design decision the builder
makes**, and it is the one thing in this harm entirely within a licensee's control. Concentration
achieved by being better is not objected to. Concentration maintained by making exit expensive
is, and the distinguishing test is simple — **can a user leave with their data and their work, in
a usable form, without asking?**

### Ethical mapping

*Adl* — proportionality in the relation between a platform and those dependent on it. *Amanah* —
a party that has induced dependency has assumed a stewardship obligation toward the dependent,
which is why retroactive term changes against a dependent base are the paradigm breach. *Zulm*
where extraction is applied to parties who cannot leave.

### Falsifier

H7 is withdrawn as to any system that provides (i) complete data export in a documented,
non-proprietary format, (ii) no contractual or technical bar to interoperation, and (iii) stated
notice periods for term changes affecting dependent parties. Sustained empirical evidence of
within-layer competitive displacement — not layer-jumping — would defeat the mechanism.

### Obligation this creates

[§H.11](../license/ml-2-2.md#h11--the-exit-duty) — the **exit duty**: where a Work is used to
operate a service on which third parties build or store, the operator must provide complete
export in a documented format, must not technically bar interoperation, and must give stated
notice of adverse term changes. This is the harm most directly answered by the License's own
structure: [§E.6](../license/ml-2-2.md#e6-derivative-profile-and-child-licenses),
[§E.7](../license/ml-2-2.md#e7--registry-continuity-and-canonical-text-redundancy) mirrors, and
[§E.8(e)](../license/ml-2-2.md#e8--steward-succession-and-incapacity) anti-capture already
implement the exit duty **against the Steward himself**.

**In this estate:** [ST-22 §13](../standards/st-22-platform-and-persistence.md#13-the-portability-contract)
portability contract — plain SQL migrations, no vendor-specific types in business logic, build
output as plain files; [MX-012](../corpus/mx-012-licensing-and-reuse.md) reuse terms; and
[MX-004](../corpus/mx-004-terms-of-top-levels.md), under which a chartered academy owns its
content and may leave with it.

---

## H8 — Labour Fragmentation and Invisible Work

> **Thesis.** Digital intermediation permits human labour to be decomposed into units small
> enough that the relationship producing it becomes deniable. The harm is not low pay as such;
> it is the **construction of a worker who is economically dependent and legally unrecognised**,
> plus a second class of work — content moderation, data annotation, reinforcement labelling —
> that is deliberately excluded from the account of how the product was made.

### Mechanism

1. **Task decomposition below the threshold of employment.** A job becomes a task; a task becomes
   a micro-task; the micro-task has no employer, no continuity and no floor.
2. **Algorithmic management without managerial accountability.** Assignment, pricing,
   performance scoring, and deactivation are automated. Deactivation is dismissal without a
   dismissal procedure — this is [H6](#h6--algorithmic-governance-without-due-process) applied
   to livelihood, and the overlap is deliberate.
3. **Information asymmetry as a wage instrument.** The worker cannot see the demand curve, the
   pricing rule, or the full fare. Dynamic personalised pricing of *labour* is the mirror image
   of dynamic pricing of goods, and it is far less examined.
4. **Deliberate invisibility of the human layer.** Systems presented as autonomous frequently
   depend on human labour at inference or in the training loop — Gray & Suri's *ghost work*. The
   invisibility is a product feature: an AI that is disclosed to be partly human is worth less.
5. **Psychological cost externalised.** Content moderation transfers the psychological burden of
   the worst material on the internet to a low-paid workforce, frequently offshore, frequently
   without adequate clinical support.

### Evidence

- **Adjudicated misclassification**: *Uber BV v. Aslam* [2021] UKSC 5 (worker status);
  *Independent Workers Union of Great Britain* line of cases; the EU Platform Work Directive's
  presumption of employment, whose enactment is itself evidence that the classification was
  systematically wrong.
- **Moderation harm**: the Facebook/Cognizant US settlement (2020, US$52m for moderator PTSD);
  the 2023 Kenyan proceedings concerning Sama moderators, including findings on wages and
  clinical support.
- **Annotation labour**: documented rates for RLHF and data-annotation contracting in Kenya,
  India and the Philippines, in the low single-digit dollars per hour, for work directly upstream
  of systems marketed as autonomous.
- **Fairwork Project** annual scores: platform compliance against five basic standards (pay,
  conditions, contracts, management, representation), with most platforms scoring below half.
- **Wage-opacity effects** are less well established quantitatively; flagged `[VERIFY 2027-03]`.

### Strongest counter-argument

**Flexibility has real value and is often the point.** Large fractions of platform workers report
preferring the arrangement, and for carers, students, disabled workers and people excluded from
conventional employment the flexibility is not a euphemism — it is the access. Reclassification
as employment does not automatically produce better outcomes: it can reduce hours, eliminate the
marginal worker, and remove the flexibility that made the work viable, and there is evidence of
exactly this in jurisdictions that have reclassified. Additionally, in low-income labour markets
annotation and moderation work frequently pays **above** local median wages and is voluntarily
sought — a fact the strongest versions of this critique omit, with the effect of arguing for the
removal of the best job available to the people concerned.

### Reply

Both points are accepted, and the second is accepted with some force: this register does not
adopt the position that offshore annotation work should not exist, which would injure the workers
it claims to defend.

What survives is narrower and is stated as three duties rather than a prohibition. **Flexibility
does not require opacity** — a platform can offer flexible engagement *and* disclose the pricing
rule; the two are unrelated, and the bundling of them is rhetorical. **Flexibility does not
require unappealable deactivation** — the deactivation procedure is a design choice with no
bearing on flexibility. And **above-local-median pay does not license concealment**: the
objection to ghost work is *Sidq*, not wage level. A product whose account of its own production
omits the humans in it is misrepresenting itself, and that objection stands even where the humans
are well paid and glad of the work.

### Ethical mapping

*Zulm* where dependency meets unaccountable power over livelihood. *Sidq* as to the concealment
of the human layer, which is the specifically MetaX-relevant limb: a corpus that requires AI
disclosure of *itself* cannot be indifferent to systems that conceal human authorship in the
other direction. *Adl* in the distribution of a product's returns to the labour that made it —
and note the classical maxim that the labourer's wage is due immediately and in full, which
speaks directly to withheld or algorithmically adjusted piece rates.

### Falsifier

H8 is withdrawn as to any deployment that (i) discloses the pricing rule and the full
customer-paid amount, (ii) provides an appealable deactivation procedure, and (iii) discloses
human involvement in any output presented as automated. Evidence that workers under full
disclosure and appeal rights fare no better would defeat the obligation, though not the *Sidq*
limb.

### Obligation this creates

[§H.12](../license/ml-2-2.md#h12--the-human-labour-disclosure) — where a Work is used to
intermediate human labour or to present output as automated that is materially human-produced,
the human involvement must be disclosed, the pricing rule stated, and deactivation made
appealable. Not absolute.

**In this estate:** [MX-007](../corpus/mx-007-ai-use-and-disclosure.md) — disclosure runs in both
directions, AI work declared and human work never concealed; and the requirement that every
review in the peer-review engine is attributable to a named reviewer against a published rubric
([MX-005](../corpus/mx-005-credentialing-and-assessment.md)).

---

## H9 — Metric Colonisation

> **Thesis.** Any measure adopted as a target ceases to measure what it measured, because the
> measured party optimises the measure. In computed systems this happens at machine speed and at
> total coverage, and the endpoint is that **the metric governs the institution that adopted it**
> — the organisation reorganises itself around what its dashboard can see, and the unmeasured
> purpose it was founded to serve becomes literally invisible in its own decision-making.

### Mechanism

1. **Goodhart's law**, and Campbell's: a measure under pressure stops being valid.
2. **The proxy is always partial.** Watch time proxies value; engagement proxies interest;
   commits proxy productivity; test scores proxy learning. Every proxy omits something, and the
   omission is where the optimisation goes, because that is where the slack is.
3. **Specification gaming** in optimising systems is the same failure formalised: reward
   misspecification produces high scores and wrong behaviour, reliably, and the literature on it
   is now large.
4. **The unmeasured becomes the unmanaged, then the nonexistent.** Care, mentorship, judgement,
   maintenance and institutional memory produce no telemetry. Under metric governance they are
   not deprioritised by decision; they cease to appear in the record on which decisions are made.
5. **Metric capture of the assessor.** The final stage: the institution's *purpose* is redefined
   as its metric, so that failure becomes unsayable — the numbers are good.

### Evidence

- **The literature is old and settled in principle.** Ridgway (1956) on the dysfunctional
  consequences of performance measurement; Campbell (1979); Goodhart (1975). Muller's *The
  Tyranny of Metrics* (2018) collects the institutional cases.
- **Documented instances**: Wells Fargo's cross-selling targets producing millions of
  unauthorised accounts; NHS four-hour A&E targets producing documented gaming of admission
  timing; UK/US school-accountability regimes producing measured teaching-to-the-test and
  narrowing of curriculum; police recorded-crime targets and reclassification.
- **Recommender systems**: the shift by several large platforms from watch-time to
  "meaningful interaction" style objectives is itself evidence, from inside, that the original
  proxy was wrong — and the subsequent finding that the replacement objective amplified divisive
  content is evidence that the *second* proxy was also wrong, which is the deeper point.
- **Citation and impact metrics** in academia: h-index gaming, citation cartels, salami
  publication, and the replication crisis's relationship to publication incentives.

### Strongest counter-argument

**The alternative to measurement is not judgement; it is unaccountable assertion.** Before
metrics, institutional quality was assessed by reputation, patronage and the confident claims of
insiders — a regime that protected incompetence and inherited advantage very effectively. Metrics
made hospital mortality comparable, school failure visible, and discrimination provable. Every
critique of metrics is available to any incumbent who prefers not to be measured, and it is used
that way constantly. Goodhart's law is a caution about *how* to measure, not an argument against
measuring.

### Reply

This is correct, and H9 is stated to be compatible with it: nothing here counsels against
measurement, and a MetaX that refused to be measured would violate its own
[MX-006](../corpus/mx-006-editorial-and-evidence.md). The register's claim concerns
**monotony and consequence**, not measurement. Three specific defences follow, and all three
preserve accountability:

*Plurality* — multiple non-substitutable metrics, so gaming one is visible in another. *Explicit
naming of the unmeasured* — an institution that publishes what its metrics **cannot** see retains
the ability to discuss it. And *separating the measure from the automatic consequence* — Goodhart
pressure scales with the tightness of the coupling between metric and outcome, so a metric that
informs a human decision is far less corrupting than one that triggers an automatic one. The
objectionable object is not the dashboard; it is the dashboard wired directly to the lever.

### Ethical mapping

*Sidq* — a proxy presented as the thing it proxies is a false statement about the world, and it
is the most common false statement in modern institutions. *Adl* — consequences distributed by a
corrupted measure are unjust regardless of the good faith of the distributor. **Ḥifẓ al-ʿAql** at
the institutional level: an organisation that has lost the ability to perceive its unmeasured
purpose has lost its capacity for judgement.

### Falsifier

H9 is withdrawn as to any deployment that (i) reports a plurality of non-substitutable measures,
(ii) publishes a statement of what those measures do not capture, and (iii) does not couple any
single metric to an automatic consequence without human review. Evidence that a specific metric
has remained valid under sustained optimisation pressure defeats the harm **as to that metric**,
and this register would record it.

### Obligation this creates

[§H.13](../license/ml-2-2.md#h13--the-metric-honesty-duty) — where a Work is used to measure
persons or institutions with consequence attached, the deployer must state what the metric does
not capture, and may not couple a single metric to an automatic material consequence without
human review. Not absolute.

**In this estate:** progress measured in artefacts and three binary states, *"no fabricated
continuum"* ([DS-02](../design/ds-02-motion-and-attention.md)); the
[proof ladder](../rubrics/rb-02-proof-ladder.md) which grades evidence class rather than
activity; the published [Defect Register](../00-governance-map/defect-register.md), which is
this estate's statement of what its own metrics do not capture; and
[ST-09](../standards/st-09-unit-economics-and-kill-criteria.md), which requires kill criteria
stated in advance so that a failing series is retired rather than re-measured.

---

## H10 — Extractive Materiality

> **Thesis.** The metaphors of computing — cloud, virtual, wireless, immaterial — describe an
> infrastructure of mines, smelters, fabs, transoceanic cable, diesel generators, freshwater
> evaporation and a waste stream that is largely unrecorded. The harm is not that computing
> consumes resources; everything does. It is that the **accounting is absent by design**, so
> that a decision to expand compute is made with the cost invisible to the decider and borne
> elsewhere.

### Mechanism

1. **Extraction upstream.** Cobalt, lithium, tantalum, tin, tungsten, gold and seventeen rare
   earths, with the human cost concentrated in artisanal mining, and the environmental cost in
   tailings and water tables.
2. **Manufacturing intensity.** Semiconductor fabrication is water- and energy-intensive and
   uses fluorinated gases with very high global-warming potentials. For personal devices, the
   **majority of lifetime carbon is embodied in manufacture, not use** — which inverts the
   intuitive conclusion that efficient use is the main lever. Longevity is the main lever.
3. **Operational load, concentrated locally.** Data-centre electricity and water demand is
   globally modest in percentage terms and **locally enormous**, which is why the honest unit of
   analysis is the catchment and the grid node, not the planet.
4. **Designed obsolescence.** Sealed batteries, serialised parts pairing, absent repair
   documentation, software support windows shorter than hardware life. Each shortens replacement
   cycles, and replacement cycles are where embodied carbon dominates.
5. **Unrecorded waste.** E-waste is the fastest-growing solid waste stream; documented formal
   collection is well under a quarter of it; a substantial share moves to informal processing with
   direct human exposure to heavy metals and dioxins.
6. **Jevons dynamics.** Efficiency gains are absorbed by expanded use. Per-inference cost falls;
   inference count rises faster.

### Evidence

- **E-waste**: the Global E-waste Monitor series is the standard source — ~62 Mt generated in
  2022, documented formal recycling ~22%, both figures rising. `[VERIFY 2027-03]`.
- **Embodied vs operational carbon** for smartphones and laptops: manufacturer life-cycle
  assessments themselves report manufacture as the majority share, which makes this an
  admission-based figure rather than an advocacy one.
- **Data-centre energy**: IEA estimates in the range of ~1–1.5% of global electricity
  pre-2023, with substantially higher projections under AI growth scenarios that are genuinely
  uncertain and should not be quoted as settled. `[VERIFY 2027-03]`, marked as a projection.
- **Water**: reported operational water use for large facilities, with the important caveat that
  *indirect* water use through electricity generation typically exceeds direct cooling use — a
  distinction usually collapsed in reporting, in both directions.
- **DRC cobalt** conditions: Amnesty International and subsequent OECD due-diligence reporting.
- **Right-to-repair**: enacted in the EU (ecodesign and repair directives) and in several US
  states, which is evidence that the obsolescence mechanism was real enough to legislate against.

### Strongest counter-argument

**Digital substitution is frequently a large net environmental gain.** Videoconferencing against
air travel, digital documents against paper and physical distribution, logistics optimisation
against empty freight miles, smart-grid balancing enabling renewables integration, and materials
research accelerating battery chemistry. Computing's own footprint is small relative to
agriculture, cement, steel and transport, and singling it out is a category error driven by its
visibility. Efficiency per computation has also improved by orders of magnitude and continues to;
Koomey's law is not repealed.

### Reply

Substantially accepted, and this is why H10 generates an **accounting duty and a longevity duty**
rather than any restriction on computing. The substitution gains are real and this register does
not dispute them.

The surviving claims are two. First, **Jevons**: efficiency per unit has never yet reduced total
consumption in this sector, and a projection that assumes it will is a projection, not a
finding — so efficiency arguments must be made against **totals**, not per-unit rates, and almost
never are. Second, and more precisely, the substitution argument is an argument for *some*
digital systems and is routinely deployed as an argument for *all* of them, including systems that
substitute for nothing. The obligation therefore attaches where the licensee can actually act:
disclosure of the material cost of what they build, and the design of devices and software that
allow long life. Note that the longevity duty is the highest-leverage item in the whole harm,
because embodied carbon dominates and support-window length is entirely a software decision.

### Ethical mapping

*Isrāf* and *Tabdhīr* — extravagance and squandering, prohibited in terms
(Qur'ān 7:31, 17:26–27). *Istikhlāf* — trusteeship of the earth, which frames resource use as a
custodial relationship rather than an ownership one. *Ḥifẓ al-Nasl* — posterity, since the
costs are deferred to those who did not decide. *Zulm* where the extraction burden falls on
populations excluded from the benefit.

### Falsifier

H10's accounting limb is satisfied — not merely mitigated — by a deployment that publishes energy,
water and embodied-carbon figures with its method, and whose support window matches hardware
service life. If total sector consumption were to decouple from output, the Jevons element fails
and the harm reduces to the extraction and waste limbs alone.

### Obligation this creates

[§H.14](../license/ml-2-2.md#h14--the-material-accounting-duty) — where a Work is deployed at a
scale material to its operator's total resource use, the operator should publish the resource
basis and should not shorten software support windows below hardware service life. Stated as a
**duty of disclosure and design, expressly not a prohibition**, and the weakest-bound obligation
in Part H — deliberately, because this is the harm where a licensee's individual leverage is
smallest and where overclaiming would be least credible.

**In this estate:** [ST-21](../standards/st-21-performance-budgets.md) performance budgets as
build failures — the estate ships no raster images at all, and a page over budget fails the build
with no override flag; [ST-22 §2](../standards/st-22-platform-and-persistence.md#2-the-capacity-meter-and-the-tripwire)
published capacity accounting; and the static-first architecture, whose per-request energy cost is
a small fraction of a dynamic equivalent.

---

## H11 — Fragility, Complexity and the Integral Accident

> **Thesis.** Efficiency is bought with coupling, and coupling is paid for in catastrophe. As
> digital systems become the substrate of payment, healthcare, logistics, identity and utilities,
> their failure modes become **society's** failure modes — and, per Virilio, the accident is not
> an intrusion into the system but is **invented together with it**: to invent the ship is to
> invent the shipwreck, and to invent a global monoculture of the same update mechanism is to
> invent the simultaneous global outage.

### Mechanism

1. **Tight coupling** removes the slack in which failures used to be absorbed locally.
2. **Normal accidents** (Perrow 1984): in systems that are both interactively complex and tightly
   coupled, serious accidents are a structural property, not an operator failure.
3. **Monoculture correlates failure.** Shared dependencies, shared cloud regions, shared update
   channels, shared certificate authorities. Diversity is inefficient and is therefore removed,
   and its removal is the removal of the system's fault tolerance.
4. **Loss of manual fallback.** When the digital path is the only path, its failure is total.
   This is [H2](#h2--cognitive-offloading-and-deskilling) at institutional scale — the paper
   procedure is gone, and so are the people who knew it.
5. **Unowned criticality.** Critical infrastructure frequently rests on components maintained by
   very few unpaid people; nothing in the dependency graph records that fact, and the parties
   depending on it have no relationship with the parties maintaining it.

### Evidence

- **CrowdStrike, 19 July 2024**: a single content update rendered approximately 8.5 million
  Windows hosts unbootable, grounding airlines, halting hospital systems and payment networks.
  The canonical modern instance of correlated monoculture failure, and notably **not** an attack.
- **Log4Shell (2021)**: a vulnerability in a component maintained by a handful of volunteers,
  reachable in a substantial fraction of enterprise Java estates, illustrating unowned
  criticality precisely.
- **xz-utils backdoor (2024)**: a multi-year social-engineering campaign against a single
  maintainer, caught by chance. The near-miss is the evidence.
- **left-pad (2016)**: an eleven-line package whose removal broke thousands of builds — trivial in
  consequence, perfect as demonstration.
- **Cloud region failures**: successive AWS us-east-1 events taking down large, apparently
  unrelated portions of the consumer internet, revealing shared dependency that none of the
  affected services had mapped.
- **Rogers Canada (2022)**: a nationwide outage that took down 911 access and the country's
  interbank payment network, demonstrating that the failure of one commercial network can remove
  emergency services.

### Strongest counter-argument

**Digital infrastructure is, by measurable outcome, more reliable than what it replaced.**
Five-nines availability is routine; pre-digital telephone, banking and records systems failed
more often, recovered more slowly, and failed invisibly. Catastrophic failures are *salient*, not
frequent, and availability mathematics favours the current arrangement heavily. Redundancy has a
cost, that cost is real, and paying it uniformly would make many services unaffordable — which is
itself a harm.

### Reply

Accepted on frequency, and H11 does not dispute the availability statistics. The claim concerns
the **shape of the distribution**, not its mean: the pre-digital regime had frequent small
failures; the current regime has rare correlated ones. Those are not comparable by expected
value, because a nationwide payment outage is not a large number of small outages — it is a
qualitatively different event, and the harm scales superlinearly with simultaneity.

The redundancy-cost point is accepted and narrows the obligation, which is why H11 asks for
**mapping and disclosure of dependency, plus a maintained manual fallback for critical
functions**, rather than for redundancy in general. Mapping is cheap; the reason it is not done
is that no one is asked for it. And the manual-fallback requirement is the one that repays its
cost: the Rogers outage removed 911, and the fallback question there was not expensive, it was
simply never asked.

### Ethical mapping

*Amanah* — a party operating a system others depend on holds their reliance in trust, and the
degree of trust is set by the dependence, not by the contract. *Darar* where the failure's cost
lands on parties with no relationship to the operator. *Ḥifẓ al-Nafs* where the failed system is
load-bearing for life safety.

### Falsifier

H11 is withdrawn as to any deployment that (i) publishes its critical dependency map including
single points of failure, (ii) maintains and **exercises** a documented non-digital fallback for
life-safety and payment functions, and (iii) does not share an update channel or failure domain
with its own redundancy. Sustained evidence that correlated-failure frequency and severity are
declining as coupling increases would defeat the thesis.

### Obligation this creates

[§H.15](../license/ml-2-2.md#h15--the-dependency-and-fallback-duty) — dependency mapping and, for
Works deployed in critical functions, a documented and exercised fallback. Not absolute.

**In this estate:** [ST-19](../standards/st-19-two-plane-architecture.md) — the island contract,
under which the content plane must render byte-identically with the identity plane dead, tested
by a differential build ([B-14](../00-governance-map/launch-blockers.md#b-14--the-island-contract-is-untested--hard-blocker-standing));
the [degraded ladder](../standards/st-22-platform-and-persistence.md#2-the-capacity-meter-and-the-tripwire)
whose worst rung is *"MetaX becomes what it already was, a complete static library, rather than
going dark"*; and [ML-2.2 §E.7](../license/ml-2-2.md#e7--registry-continuity-and-canonical-text-redundancy),
which is H11's remedy applied to the License itself.

<!-- APPEND-POINT -->
