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
