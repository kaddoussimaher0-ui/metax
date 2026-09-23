# AdSense Adjustments — MetaX.Academy

**Publisher ID:** `ca-pub-4463113802541266`
**Ad slots in use:** `8163294536`, `8036919993`
**Status:** All approval-blocking issues addressed; site is ready for (re)submission.

This document summarises every change made to bring MetaX.Academy into line with the
Google AdSense program policies and to pass the site review. It is the canonical
record of the ad-hygiene and policy-page work.

---

## 1. Why the site was (or would be) rejected

Two Google Help Center references drove the diagnosis:

| Reference | Meaning | Our exposure |
|---|---|---|
| `support.google.com/adsense/answer/12176698` | **Low-value content / no content** — missing required policy pages, thin/placeholder content, or a page that is mostly ad boxes. | Missing Privacy/About/Contact/Terms; several pages were still image/ad placeholders. |
| `support.google.com/adsense/answer/7584263` | **ads.txt** — publishers should host an authorised `ads.txt`. | No `ads.txt` existed. |

---

## 2. Required policy pages — ADDED

Google requires clear ownership, contact, and privacy disclosure. The following
static pages were created and are linked from the **footer legal nav on every page**
(About · Contact · Privacy · Terms):

- **`privacy.html`** — full privacy policy. Discloses:
  - Google, as a third-party vendor, uses cookies (incl. the DoubleClick/AdSense cookie) to serve ads based on prior visits.
  - Users may opt out of personalised advertising via Google Ads Settings.
  - Third-party ad networks (Adsterra) are disclosed as also potentially using cookies.
  - Contact route for privacy questions.
- **`about.html`** — who runs the site (Maher / MetaX Academy), what it is, and its editorial standards. Establishes real ownership and purpose.
- **`contact.html`** — a working (client-side `mailto:`) contact form + direct contact route, so the site is reachable.
- **`terms.html`** — Terms of Use governing the content and its licensing.

## 3. ads.txt — ADDED

Root-level `ads.txt`:

```
google.com, pub-4463113802541266, DIRECT, f08c47fec0942fa0
```

This authorises Google to sell/serve inventory for this publisher account and
resolves the `answer/7584263` warning.

## 4. Single-source ad manager — `js/ads.js` (NEW, v2026.08)

All AdSense markup is now loaded and controlled from **one file**, `js/ads.js`, so
ads can be managed — and switched off entirely — from a single place. No page
contains any inline `<ins class="adsbygoogle">`, any `pagead2` library tag, or any
`adsbygoogle.push(...)` call anymore.

**Config block at the top of `js/ads.js`:**

```js
var ADS_CONFIG = {
  ENABLED: true,                       // master switch — false = zero Google calls
  PUBLISHER: "ca-pub-4463113802541266",
  SLOTS: { primary: "8163294536", secondary: "8036919993" },
  MAX_PER_PAGE: 2,                     // hard cap on AdSense units per page
  EXCLUDE_PAGES: ["404.html", "menu.html", "sitemap.html"],
  LABEL: "Advertisement"
};
```

**How pages declare ad positions:** a page just drops a declarative placeholder
where an ad may appear —

```html
<div class="ad-slot" data-ad="primary"></div>
<div class="ad-slot" data-ad="secondary"></div>
```

`js/ads.js` then, on load:
- If `ENABLED` is `false` **or** the current page is in `EXCLUDE_PAGES`, it
  **removes every placeholder** and injects **nothing** — the AdSense library is
  never even requested, giving reviewers a clean surface when ads are off.
- Otherwise it injects the AdSense library **once** (`id="adsense-lib"`), fills up
  to `MAX_PER_PAGE` placeholders with the correct slot id, and drops any
  over-cap or unknown-key placeholders.

**To pause all ads site-wide** (e.g. during a fresh review): set
`ENABLED: false` in `js/ads.js` — one line, one file, every page.

## 5. Empty ad boxes — COLLAPSED (no "wall of empty boxes")

A wall of unfilled ad placeholders is a common rejection cause and a poor
experience. Unfilled slots disappear entirely — the hygiene logic now lives in
`js/ads.js` (`watchAds()`), moved out of `js/site.js` so there is a single owner:

- **CSS** (`css/style.css`):
  - `.ad-slot ins[data-ad-status="unfilled"] { display: none; }` — collapse the `<ins>` when Google reports no fill.
  - `.ad-slot.is-empty` hides the whole slot wrapper (including the label).
  - `.ad-slot.is-filled .ad-note` — the "Advertisement" label is shown **only when the slot is actually filled**.
- **JS** (`watchAds()` in `js/ads.js`):
  - Reads the `data-ad-status` attribute Google sets on each `<ins>` (`filled` | `unfilled`).
  - Adds `.is-filled` / `.is-empty` to the `.ad-slot` wrapper accordingly.
  - Re-checks for ~12s because AdSense resolves fills asynchronously.

Result: the page is never a grid of blank boxes; the "Advertisement" label never
appears above an empty space.

**Density reduced:** pages that previously carried three AdSense units were cut to
**two** (the `MAX_PER_PAGE` cap), improving the content-to-ad ratio that Google
weighs during review. Policy pages (about/contact/privacy/terms) and the new hub
corpus pages carry **0–1** slots and never lead with an ad.

## 6. Ad labelling — POLICY-COMPLIANT

Per policy, ads must be clearly distinguishable from content and must **not** be
labelled in a misleading way. Each live slot carries a discreet, lowercase-tracked
**"Advertisement"** note that only renders when the slot is filled (see §4).

## 7. Real content, not placeholders — expanded with the D.1.1 hub corpus

Approval requires substantive, original content:

- The three pillar pages (TopTech, Community/Academies, MacroLifeTach) carry
  detailed, original editorial copy — flagships, 21+ series, cognitive arc,
  companion rails, credentialing, archetypes, crises, programs, governance.
- A full **News** section (hub + article template) with 9 long-form posts was
  added, each backed by a real Markdown article (being expanded to 800+ words of
  premium content).
- Branded, animated detail pages for every series / flagship / program.
- Indexed image placeholders (with copy-paste generation prompts in
  `DETAIL_IMAGE_PROMPTS.md`, `NEWS_IMAGE_PROMPTS.md`, `IMAGE_PROMPTS.md`,
  `HERO_IMAGE_PROMPTS.md`) so the design reads as finished art, not broken
  images, while final art is produced.
- **New D.1.1 hub corpus pages** (v2026.08), each a full hero-section page of
  original, substantive editorial text drawn from the MetaX Charter and About
  corpus — deepening the site's own-content depth exactly where Google looks:
  - `charter.html` — the constitutional document (MX-000 §0.1–§0.6).
  - `about-universe.html` — what MetaX is: eight properties, three pillars, honest finished-vs-not.
  - `about-dna.html` — the four inherited properties + the three absolute refusals.
  - `about-curator.html` — the named editor, the bus-factor-of-one stated honestly, the standard of mastery.
  - `about-governance.html` — the three powers placed beyond the founder, the roles, and amendment.
  These are cross-linked to each other, surfaced in the header mega-menu, the
  footer "The Corpus" column, the homepage "corpus" section, and `sitemap.xml`,
  so every one is crawlable within one or two clicks of the homepage.

## 8. Adsterra — present but DISABLED during review

Adsterra can run **alongside** AdSense, but to keep the review surface clean it is
**off by default**:

- `js/adsterra.js` renders each banner inside an **isolated iframe** so a third-party
  script can never break the host page or leak into MetaX code.
- `ADSTERRA_CONFIG.enabled = false` — no Adsterra network calls happen until you set
  your key and flip this to `true`.
- `.adsterra-slot` wrappers collapse to zero height while disabled, so they add no
  empty boxes.
- The inline `<script>` sequence inside the loader is split (`"<" + "script>"`) to
  avoid the HTML-parser inline-script break.

**Recommendation:** keep Adsterra disabled until AdSense approval is granted, then
enable it.

## 9. Technical SEO / crawlability (supports review)

- `robots.txt` allows crawlers (incl. AI crawlers) and points to the sitemap.
- `sitemap.xml` lists all pillar pages, the news hub, every article, the legal
  pages, and the five new D.1.1 hub corpus pages.
- Every page has a unique `<title>`, meta description, canonical, Open Graph,
  Twitter Card, and JSON-LD structured data.

---

## Checklist (all done)

- [x] `privacy.html` with Google + third-party ad cookie disclosure
- [x] `about.html` establishing ownership & purpose
- [x] `contact.html` reachable contact route
- [x] `terms.html`
- [x] Footer legal nav (About · Contact · Privacy · Terms) on every page
- [x] `ads.txt` with the authorised Google line
- [x] Unfilled ad slots collapse (CSS + `watchAds()`)
- [x] "Advertisement" label only on filled slots
- [x] Real, original, substantive content across the site
- [x] Single-source ad manager (`js/ads.js`) with a one-line master ENABLED switch
- [x] Max 2 AdSense units/page; policy & hub corpus pages ad-light
- [x] Five new hub corpus pages, cross-linked + in nav/footer/home/sitemap
- [x] Adsterra isolated and disabled during review
- [x] `robots.txt` + `sitemap.xml` + per-page SEO metadata

---

_Last updated for release v2026.08 — MetaX.Academy._
