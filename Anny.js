// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      document
        .querySelectorAll("nav a")
        .forEach((a) => a.classList.remove("active"));
      link.classList.add("active");
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
// Hero button scroll to menu
document.getElementById("orderNowBtn").addEventListener("click", function () {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});
// Contact form interactivity
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("contactSuccess").style.display = "block";
  setTimeout(() => {
    document.getElementById("contactSuccess").style.display = "none";
    document.getElementById("contactForm").reset();
  }, 3000);
});
// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
