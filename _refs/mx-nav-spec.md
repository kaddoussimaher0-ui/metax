I re-fetched `js/site.js` and read the live `MENU` array, the `UTILITY` bar, `navKeyFor()`, and the frozen anchor set, so the spec below extends what exists rather than replacing it. Everything an agent needs to build a page is in one place, and the canonical `MENU` array at §3 is the single artifact to copy verbatim.

---

# MX‑NAV‑SPEC v2026.09.4 — Complete Navigation & Page Manifest

**Status:** canonical · **Supersedes:** the `MENU` array currently in `js/site.js` · **Consumers:** build agents generating `metax.academy` static output · **Prevailing text:** English, Arabic mirror at `/ar/`

## 1. How agents must use this document

Section 3 is the **only** source of navigation truth. Do not add, rename, reorder or re-badge a menu entry from any other document, including earlier conversation turns — several of those were wrong and are corrected here. Every entry in §3 resolves to a target that **must exist** in the output; a menu link to a missing file or a missing anchor is a build failure, not a warning.

Three global corrections from prior specs, restated because agents will otherwise reproduce the errors. The third pillar is **MacroLifeTach (Meta‑X)**; BCIA is one program inside it, not a pillar. The site is **flat `.html` files on a single origin** — there are no content subdomains, and `toptech.metax.academy/...` style routes do not exist. And the estate now carries a **License pillar** (`license.html`, `harms.html`, `statement.html`) which is new since the live build and which no existing page links to yet.

Top-level count rises from 7 to 8. Measured at `0.9rem` Space Grotesk, eight labels plus caret plus gaps plus the 240px brand plus the 260px utility bar needs ≈1120px, not 1000px. **The nav mobile/desktop breakpoint therefore moves from `1000px` to `1120px`** in `style.css` and in the `matchMedia` guard in `wireMobileToggle()`. Agents must change both or the nav will wrap at 1000–1120px.

## 2. Global conventions

**Badges.** Exactly four, unchanged: `live`, `planned`, `research-preview`, `gated`. Rendered by `badgeHtml()` as `.mm-badge.mmb-{value}`. No fifth value may be introduced; "under remediation" is `gated`, "beta" is `planned`. Every badge must be accompanied by its text label — never colour alone.

**Anchor grammar.** New page sections use `id="{slug}-sec"`. The following anchors are **frozen** because the live menu already links them and external links may exist: `index.html#pillars-sec`, `#dna-sec`; `toptech.html#flagships-sec`, `#stack`, `#archetypes-sec`, `#branches-sec`, `#arc-sec`, `#rails-sec`; `ascent.html#rungs`, `#limits`, `#exclusions`, `#paths`, `#status`; `bcia.html#what`, `#series`, `#roadmap`, `#doc-zero`, `#charter`, `#governance`; `bcia-status.html#audit`, `#protocol`, `#open`; `academies.html#principles`, `#path`, `#apply`, `#levels`, `#directory`, `#requirements`; `credentials.html#ladder`, `#learner`, `#reviewers`; `library.html#stack`, `#standards`, `#logs`; `lexicon.html#entries`; `about.html#curator`, `#static`, `#ai-policy`, `#governance`, `#a11y`; `privacy.html#ads`.

**No invented numbers.** Any count, hour figure, series total or defect count renders from `catalog.json`, `credentials.json`, `status.json` or `harms.json` at build time. An agent that hard-codes a statistic has introduced a defect under the estate's own no-undated-stats law. Where a count is unknown, emit the element with `data-count-src="catalog.json:path"` and no number.

**Every page** follows the skeleton in MX‑SITE‑DESIGN §3: `.cosmos` + `.grid-veil`, `#site-header`, `main` with `.hero` then `.reveal` sections then `.cta-band`, `#site-footer`, then the script block with `window.SITE_PAGE` set before `components.js`.

## 3. The canonical MENU array

Replace the `MENU` and `UTILITY` variables in `js/site.js` with this. `ar` fields feed the `/ar/` mirror; the EN build ignores them.

```js
/* MX-NAV-SPEC v2026.09.4 — canonical. Do not edit without a changelog line. */
var MENU = [
  {
    key: "toptech", label: "TopTech", ar: "توب‑تِك",
    href: "toptech.html",
    blurb: "Master the machine-mediated internet, learn its limits, and prepare for what lies beyond IT.",
    groups: [
      { heading: "Start", links: [
        { t: "Start Here — Diagnostic", u: "start-here.html" },
        { t: "TopTech Home", u: "toptech.html" },
        { t: "Full Catalog", u: "curriculum.html" },
        { t: "Changelog", u: "news.html?cat=curriculum" }
      ]},
      { heading: "A · Operator Craft", badge: "live", links: [
        { t: "The Flagships (F1, F2)", u: "toptech.html#flagships-sec" },
        { t: "The Next-Level Stack (S01–S21)", u: "toptech.html#stack" },
        { t: "Operator Archetypes", u: "toptech.html#archetypes-sec" }
      ]},
      { heading: "B · Engineering & IT", badge: "planned", links: [
        { t: "Design · Dev · Data/AI (S22–S24)", u: "toptech.html#branches-sec" },
        { t: "Infra · Security · Networks", u: "toptech.html#branches-sec" },
        { t: "Placement Gate", u: "toptech.html#branches-sec" }
      ]},
      { heading: "C · Institution Building", badge: "planned", links: [
        { t: "Academy Builder (S35)", u: "academies.html" },
        { t: "Curriculum & Assessment (S36)", u: "toptech.html#branches-sec" },
        { t: "Governance & Stewardship (S37)", u: "toptech.html#branches-sec" }
      ]},
      { heading: "Method", links: [
        { t: "The Cognitive Arc", u: "toptech.html#arc-sec" },
        { t: "Companion Rails", u: "toptech.html#rails-sec" },
        { t: "Limits & Bridge Standard", u: "toptech.html#limits-bridge-sec" }
      ]},
      { heading: "Practice & Proof", badge: "planned", links: [
        { t: "The Twelve Instruments", u: "practice.html" },
        { t: "Cohorts (90-day)", u: "practice.html#cohorts-sec" },
        { t: "Pre-Registration Desk", u: "practice.html#prereg-sec" },
        { t: "Decay Watch", u: "practice.html#decay-sec" }
      ]}
    ]
  },
  {
    key: "ascent", label: "Ascent", ar: "الصعود",
    href: "ascent.html", badge: "research-preview",
    blurb: "The ten-rung ladder — from the computing substrate to the limits of silicon and beyond.",
    groups: [
      { heading: "The Ten Rungs (S38–S47)", badge: "research-preview", links: [
        { t: "S38 · Computing Substrate Literacy", u: "ascent.html#rungs" },
        { t: "S39 · Programming Paradigms & Limits", u: "ascent.html#rungs" },
        { t: "S40 · Mathematical Foundations", u: "ascent.html#rungs" },
        { t: "S41 · The End of Binary", u: "ascent.html#rungs" },
        { t: "S42 · Multi-Valued & Fuzzy Computation", u: "ascent.html#rungs" }
      ]},
      { heading: "The Bridge to Life", badge: "research-preview", links: [
        { t: "S43 · From Electron to Cell", u: "ascent.html#rungs" },
        { t: "S44 · Biological Computation", u: "ascent.html#rungs" },
        { t: "S45 · Embodied Computation", u: "ascent.html#rungs" },
        { t: "S46 · Network Science", u: "ascent.html#rungs" },
        { t: "S47 · Higher Systems & Collective Dynamics", u: "ascent.html#rungs" }
      ]},
      { heading: "Readers & Paths", links: [
        { t: "The Limits of Silicon", u: "ascent.html#limits" },
        { t: "What Ascent Is Not", u: "ascent.html#exclusions" },
        { t: "Reading Paths (Blue/Green/Gold)", u: "ascent.html#paths" },
        { t: "Bridge Passport", u: "practice.html#passport-sec" },
        { t: "Ascent Status", u: "ascent.html#status" }
      ]}
    ]
  },
  {
    key: "metax", label: "Meta-X", ar: "ميتا‑إكس",
    href: "macrolifetach.html", badge: "research-preview",
    blurb: "MacroLifeTach — the civilizational research umbrella. Nine programs, one of them BCIA.",
    groups: [
      { heading: "The Umbrella", links: [
        { t: "MacroLifeTach Overview", u: "macrolifetach.html" },
        { t: "The Nine Programs", u: "macrolifetach.html#programs-sec" },
        { t: "Research Charter", u: "macrolifetach.html#charter-sec" },
        { t: "What This Is Not", u: "macrolifetach.html#exclusions-sec" }
      ]},
      { heading: "BCIA", badge: "gated", links: [
        { t: "What BCIA Is & Is Not", u: "bcia.html#what" },
        { t: "The Eight Series", u: "bcia.html#series" },
        { t: "Volume Roadmap", u: "bcia.html#roadmap" },
        { t: "Document Zero — Seven Bases", u: "bcia.html#doc-zero" }
      ]},
      { heading: "Charter & Governance", links: [
        { t: "The Charter & Human-Cell Exclusion", u: "bcia.html#charter" },
        { t: "Governance — Cloister / Atrium", u: "bcia.html#governance" },
        { t: "Determination Queue", u: "practice.html#determinations-sec" }
      ]},
      { heading: "Honesty Layer", badge: "gated", links: [
        { t: "Status & Remediation", u: "bcia-status.html" },
        { t: "The Critical Audit", u: "bcia-status.html#audit" },
        { t: "Publication Readiness Protocol", u: "bcia-status.html#protocol" },
        { t: "Scope Limits & Open Problems", u: "bcia-status.html#open" }
      ]}
    ]
  },
  {
    key: "academies", label: "Academies", ar: "الأكاديميات",
    href: "community.html",
    blurb: "Found and teach your own academy — from Applicant to Institution.",
    groups: [
      { heading: "How It Works", links: [
        { t: "Community Overview", u: "community.html" },
        { t: "The Four Principles", u: "academies.html#principles" },
        { t: "The Founding Path", u: "academies.html#path" },
        { t: "Apply", u: "academies.html#apply" }
      ]},
      { heading: "The Five Levels", links: [
        { t: "L1 Applicant → L5 Institution", u: "academies.html#levels" },
        { t: "Sandbox Preview", u: "academies.html#levels" },
        { t: "Directory of Academies", u: "academies.html#directory" },
        { t: "Audit Reports", u: "academies.html#directory" }
      ]},
      { heading: "Requirements", links: [
        { t: "The Eleven Requirement Groups", u: "academies.html#requirements" },
        { t: "Technical Guide (academy.json)", u: "academies.html#requirements" },
        { t: "Moderation & Enforcement", u: "academies.html#requirements" },
        { t: "Part H Statement duty", u: "license.html#statement-sec" }
      ]},
      { heading: "Exchange", badge: "planned", links: [
        { t: "Academy Exchange (cross-credit)", u: "practice.html#exchange-sec" },
        { t: "Correction Bounty", u: "practice.html#bounty-sec" }
      ]}
    ]
  },
  {
    key: "credentials", label: "Credentials", ar: "الشهادات",
    href: "credentials.html",
    blurb: "The mastery ladder — Practitioner, Professional, Master-Fellow — with public verification.",
    groups: [
      { heading: "The Ladder", links: [
        { t: "Series Practitioner", u: "credentials.html#ladder" },
        { t: "Professional Operator", u: "credentials.html#ladder" },
        { t: "Master-Fellow", u: "credentials.html#ladder" },
        { t: "MetaX Contributor track", u: "credentials.html#ladder" }
      ]},
      { heading: "Learner Guide", links: [
        { t: "Submission Pack", u: "credentials.html#learner" },
        { t: "Dossier & Evidence templates", u: "credentials.html#learner" },
        { t: "The Proof Ladder (P0–P3)", u: "credentials.html#learner" },
        { t: "AI Disclosure standard", u: "credentials.html#ai-disclosure-sec" }
      ]},
      { heading: "Assessment", badge: "planned", links: [
        { t: "Scenario Assessment", u: "practice.html#scenario-sec" },
        { t: "Mastery Viva", u: "practice.html#viva-sec" },
        { t: "Adversarial Review Exchange", u: "practice.html#review-sec" },
        { t: "Artefact Register", u: "practice.html#artefacts-sec" }
      ]},
      { heading: "Verify", badge: "live", links: [
        { t: "Verify a Credential", u: "verify.html" },
        { t: "Reviewer Handbook", u: "credentials.html#reviewers" },
        { t: "Appeals", u: "credentials.html#reviewers" },
        { t: "Integrity Report", u: "credentials.html#integrity-sec" }
      ]}
    ]
  },
  {
    key: "library", label: "Library", ar: "المكتبة",
    href: "library.html",
    blurb: "The stack, the standards, the bilingual lexicon, and the academy news.",
    groups: [
      { heading: "Specs & Standards", links: [
        { t: "The Stack Explainer", u: "library.html#stack" },
        { t: "Symbol / Decay / Falsifiability", u: "library.html#standards" },
        { t: "Publishing Style Guide", u: "library.html#standards" },
        { t: "Master Course Generation Prompt", u: "library.html#standards" }
      ]},
      { heading: "Lexicon", links: [
        { t: "Bilingual Lexicon", u: "lexicon.html" },
        { t: "Root-indexed entries", u: "lexicon.html#entries" },
        { t: "Contested terms", u: "lexicon.html#contested-sec" },
        { t: "Corrections Log", u: "library.html#logs" }
      ]},
      { heading: "Sources", badge: "planned", links: [
        { t: "Citation Ledger", u: "practice.html#citations-sec" },
        { t: "Verification Log", u: "library.html#logs" },
        { t: "Bibliography", u: "library.html#bibliography-sec" },
        { t: "Open Data (JSON)", u: "library.html#downloads-sec" }
      ]},
      { heading: "News", links: [
        { t: "All News", u: "news.html" },
        { t: "Announcements", u: "news.html?cat=announcements" },
        { t: "Curriculum", u: "news.html?cat=curriculum" },
        { t: "Research", u: "news.html?cat=research" },
        { t: "Field Notes", u: "news.html?cat=field-notes" }
      ]}
    ]
  },
  {
    key: "license", label: "License", ar: "الرخصة",
    href: "license.html", badge: "live",
    blurb: "The Maher License 2.3 and the register of twenty-five structural harms it makes operative.",
    groups: [
      { heading: "The Instrument", links: [
        { t: "ML-2.3 — Full Text", u: "license.html" },
        { t: "Why 2.3 Exists", u: "license.html#why-sec" },
        { t: "Plain-Text Mirror", u: "license/ml-2-3.txt" },
        { t: "Changelog 2.2 → 2.3", u: "license.html#changelog-sec" }
      ]},
      { heading: "Part H — Structural Harms", links: [
        { t: "The Register (HX-01 – HX-25)", u: "harms.html" },
        { t: "The Eight Absolutes (§H.3)", u: "license.html#absolutes-sec" },
        { t: "Roles — Author / Operator", u: "license.html#roles-sec" },
        { t: "The Scale Gate (Tier 0–3)", u: "license.html#scale-gate-sec" }
      ]},
      { heading: "Compliance", links: [
        { t: "Part H Statement — Form", u: "statement.html" },
        { t: "MetaX's own Statement", u: "statement.html#ours-sec" },
        { t: "Conditions vs Covenants", u: "license.html#breach-sec" },
        { t: "Compatibility & SPDX", u: "license.html#compat-sec" }
      ]},
      { heading: "Falsification", badge: "live", links: [
        { t: "Falsifiers per harm", u: "harms.html#falsifiers-sec" },
        { t: "Defect Log", u: "status.html#defects-sec" },
        { t: "Objections & Responses", u: "license.html#objections-sec" },
        { t: "Withdrawals & Narrowings", u: "license.html#withdrawals-sec" }
      ]}
    ]
  },
  {
    key: "about", label: "About", ar: "عن ميتا‑إكس",
    href: "about.html",
    blurb: "The MetaX universe, its shared DNA, the curator, and the policies that govern it.",
    groups: [
      { heading: "The Universe", links: [
        { t: "About MetaX", u: "about.html" },
        { t: "The Three Pillars", u: "index.html#pillars-sec" },
        { t: "The Shared DNA", u: "index.html#dna-sec" },
        { t: "The Curator — Maher", u: "about.html#curator" }
      ]},
      { heading: "Principles", links: [
        { t: "The Static Principle", u: "about.html#static" },
        { t: "AI Use Policy", u: "about.html#ai-policy" },
        { t: "Governance & Roles", u: "about.html#governance" },
        { t: "Accessibility Statement", u: "about.html#a11y" }
      ]},
      { heading: "Honesty", badge: "live", links: [
        { t: "Estate Status & Capacity", u: "status.html" },
        { t: "Defect Log", u: "status.html#defects-sec" },
        { t: "Migration Plan (VPS)", u: "status.html#migration-sec" },
        { t: "Determination Queue", u: "practice.html#determinations-sec" }
      ]},
      { heading: "Legal & Contact", links: [
        { t: "Contact & Press", u: "contact.html" },
        { t: "Pricing & Payment", u: "pricing.html" },
        { t: "Privacy", u: "privacy.html" },
        { t: "Terms", u: "terms.html" },
        { t: "Advertising Policy", u: "privacy.html#ads" }
      ]}
    ]
  }
];

var UTILITY = [
  { t: "Start Here", u: "start-here.html",  cls: "util-start" },
  { t: "Verify",     u: "verify.html",      cls: "util-verify" },
  { t: "Sign in",    u: "https://auth.metax.academy/authorize?client=web&redirect_uri=https%3A%2F%2Fmetax.academy%2F", cls: "util-auth", ext: true }
];
```

`navKeyFor()` must be updated to match the new keys:

```js
function navKeyFor(page) {
  if (page === "index.html" || page === "search.html" || page === "404.html") return "home";
  if (["toptech.html","curriculum.html","detail.html","start-here.html","practice.html"].includes(page)) return "toptech";
  if (page === "ascent.html") return "ascent";
  if (["macrolifetach.html","bcia.html","bcia-status.html"].includes(page)) return "metax";
  if (["community.html","academies.html"].includes(page)) return "academies";
  if (["credentials.html","verify.html"].includes(page)) return "credentials";
  if (["library.html","lexicon.html","news.html","article.html"].includes(page)) return "library";
  if (["license.html","harms.html","statement.html"].includes(page)) return "license";
  if (["about.html","contact.html","privacy.html","terms.html","pricing.html","status.html"].includes(page)) return "about";
  return "home";
}
```

## 4. Per-item build detail

Each table below tells an agent what must exist behind every link. "Component" refers to the families in MX‑SITE‑DESIGN §6.

### 4.1 TopTech — `--grad-aurora`, accent `--cyan`

| Sub-item | Target | Badge | Required content | Component |
|---|---|---|---|---|
| Start Here — Diagnostic | `start-here.html` | — | A 7-question, client-side-only placement diagnostic mapping the visitor to one of five archetypes; result renders as a linked archetype card; **no answers leave the browser** and the page says so | `.steps`, `.arch`, `.pill` |
| TopTech Home | `toptech.html` | live | Pillar hero, flagships, stack, archetypes, branches, arc, rails, limits-bridge, catalog CTA | full page |
| Full Catalog | `curriculum.html` | live | Every series as a filterable grid; filters = branch, status, tier, duration; counts from `catalog.json`; each card links `detail.html?type=series&id={S##}` **and** the pre-rendered alias `/s/{S##}/` | `.filters`, `.series-card` |
| Changelog | `news.html?cat=curriculum` | — | Curriculum releases only, reverse-chronological, each entry dated and version-stamped | `.card` list |
| The Flagships (F1, F2) | `toptech.html#flagships-sec` | live | Two `.flagship` blocks from `FLAGSHIPS` in `data.js`: code, title, tagline, quote, thesis, course count, hours, icon, accent | `.flagship` |
| The Next-Level Stack (S01–S21) | `toptech.html#stack` | live | 21 series cards, nine operator surfaces grouped: audience, AI engines, commerce, data, monetisation, trust, community, growth, migration | `.series-card` grid 1/2/3 |
| Operator Archetypes | `toptech.html#archetypes-sec` | live | Five archetypes, each with 6–8 series, time estimate, capstone, and a **kill criterion** stated as a falsifiable sentence | `.arch` |
| Design · Dev · Data/AI (S22–S24) | `toptech.html#branches-sec` | planned | Branch B card with shipped vs planned units clearly separated | `.branch-card` |
| Infra · Security · Networks | `toptech.html#branches-sec` | planned | Same section, second cluster; must not imply availability | `.branch-card` |
| Placement Gate | `toptech.html#branches-sec` | planned | An 8-item checklist a learner must pass before Branch B; each item independently checkable | `.level` list |
| Academy Builder (S35) | `academies.html` | planned | Cross-pillar link; Branch C card must state that S35 delivery routes through the Academies charter | `.branch-card` |
| Curriculum & Assessment (S36) | `toptech.html#branches-sec` | planned | Series stub with syllabus outline and gate condition | `.branch-card` |
| Governance & Stewardship (S37) | `toptech.html#branches-sec` | planned | Series stub; links to `about.html#governance` | `.branch-card` |
| The Cognitive Arc | `toptech.html#arc-sec` | live | Six lesson beats — What, Why, How, Lab, Artifact, Scenario Assessment — as a numbered timeline, plus the 12×6 cadence and the 90-day capstone contract | `.arc-step` |
| Companion Rails | `toptech.html#rails-sec` | live | Six rails — compliance, accessibility, decay-awareness, falsifiability, kill criteria, unit economics — each with definition, artefact requirement, failure signature, audit check | `.rail` 3-up |
| Limits & Bridge Standard | `toptech.html#limits-bridge-sec` | live | **New section.** Four limit classes (epistemic, technical, ethical, economic); the rule that a `Limits` module immediately precedes the mandatory `Bridge` lesson; retro-fit status per series from `catalog.json` | `.feature` cols-4 + `.level` |
| The Twelve Instruments | `practice.html` | planned | See §4.7 | full page |

### 4.2 Ascent — `--grad-aurora` at 135deg, accent `--cyan`

| Sub-item | Target | Badge | Required content | Component |
|---|---|---|---|---|
| S38–S47 (ten rungs) | `ascent.html#rungs` | research-preview | One `.level` row per rung carrying: rung number, series code, title, **source Arabic book**, status badge, Limits module presence, and the citation-only rule. Ten rows, two headed groups (S38–S42 silicon, S43–S47 bridge-to-life) | `.level` |
| The Limits of Silicon | `ascent.html#limits` | research-preview | Physical, thermodynamic, economic and architectural limits, each with a cited source and a date | `.feature` |
| What Ascent Is Not | `ascent.html#exclusions` | research-preview | Explicit exclusions: no protocols, no wet-lab procedure, no human-cell work. Must also carry the **banned claim register**, naming the 28,800× DishBrain-vs-DeepMind comparison as prohibited and explaining why | `.axiom` + `.pill` |
| Reading Paths (Blue/Green/Gold) | `ascent.html#paths` | research-preview | Three ordered reading routes with prerequisite chains | `.steps` |
| Bridge Passport | `practice.html#passport-sec` | planned | Record of Limits & Bridge completion; gates rung access | cross-link |
| Ascent Status | `ascent.html#status` | research-preview | Per-rung status table, last review date, what would move a rung to `live` | `.stats` + table |

### 4.3 Meta‑X / MacroLifeTach — `--grad-nebula`, accent `--magenta`

| Sub-item | Target | Badge | Required content | Component |
|---|---|---|---|---|
| MacroLifeTach Overview | `macrolifetach.html` | research-preview | Pillar hero, the umbrella thesis, the nine programs, charter, exclusions, honesty strip | full page |
| The Nine Programs | `macrolifetach.html#programs-sec` | research-preview | Nine cards — Agora, Ma'nā, Metabolism, Soma, Paideia, Athar, Āfāq, Mīzān, **BCIA** — each with a one-sentence scope, a status badge, and a link to its own page where one exists | `.pillar`-lite 3-up |
| Research Charter | `macrolifetach.html#charter-sec` | research-preview | Umbrella-level charter; must state that program charters may be stricter but never looser | `.axiom` |
| What This Is Not | `macrolifetach.html#exclusions-sec` | research-preview | No therapeutic claims, no clinical guidance, no protocols | `.pill` row |
| What BCIA Is & Is Not | `bcia.html#what` | gated | Two-column claim/disclaim; the "taught toward, never as settled doctrine" framing | `.axiom` |
| The Eight Series | `bcia.html#series` | gated | Eight series rows with individual statuses | `.series-card` |
| Volume Roadmap | `bcia.html#roadmap` | gated | Roadmap with an explicit **gate-condition** per volume and a review date; no undated "coming soon" | `.arc-step` |
| Document Zero | `bcia.html#doc-zero` | gated | The seven bases, each numbered and separately falsifiable | `.steps` |
| Charter & Human-Cell Exclusion | `bcia.html#charter` | gated | The exclusion stated in operative language, not aspiration | `.axiom` |
| Governance — Cloister / Atrium | `bcia.html#governance` | gated | Two-body model, decision rights, quorum, publication duty | `.feature` |
| Status & Remediation | `bcia-status.html` | gated | Live defect count from `status.json`, seven remediation steps with per-step state, gateway lock condition | `.stats` + `.level` |
| The Critical Audit | `bcia-status.html#audit` | gated | Full audit findings **unedited**, including the DishBrain claim failure | `.card` list |
| Publication Readiness Protocol | `bcia-status.html#protocol` | gated | The checklist that must close before anything publishes | `.steps` |
| Scope Limits & Open Problems | `bcia-status.html#open` | gated | Open problems register, each with an owner and a date | table |

### 4.4 Academies — `--grad-solar`, accent `--gold` (CTA text `#1a0e00`)

| Sub-item | Target | Badge | Required content | Component |
|---|---|---|---|---|
| Community Overview | `community.html` | live | Pillar hero: "anyone can found an academy," the offer, the obligations, the honest cost | full page |
| The Four Principles | `academies.html#principles` | live | Four principles as `.axiom` cards with rank numerals | `.axiom` 3-up+1 |
| The Founding Path | `academies.html#path` | live | Applicant → Institution as a numbered timeline with the artefact required at each step | `.arc-step` |
| Apply | `academies.html#apply` | live | **Static form that posts to `hooks.metax.academy/v1/academy-apply`**; must render and explain itself with JS disabled and offer an email fallback address | `.step-card` + form |
| L1 → L5 | `academies.html#levels` | live | Five levels with rights, duties and revocation conditions per level | `.cred-ladder` |
| Sandbox Preview | `academies.html#levels` | planned | What a sandbox academy may and may not publish | `.pill` |
| Directory of Academies | `academies.html#directory` | live | Rendered from `academy.json` records; each row links `{slug}.metax.academy` | `.filters` + `.series-card` |
| Audit Reports | `academies.html#directory` | live | Annual audit per chartered academy, published unedited | `.card` list |
| The Eleven Requirement Groups | `academies.html#requirements` | live | All eleven: curator eligibility, thesis scope 800–2000 words, curriculum minimum (≥6 courses + Limits + Bridge + 90-day capstone + hypothesis), frozen rubric D1–D5, governance charter, technical spec (static hosting + `academy.json`), bilingual policy, legal terms, red-line content bans, annual audit, **Part H Statement** | `.cur-row` accordion |
| Technical Guide | `academies.html#requirements` | live | `academy.json` schema with a validating example; link to `library.html#downloads-sec` | `<pre>` + `.pill` |
| Moderation & Enforcement | `academies.html#requirements` | live | Red lines, process, appeal route, who decides | `.steps` |
| Part H Statement duty | `license.html#statement-sec` | live | Cross-link: every academy at Tier 1+ must publish one | cross-link |
| Academy Exchange | `practice.html#exchange-sec` | planned | Cross-credit mappings with curator signatures | cross-link |
| Correction Bounty | `practice.html#bounty-sec` | planned | Public defect submissions against any academy, credited | cross-link |

### 4.5 Credentials — `--grad-verify`, accent `--emerald`

| Sub-item | Target | Badge | Required content | Component |
|---|---|---|---|---|
| Series Practitioner / Professional Operator / Master-Fellow / Contributor | `credentials.html#ladder` | live | Four `.cred` rows in a `.cred-ladder`: evidence required, review depth, decay interval, revocation grounds. **Completion Marker** is the non-credential badge and must be visually distinct from the three real rungs | `.cred-ladder` |
| Submission Pack | `credentials.html#learner` | live | Exactly what a candidate sends, in order, with file formats | `.steps` |
| Dossier & Evidence templates | `credentials.html#learner` | live | Downloadable Markdown templates, no login required | `.pill` + links |
| The Proof Ladder (P0–P3) | `credentials.html#learner` | live | Four proof classes defined by what a third party can independently check | `.level` |
| AI Disclosure standard | `credentials.html#ai-disclosure-sec` | live | **New section.** The disclosure a candidate must attach; ties to ML‑2.3 §D.3 and §H.3(a)(iv) | `.axiom` |
| Scenario Assessment / Mastery Viva / Adversarial Review / Artefact Register | `practice.html#…` | planned | See §4.7 | cross-links |
| Verify a Credential | `verify.html` | live | Lookup by short code (8-char Crockford base-32) → `verify.metax.academy/c/{id}/`; **flat static record pages**, plus the revocation list and an explanation of what verification does and does not prove | `.step-card` + form |
| Reviewer Handbook | `credentials.html#reviewers` | live | Rubric D1–D5 frozen, conflict-of-interest rule, reviewer stats | `.cur-row` |
| Appeals | `credentials.html#reviewers` | live | MX‑016 route, time limits, who reverses | `.steps` |
| Integrity Report | `credentials.html#integrity-sec` | live | **New section.** Counts issued, revoked, appealed, upheld — from `credentials.json`, dated | `.stats` |

### 4.6 Library — hairline only, accent `--dim`

| Sub-item | Target | Badge | Required content | Component |
|---|---|---|---|---|
| The Stack Explainer | `library.html#stack` | live | Layer model of the estate: content, standards, data, identity | `.arc-step` |
| Symbol / Decay / Falsifiability | `library.html#standards` | live | Three standards: symbol grammar; decay classes (Durable 36 mo, Semi-durable 12 mo, Perishable 3 mo); falsifiability requirements | `.axiom` |
| Publishing Style Guide | `library.html#standards` | live | Voice rules: declarative, 2nd-person for learners, 3rd-person for governance, no exclamation marks, no marketing verbs | `.cur-row` |
| Master Course Generation Prompt | `library.html#standards` | live | The full prompt, versioned, copyable | `<pre>` |
| Bilingual Lexicon | `lexicon.html` | live | Term pages with EN/AR authority, root-indexed | `.filters` + list |
| Root-indexed entries | `lexicon.html#entries` | live | Arabic tri-root index | table |
| Contested terms | `lexicon.html#contested-sec` | live | **New section.** Terms where MetaX's usage is disputed, with the dispute stated | `.card` |
| Corrections Log / Verification Log | `library.html#logs` | live | Every correction with date, what changed, who filed it — the no-silent-edits law made visible | table |
| Citation Ledger | `practice.html#citations-sec` | planned | Source health; auto-defect on dead source | cross-link |
| Bibliography | `library.html#bibliography-sec` | live | **New section.** Full estate bibliography, per-work stability class | table |
| Open Data (JSON) | `library.html#downloads-sec` | live | **New section.** `catalog.json`, `credentials.json`, `lexicon.json`, `status.json`, `license.json`, `harms.json`, `search-index.json`, `academy.json` schema — each with a schema link, a last-generated timestamp and a SHA-256 | `.pill` grid |
| News (5 links) | `news.html[?cat=…]` | live | Four categories filtered client-side from one `news.json`; `article.html?id={slug}` per item plus pre-rendered `/n/{slug}/` alias | `.filters` + `.card` |

### 4.7 License — hairline only, accent `--gold`, **no ambient motion, no ads**

This pillar is new. It is the estate's most legally consequential surface, so it renders with CSS-disabled legibility and a plain-text mirror per ML‑2.3 §E.7.

| Sub-item | Target | Badge | Required content | Component |
|---|---|---|---|---|
| ML‑2.3 — Full Text | `license.html` | live | The entire operative text, Parts 0/A/B/C/D/E/F/G/H and Schedules 1–5, with `id` on every `§` for deep linking; front-matter block showing version, effective date, SHA-256 | prose, `<section>` per Part |
| Why 2.3 Exists | `license.html#why-sec` | live | The four defects and their repairs; explicitly non-operative, marked as commentary | `.axiom` 4-up |
| Plain-Text Mirror | `license/ml-2-3.txt` | live | Byte-identical operative text, no markup, no build step | file |
| Changelog 2.2 → 2.3 | `license.html#changelog-sec` | live | ML‑D‑001 … ML‑D‑006 plus the identifier-collision repair and three new absolutes | table |
| The Register (HX‑01–HX‑25) | `harms.html` | live | All 25 harms in six strata; one row per harm with id, title, operative statement, principle, maqṣad, duty, absolute flag; **one detail page section per harm** with claim, reply, ethical mapping, falsifier, obligation, in-this-estate | `.cur-row` accordion + `.filters` by stratum |
| The Eight Absolutes | `license.html#absolutes-sec` | live | §H.3(a)(i)–(viii), each with its cumulative elements enumerated; (vii) flagged as the one disjunctive absolute | `.level` |
| Roles | `license.html#roles-sec` | live | Author / Integrator / Operator / Commissioner with duty allocation table | table |
| The Scale Gate | `license.html#scale-gate-sec` | live | Tier 0–3 thresholds; a **client-side tier calculator** storing nothing; note that absolutes apply at every tier | `.step-card` + form |
| Part H Statement — Form | `statement.html` | live | Schedule 1 form as a copyable template **and** a generator that runs entirely in-browser, writes nothing to any server, and outputs Markdown | `<pre>` + form |
| MetaX's own Statement | `statement.html#ours-sec` | live | The estate's filed Statement. **Must mark HX‑01 and HX‑04 unremedied** with a stated reason (ad network on the content plane) and a review date, per §H.16.3 | table |
| Conditions vs Covenants | `license.html#breach-sec` | live | §F.4 split, cure period, reinstatement | `.axiom` |
| Compatibility & SPDX | `license.html#compat-sec` | live | Schedule 5 verbatim: not OSI-approved, GPL-incompatible, `LicenseRef-ML-2.3` | `.pill` |
| Falsifiers per harm | `harms.html#falsifiers-sec` | live | Every falsifier extracted into one table — the register's own attack surface | table |
| Defect Log | `status.html#defects-sec` | live | Shared with the honesty page | cross-link |
| Objections & Responses | `license.html#objections-sec` | live | Every substantive objection received, with a reasoned reply, per §E.4 | `.card` |
| Withdrawals & Narrowings | `license.html#withdrawals-sec` | live | Duties narrowed or withdrawn under §E.5, with the evidence that compelled it. If empty, must say so and say why that is itself suspicious | `.card` |

### 4.8 Practice — the twelve instruments, `practice.html`

One page, twelve `.cur-row` sections, each with a status badge, a "what it is," a "what it costs you," and the gate it opens. Read-only on the content plane; every write action links to `me.metax.academy`.

| # | Instrument | Anchor | Badge | Content the agent must write |
|---|---|---|---|---|
| 1 | Pre-Registration Desk | `#prereg-sec` | planned | Hypothesis + null filed before work starts, hashed and immutable; explains why a hypothesis you can edit afterwards is not a hypothesis |
| 2 | Adversarial Review Exchange | `#review-sec` | planned | Reciprocal critique: you review two to have two reviewed; rubric-enforced; reviewer identity disclosed to the candidate |
| 3 | Decay Watch | `#decay-sec` | planned | Public list of claims past their decay interval, with a live overdue count from `status.json` |
| 4 | Time-Boxed Cohorts | `#cohorts-sec` | planned | 90-day asynchronous cycles, published start dates, no rolling enrolment; states the drop-out rate once one exists |
| 5 | Artefact Register | `#artefacts-sec` | planned | **Reference-only**, corrected from the earlier "vault": stores URL + SHA-256 + timestamp, never the file, because the estate accepts no uploads |
| 6 | Deterministic Scenario Assessment | `#scenario-sec` | planned | Seeded branching scenarios; explicitly **no LLM scoring**; same seed yields same scenario for audit |
| 7 | Mastery Viva | `#viva-sec` | planned | Oral defence; transcript published with the credential; candidate may redact nothing material |
| 8 | Academy Exchange | `#exchange-sec` | planned | Cross-credit mappings between academies, each signed by both curators |
| 9 | Bridge Passport | `#passport-sec` | planned | Record of Limits & Bridge completion; gates Ascent rungs; shows which rungs remain locked and why |
| 10 | Correction Bounty | `#bounty-sec` | planned | Public defect submission with credit; states what is and is not eligible |
| 11 | Citation Ledger | `#citations-sec` | planned | Per-source health checks; a dead source auto-files a defect against every page citing it |
| 12 | Determination Queue | `#determinations-sec` | planned | Public queue of pending governance decisions with filing date and expected decision date; an item that ages past its date is itself a defect |

### 4.9 About & the honesty surface

| Sub-item | Target | Badge | Required content |
|---|---|---|---|
| About MetaX | `about.html` | live | Who, what, what this is not, and who is responsible by name |
| The Curator — Maher | `about.html#curator` | live | Editorial responsibility statement; the `.curator` line's authority |
| The Static Principle | `about.html#static` | live | The two-plane model: static content plane vs identity/commerce plane; the Cloudflare Workers + D1 topology; **and the current honest caveat that the live build does not yet render without JavaScript** |
| AI Use Policy | `about.html#ai-policy` | live | Where AI is used in production, where it is forbidden, how it is disclosed |
| Governance & Roles | `about.html#governance` | live | Current state only. History belongs to `library.html#logs`; this split repairs the overlap flagged earlier |
| Accessibility Statement | `about.html#a11y` | live | WCAG 2.2 AA target, known failures listed by name, including the missing `prefers-reduced-motion` block until it ships |
| Estate Status & Capacity | `status.html` | live | Red/Amber/Green capacity meter against free-tier ceilings (Workers 100k req/day, KV 1,000 writes/day, D1 100k rows/day, Pages 20,000 files) with an 80% tripwire; reads `status.json` |
| Defect Log | `status.html#defects-sec` | live | Every open defect including **DEF‑2026‑041** (route count) and the new **DEF‑2026‑042** (query-parameter detail pages are invisible without JS) |
| Migration Plan (VPS) | `status.html#migration-sec` | live | The 60-day tripwire, the target stack, the cut-over steps |
| Pricing & Payment | `pricing.html` | live | What is free, what is paid; Binance Pay is the only method **and the page must say so plainly rather than implying others exist**; prices in fiat and crypto; the riba position (no interest, no instalments, zero-markup split only); links to `pay.metax.academy/checkout/{sku}` |
| Contact & Press | `contact.html` | live | A contact that reaches a person, per ML‑2.3 §D.2 |
| Privacy | `privacy.html` | live | Data classes, retention grid, Class 4 (identity & commerce, 7 years), deletion semantics, no-avatar/no-upload regime |
| Advertising Policy | `privacy.html#ads` | live | AdSense + Adsterra disclosed by name, what they collect, how to opt out, and the cross-reference to the estate's unremedied HX‑01/HX‑04 dispositions |
| Terms | `terms.html` | live | Includes purchase and entitlement terms |

## 5. Footer menu

Rendered by `components.js`, three columns above 800px. It is **not** a copy of the mega-menu; it is the short list of things people actually need.

**Pillars:** TopTech · Ascent · Meta‑X · Academies · Credentials
**Explore:** Start Here · Full Catalog · Verify a Credential · Library · Lexicon · News
**Governance:** License ML‑2.3 · The 25 Harms · Estate Status · Defect Log · Accessibility
**Bottom bar:** `© {year} MetaX.Academy · Curated by Maher` + version stamp, then `.foot-legal`: About · Contact · Pricing · Privacy · Terms, then `.glyphs` rendering `✦ ⬡ ◉ ⊢ →`.

## 6. Search index additions

`SEARCH_INDEX` in `js/site.js` must gain one entry per new page and per new anchor: `practice.html` (+12 anchors), `license.html` (+8), `harms.html` (+2 plus one per harm HX‑01…HX‑25), `statement.html` (+1), `status.html` (+3), `pricing.html`, `macrolifetach.html` (+3), `search.html`. Each entry keeps the existing shape `{title, url, cat, text}`. **Additionally**, emit the whole index to `search-index.json` and build `search.html` as a no-JS fallback that lists every page and anchor as plain links — this is the cheapest available partial repair for the JS-dependency defect.

## 7. Off-menu routes

These are not in `MENU` because they leave the static plane. They appear only in the utility bar, in-page CTAs, and the footer.

`auth.metax.academy/authorize` — social providers only, provider names as **text word-marks, not logo images**; `--grad-vault`; no ambient motion; returns to `redirect_uri` with a short-lived signed token. `pay.metax.academy/checkout/{sku}` — Binance Pay only, `--grad-ledger`, static, no dark patterns. `me.metax.academy` — dashboard; borrows the gradient of whichever pillar is in view; 48px identity bar under the 66px nav; deterministic SVG glyph from `SHA-256(usr_id+salt)`; no streaks, no leaderboards. `verify.metax.academy/c/{id}/` — flat static credential records. `hooks.metax.academy/v1/*` — form endpoints. `{slug}.metax.academy` — academy sites, inheriting `style.css` unmodified.

## 8. File manifest

Agents must produce exactly these, plus the `/ar/` mirror of every `.html`:

`index.html`, `start-here.html`, `toptech.html`, `curriculum.html`, `detail.html`, `practice.html`, `ascent.html`, `macrolifetach.html`, `bcia.html`, `bcia-status.html`, `community.html`, `academies.html`, `credentials.html`, `verify.html`, `library.html`, `lexicon.html`, `news.html`, `article.html`, `license.html`, `harms.html`, `statement.html`, `status.html`, `pricing.html`, `about.html`, `contact.html`, `privacy.html`, `terms.html`, `search.html`, `404.html`.

Assets: `css/style.css` (token layer unchanged, plus the `prefers-reduced-motion` block and the 1120px breakpoint), `js/data.js`, `js/components.js`, `js/skeleton.js`, `js/site.js`, `js/main.js`, `js/pages.js`, `js/verify.js`, `js/practice.js`, `js/license.js`, `js/adsterra.js`.

Data: `catalog.json`, `credentials.json`, `lexicon.json`, `news.json`, `status.json`, `license.json`, `harms.json`, `search-index.json`, `academy.schema.json`, `sitemap.xml`, `robots.txt`.

Pre-rendered aliases: `/s/{S##}/index.html` per series and `/n/{slug}/index.html` per article, each a real static page with the same content the query route renders, canonical-tagged to itself, with `detail.html?...` and `article.html?...` kept as working aliases.

## 9. Acceptance checklist per page

A page ships only when all of these hold: `window.SITE_PAGE` is set before `components.js`; script order is data → components → skeleton → site → page; the eight `.mm-top` items render and the correct one carries `.active` via `navKeyFor()`; every anchor referenced by `MENU` exists in the DOM; no statistic appears without a `data-count-src` or a visible date; every `.mm-badge` has a text label; `.img-slot` renders its shimmer placeholder with no image file present; the page is legible with CSS disabled; the page renders its main content with JavaScript disabled **or** is listed in `status.html#defects-sec` under DEF‑2026‑042 as a known exception; contrast ≥4.5:1 against every gradient it uses; touch targets ≥44px; and the reduced-motion block suppresses all nine ambient animations.

## 10. Two things to settle before the agents run

The eight-item menu forces the nav breakpoint to 1120px, and if you would rather keep 1000px, the honest options are to drop a top-level item (License folded into About is the only candidate that does not break a pillar) or to shorten `Credentials` to `Proof`. I would keep eight and move the breakpoint, because burying the licence contradicts the reason it exists.

More significantly, §4.7 requires `statement.html#ours-sec` to publish MetaX's own Part H Statement marking HX‑01 and HX‑04 **unremedied** on account of the ad network. That is the correct output of §H.16.3, but it is also a public admission on your own site, and an agent will generate it without asking. If you want that section written differently — or the ads removed instead so the disposition can honestly read *remedied* — decide now rather than after thirty pages have been built around it.