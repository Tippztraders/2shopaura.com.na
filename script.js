let mainSwiper;
let thumbnailSwiper;

function openSwiperModal(index) {
  // Initialize the thumbnail Swiper first, with vertical direction
  thumbnailSwiper = new Swiper('.thumbnail-swiper', {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.swiper-button-thumb-next',
      prevEl: '.swiper-button-thumb-prev',
    },
    // Make thumbnails swipeable on mobile
    breakpoints: {
      768: {
        direction: 'vertical',
      },
      320: {
        direction: 'horizontal',
        slidesPerView: 4,
      }
    }
  });

  // Initialize the main Swiper, linking it to the thumbnails
  mainSwiper = new Swiper('.main-swiper', {
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination.main-pagination',
      clickable: true,
    },
    thumbs: {
      swiper: thumbnailSwiper,
    },
  });

  // Slide to the correct initial image
  mainSwiper.slideTo(index, 0);

  // Show the modal
  document.querySelector('.swiper-modal').style.display = 'flex';
}

function closeSwiperModal() {
  // Hide the modal
  document.querySelector('.swiper-modal').style.display = 'none';
  
  // Destroy swiper instances to free up resources and prevent conflicts
  if (mainSwiper) {
    mainSwiper.destroy(true, true);
  }
  if (thumbnailSwiper) {
    thumbnailSwiper.destroy(true, true);
  }
}
