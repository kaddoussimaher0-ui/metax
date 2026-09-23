/* =====================================================================
   MetaX.Academy — Contact form (client-side only, static site)
   No backend: validates input and opens the visitor's mail client with
   a pre-filled message so no server processing is required.
   ===================================================================== */
(function () {
  "use strict";
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  var form = document.getElementById("contactForm");
  var status = document.getElementById("cfStatus");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var topic = form.topic.value;
    var message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill in your name, email and message.";
      status.className = "form-status err";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = "That email address doesn't look right.";
      status.className = "form-status err";
      return;
    }

    var subject = "[MetaX.Academy] " + topic + " — from " + name;
    var body =
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Topic: " + topic + "\n\n" +
      message;

    var href = "mailto:hello@metax.academy?subject=" +
      encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    status.textContent = "Opening your email app… if nothing happens, email hello@metax.academy directly.";
    status.className = "form-status ok";
    window.location.href = href;
  });
})();
