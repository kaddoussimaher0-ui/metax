/* =====================================================================
   MetaX Academy — Full Curriculum Page
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- Image placeholder helper ---------- */
  function imgSlot(src, index, mark) {
    return (
      '<span class="img-slot" data-index="' + index + '">' +
        '<span class="img-tag">' + index + '</span>' +
        '<span class="img-mark">' + (mark || "\u2726") + '</span>' +
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

  /* ---------- Flagship detail cards ---------- */
  const fgWrap = document.getElementById("flagshipsFull");
  if (fgWrap && typeof FLAGSHIPS !== "undefined") {
    fgWrap.innerHTML = FLAGSHIPS.map(function (f) {
      return (
        '<article class="flagship ' + f.accent + '">' +
          imgSlot(f.img, f.imgIndex, f.icon) +
          '<div class="fg-top">' +
            '<div class="fg-icon">' + f.icon + '</div>' +
            '<div>' +
              '<div class="fg-code">FLAGSHIP ' + f.code + ' · ' + f.territory + '</div>' +
              '<h3>' + f.title + '</h3>' +
              '<div class="fg-tag">' + f.tagline + '</div>' +
            '</div>' +
          '</div>' +
          '<p class="fg-quote">' + f.quote + '</p>' +
          '<p class="fg-thesis">' + f.thesis + '</p>' +
          '<div class="fg-meta">' +
            '<span class="pill">' + f.courses + '</span>' +
            '<span class="pill">\u23F1 ' + f.hours + '</span>' +
          '</div>' +
          '<a class="card-link" href="detail.html?type=flagship&id=' + f.id + '">View flagship details <span class="arw">\u2192</span></a>' +
        '</article>'
      );
    }).join("");
    hydrate(fgWrap);
  }

  /* ---------- Full accordion list ---------- */
  const listWrap = document.getElementById("curriculumList");
  if (listWrap && typeof SERIES !== "undefined") {
    listWrap.innerHTML = SERIES.map(function (s) {
      const detail = (typeof SERIES_DETAIL !== "undefined" && SERIES_DETAIL[s.n]) ? SERIES_DETAIL[s.n] : s.territory;
      return (
        '<article class="cur-row" data-n="' + s.n + '">' +
          '<button class="cur-head" aria-expanded="false">' +
            '<span class="cur-num">' + s.n + '</span>' +
            '<span class="cur-icon">' + s.icon + '</span>' +
            '<span class="cur-titles">' +
              '<span class="cur-title">' + s.title + (s.isNew ? ' <em class="cur-new">NEW</em>' : '') + '</span>' +
              '<span class="cur-sub">' + s.sub + ' · ' + s.tier + '</span>' +
            '</span>' +
            '<span class="cur-chev">＋</span>' +
          '</button>' +
          '<div class="cur-body">' +
            '<p>' + detail + '</p>' +
            '<div class="cur-tags">' +
              '<span class="pill">Territory: ' + s.territory + '</span>' +
              '<span class="pill">\u2192 Pairs ' + s.pairs + '</span>' +
              '<span class="pill">12 courses × 6 lessons</span>' +
            '</div>' +
            '<a class="card-link" style="margin:0 20px 18px 64px" href="detail.html?type=series&id=' + s.n + '">Open full series details <span class="arw">\u2192</span></a>' +
          '</div>' +
        '</article>'
      );
    }).join("");

    listWrap.addEventListener("click", function (e) {
      const head = e.target.closest(".cur-head");
      if (!head) return;
      const row = head.closest(".cur-row");
      const open = row.classList.toggle("open");
      head.setAttribute("aria-expanded", open ? "true" : "false");
      head.querySelector(".cur-chev").textContent = open ? "\u2212" : "\uFF0B";
    });
  }

  /* ---------- Reveal ---------- */
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Ads ---------- */
  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
    (adsbygoogle = window.adsbygoogle || []).push({});
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {}
})();
