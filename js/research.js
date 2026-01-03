function showSection(id) {
  const sections = document.querySelectorAll('.research-detail');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Default visible section
document.addEventListener("DOMContentLoaded", () => {
  showSection('dev');
});

let devIndex = 0;
const devCarousel = document.querySelectorAll('#dev-carousel a');

setInterval(() => {
  devCarousel.forEach(el => el.classList.add('d-none'));
  devIndex = (devIndex + 1) % devCarousel.length;
  devCarousel[devIndex].classList.remove('d-none');
}, 4000);