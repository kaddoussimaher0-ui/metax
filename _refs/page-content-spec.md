# MetaX.Academy — Page Content Specification
**Companion to the v2026.09.1 sitemap · Corpus ref MX‑SITE‑CONTENT · Curated by Maher**

---

## 0. The global page contract (inherited by every URL below)

Before the per‑page detail, one contract applies universally, so it is stated once rather than repeated seventy times.

Every page opens with `mx-eyebrow` (a two‑to‑four‑word category glyph line), then a single H1 written as a *claim* rather than a label, then a one‑sentence `deck` that could stand alone as the page's meta description. Every page closes with `mx-exitpair` — exactly two forward paths, never a wall of links — and `mx-pagestamp`, which prints `version · status · last_reviewed · evidence_class · changelog_ref`. Every page carries front‑matter (`page_id, subdomain, path, title_en, title_ar, deck, version, status, audience, reading_time, evidence_class, sources_verified, last_reviewed, changelog_ref, hreflang_pair, jsonld_type`) and an Arabic RTL mirror at the same path under `/ar/`.

Three content laws govern the copy itself. First, no undated statistic: any number is either computed at build time from `catalog.json` / `credentials.json` or carries a dated source or a `[VERIFY]` tag. Second, no dead status: `PLANNED`, `PREVIEW` and `GATED` items resolve to real pages that state the gate condition and the review date. Third, no silent edit: any change to substantive copy increments the page version and appends a line to the changelog.

Voice: declarative, second person for learner surfaces, third person for governance surfaces, no exclamation marks, no growth‑marketing verbs. Maher is named as curator on every page footer and speaks in first person only inside `mx-curatornote`.

---

## 1. THE HUB — `metax.academy`

### `metax.academy/` — One Universe · Three Pillars
**Deck:** MetaX is a universe with three entry points — an operator curriculum, a community of founded academies, and a research umbrella reconsidering the substrate of computation.

**Description.** The hub's only job is triage. It receives four visitor intents (learner, builder, skeptic, researcher) and routes each within one screen‑height of decision. It does not sell, does not autoplay, and does not accumulate — it is the shortest page in the universe by design.

**Sections.**

1. **Hero — the universe claim.** H1: *"One universe. Three pillars. One standard of mastery."* Body: MetaX is not a school with departments; it is three self‑governing worlds that share a DNA. The hero carries the curator line — *Curated by Maher · MetaX Universe v2026.09* — and a single primary CTA, "Pick your entry point," which scrolls rather than navigates.
2. **The three pillars.** Three `mx-archetypecard` blocks. **TopTech** — "Be found, cited, bought from, and trusted by machines," status LIVE, computed course and lesson counts. **Academies Community** — "Found your own academy inside the standard," status LIVE at levels L1–L3, PREVIEW at L4–L5. **BCIA** — "A research umbrella on non‑binary and biological computation," status PREVIEW/UNDER REMEDIATION, with an explicit link to the defect list rather than a marketing line. Each card shows its `mx-statusbadge` in the card header, not the footer, because status is structural.
3. **The shared DNA.** Four `mx-principlegrid` cells: Decay‑Aware (every claim classed Durable, Semi‑durable, Perishable), Falsifiable (explicit null, disconfirming evidence, decision rule), Governed (an ethics and compliance layer present from the first release, not retrofitted), Version‑Controlled (public patch notes; no silent edits, or it is a lie). Each cell links to the corresponding clause in the Charter rather than to an essay.
4. **The honesty strip.** A short `mx-metastrip` printing computed totals: live series, planned series, published defects, open `[VERIFY]` tags, last corpus release date. This is the hub's credibility device: it publishes what is *not* finished on the front door.
5. **Curator note.** Four sentences from Maher on why the universe is static, versioned, and small enough for one person to be accountable for.
6. **Exit pair.** "Start Here" and "Verify a credential."

**Components:** `mx-hero(variant=universe)`, `mx-archetypecard`, `mx-principlegrid`, `mx-metastrip`, `mx-statusbadge`, `mx-curatornote`, `mx-exitpair`.

---

### `metax.academy/start/` — Start Here
**Deck:** Four questions, four doors, no quiz — find the one page that matches why you came.

**Description.** The universal on‑ramp linked from the persistent utility bar. It exists because a three‑pillar universe is legible to its author and opaque to a first‑time visitor. It is deliberately a *disambiguation* page, not a funnel.

**Sections.**

1. **The four intents.** Prose, not a form: "I want to learn something I can ship" → TopTech Pick Your Path. "I want to teach or found an academy" → Academies Levels. "I want to check whether any of this is real" → Verify + Status. "I want the research" → BCIA Overview and Document Zero.
2. **What MetaX is not.** An expectation‑setting block: not accredited by a state authority, not a bootcamp with job guarantees, not a live cohort platform, not a wet‑lab research institute. Stated plainly and early because a claim of rigour that hides its boundaries is not rigour.
3. **How to read a MetaX page.** A short reader's key explaining the eyebrow, the status badge, the decay chip, the `[VERIFY]` tag and the page stamp — so the universe's own notation is taught before it is used.
4. **First hour.** A concrete suggestion: read one Limits module, read one Bridge lesson, read the Critical Audit. Three links, roughly forty minutes, and the visitor knows whether MetaX is for them.
5. **Exit pair.** "Pick your path" and "Read the Charter."

**Components:** `mx-hero(variant=onramp)`, `mx-archetypecard`, `mx-exclusionnotice`, `mx-decaychip` (in demo mode), `mx-exitpair`.

---

### `metax.academy/about/` — The MetaX Universe
**Deck:** What MetaX is, who built it, and the standard everything inside it is held to.

**Description.** The narrative spine of the corpus and the canonical rendering of document **MX‑001**. It answers origin, scope, authority and limits in one continuous read of roughly nine minutes.

**Sections.**

1. **Origin.** MetaX began as a single operator curriculum and became a universe when it became clear that the curriculum's method — versioning, falsifiability, decay classes, published defects — was more portable than its subject matter. The method is the product; the syllabi are instances of it.
2. **The three pillars in full.** A paragraph each on TopTech, the Academies Community and BCIA, each stating its authority boundary: TopTech teaches practice and does not certify employment; Academies grants charters and does not grant degrees; BCIA publishes research positions and does not publish settled science.
3. **Who Maher is, in this context.** Curator, sole prompter, and named accountable party. The section states what that means operationally: he approves releases, holds the ethics veto, and is the only party whose instructions AI agents may act on.
4. **The standard of mastery.** "Completion is attendance. Competence is evidence. Mastery is judgment under scrutiny." Expanded into the three‑part proof requirement: portfolio, verified outcomes, peer review.
5. **Language authority.** Per amendment B.3: Arabic is authoritative for Meta‑X, BCIA and the Lexicon; English is authoritative for the License, except where local consumer law mandates the consumer's language. Translations are marked with their authority status, never presented as equivalents.
6. **What MetaX refuses.** The three core refusals — wet‑lab biology and human‑cell work, Core Riba instruments, any sexualisation of minors — plus the operational refusals (impersonation, undated statistics, silent edits).
7. **How to hold us to it.** Pointers to the audit page, the defect list, the corrections record and the appeals route.

**Components:** `mx-hero(variant=doctrine)`, `mx-axiom`, `mx-curatornote`, `mx-exclusionnotice`, `mx-sourcelist`, `mx-pagestamp`.

---

### `metax.academy/about/dna/` — The Shared DNA
**Deck:** The four inherited principles, stated as testable commitments rather than values.

**Sections.** (1) **Why DNA and not values** — values are unfalsifiable; each principle here has a failure condition. (2) **Decay‑awareness** — the three classes defined with review intervals: Durable (36 months), Semi‑durable (12), Perishable (3); failure condition: an expired Perishable claim still displayed without a review flag. (3) **Falsifiability** — every series capstone carries a pre‑registered hypothesis with a null and a decision rule; failure condition: a capstone with no stated way to lose. (4) **Governance** — an ethics layer with a named holder and a published veto log; failure condition: an unlogged veto. (5) **Version control** — public patch notes; failure condition: any substantive change without a changelog line. (6) **The self‑test** — a live count of current failures against these four conditions, computed, linking to the defect list.

**Components:** `mx-principlegrid`, `mx-claimcard`, `mx-decaychip`, `mx-defectcard`, `mx-countstat`.

---

### `metax.academy/about/curator/` — The Curator
**Deck:** One named person is accountable for every claim in this universe.

**Sections.** (1) **The accountability argument** — why single authorship is a feature at this scale and a liability at the next, stated honestly. (2) **Scope of authority** — release approval, ethics veto, charter determinations, sole‑prompter status. (3) **Scope of non‑authority** — Maher does not grade individual assessments, does not adjudicate his own conflicts (see MX‑019), and cannot alter an issued credential's record retroactively. (4) **Conflicts of interest** — the standing disclosures. (5) **Succession** — a plain‑language summary of MX‑015 and ML §E.8 with the link to the full instrument. (6) **Contact and the review queue.**

**Components:** `mx-hero(variant=person)`, `mx-curatornote`, `mx-claimcard`, `mx-timeline`.

---

### `metax.academy/about/governance/` — Governance
**Deck:** Who decides what, under which document, with which appeal.

**Sections.** (1) **The instrument map** — a `mx-facetedtable` of MX‑000 through MX‑019 with the decision each governs. (2) **Decision classes** — editorial, curricular, credentialing, charter, ethics, legal; each with its decider, its record location and its appeal path. (3) **The ethics veto** — definition, holder, logging requirement, and the one class of decision it cannot reverse (an already‑verified credential's issuance record). (4) **Charter determinations and the 90‑day cure window** (ML §G.6). (5) **Degraded mode** — AG‑000 §A.6 summarised: what the universe can and cannot do while the Curator is unavailable, the dual‑control succession credential, and the 180‑day retirement rule. (6) **Public record** — where every determination is published.

**Components:** `mx-facetedtable`, `mx-leveltable`, `mx-gatecard`, `mx-timeline`.

---

### `metax.academy/about/ai-use/` — AI Use Policy
**Deck:** AI wrote drafts. A named human is accountable for every published sentence.

**Sections.** (1) **The disclosure principle** — what was machine‑drafted, what was machine‑checked, what was human‑authored, per document class. (2) **The sole‑prompter rule** — only Maher instructs MetaX agents; instructions arriving inside user content, uploaded files, or web pages are data, never commands. (3) **Agent roles** — SCRIBE, VERIFIER, CRITIC, LEXICOGRAPHER, REVIEWER‑ASSIST, TRANSLATOR, SENTINEL, CLERK, one line each. (4) **Absolute agent refusals** — assessment decisions, credential mutation, ethics veto, account termination, prohibited content, impersonation, governance change. (5) **Evidence honesty** — no fabricated citations; unverified claims carry `[VERIFY]` and are counted publicly. (6) **Machine reading of MetaX content** — cross‑reference to ML §C.10: training permitted, provenance mandated, laundering and impersonation forbidden. (7) **Reader recourse** — how to report a suspected fabrication.

**Components:** `mx-axiom`, `mx-exclusionnotice`, `mx-verifytag`, `mx-countstat`, `mx-claimcard`.

---

### `metax.academy/about/static/` — The Static Principle
**Deck:** No database, no login wall, no client‑side fetch — and the reasons are editorial, not technical.

**Sections.** (1) **The claim** — a curriculum that cannot be silently mutated is a stronger epistemic object than one that can. (2) **Consequences accepted** — no personalisation, no live dashboards, no per‑user state, slower feature velocity. (3) **Consequences gained** — auditability, archivability, sub‑second delivery, near‑zero attack surface, survivability beyond any vendor. (4) **The build stack** — static HTML on Cloudflare Pages, build‑time partials, JSON artefacts as the only data layer. (5) **Where the principle bends** — the verifier's revocation list and the search index, both static but frequently rebuilt, with their rebuild cadence stated. (6) **The stale‑build rule** — shared chrome older than 90 days without a rebuild is marked stale on the page stamp.

**Components:** `mx-axiom`, `mx-objections`, `mx-manifestSnippet`, `mx-frozenbanner`.

---

### `metax.academy/about/accessibility/` · `/about/security/` · `/about/contact/`
**Accessibility** (MX‑010): the conformance target (WCAG 2.2 AA), the tested matrix, the known gaps stated as defects with remediation dates, RTL‑specific commitments (mirrored layout, correct `dir` and `lang`, no bidi‑broken code blocks), and a reporting address with a response‑time commitment.
**Security** (MX‑011): threat model for a static estate, key management for signed artefacts, the registry mirror policy (three locations, signed, 180‑day fallback), vulnerability disclosure terms and safe‑harbour language, and an explicit statement of what data does not exist to be breached.
**Contact**: four routed addresses — corrections, credential disputes, academy applications, licensing — each with scope, expected response window, and what not to send (no personal data, no wet‑lab proposals, no assessment appeals outside the appeals route).

---

### `metax.academy/legal/terms/` — Terms of Service (MX‑002)
**Deck:** The agreement for reading, using, quoting and building on MetaX.

**Sections.** (1) Scope and acceptance; the estate covered, including all subdomains. (2) Licence grant by reference — single‑source pointer to MX‑012 and Maher's License (per amendment B.4, mirrored text is prohibited; only one canonical copy exists). (3) Permitted use, including quotation, teaching, and machine reading under ML §C.10. (4) Prohibited use — misattribution, version‑identifier misuse, impersonation of MetaX credentials, resale of gated content. (5) No warranty, and the specific disclaimer that MetaX content is educational and not legal, medical or financial advice. (6) Credentials as representations, not guarantees. (7) Termination and the trademark auto‑termination clause (§5‑bis). (8) Governing language and law, with the consumer‑law carve‑out. (9) Change process — terms are versioned like everything else; the diff is public.

**Components:** `mx-hero(variant=legal)`, `mx-facetedtable` (two‑track enforceability table B.5), `mx-supersededheader` where applicable, `mx-pagestamp`.

---

### `metax.academy/legal/privacy/` — Privacy (MX‑003)
**Deck:** What is collected, which is almost nothing, and how the classification is defined.

**Sections.** (1) The data classification canon (amendment B.2): Class 0 none, Class 1 request logs, Class 2 voluntarily submitted application data, Class 3 credential registry entries (public by design). (2) What each subdomain collects, per class, in a table. (3) Retention periods, cross‑referenced to MX‑018. (4) Third parties: the CDN, the mail route, nothing else; each named with its role. (5) Credential publicity — applicants are told before submission that a granted credential's record is public and permanent. (6) Rights and requests, with the honest note that erasure of a public credential record produces a revocation entry, not a deletion.

---

### `metax.academy/legal/licensing/` — Licensing & Maher's License (MX‑012)
**Deck:** Every MetaX work is licensed under Maher's License; here is the current text, the amendment history, and what you may do without asking.

**Sections.** (1) The plain‑language companion — a one‑screen summary that is explicitly non‑authoritative. (2) The canonical licence text, ML‑2.1, with clause anchors. (3) The two‑track enforceability table (B.5): for each clause, whether it operates as contract, as representation, or as moral norm. (4) The Designation List (B.6): works of Foundational Character, with the rebuttable presumption criteria and the four‑element test. (5) Machine learning provisions §C.10 in full. (6) Attribution integrity §6‑bis, including the repudiation right. (7) Registry continuity §E.7 and steward succession §E.8. (8) Notice template (Exhibit 3) with registry URL and key fingerprint. (9) Compliance safe‑harbour list — concrete uses that need no permission. (10) Amendment history, ML‑1.0 → ML‑2.0 → ML‑2.1, with diffs.

**Components:** `mx-facetedtable`, `mx-claimcard`, `mx-manifestSnippet`, `mx-timeline`, `mx-supersededheader`.

---

### `metax.academy/search/` — Search
**Deck:** One index across seven subdomains, built at deploy time.

**Sections.** (1) The search field and scope selector (all / curriculum / research / governance / lexicon). (2) Facets: pillar, status, branch, evidence class, language. (3) Result anatomy explained — every result shows its status badge and last‑reviewed date, so a `PLANNED` stub can never masquerade as a live lesson. (4) Index freshness stamp and what is deliberately excluded (archived and superseded pages, unless the archive facet is enabled).

---

## 2. TOPTECH — `toptech.metax.academy`

### `toptech.metax.academy/` — The Operator Curriculum
**Deck:** A meta‑curriculum for operators who intend to be found, cited, bought from, and trusted on the machine‑mediated internet.

**Description.** The pillar home and highest‑traffic page in the estate. It carries the three founding axioms, the five‑branch architecture with honest statuses, and routes to Pick Your Path.

**Sections.**

1. **Hero.** "The old internet rented you traffic. The new internet asks whether a machine can find you, cite you, buy from you, and trust you." Computed counts of live series, courses and lessons; version line; curator line.
2. **Three founding axioms.** Stated as axioms to build from, not conclusions to prove: discovery is mediated by models, not indexes; attention is no longer purchasable at stable prices; trust is now machine‑legible or absent. Each axiom carries its falsifier — what observation would retire it.
3. **The five branches.** `mx-branchmatrix`: A Operator Craft (LIVE), B Engineering & IT (PARTIAL — shipped and planned counts computed), C Institution Building (PARTIAL), D Meta‑X Ascent (PREVIEW), E BCIA Gateway (GATED). Each cell shows shipped/planned counts and links to the branch index.
4. **The cognitive arc.** Default cadence 12 courses × 6 lessons, each lesson moving What is · Why · How · Lab · Artifact · Scenario Assessment; 90‑day capstone; pre‑registered hypothesis with a null; public post‑mortem.
5. **Companion rails.** Six disciplines embedded in every series: compliance, accessibility, decay‑awareness, falsifiability, kill criteria, unit economics.
6. **The Limits & Bridge standard.** New in v2026.08.12 — every series now carries a mandatory Limits module before its Bridge lesson. Short statement plus link.
7. **Credentialing.** The three‑rung proof requirement and the renaming of the completion badge to *Completion Marker*.
8. **Exit pair.** "Pick your path" and "Open the full catalog."

**Components:** `mx-hero(variant=pillar)`, `mx-axiom`, `mx-claimcard`, `mx-branchmatrix`, `mx-lessonarc`, `mx-principlegrid`, `mx-countstat`, `mx-exitpair`.

---

### `toptech.metax.academy/a/` — Branch A · Operator Craft
**Deck:** Two rebuilt flagships and twenty‑one next‑level series across the nine surfaces every operator lives on.

**Sections.** (1) **What Branch A is for** — the shipped core; everything else in TopTech extends outward from this standard. (2) **The two flagships** — Discoverability and Attention, both torn down and rebuilt with kill criteria, unit economics, falsifiability and an answer‑engine spine; each with a `mx-seriescard`. (3) **The nine surfaces** — owned audience, AI answer engines, commerce agents, first‑party data, monetisation, trust, community, growth, and the meta‑skill of surviving platform migrations; each surface lists its series. (4) **Series index** — full `mx-facetedtable` of Branch A series with id, title, status, depth, capstone artefact. (5) **Sequencing advice** — start with both flagships, add the compliance rail early, then choose an archetype. (6) **The branch capstone** — Operator Career, Portfolio & Exit Craft.

---

### `toptech.metax.academy/b/` — Branch B · Engineering & IT
**Deck:** Shipped units are labelled shipped; planned units are labelled planned. No vapourware dressed as a course.

**Sections.** (1) **Why Branch B exists** — operators hit an engineering ceiling; this branch raises it without pretending to be a computer‑science degree. (2) **Shipped roster** — computed list with full series cards. (3) **Planned roster** — every planned unit resolves to a real stub page carrying `mx-stubnotice` with its scope statement, its dependency, and its review date. (4) **The placement gate** — pointer to `/b/gate/`. (5) **What Branch B is not** — not a certification for production security work, not a substitute for supervised engineering practice. (6) **Prerequisites** honestly stated.

### `toptech.metax.academy/b/gate/` — Branch B Placement Gate
Self‑assessment before entry: an eight‑item competence checklist, three worked diagnostic problems with published solutions, and an honest routing rule — if you fail more than two items, the page sends you back to specific Branch A series rather than upselling you. Sections: the gate's purpose, the checklist, the diagnostics, the routing table, the retake policy (none needed; it is unscored and unrecorded).

---

### `toptech.metax.academy/c/` — Branch C · Institution Building
**Deck:** How to turn practice into an institution that outlives its founder.

**Sections.** (1) The branch thesis — curriculum design, governance, and succession as operator skills. (2) The three series (S035–S037 by canonical id) with cards and statuses. (3) The hard link to the Academies pillar: Branch C is the *theory*; the Academies Community is the *charter route*. (4) Prerequisites and the ethics module that is non‑optional here. (5) Exit pair to Academies Requirements.

---

### `toptech.metax.academy/paths/` — Pick Your Path
**Deck:** Five operator archetypes, one stack, six to eight series each.

**Sections.** (1) How to choose — two questions, not a personality quiz. (2) The five archetype cards, each with: who it fits, the six‑to‑eight series selection, the expected elapsed time, the capstone artefact, and the kill criterion (what result should make you abandon this path). (3) The common core all five share. (4) The shared capstone. (5) A printable path sheet as a static PDF.

### `toptech.metax.academy/rails/` — Companion Rails
Six rails defined at spec depth: compliance, accessibility, decay‑awareness, falsifiability, kill criteria, unit economics. For each rail: definition, why it is embedded rather than taught separately, the artefact it forces in every series, the failure signature when it is missing, and the audit check that detects it.

### `toptech.metax.academy/arc/` — The Cognitive Arc
The pedagogy specification. Sections: the six‑beat lesson (What is · Why · How · Lab · Artifact · Scenario Assessment) with the purpose and length target of each beat; the 12×6 default cadence and when a series may deviate; the capstone contract; the pre‑registration format with a worked example including the null and the decision rule; the post‑mortem template; and the evidence that this arc is a design choice rather than a proven method — stated as `[VERIFY]`, with the studies that would settle it.

### `toptech.metax.academy/standard/limits-bridge/` — The Limits & Bridge Standard
**Deck:** Before any series points forward, it must state what it cannot do.

Sections: the rationale (a curriculum that only escalates is a sales funnel); the four limit classes used by `mx-limitspanel` — epistemic, technical, ethical, economic; the mandatory placement (Limits module immediately precedes the Bridge lesson); the Bridge lesson contract (name the next rung, name what it inherits, name what it does not); the retrofit status across all series, computed; and the specific void of the former S040/S041 bridge with the reason.

### `toptech.metax.academy/catalog/` — Full Catalog
A single faceted table of every series in the estate, generated from `catalog.json`. Facets: branch, status, depth, audience tier, language availability, evidence class, capstone type. Sections: how to read the table; the table; the download link to `catalog.json` with its schema; the counts strip (computed, never typed); and the statement that catalog membership is not an endorsement of completeness — status badges govern.

### `toptech.metax.academy/changelog/` — Curriculum Changelog
Reverse‑chronological release record. Each entry: version tag, date, added/changed/deprecated/voided, affected series ids, and the reason. Sections: how versions are numbered (`vYYYY.MM.N`); the current release; the archive; the corrections sub‑feed (content errors, distinguished from feature changes); and RSS/JSON endpoints.

---

## 3. THE ASCENT — `toptech.metax.academy/ascent/`

### `/ascent/` — The Meta‑X Ascent
**Deck:** Ten rungs from the transistor to collective dynamics, mapped one‑to‑one onto the ten Arabic books.

**Sections.** (1) **What the Ascent is** — a research‑preview ladder, taught as history and open problems, not as settled engineering. (2) **The ten rungs** rendered with `mx-ladder`: Computing Substrate Literacy; Programming Paradigms & Limits; Mathematical Foundations; End of Binary — a critical history; Multi‑Valued & Fuzzy Computation; From Electron to Cell; Biological Computation; Embodied Computation; Network Science; Higher Systems & Collective Dynamics. Each rung shows its source book, its status, and its Limits module. (3) **The citation‑only rule** — Ascent content asserts no primary empirical claims; every scientific statement carries a dated citation or a `[VERIFY]` tag. (4) **The banned claim** — the "28,800×" DishBrain‑versus‑DeepMind comparison is named explicitly as a claim that must not be taught as settled, with the reason. (5) **Hard exclusions** — no protocols, no wet‑lab methods, no human‑cell work. (6) **Prerequisites** and honest time cost. (7) Exit pair to Limits of Silicon and BCIA Overview.

### `/ascent/limits/` — The Limits of Silicon
The Ascent's keystone essay. Sections: the four limit classes applied to conventional computing (thermodynamic and Landauer‑bounded, architectural and memory‑wall, economic and fab‑capital, epistemic and model‑opacity); for each, what is well‑evidenced versus contested, with dated sources; the counter‑case, presented at full strength — that silicon scaling has repeatedly outlived its obituaries; and the decision rule MetaX uses to decide whether the Ascent's premise still holds.

### `/ascent/exclusions/` — What the Ascent Is Not
A short, hard page: not a laboratory course, not a protocol source, not a claim that biological computing is imminent, not an endorsement of BCIA's contested quantitative claims, not a credential in neuroscience or bioengineering. Each exclusion states the harm it prevents and the correct external destination for that need.

### `/ascent/paths/` — Reading Paths
Three routes through the ten rungs: the historian's path (rungs 4, 1, 2, 5), the systems path (1, 2, 9, 10), the life path (3, 6, 7, 8). Each with an ordering rationale, time estimate, and prerequisite note.

### `/ascent/status/` — Status & Open Questions
Per‑rung status table, the open questions each rung leaves unresolved, the `[VERIFY]` register scoped to the Ascent, and the next review date. This page is the Ascent's honesty valve and is linked from every rung page.

---

## 4. BCIA — `bcia.metax.academy`

### `bcia.metax.academy/` — BCIA Overview
**Deck:** A civilizational research umbrella on non‑binary and biological computation — currently under remediation, and saying so on its front page.

**Sections.** (1) **The programme claim** and its scope. (2) **Status first** — an `mx-frozenbanner` stating that BCIA is a research position under active remediation, with the count of open defects, computed, and a link to the audit. (3) **The eight series** with statuses. (4) **What BCIA asserts and what it does not** — an `mx-claimcard` set, each with a falsifier. (5) **Relationship to the Ascent** — the Ascent teaches the ladder; BCIA advances the position; the two are deliberately separated so a learner is never taught a contested thesis as curriculum. (6) **The human‑cell exclusion**, stated on the home page rather than buried. (7) Exit pair to Critical Audit and Document Zero.

### `/series/` — The Eight Series
Index of BCIA's series with per‑series scope, current defect count, notation dependency, and status. Sections: how BCIA series differ from TopTech series (position papers with pedagogy attached, not competence courses); the index table; the duplicate‑series archive notice pointing to `/_archive/`; and the gate condition under which any BCIA series may be promoted from PREVIEW to LIVE.

### `/roadmap/` — Volume Roadmap
The planned volume sequence with dependencies, each volume's precondition, and an explicit "no dates without gates" policy — volumes carry gate conditions rather than ship dates.

### `/document-zero/` — Document Zero
The founding statement of the programme: the problem it claims exists, the intellectual lineage, the commitments it makes, and — unusually — the conditions under which the programme should be wound down. Sections: the thesis; the four commitments; the wind‑down criteria; the signature block and version history.

### `/charter/` — Charter & Human‑Cell Exclusion
The binding research charter. Sections: scope of permissible work (literature synthesis, formal modelling, simulation, ethics); absolute exclusions (wet‑lab protocols, human neural tissue, any cell‑line acquisition guidance, anything dual‑use); the reasoning behind each exclusion; the enforcement mechanism and the ethics veto; the reporting route for suspected breaches; and the amendment procedure with its 90‑day cure window.

### `/governance/` — BCIA Governance
Who decides, with what quorum, recorded where. Sections: roles; the determination log; conflicts; the relationship to the MetaX Charter (MX‑000) and to MX‑014 research ethics; and the escalation path.

### `/status/` — Status & Remediation *(canonical: `https://bcia.metax.academy/status/`)*
**Deck:** The seven remediation steps, their state, and what each unblocks.

Sections: the seven steps enumerated with owner, state, evidence required for closure, and target review date; the live gate status for Branch E (`GATED` until steps close); the defect register summary; and the machine‑readable `status.json` endpoint that other pages read at build time so no page ever states a stale gate status.

### `/audit/` — Critical Audit
The published self‑criticism. Sections: methodology of the audit; findings by severity, each as an `mx-auditfinding` with claim, defect, impact and remediation; the specific contested quantitative claims, including the DishBrain comparison, with why they fail; notation inconsistencies; citation gaps; the auditor's overall verdict; and the response from the curator, printed alongside rather than above.

### `/readiness/` — Readiness Protocol
The criteria a BCIA output must meet before publication: evidence class, citation density, notation conformance, exclusion review, and independent read. Includes the checklist as a downloadable artefact.

### `/notation/` — Formal Notation
The programme's internal notation, its known inconsistencies (flagged as defects), the normalisation plan, and a conversion table from earlier drafts. Explicitly labelled as under revision.

### `/contribute/` — Contribute
What contribution is possible without a laboratory: literature verification, citation repair, translation, formal modelling, adversarial review. Sections: the contribution table with effort and credit; what is never accepted (protocols, unpublished lab data, human‑subject material); the submission route; and the licensing consequence of contributing.

### `/contribute/credential/` — Contributor Credential
The one credential BCIA issues: scope, evidence required, review process, expiry, and what it explicitly does not assert (no scientific standing, no institutional affiliation).

### `/open-problems/` — Open Problems
A numbered register of unsolved problems the programme publishes deliberately, each with a statement, why it matters, what would count as progress, and its current claimant status.

### `/bibliography/` — Bibliography
The full source list with decay classes, access status, and verification state. Sections: how sources are classed; the list, faceted by rung and topic; the `[VERIFY]` register; and the retraction watch.

### `/gateway/` — The BCIA Gateway *(GATED)*
Branch E's door. Sections: what the gateway will contain; the exact gate condition (all seven remediation steps closed and one independent external read); the live status read from `status.json`; why it is closed rather than soft‑launched; and the notification route.

---

## 5. ACADEMIES — `academies.metax.academy`

### `academies.metax.academy/` — The Academies Community
**Deck:** Anyone may found an academy inside the MetaX standard — the standard is the price of entry.

**Sections.** (1) The proposition and its limits: you get a method, a charter, a directory listing and a credential grammar; you do not get accreditation, students, or revenue guarantees. (2) The five levels at a glance. (3) The eleven requirement groups at a glance. (4) The directory preview with computed counts. (5) What gets an academy suspended. (6) Exit pair to Levels and Requirements.

### `/levels/` — The Five Levels
Applicant, Sandbox, Provisional, Chartered, Institution. For each: entry criteria, granted rights, obligations, review cadence, downgrade triggers, and the typical elapsed time. Rendered as `mx-leveltable` plus one narrative block per level explaining what changes about your day when you reach it.

### `/requirements/` — Minimum Requirements
The eleven groups at full spec depth, each as an `mx-requirementblock`: curator eligibility; thesis scope (800–2000 words) with an annotated example; curriculum minimum (≥6 courses, a Limits module, a Bridge lesson, a 90‑day capstone, a pre‑registered hypothesis with a null); the frozen assessment rubric D1–D5; governance (charter, ethics veto holder, succession clause); publication discipline; technical specification (static hosting, `academy.json` manifest, WCAG 2.2 AA); bilingual language policy; legal and commercial terms; red‑line content bans (wet‑lab, human‑cell, political mobilisation, and the three core refusals); and the annual audit with its remediation process. Each block states the evidence that satisfies it and the common failure mode.

### `/path/` — The Founding Path
The chronological route from idea to charter: draft the thesis, build the sandbox, pass the sandbox review, run one cohort or one public capstone, submit the audit pack, receive provisional status, hold it for one review cycle, charter. Each step with its artefact and its typical rejection reason.

### `/apply/` — Apply
The application instrument. Sections: eligibility pre‑check; what to submit and in what format; the `academy.json` manifest template; the review timeline; the decision classes (accept, accept with conditions, defer with named gaps, decline with reasons); and the data notice — application data is Class 2, retained per MX‑018.

### `/sandbox/` — Sandbox Preview
What a sandbox academy may and may not do: may publish under a sandbox banner, may enrol, may not issue MetaX‑grammar credentials, may not appear in the public directory without the sandbox badge. Includes the sandbox banner component spec.

### `/directory/` — Academy Directory
The public list, generated from manifests. Each entry shows name, curator, level, charter date, last audit date, audit outcome, and language. Sections: how to read an entry; the directory; the filter set; and the statement that listing is a record of standing, not an endorsement of quality.

### `/audits/` — Audit Reports
Every annual audit published in full, including failures. Sections: the audit method; the report index; the remediation tracker; and the suspension log with reinstatement records.

### `/technical/` — Technical Guide
Build instructions for academy operators: repository layout, the `academy.json` schema with a full annotated example, the component library usage terms, hosting on Cloudflare Pages, accessibility testing, bilingual routing and `hreflang`, and the build‑stamp requirement.

### `/terms/`, `/privacy/`, `/moderation/`
**Terms** (MX‑004): the charter agreement, licence grant and its limits, trademark use rules, revocation grounds, and the appeal route. **Privacy**: applicant and learner data handling within academies, and the obligations MetaX imposes on chartered academies. **Moderation** (MX‑008): the conduct standard, the reporting route, the graduated response ladder, the publication of moderation outcomes in aggregate, and the child‑safety provisions stated without ambiguity.

---

## 6. CREDENTIALS — `metax.academy/credentials/`

### `/credentials/` — The Credential Ladder
**Deck:** Completion is attendance. Competence is evidence. Mastery is judgment under scrutiny.

Sections: the four‑rung proof ladder P0–P3 with P3 requiring third‑party verification of any numeric claim; the credential types and their exact assertions; the renaming of the completion badge to *Completion Marker* and why; what MetaX credentials never assert; and the verification pointer.

### `/credentials/guide/` — Learner Guide
How to earn, evidence, and present a credential: the artefact standards, the pre‑registration requirement, the review window, the appeal route, and a worked example of a passing and a failing submission side by side.

### `/credentials/templates/` — Templates
Downloadable static templates: pre‑registration form, capstone report, post‑mortem, portfolio index, reviewer report. Each with instructions and a completed specimen via `mx-specimentabs`.

### `/credentials/proof-ladder/` — The Proof Ladder
P0 self‑asserted, P1 artefact‑backed, P2 peer‑reviewed, P3 third‑party verified. For each rung: what evidence qualifies, who signs, what it costs in effort, and what it entitles the holder to claim.

### `/credentials/reviewers/` — Reviewers
Who reviews, how they are selected, the conflict rules, the reviewer credential, the calibration process, and the published inter‑reviewer agreement statistics (computed, or `[VERIFY]` if not yet measured).

### `/credentials/registry/` — Registry Specification
The data model behind `credentials.json`: identifier grammar, immutability rules, revocation semantics, mirror policy (three signed locations), and the 180‑day fallback under ML §E.7.

### `/credentials/operations/` · `/credentials/appeals/` · `/credentials/integrity/`
**Operations**: issuance workflow, service levels, and the degraded‑mode rules under AG‑000 §A.6. **Appeals** (MX‑016): grounds, form, timeline, decider, and the explicit statement that Maher does not decide appeals against his own determinations. **Integrity Report**: annual publication of issuance counts, revocation counts, fraud attempts detected, and lessons applied.

---

## 7. VERIFY — `verify.metax.academy`

### `verify.metax.academy/` — Verify a Credential
**Deck:** Paste an identifier. Get a signed, static, dated answer.

Sections: the lookup field; what a valid result shows (holder identifier, credential type, proof rung, issue date, status, evidence hash); what an invalid result shows and why a "not found" is not an accusation; the freshness stamp of the index; and the manual verification route for offline confirmation.

### `/c/{credential-id}/` — Credential Record *(parametric)*
One static page per issued credential, carrying JSON‑LD. Sections: the assertion in plain language; the evidence summary; the reviewer signatures; the revocation status read from the StatusList; the licence and reuse terms for the record; and the correction route.

### `/revocations/` — Revocation List
The StatusList2021 rendering plus a human‑readable log: identifier, date, ground, and whether the revocation was administrative or substantive. Includes the commitment that revocation records are never deleted.

### `/how/` — How Verification Works
The cryptographic and procedural explanation, the trust assumptions stated openly, the failure modes, and the reasons a static verifier is preferred to an API.

### `/issuers/` — Issuers
The list of parties permitted to issue in MetaX grammar (MetaX itself and chartered academies), with their key fingerprints and their scope limits.

---

## 8. LIBRARY & LEXICON

### `library.metax.academy/` — The Library
The corpus front door. Sections: what the library holds (governance instruments, standards, the record, the archive); the stack explainer; how to cite MetaX; and the downloads.

### `/stack/` and `/layers/`
**Stack Explainer**: the six layers from tokens to published page, with the dependency direction and the rule that no layer may reach upward. **Layer Specs**: one page per layer with its contract, its owner, its test, and its failure signature.

### `/standards/` — Authoring Standards
The house style at working depth: the prompt kernel, front‑matter schema, heading grammar, claim/falsifier pairing, decay classing, citation format, `[VERIFY]` usage, Arabic authoring rules, and the prohibited constructions list.

### `/record/` and `/record/{doc-id}/`
**The Record**: the index of MX‑000 through MX‑019 and AG‑000 through AG‑009, each with version, status, last review and diff link, plus the corrections log. **Document pages** *(parametric)*: full text, clause anchors, version history, superseded notice where applicable, and the two‑track enforceability annotation for legal instruments.

### `/downloads/` and `/archive/`
**Downloads**: `catalog.json`, `credentials.json`, `lexicon.json`, `status.json`, `academy.json` schema, `llms.txt`, each with schema documentation and a stability promise. **Archive**: superseded and duplicate material under `/_archive/`, every item carrying `mx-supersededheader` with the reason, the successor link, and the date of supersession — never deleted, never silently corrected.

### `lexicon.metax.academy/` , `/t/{term}/` , `/contested/`
**Lexicon home**: purpose, the bilingual authority rule, and the entry anatomy. **Term pages** *(parametric)*: Arabic and English forms, definition, usage in MetaX, related terms, sources, and decay class. **Contested terms**: the subset where MetaX's usage differs from common usage or where the field itself disagrees, each presenting the competing definitions fairly before stating MetaX's working choice and why.

---

## 9. PARAMETRIC FAMILIES — the templates that generate the thousands

These five templates, not hand‑authored pages, are what make the estate scale to thousands of series. Each is specified once and instantiated by the build.

**Series page — `toptech.metax.academy/s/{S###}-{slug}/`.** Sections in fixed order: identity strip (id, branch metadata, status, version, depth, audience tier); the thesis in one paragraph; who this is for and who it is not for; prerequisites; the course list; the Limits module summary; the Bridge card naming the next rung and what it does not inherit; the capstone contract with its pre‑registered hypothesis and null; the evidence and sources block; the changelog; and the exit pair. Branch never appears in the URL — identifiers are immortal and branch‑agnostic (rule C‑1/C‑2).

**Course page — `/s/{S###}-{slug}/c/{NN}-{slug}/`.** Sections: course claim; position in the series arc; the six lessons with one‑line outcomes; the course artefact; the assessment scenario; and the limits inherited from the parent series.

**Lesson page — `/s/{S###}-{slug}/c/{NN}-{slug}/l/{N}-{slug}/`.** The six‑beat arc rendered by `mx-lessonarc`: What is · Why · How · Lab · Artifact · Scenario Assessment, plus prerequisites, decay chip, sources, and next‑lesson link.

**Ascent rung — `/ascent/r/{NN}-{slug}/`.** Sections: rung claim; source book mapping; what is established versus contested; the citation‑only notice; the Limits panel; open questions; and the link to `/ascent/status/`.

**Academy profile — `academies.metax.academy/a/{slug}/`.** Sections: identity and level; the thesis; curriculum index; charter and audit history; credential grammar in use; contact; and the standing notice.

Every one of these templates inherits the global page contract in section 0, which is why a new series generates roughly ninety‑one routes with no hand authoring and no drift.

---

**One correction worth flagging before you file this.** Two pages in the tree above are currently doing double duty and should be split at the next release: `metax.academy/about/governance/` overlaps materially with `library.metax.academy/record/`, and `bcia.metax.academy/status/` overlaps with `/audit/`. In both cases the fix is the same — the governance and status pages should hold *current state only*, and the record and audit pages should hold *history and findings*. Left merged, both pairs will drift, and drift in a governance surface is the single failure mode this whole architecture exists to prevent.
