document.addEventListener("DOMContentLoaded", function () {
  // Function to shuffle the slides (optional behaviour kept from original)
  function shuffleSlides() {
    const slidesContainer = document.querySelector(".glide__slides");
    if (!slidesContainer) return;
    const slides = Array.from(slidesContainer.children);
    for (let i = slides.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      slidesContainer.appendChild(slides[j]);
    }
  }

  shuffleSlides();

  // Initialize Glide if present
  if (typeof Glide !== 'undefined' && document.querySelector('.glide')) {
    const glide = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      focusAt: 'center',
      gap: 0,
      peek: { before: 250, after: 250 },
      autoplay: 2000,
      hoverpause: true,
      animationDuration: 1000,
      breakpoints: {
        768: { perView: 1, peek: { before: 0, after: 0 } }
      }
    });

    glide.mount();
  }
});