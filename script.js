// === Swiper Modal Logic ===
let swiperModal;

function openSwiperModal(startIndex = 0) {
  const modal = document.querySelector('.swiper-modal');
  modal.style.display = 'flex';

  const wrapper = modal.querySelector('.swiper-wrapper');

  // Example: load images dynamically (adapt as needed)
  const images = [
    "https://i.postimg.cc/6q7Hzxsc/Coffee-Maker2.webp",
    "https://i.postimg.cc/8cPFVTkd/Coffee-Maker3.webp",
    "https://i.postimg.cc/Dy7Vn8T3/Coffee-Maker4.webp"
  ];

  wrapper.innerHTML = '';
  images.forEach(src => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `<img src="${src}" alt="Product image">`;
    wrapper.appendChild(slide);
  });

  // Destroy previous swiper if exists
  if (swiperModal) swiperModal.destroy(true, true);

  // Initialize Swiper
  swiperModal = new Swiper('.swiper-modal .swiper', {
    direction: 'vertical',   // change to 'horizontal' if you prefer
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewheel: true,
    keyboard: true,
  });

  swiperModal.slideToLoop(startIndex, 0);
}

function closeSwiperModal() {
  document.querySelector('.swiper-modal').style.display = 'none';
}

// Close modal on tap outside
document.querySelector('.swiper-modal').addEventListener('click', function(e){
  if (e.target.classList.contains('swiper-modal')) closeSwiperModal();
});

// Close modal on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") closeSwiperModal();
});

// Swipe down to close (mobile)
let touchStartY = 0;
const modal = document.querySelector('.swiper-modal');
modal.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
});
modal.addEventListener('touchend', (e) => {
  const touchEndY = e.changedTouches[0].clientY;
  if (swiperModal && swiperModal.activeIndex === 0 && touchEndY - touchStartY > 100) {
    closeSwiperModal();
  }
});

// Close button
document.querySelector('.swiper-close').addEventListener('click', closeSwiperModal);
