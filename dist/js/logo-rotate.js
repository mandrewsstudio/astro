// Scroll-triggered rotation for logo (works with inline <svg> or external <img>)
(function () {
  const rotationStep = 22.5;
  const scrollSensitivity = 20;
  let currentStep = 0;

  function findLogo() {
    return document.querySelector('.hero-section svg') || document.querySelector('.hero-section img') || document.querySelector('.logo');
  }

  function init() {
    const logoEl = findLogo();
    if (!logoEl) return;

    logoEl.style.transformOrigin = '50% 50%';
    logoEl.style.transition = 'none';

    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;
      const newStep = Math.floor(scrollY / scrollSensitivity);
      if (newStep !== currentStep) {
        currentStep = newStep;
        logoEl.style.transform = `translate(-50%, -47%) rotate(${currentStep * rotationStep}deg)`;
      }
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();