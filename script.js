// script.js

document.addEventListener("DOMContentLoaded", function () {
  // ---- AOS (scroll animations) ----
  AOS.init({
    duration: 700,
    easing: "ease-out",
    once: true,
    offset: 80
  });

  console.log("Portfolio JS loaded ✨");

  // ---- Scroll to Top Button Logic ----
  const scrollBtn = document.querySelector(".scroll-top-btn");

  if (scrollBtn) {
    function updateScrollButton() {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      if (docHeight <= winHeight + 40 || scrollY > 120) {
        scrollBtn.classList.add("visible");
      } else {
        scrollBtn.classList.remove("visible");
      }
    }

    updateScrollButton();
    window.addEventListener("scroll", updateScrollButton);

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // ---- Hero Typewriter Effect (home page only) ----
  function startTypewriter() {
    const textEl = document.getElementById("typewriter-text");
    const cursorEl = document.getElementById("typewriter-cursor");

    if (!textEl || !cursorEl) return;

    const phrases = [
      "embedded systems engineer",
      "ESP32 & robotics developer",
      "neurotech & research tools builder",
      "microcontroller problem-solver"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const TYPING_SPEED = 80;
    const DELETING_SPEED = 45;
    const PAUSE_AT_END = 1200;
    const PAUSE_AT_START = 500;

    function tick() {
      const current = phrases[phraseIndex];

      if (isDeleting) {
        charIndex--;
        textEl.textContent = current.substring(0, charIndex);

        if (charIndex <= 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(tick, PAUSE_AT_START);
        } else {
          setTimeout(tick, DELETING_SPEED);
        }
      } else {
        charIndex++;
        textEl.textContent = current.substring(0, charIndex);

        if (charIndex === current.length) {
          setTimeout(() => {
            isDeleting = true;
            tick();
          }, PAUSE_AT_END);
        } else {
          setTimeout(tick, TYPING_SPEED);
        }
      }
    }

    setTimeout(tick, 600);
  }

  startTypewriter();

  // ---- Dark Mode Toggle ----
  const themeToggle = document.querySelector(".theme-toggle");

  function isDarkMode() {
    return document.documentElement.classList.contains("dark-mode");
  }

  function applyTheme(theme) {
    const shouldUseDark = theme === "dark";

    document.documentElement.classList.toggle("dark-mode", shouldUseDark);
    sessionStorage.setItem("theme", shouldUseDark ? "dark" : "light");
  }

  const savedTheme = sessionStorage.getItem("theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
  } else {
    applyTheme("light");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      applyTheme(isDarkMode() ? "light" : "dark");
    });
  }
});