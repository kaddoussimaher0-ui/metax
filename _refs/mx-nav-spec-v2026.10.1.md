# MX‑NAV‑SPEC v2026.10.1 — Full Route Manifest & Agent Build Prompt

**Status:** canonical · **Supersedes:** MX‑NAV‑SPEC v2026.09.4 in its entirety · **Consumers:** AI build agents generating the `metax.academy` static estate · **Curator:** Maher · **Prevailing text:** English; Arabic mirror at `/ar/…`

---

## 0. Four corrections that invalidate parts of the previous spec

**The name is MacroLifeTech.** Not MacroLifeTach. Every occurrence in the live build, in `data.js`, in the meta description, in the `og:` tags, in the search index and in every prior specification is a spelling defect. The nav key is `metax`, the hub route is `/metax/`, the display label is `Meta‑X`, and the expanded name written in prose is **MacroLifeTech (Meta‑X)**. Agents must not reproduce the old spelling anywhere, including in redirects — the `_redirects` file maps `/macrolifetach.html` to `/metax/` and that is the only place the misspelling may survive.

**The live site is a demo.** This changes the authority of everything I previously called "frozen." The anchor set I told agents was immutable is not immutable; it was inventory of a prototype. Live copy, live counts, live series descriptions and the live `FLAGSHIPS` array are all placeholder-grade and must be **rewritten, not preserved**. What survives from the live build is the token layer, the component vocabulary and the chrome mechanics — the design system, not the content. Every generated page must carry the demo provenance strip described in §6.4 until the estate declares itself out of demo, and `/about/demo-notice/` must exist and say plainly what is real and what is scaffolding.

**Anchors become routes.** Every `a.html#b` in the previous spec becomes `/a/b/`. `a` is a **hub page** — a real page with its own thesis, not a table of contents — and `b` is a **full detailed page** carrying related-page links. Where a group heading previously existed only as a `<h6>` inside a mega-panel, it now resolves to a route too, which is what produces the third tier: `/method/rails/` is a hub, `/method/rails/falsifiability/` is a leaf.

**Every page carries ≥1200 words of substantive prose.** Not padding. §7 gives the eight-part recipe that reaches 1200 words honestly, and §7.4 names the six pages where 1200 words would require padding and states what to do instead. An agent that pads a page to hit a count has produced a worse artifact than an agent that reported the page as thin.

---

## 1. Routing law

**1.1 Shape.** Directory routes with a trailing slash, each backed by `index.html`. No `.html` in any published URL. Depth is capped at three segments plus the parametric series/course exception at §5.

```
/                                   root hub
/{pillar}/                          pillar hub          (9)
/{pillar}/{group}/                  group hub           (~66)
/{pillar}/{group}/{leaf}/           leaf page           (~290)
/toptech/s/{S##}-{slug}/            parametric series
/toptech/s/{S##}-{slug}/c{NN}/      parametric course
```

**1.2 Trailing slash is canonical.** `/toptech/start` 301s to `/toptech/start/`. `<link rel="canonical">` always carries the slash. Cloudflare Pages resolves directory indexes natively; add `trailingSlash: always` behaviour via `_redirects`.

**1.3 Asset paths become root-absolute.** This is the single most common way this migration breaks. `href="css/style.css"` works at depth 0 and fails at depth 1, 2 and 3. Every asset, script and internal link in every generated file must be **root-absolute**: `/css/style.css`, `/js/site.js`, `/img/…`, `/toptech/start/diagnostic/`. Relative paths are a build failure.

**1.4 `navKeyFor()` is rewritten** to read the first path segment rather than a filename:

```js
function navKeyFor() {
  var seg = location.pathname.replace(/^\/+/, "").split("/");
  if (seg[0] === "ar") seg.shift();                 // Arabic mirror
  var k = seg[0] || "home";
  var KEYS = ["toptech","method","ascent","metax","academies",
              "credentials","library","license","about"];
  return KEYS.indexOf(k) > -1 ? k : "home";
}
```

**1.5 Legacy `_redirects`.** Every flat demo URL and every query route maps to its new home, 301, one line each:

```
/index.html                          /                                  301
/toptech.html                        /toptech/                          301
/curriculum.html                     /toptech/catalog/                  301
/start-here.html                     /toptech/start/diagnostic/         301
/macrolifetach.html                  /metax/                            301
/macrolifetech.html                  /metax/                            301
/bcia.html                           /metax/bcia/                       301
/bcia-status.html                    /metax/bcia/status/                301
/community.html                      /academies/                        301
/academies.html                      /academies/how-it-works/           301
/credentials.html                    /credentials/                      301
/verify.html                         /credentials/verify/               301
/library.html                        /library/                          301
/lexicon.html                        /library/lexicon/                  301
/news.html                           /library/news/                     301
/news.html?cat=:c                    /library/news/:c/                  301
/detail.html                         /toptech/catalog/series/           301
/article.html                        /library/news/                     301
/about.html                          /about/                            301
/contact.html                        /about/contact/                    301
/privacy.html                        /about/privacy/                    301
/terms.html                          /about/terms/                      301
```

**1.6 DEF‑2026‑042 is closed by this change.** The query-parameter detail route that was invisible without JavaScript no longer exists; `/toptech/s/{S##}-{slug}/` is a real pre-rendered file. Agents must move DEF‑2026‑042 to `resolved` in `status.json` with the resolution note "resolved structurally by MX‑NAV‑SPEC v2026.10.1, directory routing." DEF‑2026‑041 (Pages file ceiling) stays open and its arithmetic is restated at §5.4.

**1.7 Arabic mirror.** Every route has an `/ar/` twin at the identical path. `<html lang="ar" dir="rtl">`, `hreflang` pair on both, status badges never mirrored, numerals Western Arabic, gradients unchanged. The Arabic page is a translation of equal editorial standing and no superior authority; a divergence is a defect filed at `/library/record/corrections-log/`.

---

## 2. Nav geometry

Nine top-level items do not fit at 1000px, and they do not fit at 1120px either. Rather than bury a pillar, the nav becomes fluid:

```css
/* Nav scale — replaces the fixed 0.9rem / 22px gap */
.nav-links.mega { gap: clamp(10px, 1.15vw, 22px); }
.mm-top { font-size: clamp(0.78rem, 0.72vw + 0.4rem, 0.9rem); }

/* Mobile → desktop switch moves 1000px → 1180px */
@media (min-width: 1180px) {
  .nav-links.mega { display: flex; }
  .nav-toggle, .nav-cta { display: none !important; }
}
/* Utility bar collapses to glyph-only between 1180 and 1280 */
@media (max-width: 1279px) { .nav-utility .util-link .ul-word { display: none; } }
```

The `matchMedia("(hover: hover)")` guard in `wireMobileToggle()` and the `#mobileMenu` `max-height: calc(100dvh - 66px)` both stay; only the numeric breakpoint moves. Utility links gain a `<span class="ul-word">` wrapper and an `aria-label` so the glyph-only state stays accessible.

---

## 3. The canonical MENU array

This replaces `MENU` and `UTILITY` in `/js/site.js`. Group headings now carry a `hub` field and render as links. Do not reorder, rename, re-badge or extend without a changelog line at `/license/changelog/`.

```js
/* MX-NAV-SPEC v2026.10.1 — canonical navigation truth.
   9 pillars · 66 group hubs · leaf pages listed per group.
   Badges: live | planned | research-preview | gated  (no fifth value) */
var MENU = [
  {
    key: "toptech", label: "TopTech", ar: "توب‑تِك", href: "/toptech/",
    blurb: "Master the machine-mediated internet, learn where it fails, and prepare for what replaces it.",
    groups: [
      { heading: "Start & Placement", hub: "/toptech/start/", links: [
        { t: "Placement Diagnostic", u: "/toptech/start/diagnostic/" },
        { t: "How to Study Here", u: "/toptech/start/how-to-study/" },
        { t: "Prerequisites Map", u: "/toptech/start/prerequisites/" },
        { t: "Time Budget & Load", u: "/toptech/start/time-budget/" },
        { t: "What TopTech Is Not", u: "/toptech/start/what-this-is-not/" }
      ]},
      { heading: "The Catalog", hub: "/toptech/catalog/", badge: "live", links: [
        { t: "All Series (S01–S47)", u: "/toptech/catalog/series/" },
        { t: "All Courses", u: "/toptech/catalog/courses/" },
        { t: "Curriculum Map", u: "/toptech/catalog/map/" },
        { t: "Decay State by Series", u: "/toptech/catalog/decay/" },
        { t: "Catalog Changelog", u: "/toptech/catalog/changelog/" }
      ]},
      { heading: "A · Operator Craft", hub: "/toptech/branch-a/", badge: "live", links: [
        { t: "F1 · SEO Mastery Rebuilt", u: "/toptech/branch-a/flagship-search/" },
        { t: "F2 · Social & Attention Rebuilt", u: "/toptech/branch-a/flagship-attention/" },
        { t: "The Next-Level Stack (S01–S21)", u: "/toptech/branch-a/stack/" },
        { t: "The Nine Operator Surfaces", u: "/toptech/branch-a/surfaces/" },
        { t: "Operator Archetypes", u: "/toptech/branch-a/archetypes/" }
      ]},
      { heading: "B · Engineering & IT", hub: "/toptech/branch-b/", badge: "planned", links: [
        { t: "Design & Interface (S22)", u: "/toptech/branch-b/design/" },
        { t: "Development (S23)", u: "/toptech/branch-b/development/" },
        { t: "Data & AI (S24)", u: "/toptech/branch-b/data-ai/" },
        { t: "Infrastructure", u: "/toptech/branch-b/infrastructure/" },
        { t: "Security", u: "/toptech/branch-b/security/" },
        { t: "Networks", u: "/toptech/branch-b/networks/" },
        { t: "The Placement Gate", u: "/toptech/branch-b/gate/" }
      ]},
      { heading: "C · Institution Building", hub: "/toptech/branch-c/", badge: "planned", links: [
        { t: "Academy Builder (S35)", u: "/toptech/branch-c/academy-builder/" },
        { t: "Curriculum & Assessment (S36)", u: "/toptech/branch-c/curriculum-design/" },
        { t: "Governance & Stewardship (S37)", u: "/toptech/branch-c/governance/" }
      ]},
      { heading: "D · E · Gateways", hub: "/toptech/gateways/", badge: "gated", links: [
        { t: "Branch D → Ascent", u: "/toptech/gateways/ascent/" },
        { t: "Branch E → Meta-X", u: "/toptech/gateways/metax/" },
        { t: "Gate Conditions", u: "/toptech/gateways/conditions/" }
      ]}
    ]
  },
  {
    key: "method", label: "Method", ar: "المنهج", href: "/method/",
    blurb: "The academic apparatus: how a lesson is shaped, how a claim is tested, how a claim expires.",
    groups: [
      { heading: "Lesson Architecture", hub: "/method/architecture/", badge: "live", links: [
        { t: "The Cognitive Arc (six beats)", u: "/method/architecture/arc/" },
        { t: "The 12 × 6 Cadence", u: "/method/architecture/cadence/" },
        { t: "The Limits Module", u: "/method/architecture/limits/" },
        { t: "The Bridge Lesson", u: "/method/architecture/bridge/" },
        { t: "The 90-Day Capstone Contract", u: "/method/architecture/capstone/" }
      ]},
      { heading: "The Six Rails", hub: "/method/rails/", badge: "live", links: [
        { t: "Compliance Rail", u: "/method/rails/compliance/" },
        { t: "Accessibility Rail", u: "/method/rails/accessibility/" },
        { t: "Decay-Awareness Rail", u: "/method/rails/decay/" },
        { t: "Falsifiability Rail", u: "/method/rails/falsifiability/" },
        { t: "Kill-Criteria Rail", u: "/method/rails/kill-criteria/" },
        { t: "Unit-Economics Rail", u: "/method/rails/unit-economics/" }
      ]},
      { heading: "Epistemics", hub: "/method/epistemics/", badge: "live", links: [
        { t: "Evidence Classes (E0–E4)", u: "/method/epistemics/evidence-classes/" },
        { t: "The Decay Standard", u: "/method/epistemics/decay-standard/" },
        { t: "Falsifier Grammar", u: "/method/epistemics/falsifier-grammar/" },
        { t: "Counterproductivity Test", u: "/method/epistemics/counterproductivity/" },
        { t: "Banned Claim Register", u: "/method/epistemics/banned-claims/" },
        { t: "Open Problems Register", u: "/method/epistemics/open-problems/" }
      ]},
      { heading: "Assessment", hub: "/method/assessment/", badge: "planned", links: [
        { t: "Scenario Assessment (deterministic)", u: "/method/assessment/scenario/" },
        { t: "The Frozen Rubric (D1–D5)", u: "/method/assessment/rubric/" },
        { t: "Mastery Viva", u: "/method/assessment/viva/" },
        { t: "Adversarial Review Exchange", u: "/method/assessment/review/" },
        { t: "Artefact Register", u: "/method/assessment/artefacts/" },
        { t: "AI Disclosure Standard", u: "/method/assessment/ai-disclosure/" }
      ]},
      { heading: "The Twelve Instruments", hub: "/method/instruments/", badge: "planned", links: [
        { t: "1 · Pre-Registration Desk", u: "/method/instruments/prereg/" },
        { t: "2 · Adversarial Review", u: "/method/instruments/review/" },
        { t: "3 · Decay Watch", u: "/method/instruments/decay-watch/" },
        { t: "4 · Time-Boxed Cohorts", u: "/method/instruments/cohorts/" },
        { t: "5 · Artefact Register", u: "/method/instruments/artefacts/" },
        { t: "6 · Scenario Engine", u: "/method/instruments/scenario-engine/" },
        { t: "7 · Mastery Viva", u: "/method/instruments/viva/" },
        { t: "8 · Academy Exchange", u: "/method/instruments/exchange/" },
        { t: "9 · Bridge Passport", u: "/method/instruments/passport/" },
        { t: "10 · Correction Bounty", u: "/method/instruments/bounty/" },
        { t: "11 · Citation Ledger", u: "/method/instruments/citations/" },
        { t: "12 · Determination Queue", u: "/method/instruments/determinations/" }
      ]},
      { heading: "Notation & Research Ethics", hub: "/method/notation/", badge: "live", links: [
        { t: "Symbol Grammar", u: "/method/notation/symbols/" },
        { t: "Identifier Grammar", u: "/method/notation/identifiers/" },
        { t: "Versioning Policy", u: "/method/notation/versioning/" },
        { t: "Research Ethics & Red Lines", u: "/method/notation/research-ethics/" },
        { t: "Human-Subject Exclusion", u: "/method/notation/human-subject-exclusion/" }
      ]}
    ]
  },
  {
    key: "ascent", label: "Ascent", ar: "الصعود", href: "/ascent/", badge: "research-preview",
    blurb: "The ten-rung ladder — from the computing substrate to the edge of what silicon can do.",
    groups: [
      { heading: "The Ten Rungs", hub: "/ascent/rungs/", badge: "research-preview", links: [
        { t: "S38 · Computing Substrate Literacy", u: "/ascent/rungs/s38-substrate/" },
        { t: "S39 · Paradigms & Their Limits", u: "/ascent/rungs/s39-paradigms/" },
        { t: "S40 · Mathematical Foundations", u: "/ascent/rungs/s40-mathematics/" },
        { t: "S41 · The End of Binary", u: "/ascent/rungs/s41-end-of-binary/" },
        { t: "S42 · Multi-Valued & Fuzzy", u: "/ascent/rungs/s42-multivalued/" },
        { t: "S43 · From Electron to Cell", u: "/ascent/rungs/s43-electron-to-cell/" },
        { t: "S44 · Biological Computation", u: "/ascent/rungs/s44-biological/" },
        { t: "S45 · Embodied Computation", u: "/ascent/rungs/s45-embodied/" },
        { t: "S46 · Network Science", u: "/ascent/rungs/s46-networks/" },
        { t: "S47 · Collective Dynamics", u: "/ascent/rungs/s47-collective/" }
      ]},
      { heading: "Reading the Ladder", hub: "/ascent/reading/", badge: "research-preview", links: [
        { t: "Blue Path — Foundations", u: "/ascent/reading/blue/" },
        { t: "Green Path — Bridge to Life", u: "/ascent/reading/green/" },
        { t: "Gold Path — Full Ascent", u: "/ascent/reading/gold/" },
        { t: "Source Books (Arabic)", u: "/ascent/reading/sources/" },
        { t: "Citation-Only Rule", u: "/ascent/reading/citation-rule/" }
      ]},
      { heading: "Boundaries", hub: "/ascent/boundaries/", badge: "research-preview", links: [
        { t: "The Limits of Silicon", u: "/ascent/boundaries/limits-of-silicon/" },
        { t: "What Ascent Is Not", u: "/ascent/boundaries/exclusions/" },
        { t: "Banned Claims", u: "/ascent/boundaries/banned-claims/" },
        { t: "Bridge Passport & Gating", u: "/ascent/boundaries/passport/" },
        { t: "Rung Status Table", u: "/ascent/boundaries/status/" }
      ]}
    ]
  },
  {
    key: "metax", label: "Meta-X", ar: "ميتا‑إكس", href: "/metax/", badge: "research-preview",
    blurb: "MacroLifeTech — the civilizational research umbrella. Nine programs, one of them BCIA.",
    groups: [
      { heading: "The Umbrella", hub: "/metax/umbrella/", badge: "research-preview", links: [
        { t: "What MacroLifeTech Is", u: "/metax/umbrella/what-it-is/" },
        { t: "The Research Charter", u: "/metax/umbrella/charter/" },
        { t: "What This Is Not", u: "/metax/umbrella/exclusions/" },
        { t: "Method & Evidence Policy", u: "/metax/umbrella/method/" },
        { t: "Publication & Preprint Policy", u: "/metax/umbrella/publication/" }
      ]},
      { heading: "The Nine Programs", hub: "/metax/programs/", badge: "research-preview", links: [
        { t: "Agora — Collective Decision", u: "/metax/programs/agora/" },
        { t: "Ma'nā — Meaning & Semantics", u: "/metax/programs/mana/" },
        { t: "Metabolism — Energy & Flow", u: "/metax/programs/metabolism/" },
        { t: "Soma — Embodiment", u: "/metax/programs/soma/" },
        { t: "Paideia — Formation", u: "/metax/programs/paideia/" },
        { t: "Athar — Trace & Record", u: "/metax/programs/athar/" },
        { t: "Āfāq — Horizons", u: "/metax/programs/afaq/" },
        { t: "Mīzān — Measure & Balance", u: "/metax/programs/mizan/" },
        { t: "BCIA — Bio-Computational", u: "/metax/programs/bcia/" }
      ]},
      { heading: "BCIA", hub: "/metax/bcia/", badge: "gated", links: [
        { t: "What BCIA Is & Is Not", u: "/metax/bcia/what-it-is/" },
        { t: "The Eight Series", u: "/metax/bcia/series/" },
        { t: "Volume Roadmap", u: "/metax/bcia/roadmap/" },
        { t: "Document Zero — Seven Bases", u: "/metax/bcia/document-zero/" },
        { t: "The Charter & Human-Cell Exclusion", u: "/metax/bcia/charter/" },
        { t: "Governance — Cloister / Atrium", u: "/metax/bcia/governance/" },
        { t: "Notation & Versioning", u: "/metax/bcia/notation/" },
        { t: "Bibliography", u: "/metax/bcia/bibliography/" },
        { t: "Contribution Guidelines", u: "/metax/bcia/contribution/" },
        { t: "The Gateway (locked)", u: "/metax/bcia/gateway/" }
      ]},
      { heading: "The Honesty Layer", hub: "/metax/bcia/status/", badge: "gated", links: [
        { t: "Status & Remediation", u: "/metax/bcia/status/remediation/" },
        { t: "The Critical Audit", u: "/metax/bcia/status/audit/" },
        { t: "Publication Readiness Protocol", u: "/metax/bcia/status/protocol/" },
        { t: "Defect Register", u: "/metax/bcia/status/defects/" },
        { t: "Scope Limits & Open Problems", u: "/metax/bcia/status/open-problems/" }
      ]}
    ]
  },
  {
    key: "academies", label: "Academies", ar: "الأكاديميات", href: "/academies/",
    blurb: "Found and teach your own academy — from Applicant to Institution, on a public record.",
    groups: [
      { heading: "How It Works", hub: "/academies/how-it-works/", badge: "live", links: [
        { t: "The Four Principles", u: "/academies/how-it-works/principles/" },
        { t: "The Founding Path", u: "/academies/how-it-works/path/" },
        { t: "Curator Eligibility", u: "/academies/how-it-works/eligibility/" },
        { t: "The Sandbox", u: "/academies/how-it-works/sandbox/" },
        { t: "Apply", u: "/academies/how-it-works/apply/" },
        { t: "The Honest Cost", u: "/academies/how-it-works/cost/" }
      ]},
      { heading: "The Five Levels", hub: "/academies/levels/", badge: "live", links: [
        { t: "L1 · Applicant", u: "/academies/levels/l1-applicant/" },
        { t: "L2 · Sandbox", u: "/academies/levels/l2-sandbox/" },
        { t: "L3 · Provisional", u: "/academies/levels/l3-provisional/" },
        { t: "L4 · Chartered", u: "/academies/levels/l4-chartered/" },
        { t: "L5 · Institution", u: "/academies/levels/l5-institution/" }
      ]},
      { heading: "The Eleven Requirements", hub: "/academies/requirements/", badge: "live", links: [
        { t: "R1 · Curator Eligibility", u: "/academies/requirements/r1-curator/" },
        { t: "R2 · Thesis Scope", u: "/academies/requirements/r2-thesis/" },
        { t: "R3 · Curriculum Minimum", u: "/academies/requirements/r3-curriculum/" },
        { t: "R4 · Frozen Rubric", u: "/academies/requirements/r4-rubric/" },
        { t: "R5 · Governance Charter", u: "/academies/requirements/r5-charter/" },
        { t: "R6 · Technical Spec", u: "/academies/requirements/r6-technical/" },
        { t: "R7 · Bilingual Policy", u: "/academies/requirements/r7-bilingual/" },
        { t: "R8 · Legal Terms", u: "/academies/requirements/r8-legal/" },
        { t: "R9 · Red-Line Content Bans", u: "/academies/requirements/r9-red-lines/" },
        { t: "R10 · Annual Audit", u: "/academies/requirements/r10-audit/" },
        { t: "R11 · Part H Statement", u: "/academies/requirements/r11-part-h/" }
      ]},
      { heading: "Operating an Academy", hub: "/academies/operating/", badge: "live", links: [
        { t: "Technical Guide & academy.json", u: "/academies/operating/technical/" },
        { t: "Your Subdomain", u: "/academies/operating/subdomain/" },
        { t: "Design Constraints", u: "/academies/operating/design/" },
        { t: "Moderation & Enforcement", u: "/academies/operating/moderation/" },
        { t: "Academy Exchange", u: "/academies/operating/exchange/" },
        { t: "Revocation & Wind-Down", u: "/academies/operating/revocation/" }
      ]},
      { heading: "The Public Record", hub: "/academies/record/", badge: "live", links: [
        { t: "Directory of Academies", u: "/academies/record/directory/" },
        { t: "Audit Reports", u: "/academies/record/audits/" },
        { t: "Charter Register", u: "/academies/record/charters/" },
        { t: "Correction Bounty Log", u: "/academies/record/bounty/" }
      ]}
    ]
  },
  {
    key: "credentials", label: "Credentials", ar: "الشهادات", href: "/credentials/",
    blurb: "The mastery ladder, the evidence it demands, and the public verification that makes it checkable.",
    groups: [
      { heading: "The Ladder", hub: "/credentials/ladder/", badge: "live", links: [
        { t: "Completion Marker (not a credential)", u: "/credentials/ladder/completion-marker/" },
        { t: "Series Practitioner", u: "/credentials/ladder/practitioner/" },
        { t: "Professional Operator", u: "/credentials/ladder/professional/" },
        { t: "Master-Fellow", u: "/credentials/ladder/master-fellow/" },
        { t: "MetaX Contributor", u: "/credentials/ladder/contributor/" }
      ]},
      { heading: "Evidence & Proof", hub: "/credentials/evidence/", badge: "live", links: [
        { t: "The Proof Ladder (P0–P3)", u: "/credentials/evidence/proof-ladder/" },
        { t: "Submission Pack", u: "/credentials/evidence/submission/" },
        { t: "Dossier & Templates", u: "/credentials/evidence/templates/" },
        { t: "Artefact Requirements", u: "/credentials/evidence/artefacts/" },
        { t: "AI Disclosure", u: "/credentials/evidence/ai-disclosure/" }
      ]},
      { heading: "Review", hub: "/credentials/review/", badge: "live", links: [
        { t: "Reviewer Handbook", u: "/credentials/review/handbook/" },
        { t: "The Frozen Rubric (D1–D5)", u: "/credentials/review/rubric/" },
        { t: "Conflicts of Interest", u: "/credentials/review/conflicts/" },
        { t: "Reviewer Statistics", u: "/credentials/review/statistics/" },
        { t: "Appeals (MX-016)", u: "/credentials/review/appeals/" }
      ]},
      { heading: "Lifecycle", hub: "/credentials/lifecycle/", badge: "live", links: [
        { t: "Decay & Renewal", u: "/credentials/lifecycle/renewal/" },
        { t: "Revocation Grounds", u: "/credentials/lifecycle/revocation/" },
        { t: "Integrity Report", u: "/credentials/lifecycle/integrity/" },
        { t: "Registry Spec (credentials.json)", u: "/credentials/lifecycle/registry-spec/" }
      ]},
      { heading: "Verification", hub: "/credentials/verify/", badge: "live", links: [
        { t: "Verify a Credential", u: "/credentials/verify/lookup/" },
        { t: "How Verification Works", u: "/credentials/verify/how-it-works/" },
        { t: "What It Does Not Prove", u: "/credentials/verify/limits/" },
        { t: "Revocation List", u: "/credentials/verify/revocations/" }
      ]}
    ]
  },
  {
    key: "library", label: "Library", ar: "المكتبة", href: "/library/",
    blurb: "The stack, the standards, the bilingual lexicon, the open data, and the corrections record.",
    groups: [
      { heading: "The Stack", hub: "/library/stack/", badge: "live", links: [
        { t: "Layer Model of the Estate", u: "/library/stack/layers/" },
        { t: "The Two-Plane Model", u: "/library/stack/two-plane/" },
        { t: "Data Tiers (T1–T4)", u: "/library/stack/data-tiers/" },
        { t: "Hosting & Topology", u: "/library/stack/topology/" }
      ]},
      { heading: "Standards", hub: "/library/standards/", badge: "live", links: [
        { t: "Publishing Style Guide", u: "/library/standards/style-guide/" },
        { t: "Symbol Standard", u: "/library/standards/symbols/" },
        { t: "Decay Standard", u: "/library/standards/decay/" },
        { t: "Falsifiability Standard", u: "/library/standards/falsifiability/" },
        { t: "Accessibility Standard", u: "/library/standards/accessibility/" },
        { t: "Bilingual Standard", u: "/library/standards/bilingual/" },
        { t: "Master Generation Prompt", u: "/library/standards/generation-prompt/" }
      ]},
      { heading: "Lexicon", hub: "/library/lexicon/", badge: "live", links: [
        { t: "All Entries", u: "/library/lexicon/entries/" },
        { t: "Root Index (Arabic)", u: "/library/lexicon/roots/" },
        { t: "Contested Terms", u: "/library/lexicon/contested/" },
        { t: "Lexicon Method", u: "/library/lexicon/method/" }
      ]},
      { heading: "The Record", hub: "/library/record/", badge: "live", links: [
        { t: "MX Instruments (MX-000–MX-022)", u: "/library/record/mx-instruments/" },
        { t: "AG Instruments (AG-000–AG-009)", u: "/library/record/ag-instruments/" },
        { t: "Corrections Log", u: "/library/record/corrections-log/" },
        { t: "Verification Log", u: "/library/record/verification-log/" },
        { t: "Errata", u: "/library/record/errata/" }
      ]},
      { heading: "Sources & Data", hub: "/library/sources/", badge: "live", links: [
        { t: "Estate Bibliography", u: "/library/sources/bibliography/" },
        { t: "Citation Ledger", u: "/library/sources/citations/" },
        { t: "Open Data (JSON)", u: "/library/sources/downloads/" },
        { t: "Schemas", u: "/library/sources/schemas/" }
      ]},
      { heading: "News", hub: "/library/news/", badge: "live", links: [
        { t: "Announcements", u: "/library/news/announcements/" },
        { t: "Curriculum Releases", u: "/library/news/curriculum/" },
        { t: "Research Briefs", u: "/library/news/research/" },
        { t: "Operator Field Notes", u: "/library/news/field-notes/" },
        { t: "Archive", u: "/library/news/archive/" }
      ]}
    ]
  },
  {
    key: "license", label: "License", ar: "الرخصة", href: "/license/", badge: "live",
    blurb: "The Maher License 2.3 and the register of twenty-five structural harms it makes operative.",
    groups: [
      { heading: "The Instrument", hub: "/license/ml-2-3/", badge: "live", links: [
        { t: "Part 0 · Preamble & Standing", u: "/license/ml-2-3/part-0-preamble/" },
        { t: "Part A · Definitions", u: "/license/ml-2-3/part-a-definitions/" },
        { t: "Part B · Grant", u: "/license/ml-2-3/part-b-grant/" },
        { t: "Part C · Ethical Conditions", u: "/license/ml-2-3/part-c-conditions/" },
        { t: "Part D · Notices & Disclosure", u: "/license/ml-2-3/part-d-notices/" },
        { t: "Part E · Governance", u: "/license/ml-2-3/part-e-governance/" },
        { t: "Part F · Breach & Termination", u: "/license/ml-2-3/part-f-breach/" },
        { t: "Part G · Interpretation", u: "/license/ml-2-3/part-g-interpretation/" },
        { t: "Part H · Structural Harms", u: "/license/ml-2-3/part-h-harms/" },
        { t: "Schedules 1–5", u: "/license/ml-2-3/schedules/" },
        { t: "Plain-Text Mirror", u: "/license/ml-2-3/ml-2-3.txt" }
      ]},
      { heading: "The Register", hub: "/license/harms/", badge: "live", links: [
        { t: "I · Cognitive (HX-01–03)", u: "/license/harms/stratum-i-cognitive/" },
        { t: "II · Relational (HX-04–06)", u: "/license/harms/stratum-ii-relational/" },
        { t: "III · Economic (HX-07–09, 13)", u: "/license/harms/stratum-iii-economic/" },
        { t: "IV · Material (HX-10–12, 14)", u: "/license/harms/stratum-iv-material/" },
        { t: "V · Reflexive (HX-15–19)", u: "/license/harms/stratum-v-reflexive/" },
        { t: "VI · Successor (HX-20–25)", u: "/license/harms/stratum-vi-successor/" },
        { t: "All Falsifiers", u: "/license/harms/falsifiers/" }
      ]},
      { heading: "Operative Machinery", hub: "/license/machinery/", badge: "live", links: [
        { t: "The Eight Absolutes (§H.3)", u: "/license/machinery/absolutes/" },
        { t: "Roles (§H.1-bis)", u: "/license/machinery/roles/" },
        { t: "The Scale Gate (§H.2-bis)", u: "/license/machinery/scale-gate/" },
        { t: "Conditions vs Covenants (§F.4)", u: "/license/machinery/breach/" },
        { t: "Cure & Reinstatement", u: "/license/machinery/cure/" },
        { t: "Riba — the Four Elements (§C.9)", u: "/license/machinery/riba/" }
      ]},
      { heading: "Compliance", hub: "/license/statement/", badge: "live", links: [
        { t: "Statement Form (Schedule 1)", u: "/license/statement/form/" },
        { t: "Statement Generator", u: "/license/statement/generator/" },
        { t: "MetaX's Own Statement", u: "/license/statement/ours/" },
        { t: "Worked Examples by Tier", u: "/license/statement/examples/" },
        { t: "Compatibility & SPDX", u: "/license/statement/compatibility/" }
      ]},
      { heading: "Falsification & History", hub: "/license/falsification/", badge: "live", links: [
        { t: "Objections & Responses", u: "/license/falsification/objections/" },
        { t: "Withdrawals & Narrowings", u: "/license/falsification/withdrawals/" },
        { t: "Defect Log (ML-D-nnn)", u: "/license/falsification/defects/" },
        { t: "Changelog 2.2 → 2.3", u: "/license/falsification/changelog/" },
        { t: "ML-2.2 (superseded)", u: "/license/falsification/ml-2-2/" },
        { t: "Open Questions (RAT-nn)", u: "/license/falsification/open-questions/" }
      ]}
    ]
  },
  {
    key: "about", label: "About", ar: "عن ميتا‑إكس", href: "/about/",
    blurb: "The universe, its shared DNA, the curator, the policies, and the honest state of the build.",
    groups: [
      { heading: "The Universe", hub: "/about/universe/", badge: "live", links: [
        { t: "About MetaX", u: "/about/universe/what-it-is/" },
        { t: "The Three Pillars", u: "/about/universe/pillars/" },
        { t: "The Shared DNA", u: "/about/universe/dna/" },
        { t: "The Curator — Maher", u: "/about/universe/curator/" },
        { t: "Demo Notice", u: "/about/universe/demo-notice/" }
      ]},
      { heading: "Principles & Policy", hub: "/about/policy/", badge: "live", links: [
        { t: "The Static Principle", u: "/about/policy/static-principle/" },
        { t: "AI Use Policy", u: "/about/policy/ai-policy/" },
        { t: "Governance & Roles", u: "/about/policy/governance/" },
        { t: "Accessibility Statement", u: "/about/policy/accessibility/" },
        { t: "Security Policy", u: "/about/policy/security/" },
        { t: "No-Image Regime", u: "/about/policy/no-images/" }
      ]},
      { heading: "State of the Build", hub: "/about/status/", badge: "live", links: [
        { t: "Capacity Meter", u: "/about/status/capacity/" },
        { t: "Defect Log", u: "/about/status/defects/" },
        { t: "Determination Queue", u: "/about/status/determinations/" },
        { t: "Migration Plan (VPS)", u: "/about/status/migration/" },
        { t: "Roadmap & Gate Conditions", u: "/about/status/roadmap/" }
      ]},
      { heading: "Access & Money", hub: "/about/access/", badge: "live", links: [
        { t: "Pricing & Payment", u: "/about/access/pricing/" },
        { t: "What Is Free", u: "/about/access/free/" },
        { t: "Sign-In & Identity", u: "/about/access/identity/" },
        { t: "Entitlements", u: "/about/access/entitlements/" },
        { t: "Refunds & Disputes", u: "/about/access/refunds/" }
      ]},
      { heading: "Legal & Contact", hub: "/about/legal/", badge: "live", links: [
        { t: "Contact", u: "/about/legal/contact/" },
        { t: "Press & Media", u: "/about/legal/press/" },
        { t: "Privacy", u: "/about/legal/privacy/" },
        { t: "Terms", u: "/about/legal/terms/" },
        { t: "Advertising Policy", u: "/about/legal/advertising/" },
        { t: "Cookies & Local Storage", u: "/about/legal/cookies/" },
        { t: "Intellectual Property", u: "/about/legal/ip/" },
        { t: "Sitemap", u: "/about/legal/sitemap/" }
      ]}
    ]
  }
];

var UTILITY = [
  { t: "Start Here", u: "/toptech/start/diagnostic/", cls: "util-start",  glyph: "⊢" },
  { t: "Verify",     u: "/credentials/verify/lookup/", cls: "util-verify", glyph: "◉" },
  { t: "Sign in",    u: "https://auth.metax.academy/authorize?client=web&redirect_uri=https%3A%2F%2Fmetax.academy%2F",
                     cls: "util-auth", glyph: "→", ext: true }
];
```

`buildMega()` must be amended so a group heading renders as an anchor:

```js
var head = f.hub
  ? '<h6><a class="mm-hub" href="' + f.hub + '">' + f.heading + '</a>' + badgeHtml(f.badge) + '</h6>'
  : '<h6>' + f.heading + badgeHtml(f.badge) + '</h6>';
```

`.mm-hub` styling: inherits `<h6>` type, gains `color: var(--cyan)` on hover and a 1px underline offset 3px. Utility links wrap their word in `<span class="ul-word">` and expose `glyph` in a sibling `<span aria-hidden="true">`.

---

## 4. Route census

| Pillar | Hub | Group hubs | Leaves | Subtotal |
|---|---|---|---|---|
| root | 1 | — | — | 1 |
| toptech | 1 | 6 | 29 | 36 |
| method | 1 | 6 | 39 | 46 |
| ascent | 1 | 3 | 20 | 24 |
| metax | 1 | 4 | 29 | 34 |
| academies | 1 | 5 | 32 | 38 |
| credentials | 1 | 5 | 22 | 28 |
| library | 1 | 6 | 29 | 36 |
| license | 1 | 5 | 34 | 40 |
| about | 1 | 5 | 29 | 35 |
| utility | — | — | 3 (`/search/`, `/404`, `/ar/`) | 3 |
| **Total EN** | **10** | **45** | **266** | **321** |

Plus the Arabic mirror (321) and the parametric set at §5. English prose obligation at 1200 words minimum is therefore **≈385,000 words**, and agents should be dispatched in pillar-sized batches with §7's recipe rather than asked to free-write. That number is worth stating out loud before work starts, because it is the real cost of "no missed details," and it is the reason §7.4 exists.

---

## 5. Parametric page families

**5.1 Series page** — `/toptech/s/{S##}-{slug}/`, one per series in `catalog.json` (47 planned). Required: eyebrow `SERIES · {S##}`, claim H1, one-sentence deck, status badge, branch, tier, hours, decay class, thesis (150 w), why-now (200 w), the twelve course rows with the six-beat arc per course, the Limits module summary, the Bridge lesson statement, the capstone contract, the pre-registered hypothesis and null, the kill criterion, prerequisites, what this series will not teach, evidence classes used, and the related-page block. Word floor 1400.

**5.2 Course page** — `/toptech/s/{S##}-{slug}/c{NN}/`, generated **only for series at `live`**. Six lesson beats as sections (What, Why, How, Lab, Artifact, Scenario Assessment), each 180–260 words, plus artefact spec and rubric mapping. Word floor 1200. For `planned` and `research-preview` series, courses remain fragments on the series page and no route is emitted — emitting a 1200-word page for an unwritten course is HX‑15 in miniature.

**5.3 Other parametric families.** Harm page `/license/harms/hx-{nn}-{slug}/` — 25 routes, eight-part form (claim, reply, named critics, evidence, ethical mapping, falsifier, obligation, in-this-estate), word floor 1400. Rung page `/ascent/rungs/{s##}-{slug}/` — 10 routes. Program page `/metax/programs/{slug}/` — 9 routes. Lexicon entry `/library/lexicon/entries/{root}-{slug}/` — count from `lexicon.json`, word floor 600 (the one sanctioned exception; a lexicon entry that runs to 1200 words is an essay, not an entry). Instrument page `/method/instruments/{slug}/` — 12 routes. Academy profile `/academies/record/directory/{slug}/` — from `academy.json`. News article `/library/news/{cat}/{slug}/`.

**5.4 DEF‑2026‑041 restated.** File ceiling on the Cloudflare Pages free tier is 20,000. Current plan: 321 EN + 321 AR menu routes, plus 47 series ×2, plus ~250 live course routes ×2, plus 25 harms ×2, plus lexicon and news — call it **≈2,000 files including assets**. Headroom is roughly 18,000 files, which at ~40 files per new series is about **450 further series**. The ceiling is no longer the binding constraint; Workers requests at 100k/day remain the first tripwire. Update `status.json` accordingly and keep the 80% capacity meter as specified.

---

## 6. The page contract every agent must implement

**6.1 Skeleton.** Unchanged from MX‑SITE‑DESIGN §3 with three additions — `.mx-pagestamp`, `.mx-exitpair`, `.mx-related` — and root-absolute paths:

```html
<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#05060f">
  <title>{Page Title} — {Pillar} · MetaX.Academy</title>
  <meta name="description" content="{150–160 chars, declarative, no marketing verbs}">
  <link rel="canonical" href="https://metax.academy{/route/}">
  <link rel="alternate" hreflang="en" href="https://metax.academy{/route/}">
  <link rel="alternate" hreflang="ar" href="https://metax.academy/ar{/route/}">
  <link rel="stylesheet" href="/css/style.css">
  <script type="application/ld+json">{ "@type": "{Article|Course|WebPage}", … }</script>
</head>
<body class="page-fade">
  <div class="cosmos" aria-hidden="true"></div>
  <div class="grid-veil" aria-hidden="true"></div>
  <div id="site-header"></div>
  <main>
    <section class="hero wrap">
      <span class="eyebrow">✦ {PILLAR} · {GROUP}</span>
      <h1>{claim, not a label}</h1>
      <p class="lead">{one sentence, ≤32 words, states what the reader will be able to do or check}</p>
      <div class="mx-pagestamp">{status badge} · {evidence class} · {version} · reviewed {date}</div>
    </section>
    <div class="marquee" aria-hidden="true">…</div>
    <!-- 6–9 .reveal sections, see §7 -->
    <section class="wrap reveal"><nav class="mx-related">…</nav></section>
    <section class="wrap reveal"><div class="cta-band mx-exitpair">…</div></section>
  </main>
  <div id="site-footer"></div>
  <script>window.SITE_PAGE = { ver:"{PILLAR} · v2026.10", cta:{label:"…", href:"…"} };</script>
  <script src="/js/data.js"></script><script src="/js/components.js"></script>
  <script src="/js/skeleton.js"></script><script src="/js/site.js"></script>
  <script src="/js/page.js"></script>
</body></html>
```

**6.2 `.mx-related` is mandatory and structured.** Every leaf page ends with exactly four link groups: **Up** (its group hub and pillar hub), **Beside** (three to five sibling leaves in the same group), **Depends on** (prerequisites or upstream standards, cross-pillar), and **Governs / governed by** (the ML‑2.3 duty or Method standard that constrains this page). Rendered as `.rails` 2-up on desktop. A leaf with fewer than eight outbound internal links is a build failure — this is what makes 321 pages a lattice rather than a pile.

**6.3 `.mx-exitpair`** closes every page with exactly two actions: one that goes deeper (a leaf or parametric page) and one that goes sideways (another pillar). No third action, no newsletter capture, no urgency copy.

**6.4 Demo provenance strip.** Until the estate leaves demo, every page renders directly beneath the header:

```html
<div class="mx-demo" role="note">
  <strong>Demo build.</strong> This estate is under construction. Counts, catalogues and
  statuses render from dated data files; prose marked <em>scaffold</em> has not been reviewed.
  <a href="/about/universe/demo-notice/">What is real and what is not →</a>
</div>
```

Styling: `--panel`, 1px `--line`, `--gold` left rule 3px, 0.85rem, no animation, dismissible only for the session via `sessionStorage` and never hidden on `/license/`, `/about/status/` or `/metax/bcia/`.

**6.5 New CSS to add.** The `prefers-reduced-motion` block from MX‑SITE‑DESIGN §7 (still unshipped, still launch-blocking), the 1180px nav breakpoint, `.mm-hub`, `.mx-pagestamp`, `.mx-exitpair`, `.mx-related`, `.mx-demo`, `.ul-word`, plus `.nav-toggle{min-height:44px}` and `.btn{padding:15px 26px}` for the touch-target floor.

---

## 7. The 1200-word contract

**7.1 The recipe.** Eight sections, each a `.reveal` block with an `<h2 class="section-title">` carrying one `.gradient-text` span. Word bands are targets, not caps.

| # | Section | Words | What it must contain |
|---|---|---|---|
| 1 | Position | 120–180 | Where this sits in the estate and what question it answers. Names the parent hub in prose. |
| 2 | Definition | 150–220 | The term or object defined operatively — what would count as an instance, what would not. |
| 3 | Mechanism | 200–300 | How it works, in causal order. The academic core of the page. |
| 4 | Worked instance | 180–260 | One concrete case carried end to end. Named, dated, specific. |
| 5 | Failure modes | 150–220 | How it goes wrong in practice, with the signature by which you would notice. |
| 6 | Limits | 120–180 | What this page does not cover and cannot decide. Maps to a limit class: epistemic, technical, ethical, economic. |
| 7 | Falsifier | 80–140 | The observation that would show this page's claim to be wrong. One sentence minimum, stated as a test. |
| 8 | Obligation | 100–160 | What follows for the reader — the duty, the artefact, or the next gate. Cites the ML‑2.3 §, MX instrument or Method standard by identifier. |

Floor is 1200; hub pages run 1400–1800 because they carry an additional **Map** section describing every child page in two to three sentences each.

**7.2 Style, restated as rules an agent can fail.** Declarative sentences. Second person for learners, third person for governance. No exclamation marks. No marketing verbs — no *unlock, supercharge, revolutionise, empower, seamless, cutting-edge, game-changing*. **Prose and paragraphs, not bullet lists** — lists are permitted only for genuine enumerations such as the eleven requirements or the eight absolutes, and then each item runs two sentences or more. No statistic without a date or a `data-count-src` attribute pointing at a JSON path. No status without a gate condition and a review date. No claim without either a citation or an explicit marking as the estate's own position.

**7.3 Meta and macro registers.** Every page must operate at three altitudes, and an agent producing only the middle one has produced a manual rather than an academy page. The **micro** register is the mechanism and the worked instance. The **meta** register asks what kind of knowledge this is, how it decays, how it could be wrong, and who is answerable for it — this is where the evidence class, the falsifier and the decay interval belong. The **macro** register places the object in the civilisational frame: what it does to attention, to labour, to the record, to the successor. Sections 6 through 8 are the meta register; section 1 and at least one paragraph of section 5 carry the macro.

**7.4 The six pages where 1200 words would be padding.** `/about/legal/cookies/`, `/about/legal/sitemap/`, `/credentials/verify/revocations/`, `/library/sources/schemas/`, `/library/sources/downloads/`, and every lexicon entry. For these, write to natural length, add `<meta name="mx-thin" content="true">`, and file the page at `/about/status/defects/` under a single defect DEF‑2026‑043 "thin-by-nature pages exempt from the word floor," with a stated reason. That is the honest handling. Padding a cookie policy to 1200 words to satisfy a spec is exactly the behaviour HX‑15 describes, and the estate cannot publish a register of that harm while committing it on thirty pages.

---

## 8. Footer, search, off-menu

**8.1 Footer,** four columns above 800px, not a copy of the mega-menu.
Pillars: TopTech · Method · Ascent · Meta‑X · Academies · Credentials.
Explore: Placement Diagnostic · Full Catalog · Verify a Credential · Lexicon · News · Search.
Governance: ML‑2.3 · The 25 Harms · Part H Statement · Estate Status · Defect Log · Accessibility.
Estate: About · Demo Notice · Pricing · Contact · Privacy · Terms · Sitemap.
Bottom: `© {year} MetaX.Academy · Curated by Maher`, version stamp, `.glyphs` rendering `✦ ⬡ ◉ ⊢ →`.

**8.2 Search.** `SEARCH_INDEX` becomes generated, not hand-written: at build time emit one entry per route from the page's H1, deck and section titles into `/data/search-index.json`, and have `/js/site.js` fetch it lazily on first search-modal open. `/search/` is a real page listing every route as plain links grouped by pillar, which is also the no-JS fallback and the human-readable sitemap.

**8.3 Off-menu, dynamic plane.** `auth.metax.academy/authorize` (social only, provider names as text word-marks, `--grad-vault`, no ambient motion), `pay.metax.academy/checkout/{sku}` (Binance Pay only, stated plainly, `--grad-ledger`, static), `me.metax.academy` (dashboard, borrows the viewed pillar's gradient, 48px identity bar, deterministic SVG glyph from `SHA-256(usr_id+salt)`, no streaks or leaderboards), `verify.metax.academy/c/{id}/` (flat static records), `hooks.metax.academy/v1/*` (form endpoints for the apply and appeal forms), `{slug}.metax.academy` (academy sites inheriting `/css/style.css` unmodified).

---

## 9. Per-page acceptance checklist

A page ships only when every line holds. Word count ≥1200 or `mx-thin` declared and filed. All eight recipe sections present with `<h2>`. `.mx-related` carries the four groups and ≥8 internal links, all resolving. `.mx-pagestamp` shows status, evidence class, version and review date. `.mx-exitpair` has exactly two actions. Demo strip present unless the estate has left demo. All paths root-absolute. Canonical and both `hreflang` tags correct. `window.SITE_PAGE` set before `components.js`; script order data → components → skeleton → site → page. Nine `.mm-top` items render and the correct one carries `.active`. Every `.mm-badge` has a text label and one of the four permitted values. No number without a date or `data-count-src`. `.img-slot` renders its shimmer placeholder with no image file present. Page is legible with CSS disabled and renders its main prose with JavaScript disabled. Contrast ≥4.5:1 against every gradient used. Touch targets ≥44px. The reduced-motion block suppresses all nine ambient animations. Spelling of **MacroLifeTech** correct in every instance.

---

## 10. Three decisions to make before dispatch

The word floor times the route count is **≈385,000 English words plus an Arabic mirror**, and at that volume the failure mode is not incompleteness but uniformity — 321 pages that all sound like the same eight-section template. The mitigation is to vary which section leads: a standards page can open on Definition, a harm page on the macro frame, a series page on the worked instance. Tell the agents that explicitly or they will all open on Position.

`/license/statement/ours/` still requires MetaX's own Part H Statement to mark **HX‑01 and HX‑04 unremedied** because of the AdSense and Adsterra slots on the content plane. Agents will generate that page without asking. Since the site is a demo, you have a clean window to remove the ad slots before the statement is ever published, which would let the disposition honestly read *remedied* — but if the ads stay, the honest text stays too, and it will sit two clicks from the licence you are asking people to adopt.

Lastly, `Method` as a ninth pillar is my addition, not yours. It exists because the arc, the rails, the epistemics and the twelve instruments were previously scattered as anchors across TopTech and Credentials, and the estate's academic credibility rests on that apparatus being a first-class destination rather than a footnote inside a marketing pillar. If you would rather keep eight, the fold is `Method` under `TopTech` as `/toptech/method/`, which costs one nav slot and buries the most defensible thing on the site — I would keep the nine and move the breakpoint.
