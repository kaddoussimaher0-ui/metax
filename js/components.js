/* =====================================================================
   MetaX.Academy — Reusable chrome components (single source of truth)
   ---------------------------------------------------------------------
   Renders the shared HEADER and FOOTER into <div id="site-header"></div>
   and <div id="site-footer"></div> placeholders, so the markup lives in
   ONE place. Change it here and every page updates.

   LOAD ORDER (important): load this file BEFORE js/site.js so the header
   DOM (.nav-inner, .nav-links, .nav-cta, #mobileMenu) exists before
   site.js injects the mega-menu + search into it.

   Per-page overrides (optional): define a global SITE_PAGE object BEFORE
   this script, e.g.:
     <script>window.SITE_PAGE = { ver: "NEWS", cta: {label:"← Home", href:"index.html"} };</script>
   ===================================================================== */
(function () {
  "use strict";

  var CFG = (window.SITE_PAGE || {});
  var VER = CFG.ver || "UNIVERSE · v2026.08";
  var CTA = CFG.cta || { label: "Choose Your Path", href: "index.html#pillars-sec" };

  /* ---------------- HEADER ----------------
     Renders the outer chrome only. js/site.js fills .nav-links (mega-menu),
     #mobileMenu, and inserts the search button. */
  function headerHTML() {
    return (
      '<header class="nav">' +
        '<div class="wrap nav-inner">' +
          '<a href="index.html" class="brand" aria-label="MetaX Academy home">' +
            '<span class="mark">\u2726</span>' +
            '<span class="name"><b>MetaX</b>.Academy<span class="ver">' + VER + '</span></span>' +
          '</a>' +
          '<nav class="nav-links" aria-label="Primary"></nav>' +
          '<a href="' + CTA.href + '" class="nav-cta">' + CTA.label + '</a>' +
          '<button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">\u2261</button>' +
        '</div>' +
        '<div class="mobile-menu" id="mobileMenu"></div>' +
      '</header>'
    );
  }

  /* ---------------- FOOTER ---------------- */
  function footerHTML() {
    var year = new Date().getFullYear();
    return (
      '<footer class="footer">' +
        '<div class="wrap footer-grid">' +
          '<div class="foot-col">' +
            '<a href="index.html" class="brand"><span class="mark">\u2726</span><span class="name"><b>MetaX</b>.Academy</span></a>' +
            '<p>One universe, three pillars: the TopTech operator curriculum, the Academies Community, and MacroLifeTach. Curated by Maher.</p>' +
          '</div>' +
          '<div class="foot-col">' +
            '<h5>Pillars</h5>' +
            '<a href="toptech.html">TopTech Academy</a>' +
            '<a href="community.html">Academies Community</a>' +
            '<a href="macrolifetach.html">MacroLifeTach</a>' +
          '</div>' +
          '<div class="foot-col">' +
            '<h5>Explore</h5>' +
            '<a href="curriculum.html">Full Curriculum</a>' +
            '<a href="news.html">Academy News</a>' +
            '<a href="about.html">About</a>' +
          '</div>' +
          '<div class="foot-col">' +
            '<h5>The Corpus</h5>' +
            '<a href="charter.html">The Charter</a>' +
            '<a href="about-universe.html">What MetaX Is</a>' +
            '<a href="about-dna.html">The Shared DNA</a>' +
            '<a href="about-mission.html">The Standard of Mastery</a>' +
            '<a href="about-what-metax-is-not.html">What MetaX Is Not</a>' +
            '<a href="about-static.html">The Static Principle</a>' +
            '<a href="about-funding.html">How It Is Funded</a>' +
            '<a href="about-governance.html">Governance &amp; Roles</a>' +
          '</div>' +
        '</div>' +
        '<div class="wrap foot-bottom">' +
          '<span>\u00a9 <span id="year">' + year + '</span> MetaX.Academy \u00b7 Universe v2026.09.2</span>' +
          '<nav class="foot-legal" aria-label="Legal">' +
            '<a href="about.html">About</a><span class="sep">\u00b7</span>' +
            '<a href="contact.html">Contact</a><span class="sep">\u00b7</span>' +
            '<a href="privacy.html">Privacy</a><span class="sep">\u00b7</span>' +
            '<a href="terms.html">Terms</a>' +
          '</nav>' +
          '<span class="glyphs">\u2726 \u2b21 \u25c9 \u22a2 \u2192</span>' +
        '</div>' +
      '</footer>'
    );
  }

  function render() {
    var h = document.getElementById("site-header");
    if (h) h.outerHTML = headerHTML();
    var f = document.getElementById("site-footer");
    if (f) f.outerHTML = footerHTML();
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();

  window.__components = { render: render, headerHTML: headerHTML, footerHTML: footerHTML };
})();
