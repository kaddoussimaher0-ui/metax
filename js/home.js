/* =====================================================================
   MetaX.Academy — Root landing page (#pillars grid)
   ---------------------------------------------------------------------
   Renders the nine pillar cards on the root index.html from the canonical
   window.MX_ROUTES.MENU array. No invented counts: each card's page count
   is derived live from the pillar's own groups + leaves and carries a
   data-count-src attribute pointing at the routes truth.

   Load order:  routes.js -> skeleton.js -> chrome.js -> home.js
   ===================================================================== */
(function () {
  "use strict";

  var R = window.MX_ROUTES;
  var host = document.getElementById("pillars");
  if (!R || !host) return;

  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function badge(b) { return b ? ' <span class="mm-badge mmb-' + b + '">' + b.replace(/-/g, " ") + "</span>" : ""; }

  /* Deterministic glyph per pillar (design vocabulary, not decoration only). */
  var GLYPH = {
    toptech: "\u2318", method: "\u269b", ascent: "\u2b06", metax: "\u25c8",
    academies: "\u2302", credentials: "\u25c9", library: "\u2261",
    license: "\u2696", about: "\u2726"
  };

  /* Count the routes owned by a pillar, straight from MX_ROUTES (no invented numbers). */
  function pillarCount(m) {
    var groups = (m.groups || []).length;
    var leaves = 0;
    (m.groups || []).forEach(function (g) {
      (g.links || []).forEach(function (l) { if (!l.ext) leaves++; });
    });
    return { groups: groups, leaves: leaves, total: groups + leaves + 1 };
  }

  var cards = R.MENU.map(function (m) {
    var c = pillarCount(m);
    var glyph = GLYPH[m.key] || "\u2726";
    return '<article class="feature mx-pillar-card">' +
      '<span class="f-glyph" aria-hidden="true">' + glyph + "</span>" +
      "<h3>" + esc(m.label) + badge(m.badge) + "</h3>" +
      "<p>" + esc(m.blurb || "") + "</p>" +
      '<p class="mx-pillar-count" data-count-src="MX_ROUTES.MENU[' + esc(m.key) + ']">' +
        c.groups + " group" + (c.groups === 1 ? "" : "s") + " \u00b7 " +
        c.leaves + " page" + (c.leaves === 1 ? "" : "s") + "</p>" +
      '<a class="card-link" href="' + m.href + '">Enter ' + esc(m.label) + " \u2192</a>" +
      "</article>";
  }).join("");

  host.innerHTML = cards;

  if (window.MX && MX.observeReveal) MX.observeReveal(document.body);
  if (window.__hydrateImgSlots) window.__hydrateImgSlots();
})();
