console.log("Welcome to Plant Developmental Regulomics website!");

const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-img');
const visible = 3;

let index = 0;
let isTransitioning = false;

// Clone first N images and append
for (let i = 0; i < visible; i++) {
  const clone = images[i].cloneNode(true);
  clone.classList.remove('active'); // Don't clone class state
  track.appendChild(clone);
}

const allImages = document.querySelectorAll('.carousel-img'); // Re-select after cloning
const total = allImages.length;

function updateCarousel() {
  if (isTransitioning) return;

  isTransitioning = true;
  index++;

  track.style.transition = 'transform 0.8s ease-in-out';
  track.style.transform = `translateX(-${33.33 * index}%)`;

  // Reset center highlight
  allImages.forEach(img => img.classList.remove('active'));
  const midIndex = (index + 1) % total;
  allImages[midIndex].classList.add('active');
}

track.addEventListener('transitionend', () => {
  if (index >= total - visible) {
    index = 0;
    track.style.transition = 'none';
    track.style.transform = `translateX(0%)`;
  }
  isTransitioning = false;
});

setInterval(updateCarousel, 4000);

