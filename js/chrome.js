/* =====================================================================
   MetaX.Academy — Shared chrome (header · mega-menu · mobile menu ·
   utility bar · search modal · footer · demo strip)
   MX-NAV-SPEC v2026.10.1 · root-absolute paths · reads window.MX_ROUTES.

   Load order on every page:
     routes.js  ->  chrome.js  ->  (hub.js | md-page.js)
   ===================================================================== */
(function () {
  "use strict";

  var R = window.MX_ROUTES;
  if (!R) { if (window.console) console.error("chrome.js: MX_ROUTES missing"); return; }
  var MENU = R.MENU, UTILITY = R.UTILITY;
  var CFG = window.SITE_PAGE || {};
  var VER = CFG.ver || "MetaX · v2026.10";

  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function badge(b) {
    if (!b) return "";
    return ' <span class="mm-badge mmb-' + b + '">' + b.replace(/-/g, " ") + "</span>";
  }

  /* ---------------- HEADER ---------------- */
  function headerHTML() {
    var active = R.navKeyFor();

    var mega = MENU.map(function (m) {
      var isA = m.key === active ? " active" : "";
      var cols = (m.groups || []).map(function (g) {
        var head = g.hub
          ? '<h6><a class="mm-hub" href="' + g.hub + '">' + esc(g.heading) + "</a>" + badge(g.badge) + "</h6>"
          : "<h6>" + esc(g.heading) + badge(g.badge) + "</h6>";
        var ls = g.links.map(function (l) {
          return '<a href="' + l.u + '"' + (l.ext ? ' target="_blank" rel="noopener"' : "") + ">" + esc(l.t) + "</a>";
        }).join("");
        return '<div class="mm-group">' + head + ls + "</div>";
      }).join("");
      var intro = '<div class="mm-intro"><span class="mm-intro-label">' + esc(m.label) + badge(m.badge) +
        "</span><p>" + esc(m.blurb || "") + '</p><a class="mm-intro-cta" href="' + m.href + '">Open ' + esc(m.label) + " \u2192</a></div>";
      var panel = '<div class="mm-panel"><div class="mm-panel-wrap"><div class="mm-panel-inner">' +
        intro + '<div class="mm-cols">' + cols + "</div></div></div></div>";
      return '<div class="mm-item has-panel">' +
        '<a class="mm-top' + isA + '" href="' + m.href + '" aria-haspopup="true" aria-expanded="false">' + esc(m.label) +
        badge(m.badge) + ' <span class="mm-caret" aria-hidden="true">\u25be</span></a>' + panel + "</div>";
    }).join("");

    var util = UTILITY.map(function (u) {
      return '<a class="util-link ' + (u.cls || "") + '" href="' + u.u + '"' + (u.ext ? ' target="_blank" rel="noopener"' : "") +
        ' aria-label="' + esc(u.t) + '"><span aria-hidden="true">' + (u.glyph || "") +
        '</span> <span class="ul-word">' + esc(u.t) + "</span></a>";
    }).join("");
    util += '<button class="nav-search-btn" id="searchOpen" aria-label="Search MetaX.Academy">' +
      '<span aria-hidden="true">\u2315</span><span class="ul-word nsb-label">Search</span><kbd>/</kbd></button>';

    var mobile = '<div class="mm-mobile-util">' +
      UTILITY.map(function (u) { return '<a href="' + u.u + '"' + (u.ext ? ' target="_blank" rel="noopener"' : "") + ">" + esc(u.t) + "</a>"; }).join("") +
      '<button id="searchOpenM" type="button">\u2315 Search</button></div>';
    mobile += MENU.map(function (m) {
      var isA = m.key === active ? " active" : "";
      var sub = (m.groups || []).map(function (g) {
        var h = g.hub ? '<a class="mm-m-hub" href="' + g.hub + '">' + esc(g.heading) + " \u203a</a>" : "";
        return h + g.links.map(function (l) { return '<a class="mm-m-sub" href="' + l.u + '">' + esc(l.t) + "</a>"; }).join("");
      }).join("");
      return '<div class="mm-m-group"><button class="mm-m-toggle' + isA + '" type="button" aria-expanded="false">' +
        esc(m.label) + badge(m.badge) + '<span class="mm-m-caret">\u25be</span></button>' +
        '<div class="mm-m-panel">' + sub + "</div></div>";
    }).join("");

    return '<header class="nav">' +
      '<div class="wrap nav-inner">' +
        '<a href="/" class="brand" aria-label="MetaX Academy home">' +
          '<span class="mark" aria-hidden="true">\u2726</span>' +
          '<span class="name"><span class="brand-title"><b>MetaX</b>.Academy</span>' +
          '<span class="ver">' + esc(VER) + "</span></span></a>" +
        '<nav class="nav-links mega" aria-label="Primary">' + mega + "</nav>" +
        '<div class="nav-utility">' + util + "</div>" +
        '<button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">\u2261</button>' +
      "</div>" +
      '<div class="mobile-menu" id="mobileMenu">' + mobile + "</div>" +
    "</header>";
  }

  /* ---------------- DEMO STRIP (§6.4) ---------------- */
  function demoHTML() {
    var path = location.pathname;
    var forced = /^\/(license|about\/status|metax\/bcia)/.test(path.replace(/^\/ar/, ""));
    if (!forced && sessionStorage.getItem("mx-demo-dismiss") === "1") return "";
    return '<div class="mx-demo" role="note">' +
      "<strong>Demo build.</strong> This estate is under construction. Counts, catalogues and statuses render " +
      "from dated data files; prose marked <em>scaffold</em> has not been reviewed. " +
      '<a href="/about/universe/demo-notice/">What is real and what is not \u2192</a>' +
      (forced ? "" : '<button class="mx-demo-x" type="button" aria-label="Dismiss for this session">\u2715</button>') +
      "</div>";
  }

  /* ---------------- FOOTER (§8.1) ---------------- */
  function footerHTML() {
    var y = new Date().getFullYear();
    function col(title, links) {
      return '<div class="foot-col"><h5>' + title + "</h5>" +
        links.map(function (l) { return '<a href="' + l[1] + '">' + esc(l[0]) + "</a>"; }).join("") + "</div>";
    }
    return '<footer class="footer"><div class="wrap footer-grid">' +
      '<div class="foot-col foot-brand"><a href="/" class="brand"><span class="mark">\u2726</span>' +
        '<span class="name"><b>MetaX</b>.Academy</span></a>' +
        "<p>One estate, nine pillars, one standard of mastery: every substantive claim carries what a stranger " +
        "needs to find out it is wrong. Curated by Maher.</p></div>" +
      col("Pillars", [["TopTech","/toptech/"],["Method","/method/"],["Ascent","/ascent/"],["Meta-X","/metax/"],["Academies","/academies/"],["Credentials","/credentials/"]]) +
      col("Explore", [["Placement Diagnostic","/toptech/start/diagnostic/"],["Full Catalog","/toptech/catalog/"],["Verify a Credential","/credentials/verify/lookup/"],["Lexicon","/library/lexicon/"],["News","/library/news/"],["Search","/search/"]]) +
      col("Governance", [["ML-2.3","/license/ml-2-3/"],["The 25 Harms","/license/harms/"],["Part H Statement","/license/statement/ours/"],["Estate Status","/about/status/"],["Defect Log","/about/status/defects/"],["Accessibility","/about/policy/accessibility/"]]) +
      col("Estate", [["About","/about/"],["Demo Notice","/about/universe/demo-notice/"],["Pricing","/about/access/pricing/"],["Contact","/about/legal/contact/"],["Privacy","/about/legal/privacy/"],["Terms","/about/legal/terms/"],["Sitemap","/search/"]]) +
      "</div>" +
      '<div class="wrap foot-bottom">' +
        "<span>\u00a9 " + y + " MetaX.Academy \u00b7 Curated by Maher</span>" +
        "<span>" + esc(VER) + "</span>" +
        '<span class="glyphs" aria-hidden="true">\u2726 \u2b21 \u25c9 \u22a2 \u2192</span>' +
      "</div></footer>";
  }

  /* ---------------- SEARCH MODAL ---------------- */
  var _index = null, _loading = false;
  function loadIndex(cb) {
    if (_index) { cb(_index); return; }
    if (_loading) { setTimeout(function () { loadIndex(cb); }, 120); return; }
    _loading = true;
    // Prefer a generated JSON; fall back to routes.js flatten so search never breaks.
    fetch("/data/search-index.json").then(function (r) {
      if (!r.ok) throw new Error("no index");
      return r.json();
    }).then(function (j) { _index = j; cb(_index); })
      .catch(function () { _index = R.allRoutes(); cb(_index); });
  }
  function searchModalHTML() {
    return '<div class="search-modal" id="searchModal" aria-hidden="true">' +
      '<div class="search-backdrop" data-close="1"></div>' +
      '<div class="search-box" role="dialog" aria-modal="true" aria-label="Search">' +
        '<div class="search-top"><span aria-hidden="true">\u2315</span>' +
        '<input type="search" id="searchInput" placeholder="Search 321 routes\u2026 (title, pillar, section)" autocomplete="off">' +
        '<button id="searchClose" aria-label="Close search">\u2715</button></div>' +
        '<div class="search-results" id="searchResults"></div>' +
        '<div class="search-foot">Type to filter \u00b7 <a href="/search/">Browse all routes \u2192</a></div>' +
      "</div></div>";
  }
  function wireSearch() {
    var modal = document.getElementById("searchModal");
    var input = document.getElementById("searchInput");
    var res = document.getElementById("searchResults");
    if (!modal) return;
    function open() {
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      loadIndex(function () { render(""); });
      setTimeout(function () { input && input.focus(); }, 30);
    }
    function close() { modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
    function render(q) {
      if (!_index) { res.innerHTML = '<p class="search-empty">Loading index\u2026</p>'; return; }
      q = (q || "").trim().toLowerCase();
      var rows = _index;
      if (q) {
        rows = _index.filter(function (r) {
          return (r.title + " " + (r.cat || "") + " " + (r.group || "") + " " + (r.blurb || "")).toLowerCase().indexOf(q) > -1;
        });
      }
      rows = rows.slice(0, 40);
      if (!rows.length) { res.innerHTML = '<p class="search-empty">No routes match \u201c' + esc(q) + "\u201d.</p>"; return; }
      res.innerHTML = rows.map(function (r) {
        return '<a class="search-hit" href="' + r.url + '"><span class="sh-cat">' + esc(r.cat || "") + "</span>" +
          '<span class="sh-title">' + esc(r.title) + '</span><span class="sh-url">' + esc(r.url) + "</span></a>";
      }).join("");
    }
    ["searchOpen", "searchOpenM"].forEach(function (id) {
      var b = document.getElementById(id); if (b) b.addEventListener("click", open);
    });
    var c = document.getElementById("searchClose"); if (c) c.addEventListener("click", close);
    modal.addEventListener("click", function (e) { if (e.target.dataset.close) close(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && modal.getAttribute("aria-hidden") === "true" &&
          !/input|textarea|select/i.test((e.target.tagName || ""))) { e.preventDefault(); open(); }
      if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") close();
    });
    if (input) input.addEventListener("input", function () { render(input.value); });
  }

  /* ---------------- Interactions ---------------- */
  function wireMobileToggle() {
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("mobileMenu");
    if (!toggle || !menu || toggle.dataset.wired) return;
    toggle.dataset.wired = "1";
    function setOpen(open) {
      menu.classList.toggle("open", open);
      toggle.classList.toggle("is-open", open);
      toggle.textContent = open ? "\u2715" : "\u2261";
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    }
    toggle.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); setOpen(!menu.classList.contains("open")); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    menu.querySelectorAll(".mm-m-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var g = btn.parentNode, open = g.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menu.classList.contains("open")) setOpen(false); });
    document.addEventListener("click", function (e) {
      if (!menu.classList.contains("open")) return;
      if (e.target.closest("#mobileMenu") || e.target.closest("#navToggle")) return;
      setOpen(false);
    });
    if (window.matchMedia) window.matchMedia("(min-width: 1180px)").addEventListener("change", function (ev) { if (ev.matches) setOpen(false); });
  }

  function wireMega() {
    if (window.matchMedia && !window.matchMedia("(hover: hover)").matches) {
      // Touch: tap toggles the panel.
      document.querySelectorAll(".nav-links.mega .mm-item.has-panel .mm-top").forEach(function (top) {
        top.addEventListener("click", function (e) {
          e.preventDefault();
          var item = top.closest(".mm-item"), open = item.classList.toggle("open");
          top.setAttribute("aria-expanded", open ? "true" : "false");
        });
      });
      return;
    }
    var items = document.querySelectorAll(".nav-links.mega .mm-item.has-panel");
    var timer = null;
    function closeAll(except) { items.forEach(function (o) { if (o !== except) { o.classList.remove("open"); var t = o.querySelector(".mm-top"); if (t) t.setAttribute("aria-expanded", "false"); } }); }
    items.forEach(function (item) {
      var top = item.querySelector(".mm-top");
      item.addEventListener("mouseenter", function () { if (timer) { clearTimeout(timer); timer = null; } item.classList.add("open"); top.setAttribute("aria-expanded", "true"); closeAll(item); });
      item.addEventListener("mouseleave", function () { timer = setTimeout(function () { item.classList.remove("open"); top.setAttribute("aria-expanded", "false"); }, 160); });
    });
  }

  function wireDemo() {
    var x = document.querySelector(".mx-demo-x");
    if (x) x.addEventListener("click", function () {
      sessionStorage.setItem("mx-demo-dismiss", "1");
      var strip = x.closest(".mx-demo"); if (strip) strip.remove();
    });
  }

  function render() {
    var h = document.getElementById("site-header");
    if (h) h.outerHTML = headerHTML();
    // Demo strip immediately after header.
    var hdr = document.querySelector("header.nav");
    if (hdr) { var d = document.createElement("div"); d.innerHTML = demoHTML(); if (d.firstChild) hdr.insertAdjacentElement("afterend", d.firstChild); }
    var f = document.getElementById("site-footer");
    if (f) f.outerHTML = footerHTML();
    // Search modal appended to body.
    if (!document.getElementById("searchModal")) {
      var s = document.createElement("div"); s.innerHTML = searchModalHTML(); document.body.appendChild(s.firstChild);
    }
    wireMobileToggle(); wireMega(); wireSearch(); wireDemo();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();

  window.__chrome = { render: render };
})();
