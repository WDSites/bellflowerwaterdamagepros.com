(function () {
  "use strict";
  var t = document.getElementById("mob-toggle");
  var d = document.getElementById("mob-drawer");
  var o = document.getElementById("mob-overlay");
  var c = document.getElementById("drawer-close");

  function openDrawer() {
    d.removeAttribute("hidden");
    o.classList.add("visible");
    t.setAttribute("aria-expanded", "true");
    t.setAttribute("aria-label", "Close navigation menu");
    document.documentElement.style.overflow = "hidden";
  }
  function closeDrawer() {
    d.setAttribute("hidden", "");
    o.classList.remove("visible");
    t.setAttribute("aria-expanded", "false");
    t.setAttribute("aria-label", "Open navigation menu");
    document.documentElement.style.overflow = "";
  }
  if (t && d && o) {
    t.addEventListener("click", function () {
      if (t.getAttribute("aria-expanded") === "true") { closeDrawer(); } else { openDrawer(); }
    });
    if (c) { c.addEventListener("click", closeDrawer); }
    o.addEventListener("click", closeDrawer);
    d.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeDrawer); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeDrawer(); } });
    window.matchMedia("(min-width: 769px)").addEventListener("change", function (e) { if (e.matches) { closeDrawer(); } });
  }

  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.parentElement;
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  var fc = document.querySelector(".float-call");
  var ft = document.querySelector(".site-footer");
  if (fc && ft && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { fc.classList.toggle("hide", en.isIntersecting); });
    }, { threshold: 0.05 }).observe(ft);
  }
})();
