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

// add counter
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

document.getElementById("videoBtn").onclick = () => {
  document.getElementById("videoModal").style.display = "block";
};
document.getElementById("closeVideo").onclick = () => {
  document.getElementById("videoModal").style.display = "none";
};
