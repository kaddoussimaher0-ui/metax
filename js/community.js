/* =====================================================================
   MetaX Academy — Academies Community landing
   ===================================================================== */
(function () {
  "use strict";

  function imgSlot(src, index, mark) {
    return (
      '<span class="img-slot" data-index="' + index + '">' +
        '<span class="img-tag">' + index + '</span>' +
        '<span class="img-mark">' + (mark || "\u2b21") + '</span>' +
        '<img alt="" loading="lazy" data-src="' + src + '" />' +
      '</span>'
    );
  }
  function hydrate(root) {
    (root || document).querySelectorAll(".img-slot img[data-src]").forEach(function (img) {
      if (img.dataset.bound) return;
      img.dataset.bound = "1";
      var slot = img.closest(".img-slot");
      img.addEventListener("load", function () {
        if (img.naturalWidth > 1) { img.classList.add("loaded"); slot.classList.add("has-img"); }
      });
      img.src = img.dataset.src;
    });
  }

  /* ---------- Mobile menu wired centrally in js/site.js wireMobileToggle() ---------- */

  /* ---------- Pillars (feature cards) ---------- */
  var pw = document.getElementById("communityPillars");
  if (pw && typeof COMMUNITY_PILLARS !== "undefined") {
    pw.innerHTML = COMMUNITY_PILLARS.map(function (p) {
      return (
        '<article class="feature">' +
          imgSlot(p.img, p.imgIndex, p.glyph) +
          '<span class="f-glyph">' + p.glyph + '</span>' +
          '<h3>' + p.title + '</h3>' +
          '<p>' + p.body + '</p>' +
        '</article>'
      );
    }).join("");
    hydrate(pw);
  }

  /* ---------- Terms of Top Levels ---------- */
  var lw = document.getElementById("communityLevels");
  if (lw && typeof COMMUNITY_LEVELS !== "undefined") {
    lw.innerHTML = COMMUNITY_LEVELS.map(function (l) {
      return (
        '<div class="level">' +
          '<span class="lv-badge">' + l.lvl + '</span>' +
          '<div><h4>' + l.name + '</h4><p>' + l.desc + '</p></div>' +
        '</div>'
      );
    }).join("");
  }

  /* ---------- Steps ---------- */
  var sw = document.getElementById("communitySteps");
  if (sw && typeof COMMUNITY_STEPS !== "undefined") {
    sw.innerHTML = COMMUNITY_STEPS.map(function (s) {
      return '<div class="step-card"><h4>' + s.step + '</h4><p>' + s.desc + '</p></div>';
    }).join("");
  }

  /* ---------- Reveal ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
    (adsbygoogle = window.adsbygoogle || []).push({});
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {}
})();
