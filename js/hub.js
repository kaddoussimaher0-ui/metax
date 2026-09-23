/* =====================================================================
   MetaX.Academy — Hub landing renderer (pillar hubs + group hubs)
   ---------------------------------------------------------------------
   A hub shell looks like:

     <main id="mx-hub" data-hub="/toptech/" data-md="/content/toptech/_hub.md"></main>

   hub.js renders a landing page: hero, an auto-generated card grid of the
   pillar's group hubs (or a group's leaf pages) read from window.MX_ROUTES,
   then appends the hub's prose ("Map" + meta sections) parsed from its MD
   file by the shared md-page parser. This keeps card grids always accurate
   (no invented counts) while the prose stays authored and expandable.

   Load order:  routes.js -> chrome.js -> md-page.js -> hub.js
   ===================================================================== */
(function () {
  "use strict";

  var R = window.MX_ROUTES;
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function badge(b) { return b ? ' <span class="mm-badge mmb-' + b + '">' + b.replace(/-/g, " ") + "</span>" : ""; }

  function findPillar(path) { return R.MENU.filter(function (m) { return m.href === path; })[0]; }
  function findGroup(path) {
    var hit = null;
    R.MENU.forEach(function (m) { (m.groups || []).forEach(function (g) { if (g.hub === path) hit = { pillar: m, group: g }; }); });
    return hit;
  }

  var GLYPHS = ["\u2726", "\u2b21", "\u25c9", "\u22a2", "\u2192", "\u263c", "\u269b", "\u25c8", "\u2261", "\u29bf", "\u2318", "\u2295"];

  function cardGrid(items, base) {
    return '<div class="feature-grid cols-3 mx-hub-cards">' + items.map(function (it, idx) {
      return '<article class="feature mx-hub-card">' +
        '<span class="f-glyph" aria-hidden="true">' + GLYPHS[idx % GLYPHS.length] + "</span>" +
        "<h3>" + esc(it.title) + badge(it.badge) + "</h3>" +
        (it.blurb ? "<p>" + esc(it.blurb) + "</p>" : "") +
        '<a class="card-link" href="' + it.url + '">' + esc(it.cta || "Open") + " \u2192</a></article>";
    }).join("") + "</div>";
  }

  function heroHTML(label, ar, blurb, badgeV) {
    return '<section class="hero wrap mx-hub-hero">' +
      '<div class="hero-orbit" aria-hidden="true"></div>' +
      '<span class="eyebrow">\u2726 ' + esc(label) + (ar ? ' \u00b7 <span dir="rtl">' + esc(ar) + "</span>" : "") + "</span>" +
      "<h1>" + esc(label) + (badgeV ? badge(badgeV) : "") + "</h1>" +
      '<p class="lead">' + esc(blurb || "") + "</p>" +
      '<div class="tri-glyphs" aria-hidden="true">\u2726 \u2b21 \u25c9</div>' +
      "</section>" +
      '<div class="marquee" aria-hidden="true"><div class="marquee-track">' +
        '<span>Sidq</span><span>Falsifiability</span><span>Declared limits</span><span>Correctability</span><span>Decay-aware</span><span>Public record</span>' +
        '<span>Sidq</span><span>Falsifiability</span><span>Declared limits</span><span>Correctability</span><span>Decay-aware</span><span>Public record</span>' +
      "</div></div>";
  }

  function boot() {
    var host = document.getElementById("mx-hub");
    if (!host || !R) return;
    var path = host.getAttribute("data-hub") || location.pathname;
    var md = host.getAttribute("data-md");

    var hero = "", cardsSection = "", label, ar, blurb, badgeV;

    var pillar = findPillar(path);
    if (pillar) {
      label = pillar.label; ar = pillar.ar; blurb = pillar.blurb; badgeV = pillar.badge;
      var groupCards = (pillar.groups || []).map(function (g) {
        return { title: g.heading, url: g.hub, badge: g.badge,
          blurb: g.links.length + " pages \u00b7 " + g.links.slice(0, 2).map(function (l) { return l.t; }).join(", ") + "\u2026",
          cta: "Enter" };
      });
      hero = heroHTML(label, ar, blurb, badgeV);
      cardsSection = '<section class="wrap reveal"><span class="eyebrow">\u2192 The groups</span>' +
        '<h2 class="section-title">What lives <span class="gradient-text">inside ' + esc(label) + ".</span></h2>" +
        '<p class="section-lead">' + esc(pillar.groups.length) + " groups, each a hub of its own with detailed leaf pages. Every card resolves to a real route.</p>" +
        cardGrid(groupCards, path) + "</section>";
    } else {
      var g = findGroup(path);
      if (g) {
        label = g.group.heading; ar = g.pillar.ar; blurb = g.pillar.blurb; badgeV = g.group.badge;
        var leafCards = g.group.links.map(function (l) { return { title: l.t, url: l.u, cta: l.ext ? "Open (external)" : "Read" }; });
        hero = '<section class="hero wrap mx-hub-hero"><div class="hero-orbit" aria-hidden="true"></div>' +
          '<span class="eyebrow">\u2726 ' + esc(g.pillar.label) + " \u00b7 " + esc(label) + "</span>" +
          "<h1>" + esc(label) + badge(badgeV) + "</h1>" +
          '<p class="lead">Every detailed page in this group, and how they fit together.</p>' +
          '<p class="mx-pagestamp"><a href="' + g.pillar.href + '">\u2191 ' + esc(g.pillar.label) + " hub</a></p></section>" +
          '<div class="marquee" aria-hidden="true"><div class="marquee-track"><span>Sidq</span><span>Falsifiability</span><span>Declared limits</span><span>Correctability</span><span>Sidq</span><span>Falsifiability</span><span>Declared limits</span><span>Correctability</span></div></div>';
        cardsSection = '<section class="wrap reveal"><span class="eyebrow">\u2192 The pages</span>' +
          '<h2 class="section-title">The <span class="gradient-text">' + esc(label) + "</span> pages.</h2>" +
          '<p class="section-lead">' + esc(g.group.links.length) + " detailed pages in this group.</p>" +
          cardGrid(leafCards, path) + "</section>";
      } else {
        hero = heroHTML("MetaX", "", "This hub is being written.", null);
      }
    }

    host.innerHTML = hero + cardsSection + '<div id="mx-hub-prose"></div>';
    if (window.MX && MX.observeReveal) MX.observeReveal(host);

    // Append authored prose (Map + meta sections) via the shared MD parser.
    if (md && window.__mdPage) {
      fetch(md).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
        .then(function (t) {
          var mount = document.getElementById("mx-hub-prose");
          // Reuse md-page render but strip its hero (hub already has one): render into temp, keep sections.
          var tmp = document.createElement("div");
          window.__mdPage.render(tmp, t);
          // Keep everything after the hero + marquee (i.e. the .mx-sec sections + related + exitpair).
          tmp.querySelectorAll(".mx-doc-hero, .marquee").forEach(function (n) { n.remove(); });
          mount.innerHTML = tmp.innerHTML;
          if (window.MX && MX.observeReveal) MX.observeReveal(mount);
        })
        .catch(function () { /* prose optional for hubs */ });
    }
  }

  window.__hub = { boot: boot };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
