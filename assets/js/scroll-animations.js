document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-up");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

document.addEventListener("mousemove", function(e) {
  const parallaxEls = document.querySelectorAll(".parallax-layer");
  parallaxEls.forEach(el => {
    const speed = el.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    el.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

