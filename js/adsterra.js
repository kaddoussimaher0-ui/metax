/* =====================================================================
   MetaX.Academy — Adsterra responsive banner loader
   ---------------------------------------------------------------------
   Runs ALONGSIDE Google AdSense. Adsterra and AdSense are separate
   networks and may be used together, provided ads stay clearly labelled
   and content is not buried. Each Adsterra banner is rendered inside its
   OWN isolated <iframe> so multiple banners on one page never collide on
   the global `atOptions` variable.

   HOW TO ACTIVATE (you do this after AdSense is approved):
   1. In your Adsterra dashboard create a "Banner 300x250" (or responsive)
      ad unit and copy its KEY (a long hex string) and the invoke.js URL.
   2. Paste the key into ADSTERRA_CONFIG.key below and set enabled:true.
   3. (Optional) create separate keys per size and pass them per slot with
      data-adsterra-key / data-adsterra-w / data-adsterra-h attributes.

   While disabled (default), slots stay hidden so nothing broken shows and
   the AdSense review is never disturbed by a competing empty network.
   ===================================================================== */
(function () {
  "use strict";

  var ADSTERRA_CONFIG = {
    enabled: false,                 // <-- set true AFTER AdSense approval
    key: "REPLACE_WITH_ADSTERRA_KEY",
    invoke: "//www.highperformanceformat.com/", // Adsterra banner host
    width: 300,
    height: 250
  };

  function buildIframeDoc(key, w, h, invoke) {
    // Self-contained document that runs one Adsterra banner in isolation.
    var open = "<" + "script>";
    var close = "<" + "/" + "script>";
    return (
      "<!DOCTYPE html><html><head><meta charset='utf-8'>" +
      "<style>html,body{margin:0;padding:0;background:transparent;overflow:hidden}</style>" +
      "</head><body>" +
      open + "var atOptions={'key':'" + key + "','format':'iframe','height':" + h +
      ",'width':" + w + ",'params':{}};" + close +
      open + "document.write('<' + 'scr'+'ipt src=\"" + invoke + key + "/invoke.js\"><' + '/scr'+'ipt>');" + close +
      "</body></html>"
    );
  }

  function mountSlot(slot) {
    if (slot.dataset.mounted === "1") return;
    var key = slot.getAttribute("data-adsterra-key") || ADSTERRA_CONFIG.key;
    var w = parseInt(slot.getAttribute("data-adsterra-w") || ADSTERRA_CONFIG.width, 10);
    var h = parseInt(slot.getAttribute("data-adsterra-h") || ADSTERRA_CONFIG.height, 10);
    if (!ADSTERRA_CONFIG.enabled || !key || key.indexOf("REPLACE_WITH") === 0) {
      slot.style.display = "none";   // keep the page clean until configured
      return;
    }
    slot.dataset.mounted = "1";
    slot.style.display = "";
    var iframe = document.createElement("iframe");
    iframe.title = "Advertisement";
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("frameborder", "0");
    iframe.style.width = w + "px";
    iframe.style.height = h + "px";
    iframe.style.maxWidth = "100%";
    iframe.style.border = "0";
    iframe.style.display = "block";
    iframe.style.margin = "0 auto";
    slot.appendChild(iframe);
    var doc = iframe.contentWindow.document;
    doc.open();
    doc.write(buildIframeDoc(key, w, h, ADSTERRA_CONFIG.invoke));
    doc.close();
  }

  function init() {
    document.querySelectorAll(".adsterra-slot").forEach(mountSlot);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.__adsterra = { config: ADSTERRA_CONFIG, mount: mountSlot, init: init };
})();
