let mainSwiper;

function openSwiperModal(startIndex = 0) {
  const modal = document.querySelector('.swiper-modal');
  modal.style.display = 'flex';

  // Init vertical swiper with mousewheel support
  mainSwiper = new Swiper('.main-swiper', {
    direction: 'vertical',
    spaceBetween: 10,
    pagination: {
      el: '.main-pagination',
      clickable: true,
    },
    mousewheel: true,
    initialSlide: startIndex,
  });
}

function closeSwiperModal() {
  const modal = document.querySelector('.swiper-modal');
  modal.style.display = 'none';

  if (mainSwiper) {
    mainSwiper.destroy();
    mainSwiper = null;
  }
}

// Extra: make sure both tap and mouse click open modal
document.querySelectorAll('.featured-item').forEach((item, index) => {
  item.addEventListener('click', () => openSwiperModal(index));
});



// Banner slideshow auto-change
const slides = document.querySelectorAll('.slideshow .slide');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 3000); // 3000ms = 3 seconds



