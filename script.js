// script.js

// Initialize AOS when the page is ready
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 700,      // length of animation in ms
    easing: "ease-out", // easing curve
    once: true,         // animate only first time you scroll
    offset: 80          // trigger a bit before the element hits center
  });

  console.log("Portfolio JS loaded ✨");
});