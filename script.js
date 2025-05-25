function toggleMenu() {
  const nav = document.querySelector('.navbar ul');
  nav.classList.toggle('active');
}

// Add to script.js
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


// video section
document.getElementById("videoBtn").onclick = () => {
  document.getElementById("videoModal").style.display = "block";
};
document.getElementById("closeVideo").onclick = () => {
  document.getElementById("videoModal").style.display = "none";
};

// theme dark/light toggle
const toggle = document.getElementById('themeSwitcher');
  const body = document.body;

  toggle.addEventListener('change', () => {
    body.classList.toggle('light-mode');
  });

  const faders = document.querySelectorAll('.fade-in');

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.15
  });

  faders.forEach(el => {
    appearOnScroll.observe(el);
  });