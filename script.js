const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('mobile-hidden');
});

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-button.prev');
const nextBtn = document.querySelector('.carousel-button.next');
const items = Array.from(track.children);

let currentIndex = 0;

function getItemsToShow() {
  return window.innerWidth <= 600 ? 1 : (window.innerWidth <= 900 ? 2 : 3);
}

function updateCarousel() {
  const itemWidth = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < items.length - getItemsToShow()) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

window.addEventListener('resize', () => {
  currentIndex = 0;
  updateCarousel();
});

updateCarousel();
