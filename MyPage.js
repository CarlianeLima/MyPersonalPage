console.log("JavaScript carregado com sucesso!");

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");
const header = document.querySelector("header");

/* -------------------------
   MOBILE MENU TOGGLE
-------------------------- */
menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("active");
  menuIcon.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", isOpen);
});

/* -------------------------
   CLOSE MENU ON LINK CLICK
-------------------------- */
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});

/* -------------------------
   CLOSE MENU WHEN CLICKING OUTSIDE
-------------------------- */
document.addEventListener("click", (event) => {
  const isClickInside =
    mobileMenu.contains(event.target) ||
    menuToggle.contains(event.target);

  if (!isClickInside && mobileMenu.classList.contains("active")) {
    closeMobileMenu();
  }
});

/* -------------------------
   CLOSE MENU WITH ESC KEY
-------------------------- */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileMenu.classList.contains("active")) {
    closeMobileMenu();
  }
});

function closeMobileMenu() {
  mobileMenu.classList.remove("active");
  menuIcon.textContent = "☰";
  menuToggle.setAttribute("aria-expanded", "false");
}

/* -------------------------
   SMOOTH SCROLL (HEADER OFFSET)
-------------------------- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId && targetId !== "#") {
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();

        const headerHeight = header.offsetHeight;
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: targetPosition - headerHeight - 12,
          behavior: "smooth",
        });
      }
    }
  });
});

/* -------------------------
   HERO BUTTONS ACTIONS
-------------------------- */
const viewWorkBtn = document.querySelector(".btn-primary");
const contactBtn = document.querySelector(".btn-secondary");

if (viewWorkBtn) {
  viewWorkBtn.addEventListener("click", () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
