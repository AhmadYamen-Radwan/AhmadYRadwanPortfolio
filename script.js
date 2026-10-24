/* ========================================
   MOBILE NAVIGATION
======================================== */

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "Close" : "Menu";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "Menu";
    });
  });
}

/* ========================================
   PROJECT OVERVIEW TOGGLES
   Each button controls exactly one panel.
   Panels start collapsed and toggle on click.
======================================== */

document.querySelectorAll(".project-details-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const panelId = btn.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    if (!panel) return;

    const isOpen = btn.getAttribute("aria-expanded") === "true";

    // Toggle state attributes
    btn.setAttribute("aria-expanded", String(!isOpen));
    panel.classList.toggle("is-open", !isOpen);
  });
});

/* ========================================
   SCROLL REVEAL ANIMATIONS
======================================== */

const sections = document.querySelectorAll(
  ".section, .proof-strip, .contact-inner"
);

if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });
}
