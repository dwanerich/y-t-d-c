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
