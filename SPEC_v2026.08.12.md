# MetaX.Academy — Master Specification (v2026.08.12)
> Saved verbatim for the next build session. Source: curator brief by Maher.
> This is the authoritative blueprint for the full 8-subdomain / ~200-page
> universe, its component system (`mx-*`), the Prompt Kernel, the complete menu
> tree, and final-draft page copy. Treat as read-only reference; do not edit the
> intent, only append implementation notes below the marker at the end.

---

## HOW TO USE THIS FILE (next session)
1. Read PART 0 (this section) + the Prompt Kernel first.
2. The current live repo is a **single-domain static site** (one Cloudflare
   Pages project). The spec targets **eight subdomains**. Until subdomains exist,
   map subdomain paths onto the current flat repo (e.g. `toptech.metax.academy/a/`
   → `toptech.html` sections or new `a.html`). Record every mapping in the
   IMPLEMENTATION LEDGER at the bottom.
3. Build order is fixed — see PART III (Build order for the components).
4. Nothing ships without: a status badge, a page stamp, a changelog entry, and
   (for series) a Limits panel + Bridge card.

## STATE OF THE REPO AT SAVE TIME (Turn 4 close)
- 7-item mega-menu (TOPTECH, ASCENT, BCIA, ACADEMIES, CREDENTIALS, LIBRARY,
  ABOUT) + utility bar (Start Here · Verify · Search · EN/ع) already live in
  `js/site.js` (MENU/UTILITY arrays, buildMega, injectChrome, wireMega).
- Status badges (`.mmb-live/planned/research-preview/gated`) exist in CSS + JS.
- Full-bleed animated heroes on all pages; TopTech five-branch section
  (`#branches-sec`, renderer in `js/main.js`, data `BRANCHES`) shipped.
- 9 news articles expanded to 800+ words; countdown widget (`[[countdown: ISO |
  label]]` directive → `js/article.js` `wireCountdowns`) shipped on 3 posts.
- Image placeholder prompt files present: IMAGE_PROMPTS.md,
  DETAIL_IMAGE_PROMPTS.md, NEWS_IMAGE_PROMPTS.md.
- Pages: index, toptech, ascent, bcia, bcia-status, academies, credentials,
  verify, library, lexicon, community, macrolifetach, curriculum, news, article,
  detail, about, contact, privacy, terms.

> The spec below is the TARGET. The repo is an early subset of it. Gaps are the
> backlog.

---

# A. Architectural rationale (four intents, three UI laws)

Four visitor intents must be satisfied in one hover:
- **Learner** → *where do I start* → permanent **Start Here** in utility bar.
- **Skeptic** → *is this real* → permanent **Verify** + Status/Remediation/Audit
  as first-class nav, not footer apologies.
- **Builder** → *can I found something* → **Academies** with requirements shown
  BEFORE the application.
- **Researcher** → *what is the actual claim* → **BCIA** with exclusions & open
  problems in the menu itself.

Three UI laws:
1. **No top-level item is a dead link** (touch + screen-reader safe).
2. **Status badges are structural** — LIVE / PLANNED / PREVIEW / GATED inline on
   every series link. Pre-empts the empty-page click.
3. **Panels cap at 4 columns / 7 links per group**; longer → index page. Nav is
   a build-time partial; renders with JS disabled; cannot drift between
   subdomains.

---

# B. THE PROMPT KERNEL (v2026.08.12) — inherited by every page

```
FRONT MATTER (required; page fails build if incomplete)
  page_id, subdomain, path, title_en, title_ar, deck, version (vYYYY.MM.N),
  status (live|planned|research-preview|gated), audience (learner|skeptic|
  builder|researcher|reviewer), reading_time, evidence_class (durable|
  semi-durable|perishable), sources_verified (bool), last_reviewed,
  changelog_ref, hreflang_pair, jsonld_type.

STRUCTURE
  Eyebrow (pillar + status) → H1 stating a claim, never a label → one-sentence
  deck → primary CTA above the fold → content blocks → two exit paths
  ("If this is you, go here / If not, go there") → footer stamp (version,
  last-reviewed date, changelog link).

VOICE
  Declarative. No exclamation marks. No "revolutionary/cutting-edge/unlock/
  journey". 2nd person for learner pages; 3rd person for governance. Short first
  sentence per section. Concede the strongest objection in the body.

EVIDENCE
  Every substantive claim carries a decay class + dated source or a [VERIFY]
  tag. No undated statistics. No two non-equivalent experiments as a benchmark.

ACCESSIBILITY & BUILD
  WCAG 2.2 AA. One H1. No skipped headings. 4.5:1 contrast. Visible focus ring.
  No info by hover/colour alone. Static HTML on Cloudflare Pages; nav/header/
  footer as build-time partials; zero client-side fetch for primary content.
  Arabic parity: full RTL mirror, correct hreflang, Arabic numerals per guide.

OUTPUT
  Full page copy block-by-block + JSON-LD + front matter + one-line changelog.
```

---

# C. THE TREE (8 pillars)

## 0 — Utility bar (persistent)
- **Start Here** `/start/` — 6-question diagnostic, no-JS `<details>` chain +
  JS-enhanced. Terminal state → one series, honest hour estimate, the single
  most-likely-missing prerequisite. "I'm just looking" → About → Universe.
- **Verify** `verify.metax.academy` — see 5.7.
- **Search** `/search/` — Pagefind-style prebuilt static index. Facets: pillar,
  branch, status, audience, language, evidence class. Empty state suggests the
  4 intents, never "no results".
- **EN / ع** — path-for-path toggle; missing Arabic → section Arabic index with
  honest "not yet translated" + target date. Never silently drop to homepage.

## 1 — TOPTECH · `toptech.metax.academy` (Learner primary, Builder secondary)
- **1.0 Home** `/` — founding axioms → five-branch matrix (build-generated
  counts) → "Why every series now teaches its own limits" (Limits module +
  Bridge lesson borrowed from Meta-X book architecture) → version-control axiom.
- **1.1 Branch A — Operator Craft** `/a/` — 2 flagships + 21 series grouped by
  **surface** (owned audience, answer engines, commerce agents, first-party
  data, monetization, trust, community, growth, platform migration). S18 = the
  capstone across all 23.
  - 1.1.1 Flagships `/a/flagships/` — F1 SEO (Rebuilt), F2 Social (Rebuilt).
    Show before/after of one course.
  - 1.1.2 The Nine Surfaces `/a/surfaces/` — conceptual map; best AEO asset;
    write quotable in fragments.
  - 1.1.3 Series pages `/a/{f1|f2|s01…s21}/` — 23 from one template.
- **1.2 Branch B — Engineering & IT** `/b/` — 13 series. Lead with **Course 0
  placement gate**. S22 Design / S23 Development / S24 Data & AI = LIVE;
  S25–S34 PLANNED w/ target quarters, each linking a real stub.
  - 1.2.1 Course 0 gate `/b/gate/` — 12 items, 3 axes; 4 verdicts (Ascent S38 /
    B S22 / B S24 / past-branch → C).
  - 1.2.2 Series `/b/s22…s34/` — template + "Toolchain and its expiry" block.
- **1.3 Branch C — Institution Building** `/c/` — mastery → transmission. S35
  capstone = a real Level-3 academy on its own subdomain.
  - S35 Academy Builder / S36 Curriculum & Assessment Design / S37 Governance &
    Stewardship (4 governance primitives: charter-before-experiment; ethics
    reviewer w/ veto; disclosure of conflicts+AI; succession clause).
- **1.4 Pick Your Path** `/paths/` + 5 archetype children.
- **1.5 Companion Rails** `/rails/` — 6 rails (applied in every artifact, not
  assessed once).
- **1.6 The Cognitive Arc** `/arc/` — 12×6, What is·Why·How·Lab·Artifact·
  Scenario; document the v2026.08.12 Limits+Bridge amendment.
- **1.7 The Limits & Bridge Standard** `/standard/limits-bridge/` — DOCTRINE
  page. 4 limit classes (physical/economic/epistemic/ethical) w/ worked
  examples; Bridge contract (name successor, what it inherits, what it discards);
  rubric consequence = fails structural review, cannot ship.
- **1.8 Full Catalog** `/catalog/` — filterable static table of all 52 series;
  build-generated counts; `catalog.json` at fixed path.
- **1.9 Changelog** `/changelog/` — reverse-chron; version/date/files/what/why/
  what-it-invalidates.

## 2 — ASCENT · `toptech.metax.academy/ascent/` (Learner + Researcher; flagship narrative)
- **2.0 The Ladder** `/ascent/` — argument-first; 10 rungs as vertical ladder
  (title, terminal limit, bridge). Not BCIA doctrine; link *What Ascent Is Not*
  before enrolment.
- **2.1 Rungs** `/ascent/s38…s47/` — 10 from one template. S38 Computing
  Substrate Literacy · S39 Programming Paradigms & Their Limits · S40 Math
  Foundations · S41 The End of Binary · S42 Multi-Valued & Fuzzy · S43 From
  Electron to Cell · S44 Biological Computation · S45 Embodied Computation ·
  S46 Network Science · S47 Higher Systems & Collective Dynamics. Five-station /
  12-chapter + terminal bridge chapter. Dated sources only (Landauer 1961;
  Łukasiewicz; Zadeh; Chua 1971/HP 2008; Hodgkin–Huxley; Adleman 1994; Church
  2012; Gibson; Rizik 2022; Grozinger 2019; Kagan 2022; Barabási).
  **BANNED:** DishBrain-vs-DeepMind "like-for-like" benchmark.
  **HARD EXCLUSIONS from S43 onward, verbatim:** no wet-lab protocols, no
  substrate cultivation, no synthetic-biology bench instruction, no organism
  engineering, human-cell exclusion in full.
- **2.2 The Limits of Silicon** `/ascent/limits/` — best long-form asset; refuse
  the leap "silicon has ceilings → therefore biology".
- **2.3 What Ascent Is Not** `/ascent/exclusions/` — exclusions before
  enrolment; only CTA = Charter.
- **2.4 Reading Paths** `/ascent/paths/` — Blue 6mo / Green 12mo / Gold 36mo.
- **2.5 Ascent Status & Open Questions** `/ascent/status/`.

## 3 — BCIA · `bcia.metax.academy` (Researcher primary, Skeptic secondary; leads with its problems)
- **3.0 What BCIA Is and Is Not** `/` — two equal columns (claim / disclaimer);
  "not publication-ready" above the fold; link Status from first screen.
- **3.1 The Eight Series** `/series/` + 8 — Foundations, Roots, Tools (governance
  & reading context ONLY, no lab instruction), Field, Education, Wisdom, Vision,
  Codex Vitae.
- **3.2 Volume Roadmap** `/roadmap/` — flag duplicated Volume I explicitly.
- **3.3 Document Zero** `/document-zero/` — 7 binding bases printed in full.
- **3.4 Charter & Human-Cell Exclusion** `/charter/` — exclusion gets own H2 +
  permalink + full reasoning; note the one prior version that omitted it (logged
  defect).
- **3.5 Governance — Cloister & Atrium** `/governance/`.
- **3.6 Status & Remediation** `/status/` — one card per defect (dup Volume I;
  taxonomy D1–D10 vs 7 layers; AMN/LPN contradiction; universality vs revelatory
  grounding; stewardship vs ownership; unverified quant claims; missing
  exclusion).
- **3.7 The Critical Audit** `/audit/` — whole, dated, versioned, unsoftened.
- **3.8 Publication Readiness Protocol** `/readiness/` — 3-pass (language →
  science → ethics); no publish while a S1 defect is open.
- **3.9 Formal Notation** `/notation/` — FROZEN banner; do not teach/cite.
- **3.10 Contribute** `/contribute/` — TopTech→BCIA contribution map.
- **3.11 Contributor Credential** `/contribute/credential/` — cross-pillar;
  confers contribution rights, NOT authority over doctrine; revocable.
- **3.12 Scope Limits & Open Problems** `/open-problems/`.
- **3.13 Bibliography** `/bibliography/` — single citation source of truth.
- **3.14 Branch E — BCIA Gateway** `/gateway/` — GATED, real page: S48–S50 +
  7-step live gate + notify signup.

## 4 — ACADEMIES · `academies.metax.academy` (Builder; publish standard BEFORE form)
- **4.0 How the Community Works** `/` — 4 inherited principles + weekly obligation.
- **4.1 The Five Levels** `/levels/` +5 (applicant, sandbox, provisional,
  chartered, institution).
- **4.2 Minimum Requirements** `/requirements/` + 11 anchored children (curator
  eligibility; thesis & scope; curriculum minimum; assessment & credentialing;
  governance; publication discipline; technical/`academy.json`; language; legal &
  commercial; red lines; review & enforcement). Full binding detail in source.
- **4.3 Founding Path** `/path/` · **4.4 Apply** `/apply/` (R2 presigned upload)
  · **4.5 Sandbox Preview** `/sandbox/` (noindex, no credentials) · **4.6
  Directory** `/directory/` (build from `academy.json`; suspended stay listed) ·
  **4.7 Audit Reports** `/audits/` · **4.8 Curator Technical Guide**
  `/technical/` · **4.9 Terms / Privacy / Moderation**.

## 5 — CREDENTIALS · `metax.academy/credentials/` · verifier `verify.metax.academy`
- **5.0 The Ladder** — Practitioner, Professional Operator, Master-Fellow, +
  cross-pillar Contributor. State worth AND non-worth.
- **5.1** four track pages. **5.2** Learner Guide + Submission Pack. **5.3**
  Templates (Blank/Filled/**Failing** specimen). **5.4** Proof Ladder. **5.5**
  Reviewers (single frozen D1–D5 rubric; earlier scheme void). **5.6 Verify** —
  pre-rendered static page per credential + JSON-LD + signed StatusList2021
  revocation via Worker; 3 states valid/expired/revoked; never soft "not found"
  for a revoked one. **5.7** Registry Spec / Assessment Operations / Appeals /
  Integrity Report (publish issuance+rejection+revocation counts).

## 6 — LIBRARY · `library.metax.academy` · Lexicon `lexicon.metax.academy`
- 6.1 Stack Explainer · 6.2 Layer Specs · 6.3 Authoring Standards (master gen
  prompt + symbol/decay/falsifiability standards + Arabic style guide: tashkīl,
  numerals, punctuation, citation, 3-pass review) · 6.4 **Lexicon** (root-indexed
  bilingual, 6 fields/entry, Contested Terms w/ AMN & LPN first, submission
  route) · 6.5 The Record (corrections, changelog, verification log, archive w/
  SUPERSEDED headers) · 6.6 Downloads (`catalog.json`, `credentials.json`,
  `lexicon.json` as stable machine endpoints).

## 7 — ABOUT · `metax.academy/about/`
7.1 The MetaX Universe · 7.2 Shared DNA · 7.3 The Curator (Maher) · 7.4 Mission
& Standard of Mastery · 7.5 Governance & Roles · 7.6 AI Use Policy · 7.7 **The
Static Principle** (static hosting = epistemic commitment; 3 sanctioned dynamic
exceptions: presigned uploads, token-gated evidence, revocation-list signing) ·
7.8 Accessibility · 7.9 Security & Disclosure · 7.10 Terms/Privacy/Advertising ·
7.11 Contact & Press.

## 8 — Footer & machine surfaces
`sitemap.xml` per subdomain + root index; `robots.txt`; `llms.txt`; RSS+JSON
feeds for changelog & corrections; 404 routing to the 4 intents; a status page
for the properties.

## D. Two non-negotiables
1. **Verify + Status/Audit in permanent nav**, not footers.
2. **Every PLANNED/GATED item resolves to a real page** with a date & gate
   condition. Honest empty > 404 > silence.

---

# PART I — COMPONENT SYSTEM (`mx-*`)
Component is the unit of production, not the page. All build-time partials from
one shared source (`@metax/chrome`), consumed by all 8 Pages projects. Zero
runtime fetch for primary content. Naming = `mx-*`.

## Foundations
- **mx-tokens** — one CSS custom-property file imported first. Token groups:
  Ink (#0A0C0F/#16191E/#2A2F36), Paper (#F6F4EF/#E9E4D9/#CFC8B8), Curator brass
  #B4884A, Semantic (valid #2E6F5E / pending #C98A17 / defect #A33227 / frozen
  #5A6472), Pillar accents (TopTech brass, Ascent steel #3C6E7F, BCIA violet
  #4B3F72, Academies clay #9A5B3E, Credentials green #2E6F5E, Library slate
  #55606B), Type (display serif EN, text sans EN, mono for stamps/IDs, display
  Arabic naskh, text Arabic), 8pt grid + type scale 0.833…2.488rem, motion
  --mx-ease 180ms (off under prefers-reduced-motion). Ships as one ~3KB inlined
  hashed file.
  > NOTE: this is a NEW, more editorial/print token palette (ink+paper+brass),
  > distinct from the current neon-on-#05060f site. A migration decision is
  > required — see LEDGER.
- **mx-glyph** — closed set of 10 marks, one fixed meaning each: ✦ axiom/origin ·
  ⊢ standard/derivation · ● system/mechanism · ⟡ rhythm/cadence · ⚖ governance ·
  ⬡ community · ⌁ limit · ⇥ bridge · ⧗ decay · ⌾ verification. All aria-hidden;
  never a lone link.
- **mx-partial-host** — shared chrome contract; academies pin a version;
  >90 days stale → directory flags `chrome-stale`.

## Global chrome
mx-skiplink · mx-utilitybar (Start Here/Verify/Search/EN-ع; states default/
scrolled/offline) · mx-meganav (7 pillars from `tree.json`; col 1 always "the
argument"; touch = tap-open then tap-navigate; no-JS = `<details>` stack at
`/menu/`) · mx-navlink (title + 1-line desc + inline status badge; descriptions
mandatory) · mx-breadcrumb (⊢ separator, BreadcrumbList JSON-LD) · mx-footer
(4 regions incl. machine surfaces + curator line) · **mx-pagestamp** (mono rule:
page id/version/status/evidence class/sources-verified/last-reviewed/changelog
link; generated from front matter; states verified/unverified/frozen/superseded)
· mx-adslot (1/page, below fold, none on Credentials/Verify/BCIA governance/legal).

## Page-opening
mx-eyebrow · **mx-hero** (variants: hero-pillar, hero-page, hero-document,
hero-gated; H1 = full sentence w/ verb; deck ≤28 words; one H1; ≥7:1 contrast) ·
mx-metastrip (build-injected counts) · **mx-exitpair** (proceed / redirect).

## Doctrine & content
mx-axiom (max 1/page) · **mx-claimcard** (claim + evidence chip + "what would
falsify this" — mandatory, else build fails) · mx-principlegrid · **mx-lessonarc**
(6 stations) · **mx-limitspanel ⌁** (4 limit classes; missing = build failure) ·
**mx-bridgecard ⇥** (successor + inherits + discards) · **mx-objections** (state
objection at full strength; all-victory = flagged) · mx-decaychip ⧗ · mx-verifytag
⌁ (deliberately ugly) · mx-sourcelist · **mx-curatornote** (Maher's note; ≤1/page;
primary humanising device) · mx-pullquote (bilingual, vocalised Arabic).

## Status / honesty / gating
**mx-statusbadge** (LIVE/PLANNED+quarter/PREVIEW/GATED+condition; always text
label) · **mx-stubnotice** (fills PLANNED pages) · **mx-gatecard** (gate
conditions w/ per-condition met/open/blocked) · **mx-defectcard** (atom of Status
page; severity S1–S3) · mx-frozenbanner · **mx-exclusionnotice** (ink on vellum,
no accent, verbatim, never collapsed) · mx-supersededheader · mx-tombstone
(revoked academy) · mx-auditfinding.

## Navigational / index
mx-branchmatrix · **mx-seriescard** (EN/AR, claim, surface/rung, counts, badge,
capstone, bridge, prereq) · **mx-ladder** (10-rung Ascent / 5-rung levels) ·
mx-leveltable · mx-requirementblock (anchored, permalinked) · **mx-facetedtable**
(prebuilt filtered pages; JS enhances) · mx-timeline · mx-archetypecard ·
**mx-diagnostic** (`<details>` chain, no-JS) · mx-countstat (build-generated;
unresolved = build fails).

## Credential / lexicon / record
mx-credentialcard · **mx-specimentabs** (Blank/Filled/**Failing**; failing
mandatory) · **mx-verifyresult ⌾** (Valid/Expired/Revoked; no 4th "not found"
confusable state) · mx-termentry (6 fields, root-indexed) · **mx-contestedterm**
(AMN/LPN side by side) · mx-changelogentry · mx-downloadcard · mx-manifestsnippet
(`academy.json` + validator) · mx-jsonld · **mx-uploadform** (only dynamic form;
R2 presigned; no client secrets; degrades to email).

## Cross-cutting
mx-rtl (full mirror + numerals) · mx-print (stamp + full sources + expanded
accordions) · mx-noscript (nav/filter/diagnostics all work without JS).

---

# PART II — PAGE CONTENT
Final-draft copy for every page is in the source brief (H1/deck/body/components
per page). Reproduce verbatim when building each page. Key recurring copy
patterns:
- Series H1: "*{Series title}: {the claim, as a sentence}.*"
- "Not for you if {condition}…" reject-warning pattern.
- Terminal diagnostic: "*Start at {series}. Roughly {hours} hours. The
  prerequisite you are most likely missing is {gap}…*"
- Home axiom: **Version-controlled or it is a lie.**
- BCIA bilingual pullquote: «من نقدَ نفسَه أوّلًا، لا يخشى نقدَ غيرِه.»
- Curator attribution throughout: **Maher**.

---

# PART III — BUILD ORDER (fixed)
1. `mx-tokens`, `mx-utilitybar`, `mx-meganav`, `mx-footer`, `mx-pagestamp`
   (stable chrome first).
2. `mx-statusbadge`, `mx-stubnotice`, `mx-gatecard` (publish whole tree honestly
   with ~40 empty-but-truthful pages on day one).
3. `mx-seriescard`, `mx-lessonarc`, `mx-limitspanel`, `mx-bridgecard`
   (curriculum spine).
4. `mx-defectcard`, `mx-auditfinding`, `mx-verifyresult` (credibility spine).
5. Everything else = enhancement.

> Curator's restated judgement: `mx-limitspanel` + `mx-defectcard` are the two
> components that make the site unlike its competitors. Build them beautifully.

---

# IMPLEMENTATION LEDGER (append-only; next sessions record real decisions here)
- [OPEN] Subdomain vs flat-repo mapping: current project is one Pages project.
  Decide whether to simulate subdomains via path prefixes/pages or defer until
  multi-project split. Affects `tree.json`, sitemaps, canonical URLs.
- [OPEN] Token palette migration: spec's ink/paper/brass editorial palette vs
  current neon-#05060f. Requires curator sign-off before touching `css/style.css`
  `:root` (note: line 69 `inset:0%` and AdSense IDs are user-locked — preserve).
- [OPEN] `tree.json` single-source-of-truth: current menu is a `MENU` array in
  `js/site.js`. Migrate to a `tree.json` consumed by nav + sitemap + search +
  footer (one tree, four outputs).
- [OPEN] Build-time partials: current site injects header/footer via
  `js/components.js` at runtime (client-side). Spec requires build-time partials
  with zero runtime fetch — needs a static build step (currently none).
- [DONE Turn4] 7-item mega-menu, utility bar, status badges, five-branch
  section, 800-word news + countdowns, image-prompt MD files.
- [DONE Turn5 — bug fixes] Mobile menu toggle: root cause was a bind-then-replace
  race — every page IIFE (main/pages/verify/community/curriculum/macrolifetach)
  ran `getElementById("navToggle")` at parse time, BEFORE `js/components.js`
  created the header, so all handlers bound to `null`. Fixed by moving toggle
  wiring into a single `wireMobileToggle()` in `js/site.js` (called from
  `injectChrome()` on boot, after the header + `#mobileMenu` are built). Added
  Escape/outside-click close, body-scroll lock, and desktop-breakpoint auto-close.
  Removed all the dead per-page toggle blocks. Verified: click → `data-mx-state`
  n/a; menu goes open=false→true, full grouped menu expands.
- [DONE Turn5 — bug fixes] Hero `css/img/` bug: relative `url(img/hero-*.jpg)`
  passed via the `--hero-img` custom property was resolved by the CSS spec
  RELATIVE TO `css/style.css` (the stylesheet that consumes `background-image:
  var(--hero-img)` on `.hero-bg`), producing `/css/img/...`. Fixed by making the
  inline paths root-relative `url(/img/hero-*.jpg)` on all 15 heroes + the CSS
  doc-comment example. Card art (`<img src>`) was already document-relative and
  needed no change.
- [DONE Turn5 — design] Mobile menu now `max-height: calc(100dvh - 66px)` +
  `overflow-y:auto` + `overscroll-behavior:contain` so the tall 7-group accordion
  scrolls instead of running off-screen; toggle has `:focus-visible` ring +
  `.is-open` cyan state.
- [DONE Turn5 — SKELETON + LAZY-LOAD] New `js/skeleton.js` exposes `window.MX`:
  `MX.skeletonHTML(kind,count,cols)`, `MX.lazy(target,render,opts)`,
  `MX.hydrateNow`, `MX.observeReveal`, plus a declarative `[data-mx-skeleton]`
  auto-upgrade. `MX.lazy` paints a shimmer skeleton immediately, observes the
  container with an IntersectionObserver (rootMargin 200px), and renders real
  content only when it nears the viewport — then runs img-slot hydration + reveal
  and fades in (`.mx-hydrated-in`). CSS added under "COMPONENT SKELETONS" (reuses
  the existing `shimmer` keyframe; reduced-motion disables it). Wired into all 21
  pages (loaded after components.js, before site.js). `js/main.js` renderers
  branches / branchB / flagships converted to `MX.lazy`; above-the-fold pillars
  left immediate by design. VERIFIED: skeleton visible pre-scroll
  (state=pending), hydrates to 5 real cards on scroll (state=hydrated).
- [NEXT] Continue SPEC build: migrate MENU→tree.json, decide subdomain mapping,
  and progressively convert remaining renderers (series grid, pages.js sections,
  news list, macrolifetach programs) to `MX.lazy`.
