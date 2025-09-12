// Initialize all Swipers
document.querySelectorAll('.mySwiper').forEach((el) => {
  new Swiper(el, {
    loop: true,
    navigation: {
      nextEl: el.querySelector('.swiper-button-next'),
      prevEl: el.querySelector('.swiper-button-prev'),
    },
    pagination: {
      el: el.querySelector('.swiper-pagination'),
      clickable: true,
    },
  });
});

// Open modal
document.querySelectorAll('.openGallery').forEach((img) => {
  img.addEventListener('click', () => {
    const modalId = img.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('active');
  });
});

// Close modal with swipe down or Esc
document.querySelectorAll('.modal').forEach((modal) => {
  let touchStartY = 0;

  modal.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  });

  modal.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchEndY - touchStartY > 100) {
      modal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('active');
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});





// Initialize Swiper modal
let swiperModal;
const featuredItems = document.querySelectorAll('.featured-item');

featuredItems.forEach((item, index) => {
  item.addEventListener('click', function(e){
    e.preventDefault();

    // Get all images for this item
    const images = [
      item.querySelector('img').src,
      "https://i.postimg.cc/2y2vB0BQ/1-Coffee-Maker2.webp", 
      "https://i.postimg.cc/3N7y1m8C/1-Coffee-Maker3.webp"
    ]; // replace/add all additional images per product

    const wrapper = document.querySelector('.swiper-modal .swiper-wrapper');
    wrapper.innerHTML = ''; // clear previous slides

    images.forEach(src => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.innerHTML = `<img src="${src}" alt="Product image">`;
      wrapper.appendChild(slide);
    });

    // Show modal
    document.querySelector('.swiper-modal').style.display = 'flex';

    // Initialize Swiper
    swiperModal = new Swiper('.swiper-modal .swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: { el: '.swiper-pagination' },
      spaceBetween: 10,
    });
  });
});

// Close modal when tapping outside swiper
document.querySelector('.swiper-modal').addEventListener('click', function(e){
  if(e.target.classList.contains('swiper-modal')) {
    this.style.display = 'none';
    if(swiperModal) swiperModal.destroy(true, true);
  }
});


