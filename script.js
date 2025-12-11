// script.js

document.addEventListener("DOMContentLoaded", function () {
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
});