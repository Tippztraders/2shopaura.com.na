// === Initialize Swiper Modal ===
let swiperModal;

// Open modal when clicking a featured item
document.querySelectorAll('.featured-item').forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    const modal = document.querySelector('.swiper-modal');
    modal.style.display = 'flex';

    // Destroy previous instance if open
    if (swiperModal) swiperModal.destroy(true, true);

    // Initialize Swiper
    swiperModal = new Swiper('.swiper-modal .swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 10,
    });
  });
});

// === Close Modal ===
const modal = document.querySelector('.swiper-modal');
let touchStartY = 0;

// Close on tap outside
modal.addEventListener('click', function (e) {
  if (e.target.classList.contains('swiper-modal')) {
    closeModal();
  }
});

// Close with ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Close with swipe down
modal.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
});

modal.addEventListener('touchend', (e) => {
  const touchEndY = e.changedTouches[0].clientY;
  if (touchEndY - touchStartY > 100) {
    closeModal();
  }
});

// Reusable function
function closeModal() {
  modal.style.display = 'none';
  if (swiperModal) swiperModal.destroy(true, true);
}
