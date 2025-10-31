console.log("JavaScript carregado com sucesso!");

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

//  Toggle mobile menu functionality
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuIcon.textContent = mobileMenu.classList.contains("active") ? "✕" : "☰";
});

//  Close menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuIcon.textContent = "☰";
  });
});

//  Smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});
