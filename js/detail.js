/* =====================================================================
   MetaX.Academy — Detail page (series / flagship / program)
   Reads ?type=&id= and renders from data.js. Includes an animated aside.
   Detail hero images use their own image index: DET-<TYPE>-<ID>.
   ===================================================================== */
(function () {
  "use strict";

  function q(name) { return new URLSearchParams(location.search).get(name); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }

  function imgSlot(src, index, mark, cls) {
    return (
      '<span class="img-slot ' + (cls || "") + '" data-index="' + index + '">' +
        '<span class="img-tag">' + index + '</span>' +
        '<span class="img-mark">' + (mark || "\u2726") + '</span>' +
        '<img alt="" loading="lazy" data-src="' + src + '" />' +
      '</span>'
    );
  }
  function hydrate(root) {
    (root || document).querySelectorAll(".img-slot img[data-src]").forEach(function (img) {
      if (img.dataset.bound) return; img.dataset.bound = "1";
      var slot = img.closest(".img-slot");
      img.addEventListener("load", function () { if (img.naturalWidth > 1) { img.classList.add("loaded"); slot.classList.add("has-img"); } });
      img.src = img.dataset.src;
    });
  }

  /* --------- Brand gradient palettes (per pillar / accent) ----------
     Each brand = two color stops used for the animated hero wash and orbit.
     Series are branded by their "tier"; flagships by their "accent";
     programs get the MacroLifeTach bio-luminescent identity.            */
  var BRANDS = {
    aurora:    ["rgba(124,77,255,0.62)",  "rgba(34,211,238,0.55)"],
    solar:     ["rgba(255,77,205,0.60)",  "rgba(255,203,107,0.55)"],
    nebula:    ["rgba(124,77,255,0.60)",  "rgba(255,77,205,0.52)"],
    emerald:   ["rgba(62,230,176,0.55)",  "rgba(34,211,238,0.5)"],
    /* series tiers */
    Discovery: ["rgba(34,211,238,0.6)",   "rgba(124,77,255,0.5)"],
    Audience:  ["rgba(255,203,107,0.55)", "rgba(255,77,205,0.5)"],
    Growth:    ["rgba(255,77,205,0.58)",  "rgba(124,77,255,0.5)"],
    Machine:   ["rgba(124,77,255,0.62)",  "rgba(62,230,176,0.5)"],
    Systems:   ["rgba(34,211,238,0.58)",  "rgba(62,230,176,0.5)"],
    Media:     ["rgba(255,77,205,0.6)",   "rgba(255,123,84,0.5)"],
    Meta:      ["rgba(179,155,255,0.6)",  "rgba(34,211,238,0.5)"]
  };
  function brand(key) { return BRANDS[key] || BRANDS.aurora; }

  /* Build a branded, animated landing hero.
     opts = { img, index, mark, code, title, tagline, metaPills[], brandKey } */
  function landingHero(opts) {
    var b = brand(opts.brandKey);
    var bgStyle = "background-image:url('" + opts.img + "')";
    return (
      '<div class="detail-landing" style="--brandA:' + b[0] + ';--brandB:' + b[1] + '">' +
        '<div class="dl-bg" style="' + bgStyle + '"></div>' +
        '<div class="dl-grad"></div>' +
        '<div class="dl-veil"></div>' +
        '<div class="dl-orbit" aria-hidden="true"></div>' +
        '<span class="dl-badge" aria-hidden="true">' + (opts.mark || "\u2726") + '</span>' +
        '<div class="dl-code">' + esc(opts.code) + '</div>' +
        '<h1>' + esc(opts.title) + '</h1>' +
        (opts.tagline ? '<p class="dl-tagline">' + esc(opts.tagline) + '</p>' : '') +
        (opts.metaPills && opts.metaPills.length ?
          '<div class="detail-meta">' + opts.metaPills.map(function (p) { return '<span class="pill">' + esc(p) + '</span>'; }).join("") + '</div>' : '') +
        /* hidden placeholder index label so image-prompt workflow still tracks the file */
        '<span class="dl-index-tag" hidden data-index="' + esc(opts.index) + '"></span>' +
      '</div>'
    );
  }

  function setMeta(title, desc, canonical) {
    document.title = title + " · MetaX.Academy";
    var d = document.getElementById("metaDesc"); if (d) d.setAttribute("content", desc);
    var od = document.getElementById("ogDesc"); if (od) od.setAttribute("content", desc);
    var ot = document.getElementById("ogTitle"); if (ot) ot.setAttribute("content", title + " · MetaX.Academy");
    var c = document.getElementById("metaCanonical"); if (c) c.setAttribute("href", canonical);
  }

  var type = (q("type") || "series").toLowerCase();
  var id = q("id") || "";
  var heroEl = document.getElementById("detailHero");
  var bodyEl = document.getElementById("detailBody");
  var asideEl = document.getElementById("detailAside");
  var navEl = document.getElementById("detailNav");
  var backEl = document.getElementById("backLink");

  function notFound() {
    setMeta("Not found", "The requested item could not be found.", "https://metax.academy/detail.html");
    heroEl.innerHTML = '<div class="d-code">MetaX.Academy</div><h1>Item not found</h1>';
    bodyEl.innerHTML = '<p>We couldn\u2019t find that item. It may have moved.</p>';
    navEl.innerHTML = '<a class="btn btn-primary" href="index.html">Back to MetaX \u2192</a>';
  }

  /* ---------- SERIES ---------- */
  function renderSeries() {
    var s = (typeof SERIES !== "undefined") ? SERIES.filter(function (x) { return x.n === id; })[0] : null;
    if (!s) return notFound();
    var detail = (typeof SERIES_DETAIL !== "undefined" && SERIES_DETAIL[s.n]) ? SERIES_DETAIL[s.n] : s.territory;
    var idx = "DET-S-" + s.n;
    setMeta("Series " + s.n + " — " + s.title,
      s.sub + " · " + s.territory + ". Part of the MetaX TopTech next-level stack.",
      "https://metax.academy/detail.html?type=series&id=" + s.n);
    backEl.href = "curriculum.html"; backEl.textContent = "\u2190 Full Curriculum";

    heroEl.innerHTML = landingHero({
      img: s.img, index: idx, mark: s.icon, brandKey: s.tier,
      code: "Series " + s.n + " \u00b7 " + s.tier + (s.isNew ? " \u00b7 NEW" : ""),
      title: s.title, tagline: s.sub,
      metaPills: ["Tier: " + s.tier, "\u2192 Pairs " + s.pairs, "12 courses \u00d7 6 lessons"]
    });

    bodyEl.innerHTML =
      '<h2>Core thesis</h2><p>' + esc(detail) + '</p>' +
      '<h2>Territory</h2><p>' + esc(s.territory) + '</p>' +
      '<h2>The cognitive arc</h2>' +
      '<p>Like every MetaX series, this runs the default cadence: <strong>12 courses \u00d7 6 lessons</strong>, each lesson moving through <em>What is \u00b7 Why \u00b7 How \u00b7 Lab \u00b7 Artifact \u00b7 Scenario Assessment</em>. It ships a 90-day capstone, a pre-registered hypothesis with a null, and a public post-mortem.</p>' +
      '<h2>Companion rails</h2>' +
      '<ul><li>\u2696 Compliance &amp; Ethics</li><li>\u267f Accessibility &amp; Inclusion</li><li>\ud83e\udded Decay Ledger</li><li>\ud83d\udd2c Falsifiability</li><li>\ud83d\uded1 Kill Criteria</li><li>\ud83d\udcb0 Unit Economics</li></ul>' +
      '<blockquote>Completion is attendance. Competence is evidence. Mastery is judgment under scrutiny.</blockquote>';

    navEl.innerHTML =
      '<a class="btn btn-primary" href="curriculum.html">All 23 Series \u2192</a>' +
      '<a class="btn btn-ghost" href="toptech.html#stack">Back to the Stack</a>';

    // aside: sibling series in same tier
    var siblings = SERIES.filter(function (x) { return x.tier === s.tier && x.n !== s.n; }).slice(0, 6);
    asideEl.innerHTML =
      '<div class="aside-block"><h5>More in ' + esc(s.tier) + '</h5>' +
        (siblings.length ? siblings.map(function (x) {
          return '<a href="detail.html?type=series&id=' + x.n + '">' + x.n + ' \u00b7 ' + esc(x.title) + '</a>';
        }).join("") : '<a href="curriculum.html">Browse the full curriculum</a>') +
      '</div>' +
      '<div class="aside-block"><h5>Pairs with</h5><p style="color:var(--muted);font-size:0.9rem">' + esc(s.pairs) + '</p></div>' +
      '<div class="aside-block"><h5>Jump to</h5>' +
        '<a href="toptech.html">TopTech Academy</a>' +
        '<a href="community.html">Academies Community</a>' +
        '<a href="macrolifetach.html">MacroLifeTach</a>' +
      '</div>';
    hydrate(heroEl);
  }

  /* ---------- FLAGSHIP ---------- */
  function renderFlagship() {
    var f = (typeof FLAGSHIPS !== "undefined") ? FLAGSHIPS.filter(function (x) { return x.id === id || x.code === id; })[0] : null;
    if (!f) return notFound();
    var idx = "DET-FG-" + (f.code || f.id);
    setMeta("Flagship " + f.code + " — " + f.title, f.tagline + ". " + f.territory,
      "https://metax.academy/detail.html?type=flagship&id=" + f.id);
    backEl.href = "toptech.html#flagships-sec"; backEl.textContent = "\u2190 Flagships";

    heroEl.innerHTML = landingHero({
      img: f.img, index: idx, mark: f.icon, brandKey: f.accent || "aurora",
      code: "Flagship " + f.code + " \u00b7 " + f.territory,
      title: f.title, tagline: f.tagline,
      metaPills: [f.courses, "\u23f1 " + f.hours, "Rebuilt v2026.08"]
    });

    bodyEl.innerHTML =
      '<blockquote>' + esc(f.quote) + '</blockquote>' +
      '<h2>The rebuild</h2><p>' + esc(f.thesis) + '</p>' +
      '<h2>Why it was torn down</h2>' +
      '<p>Both flagships were rebuilt to the same standard as the next-level stack \u2014 with kill criteria, unit economics, falsifiability, and an answer-engine spine. Nothing survives here on legacy authority alone.</p>' +
      '<h2>What you produce</h2>' +
      '<ul><li>Pre-registered hypotheses with explicit nulls</li><li>A 90-day operator capstone</li><li>A public post-mortem \u2014 no silent edits</li></ul>';

    navEl.innerHTML =
      '<a class="btn btn-primary" href="curriculum.html">See the Full Curriculum \u2192</a>' +
      '<a class="btn btn-ghost" href="toptech.html">Back to TopTech</a>';

    asideEl.innerHTML =
      '<div class="aside-block"><h5>The two flagships</h5>' +
        FLAGSHIPS.map(function (x) { return '<a href="detail.html?type=flagship&id=' + x.id + '">' + esc(x.code) + ' \u00b7 ' + esc(x.title) + '</a>'; }).join("") +
      '</div>' +
      '<div class="aside-block"><h5>Explore</h5>' +
        '<a href="toptech.html#stack">The Next-Level Stack</a>' +
        '<a href="curriculum.html">All 23 Series</a>' +
        '<a href="toptech.html#credential">Credentialing</a>' +
      '</div>';
    hydrate(heroEl);
  }

  /* ---------- PROGRAM (MacroLifeTach) ---------- */
  function renderProgram() {
    var p = (typeof MLT_PROGRAMS !== "undefined") ? MLT_PROGRAMS.filter(function (x) { return x.code === id; })[0] : null;
    if (!p) return notFound();
    var idx = "DET-M-" + p.code;
    setMeta(p.code + " — " + p.en, p.en + ". A Meta-X program under MacroLifeTach.",
      "https://metax.academy/detail.html?type=program&id=" + p.code);
    backEl.href = "macrolifetach.html#programs"; backEl.textContent = "\u2190 The Nine Programs";

    heroEl.innerHTML = landingHero({
      img: p.img, index: idx, mark: "\u25c9", brandKey: "emerald",
      code: "Meta-X \u00b7 Program " + p.code + (p.flagship ? " \u00b7 FLAGSHIP" : ""),
      title: p.ar, tagline: p.en,
      metaPills: p.flagship ? ["Flagship program", "MacroLifeTach"] : ["MacroLifeTach"]
    });

    bodyEl.innerHTML =
      '<h2>The program</h2><p>' + esc(p.desc) + '</p>' +
      '<h2>The Meta-X logic</h2>' +
      '<p>Every Meta-X program applies one disciplined move: replace a rigid founding assumption the age has outgrown with one drawn from life itself \u2014 adaptation, self-healing, metabolic balance, renewing memory, organic growth \u2014 and embed governance from the first moment.</p>' +
      '<h2>Governance — The Cloister (\u0627\u0644\u0631\u0648\u0627\u0642)</h2>' +
      '<ul><li>\ud83e\uddec Built-in decay clause</li><li>\ud83d\udcdc Mandatory provenance record</li><li>\ud83d\udee1 The Care Compiler</li><li>\ud83d\udeab The human-cell exclusion</li></ul>' +
      '<blockquote>One logic, many arenas. Progress is never bought with human dignity.</blockquote>';

    navEl.innerHTML =
      '<a class="btn btn-primary" href="macrolifetach.html#programs">All Nine Programs \u2192</a>' +
      '<a class="btn btn-ghost" href="macrolifetach.html">Back to MacroLifeTach</a>';

    var others = MLT_PROGRAMS.filter(function (x) { return x.code !== p.code; }).slice(0, 6);
    asideEl.innerHTML =
      '<div class="aside-block"><h5>Other programs</h5>' +
        others.map(function (x) { return '<a href="detail.html?type=program&id=' + x.code + '">' + esc(x.code) + ' \u00b7 ' + esc(x.en) + '</a>'; }).join("") +
      '</div>' +
      '<div class="aside-block"><h5>Meta-X</h5>' +
        '<a href="macrolifetach.html#crises">The Eight Crises</a>' +
        '<a href="macrolifetach.html#governance">The Cloister</a>' +
      '</div>';
    hydrate(heroEl);
  }

  if (type === "series") renderSeries();
  else if (type === "flagship") renderFlagship();
  else if (type === "program") renderProgram();
  else notFound();

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
    (adsbygoogle = window.adsbygoogle || []).push({});
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {}
})();
