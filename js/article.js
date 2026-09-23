/* =====================================================================
   MetaX.Academy — Article page
   Reads ?id=<slug>, looks it up in NEWS_POSTS, fetches its Markdown body
   from content/news/<slug>.md, parses it client-side, and renders the
   article with a hero image-slot placeholder + an animated aside.
   ===================================================================== */
(function () {
  "use strict";

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function q(name) { return new URLSearchParams(location.search).get(name); }
  function fmtDate(d) { try { return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }); } catch (e) { return d; } }

  function catName(slug) {
    var c = (typeof NEWS_CATEGORIES !== "undefined" ? NEWS_CATEGORIES : []).filter(function (x) { return x.slug === slug; })[0];
    return c ? c.name : slug;
  }
  function catGlyph(slug) {
    var c = (typeof NEWS_CATEGORIES !== "undefined" ? NEWS_CATEGORIES : []).filter(function (x) { return x.slug === slug; })[0];
    return c ? c.glyph : "\u2726";
  }

  function imgSlot(src, index, mark) {
    return (
      '<span class="img-slot" data-index="' + esc(index) + '">' +
        '<span class="img-tag">' + esc(index) + '</span>' +
        '<span class="img-mark">' + (mark || "\u2726") + '</span>' +
        '<img alt="" loading="lazy" data-src="' + esc(src) + '" />' +
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

  function setMeta(title, desc, canonical) {
    document.title = title + " · MetaX.Academy News";
    var d = document.getElementById("metaDesc"); if (d) d.setAttribute("content", desc);
    var od = document.getElementById("ogDesc"); if (od) od.setAttribute("content", desc);
    var ot = document.getElementById("ogTitle"); if (ot) ot.setAttribute("content", title + " · MetaX.Academy");
    var c = document.getElementById("metaCanonical"); if (c) c.setAttribute("href", canonical);
  }

  /* ---------- Tiny, safe Markdown parser ----------
     Escapes HTML first, then applies a small, predictable subset:
     # headings, blockquotes, lists (ul/ol), --- rules, **bold**, *italic*,
     `code`, [links](url), and paragraphs. Good enough for editorial posts. */
  function inline(t) {
    // already-escaped text in; add inline formatting
    t = t.replace(/`([^`]+)`/g, function (_, c) { return "<code>" + c + "</code>"; });
    t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    t = t.replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
    t = t.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, txt, url) {
      var safe = /^(https?:|mailto:|#|[\w./?=&%-]+\.html)/.test(url) ? url : "#";
      var ext = /^https?:/.test(safe) ? ' target="_blank" rel="noopener"' : "";
      return '<a href="' + safe + '"' + ext + '>' + txt + "</a>";
    });
    return t;
  }

  function mdToHtml(md) {
    var lines = String(md).replace(/\r\n/g, "\n").split("\n");
    var out = [], i = 0;
    function flushList(tag, items) { out.push("<" + tag + ">" + items.map(function (x) { return "<li>" + inline(esc(x)) + "</li>"; }).join("") + "</" + tag + ">"); }
    while (i < lines.length) {
      var line = lines[i];
      if (/^\s*$/.test(line)) { i++; continue; }
      // countdown directive: [[countdown: 2026-09-01T09:00:00Z | Label text]]
      var cd = line.match(/^\s*\[\[\s*countdown\s*:\s*([^|\]]+?)\s*(?:\|\s*([^\]]*?))?\s*\]\]\s*$/i);
      if (cd) {
        var iso = esc(cd[1].trim());
        var label = esc((cd[2] || "Countdown").trim());
        out.push(
          '<div class="countdown" data-deadline="' + iso + '" role="timer" aria-live="polite">' +
            '<div class="cd-label">\u23F1 ' + label + '</div>' +
            '<div class="cd-clock" aria-hidden="false">' +
              '<div class="cd-cell"><span class="cd-n" data-u="d">--</span><span class="cd-u">days</span></div>' +
              '<div class="cd-cell"><span class="cd-n" data-u="h">--</span><span class="cd-u">hrs</span></div>' +
              '<div class="cd-cell"><span class="cd-n" data-u="m">--</span><span class="cd-u">min</span></div>' +
              '<div class="cd-cell"><span class="cd-n" data-u="s">--</span><span class="cd-u">sec</span></div>' +
            '</div>' +
          '</div>'
        );
        i++; continue;
      }
      // horizontal rule
      if (/^\s*---+\s*$/.test(line)) { out.push("<hr />"); i++; continue; }
      // headings
      var h = line.match(/^(#{1,4})\s+(.*)$/);
      if (h) { var lvl = h[1].length; out.push("<h" + lvl + ">" + inline(esc(h[2])) + "</h" + lvl + ">"); i++; continue; }
      // blockquote (one or more consecutive > lines)
      if (/^\s*>\s?/.test(line)) {
        var quote = [];
        while (i < lines.length && /^\s*>\s?/.test(lines[i])) { quote.push(lines[i].replace(/^\s*>\s?/, "")); i++; }
        out.push("<blockquote>" + inline(esc(quote.join(" "))) + "</blockquote>");
        continue;
      }
      // unordered list
      if (/^\s*[-*+]\s+/.test(line)) {
        var ul = [];
        while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i])) { ul.push(lines[i].replace(/^\s*[-*+]\s+/, "")); i++; }
        flushList("ul", ul); continue;
      }
      // ordered list
      if (/^\s*\d+\.\s+/.test(line)) {
        var ol = [];
        while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) { ol.push(lines[i].replace(/^\s*\d+\.\s+/, "")); i++; }
        flushList("ol", ol); continue;
      }
      // paragraph (gather until blank line)
      var para = [];
      while (i < lines.length && !/^\s*$/.test(lines[i]) &&
             !/^(#{1,4})\s/.test(lines[i]) && !/^\s*>/.test(lines[i]) &&
             !/^\s*[-*+]\s/.test(lines[i]) && !/^\s*\d+\.\s/.test(lines[i]) &&
             !/^\s*---+\s*$/.test(lines[i])) { para.push(lines[i]); i++; }
      out.push("<p>" + inline(esc(para.join(" "))) + "</p>");
    }
    return out.join("\n");
  }

  /* ---------- Countdown timers ----------
     Finds every .countdown injected by mdToHtml and ticks it once per second.
     When the deadline passes it flips to a "live now" state. */
  function wireCountdowns(root) {
    var nodes = (root || document).querySelectorAll(".countdown[data-deadline]");
    if (!nodes.length) return;
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function tick() {
      var now = Date.now();
      nodes.forEach(function (el) {
        var t = Date.parse(el.getAttribute("data-deadline"));
        if (isNaN(t)) { el.classList.add("cd-invalid"); return; }
        var diff = Math.floor((t - now) / 1000);
        var cells = {};
        el.querySelectorAll(".cd-n").forEach(function (s) { cells[s.getAttribute("data-u")] = s; });
        if (diff <= 0) {
          el.classList.add("cd-done");
          if (cells.d) cells.d.textContent = "00";
          if (cells.h) cells.h.textContent = "00";
          if (cells.m) cells.m.textContent = "00";
          if (cells.s) cells.s.textContent = "00";
          var lbl = el.querySelector(".cd-label");
          if (lbl && !el.dataset.doneShown) { el.dataset.doneShown = "1"; lbl.textContent = "\u2714 " + lbl.textContent.replace(/^\u23F1\s*/, "") + " \u2014 live now"; }
          return;
        }
        var d = Math.floor(diff / 86400);
        var h = Math.floor((diff % 86400) / 3600);
        var m = Math.floor((diff % 3600) / 60);
        var s = diff % 60;
        if (cells.d) cells.d.textContent = pad(d);
        if (cells.h) cells.h.textContent = pad(h);
        if (cells.m) cells.m.textContent = pad(m);
        if (cells.s) cells.s.textContent = pad(s);
      });
    }
    tick();
    setInterval(tick, 1000);
  }

  var slug = q("id") || "";
  var post = (typeof NEWS_POSTS !== "undefined") ? NEWS_POSTS.filter(function (p) { return p.slug === slug; })[0] : null;

  var heroEl = document.getElementById("artHero");
  var headEl = document.getElementById("artHead");
  var bodyEl = document.getElementById("artBody");
  var asideEl = document.getElementById("artAside");
  var tagsEl = document.getElementById("artTags");

  if (!post) {
    setMeta("Article not found", "This article could not be found.", "https://metax.academy/news.html");
    if (headEl) headEl.innerHTML = '<span class="art-cat">News</span><h1>Article not found</h1>';
    if (bodyEl) bodyEl.innerHTML = '<p>We couldn\u2019t find that article. <a href="news.html">Back to Academy News \u2192</a></p>';
    return;
  }

  setMeta(post.title, post.excerpt, "https://metax.academy/article.html?id=" + post.slug);

  if (heroEl) { heroEl.innerHTML = imgSlot(post.img, post.imgIndex, catGlyph(post.category)); hydrate(heroEl); }
  if (headEl) {
    headEl.innerHTML =
      '<span class="art-cat">' + catGlyph(post.category) + " " + esc(catName(post.category)) + '</span>' +
      '<h1>' + esc(post.title) + '</h1>' +
      '<p class="art-meta">By ' + esc(post.author) + ' \u00b7 ' + fmtDate(post.date) + ' \u00b7 ' + esc(post.readMins) + ' min read</p>';
  }

  // aside (animated via .aside-block)
  var others = (NEWS_POSTS || []).filter(function (p) { return p.slug !== post.slug; }).slice(0, 5);
  if (asideEl) {
    asideEl.innerHTML =
      '<div class="aside-block"><h5>In this category</h5>' +
        (NEWS_POSTS || []).filter(function (p) { return p.category === post.category && p.slug !== post.slug; }).slice(0, 4)
          .map(function (p) { return '<a href="article.html?id=' + esc(p.slug) + '">' + esc(p.title) + '</a>'; }).join("") +
        '<a class="cat-pill" href="news.html?cat=' + esc(post.category) + '">All ' + esc(catName(post.category)) + ' \u2192</a>' +
      '</div>' +
      '<div class="aside-block"><h5>More news</h5>' +
        others.map(function (p) { return '<a href="article.html?id=' + esc(p.slug) + '">' + esc(p.title) + '</a>'; }).join("") +
      '</div>' +
      '<div class="aside-block"><h5>Explore</h5>' +
        '<a href="news.html">All Academy News</a>' +
        '<a href="toptech.html">TopTech Academy</a>' +
        '<a href="curriculum.html">Full Curriculum</a>' +
      '</div>';
  }

  if (tagsEl) {
    tagsEl.innerHTML = (post.tags || []).map(function (t) { return '<span class="pill">#' + esc(t) + '</span>'; }).join("");
  }

  // Fetch + render the Markdown body.
  if (bodyEl) {
    bodyEl.innerHTML = '<p style="color:var(--muted)">Loading article\u2026</p>';
    fetch(post.md)
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.text(); })
      .then(function (md) {
        // Strip an optional YAML-ish front matter block if present.
        md = md.replace(/^---[\s\S]*?---\s*/, "");
        bodyEl.innerHTML = mdToHtml(md);
        wireCountdowns(bodyEl);
      })
      .catch(function () {
        // Graceful fallback: show the excerpt if the MD file isn't there yet.
        bodyEl.innerHTML =
          '<p>' + esc(post.excerpt) + '</p>' +
          '<p style="color:var(--dim);font-size:0.9rem">(The full article text is being finalised.)</p>';
      });
  }

  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
    (adsbygoogle = window.adsbygoogle || []).push({});
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {}
})();
