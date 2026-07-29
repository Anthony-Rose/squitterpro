/* SquitterPro site cookie banner. Google Analytics loads in Consent Mode with
   analytics_storage DENIED by default (see each page's <head>). This banner lets
   the visitor grant/deny; the choice is remembered so it shows only once. */
(function () {
  var KEY = "sp_cookie_consent";
  var choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}
  if (choice) return;                          // already decided; no banner

  function remember(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function banner() {
    var bar = document.createElement("div");
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Cookie consent");
    bar.style.cssText =
      "position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#141e30;color:#d7e1f0;" +
      "border-top:1px solid #223147;padding:12px 18px;display:flex;flex-wrap:wrap;gap:10px 16px;" +
      "align-items:center;justify-content:center;font:14px/1.5 'Segoe UI',system-ui,sans-serif;box-shadow:0 -4px 20px rgba(0,0,0,.4)";
    bar.innerHTML =
      "<span style='max-width:640px'>This site uses Google Analytics cookies to understand traffic. " +
      "See our <a href='privacy.html' style='color:#63b3ed'>Privacy Policy</a>.</span>" +
      "<span style='display:flex;gap:8px'>" +
      "<button id='cbDecline' style='background:#182338;color:#d7e1f0;border:1px solid #223147;border-radius:7px;padding:7px 16px;cursor:pointer'>Decline</button>" +
      "<button id='cbAccept' style='background:#4a9eda;color:#fff;border:none;border-radius:7px;padding:7px 18px;cursor:pointer;font-weight:600'>Accept</button>" +
      "</span>";
    document.body.appendChild(bar);
    document.getElementById("cbAccept").onclick = function () {
      remember("granted");
      if (window.gtag) gtag("consent", "update", { "analytics_storage": "granted" });
      bar.remove();
    };
    document.getElementById("cbDecline").onclick = function () {
      remember("denied");
      bar.remove();
    };
  }

  if (document.body) banner();
  else document.addEventListener("DOMContentLoaded", banner);
})();
