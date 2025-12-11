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

      // If the page is short, always show the button.
      // Otherwise show it after a little bit of scrolling.
      if (docHeight <= winHeight + 40 || scrollY > 120) {
        scrollBtn.classList.add("visible");
      } else {
        scrollBtn.classList.remove("visible");
      }
    }

    // Run once on load (for short pages) and on every scroll.
    updateScrollButton();
    window.addEventListener("scroll", updateScrollButton);

    // Smooth scroll to top on click
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

    // If we're not on the home page (no hero), just exit quietly
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

    const TYPING_SPEED = 80;     // ms per character when typing
    const DELETING_SPEED = 45;   // ms per character when deleting
    const PAUSE_AT_END = 1200;   // pause after finishing a word
    const PAUSE_AT_START = 500;  // pause before starting next word

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

    // Tiny delay so it doesn't start *immediately* on load
    setTimeout(tick, 600);
  }

  startTypewriter();
});