/* =====================================================================
   MetaX.Academy — SINGLE-SOURCE AD MANAGER
   ---------------------------------------------------------------------
   ONE file controls every AdSense banner on the whole site. Edit this file
   to turn advertising on or off, change the publisher ID, or change which
   ad slots exist. Pages never contain <ins> ad markup anymore — they only
   drop a lightweight placeholder:

       <div class="ad-slot" data-ad="primary"></div>
       <div class="ad-slot" data-ad="secondary"></div>

   ...and this script fills them (only when enabled). One switch, whole site.

   HOW TO USE
   ----------
   • Turn ALL AdSense off:      set ENABLED = false  (no Google script loads,
                                no network calls, placeholders collapse to 0).
   • Turn AdSense back on:      set ENABLED = true.
   • Change publisher ID:       edit PUBLISHER.
   • Add / rename a slot:       add an entry to SLOTS. Reference it from a page
                                with data-ad="yourKey".
   • Limit ads per page:        set MAX_PER_PAGE (AdSense dislikes ad-heavy,
                                thin pages — keep this low on the review surface).

   NOTE: This file must be loaded on every page (after components.js is fine).
   The old inline `adsbygoogle.push({})` calls and <script src=adsbygoogle>
   tags are removed from the pages — this manager owns all of that now.
   ===================================================================== */
(function () {
  "use strict";

  /* ========================= CONFIG ========================= */
  var ADS_CONFIG = {
    // ---- MASTER SWITCH. false = no ads anywhere, no Google calls. ----
    ENABLED: true,

    // Your AdSense publisher ID (user-locked).
    PUBLISHER: "ca-pub-4463113802541266",

    // Named ad slots (user-locked slot IDs). Reference by KEY from data-ad="".
    SLOTS: {
      primary:   "8163294536",
      secondary: "8036919993"
    },

    // Hard cap on how many ad units may render on a single page.
    // AdSense rejects pages that are mostly ads; keeping this to 2 keeps the
    // content-to-ad ratio healthy across the whole site.
    MAX_PER_PAGE: 2,

    // Do NOT render ads on these pages (thin / utility / policy-only surfaces
    // where ads hurt the review). Matched against the file name.
    EXCLUDE_PAGES: ["404.html", "menu.html", "sitemap.html"],

    // Show the small "Advertisement" label above a slot only once it is filled.
    LABEL: "Advertisement"
  };
  // Expose for debugging / programmatic toggling from the console.
  window.ADS_CONFIG = ADS_CONFIG;

  /* ========================= INTERNAL ========================= */
  function currentPage() {
    var p = location.pathname.split("/").pop();
    return p || "index.html";
  }

  function loadLibraryOnce() {
    if (document.getElementById("adsense-lib")) return;
    var s = document.createElement("script");
    s.id = "adsense-lib";
    s.async = true;
    s.crossOrigin = "anonymous";
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
            encodeURIComponent(ADS_CONFIG.PUBLISHER);
    document.head.appendChild(s);
  }

  // Build one <ins> ad unit inside a placeholder wrapper.
  function fillSlot(wrap, slotId) {
    var inner = document.createElement("div");
    inner.className = "ad-inner";

    var ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.style.width = "100%";
    ins.setAttribute("data-ad-client", ADS_CONFIG.PUBLISHER);
    ins.setAttribute("data-ad-slot", slotId);
    ins.setAttribute("data-ad-format", "auto");
    ins.setAttribute("data-full-width-responsive", "true");

    var note = document.createElement("span");
    note.className = "ad-note";
    note.textContent = ADS_CONFIG.LABEL;

    inner.appendChild(ins);
    inner.appendChild(note);
    wrap.innerHTML = "";
    wrap.appendChild(inner);

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) { /* library still loading; AdSense retries on load */ }
  }

  /* ---------- Ad-slot hygiene (approval + UX) ----------
     Google sets data-ad-status="filled" | "unfilled" on each <ins>. We collapse
     unfilled slots so the page is never a wall of empty ad boxes, and only show
     the "Advertisement" label on filled ones. */
  function watchAds() {
    var slots = document.querySelectorAll(".ad-slot");
    if (!slots.length) return;
    function sync() {
      slots.forEach(function (slot) {
        var ins = slot.querySelector("ins.adsbygoogle");
        if (!ins) return;
        var status = ins.getAttribute("data-ad-status");
        if (status === "filled") { slot.classList.add("is-filled"); slot.classList.remove("is-empty"); }
        else if (status === "unfilled") { slot.classList.add("is-empty"); slot.classList.remove("is-filled"); }
      });
    }
    sync();
    var n = 0, t = setInterval(function () { sync(); if (++n > 12) clearInterval(t); }, 1000);
  }

  function boot() {
    var page = currentPage();
    var placeholders = Array.prototype.slice.call(document.querySelectorAll(".ad-slot[data-ad]"));

    // Disabled, excluded page, or no placeholders → remove the slots entirely
    // so there is never an empty labelled box, and never a Google call.
    if (!ADS_CONFIG.ENABLED || ADS_CONFIG.EXCLUDE_PAGES.indexOf(page) !== -1) {
      placeholders.forEach(function (el) { el.parentNode && el.parentNode.removeChild(el); });
      return;
    }
    if (!placeholders.length) return;

    loadLibraryOnce();

    var rendered = 0;
    placeholders.forEach(function (el) {
      var key = el.getAttribute("data-ad");
      var slotId = ADS_CONFIG.SLOTS[key];
      // Unknown key or over the per-page cap → drop the placeholder cleanly.
      if (!slotId || rendered >= ADS_CONFIG.MAX_PER_PAGE) {
        el.parentNode && el.parentNode.removeChild(el);
        return;
      }
      el.setAttribute("aria-label", ADS_CONFIG.LABEL);
      fillSlot(el, slotId);
      rendered++;
    });

    watchAds();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
