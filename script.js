
/* ========================================
   LANGUAGE: ENGLISH / ARABIC
======================================== */

const languageToggle = document.querySelector("#language-toggle");

const translations = {
  en: {
    menu: "Menu",
    close: "Close",
    about: "About",
    projects: "Projects",
    web: "Web Development",
    skills: "Skills",
    contact: "Contact",
    downloadCV: "Download CV",
    skip: "Skip to content",
    explore: "Explore my projects",
    greeting: "Hello, I'm",
    role: "Mechatronics Engineering Graduate",
    openToWork: "Open to entry-level opportunities",
    projectOverview: "Project overview",
    currentFocus: "CURRENT FOCUS",
    footer: "Designed to connect engineering with the digital world.",
    backToTop: "Back to top ↑"
  },

  ar: {
    menu: "القائمة",
    close: "إغلاق",
    about: "نبذة عني",
    projects: "المشاريع",
    web: "تطوير الويب",
    skills: "المهارات",
    contact: "تواصل معي",
    downloadCV: "تحميل السيرة الذاتية",
    skip: "انتقل إلى المحتوى",
    explore: "استكشف مشاريعي",
    greeting: "مرحباً، أنا",
    role: "خريج هندسة الميكاترونيك",
    openToWork: "متاح للفرص الوظيفية للمبتدئين",
    projectOverview: "نظرة عامة على المشروع",
    currentFocus: "مجالات التركيز الحالية",
    footer: "أجمع بين الهندسة والعالم الرقمي من خلال حلول عملية.",
    backToTop: "العودة إلى الأعلى ↑"
  }
};

let currentLanguage = "en";

function setLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;
  document.documentElement.dir =
    language === "ar" ? "rtl" : "ltr";

  document.body.classList.toggle(
    "arabic",
    language === "ar"
  );

  const t = translations[language];

  // Navigation
  const navLabels = {
    "#nav-links a[href='#about']": t.about,
    "#nav-links a[href='#projects']": t.projects,
    "#nav-links a[href='#web']": t.web,
    "#nav-links a[href='#skills']": t.skills,
    "#nav-links a[href='#contact']": t.contact
  };

  Object.entries(navLabels).forEach(([selector, text]) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = text;
  });

  // Mobile navigation
  const menuButton = document.querySelector(".menu-toggle");
  if (menuButton) {
    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    menuButton.textContent = isOpen ? t.close : t.menu;
  }

  // Language button
  if (languageToggle) {
    languageToggle.textContent =
      language === "en" ? "العربية" : "English";

    languageToggle.setAttribute(
      "aria-label",
      language === "en"
        ? "Switch to Arabic"
        : "Switch to English"
    );
  }

  // Main navigation CV button
  document.querySelectorAll(".cv-link").forEach((link) => {
    const arrow = link.querySelector("span");
    link.innerHTML = `${t.downloadCV} <span aria-hidden="true">↓</span>`;
  });

  // Project overview buttons
  document.querySelectorAll(".project-details-toggle").forEach((btn) => {
    const icon = btn.querySelector(".project-details-icon");
    btn.innerHTML = `${t.projectOverview} <span class="project-details-icon" aria-hidden="true">${icon?.textContent || "＋"}</span>`;
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    setLanguage(currentLanguage === "en" ? "ar" : "en");
  });
}

/* ========================================
   MOBILE NAVIGATION
======================================== */

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.textContent = isOpen
      ? translations[currentLanguage].close
      : translations[currentLanguage].menu;
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent =
        translations[currentLanguage].menu;
    });
  });
}

/* ========================================
   PROJECT OVERVIEW TOGGLES
======================================== */

document.querySelectorAll(".project-details-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const panelId = btn.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);

    if (!panel) return;

    const isOpen =
      btn.getAttribute("aria-expanded") === "true";

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
