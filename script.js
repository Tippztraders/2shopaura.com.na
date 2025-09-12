// === Swiper Modal Logic ===
let swiperModal;

// Close modal function
function closeModal() {
  const modal = document.querySelector('.swiper-modal');
  modal.style.display = 'none';
  if (swiperModal) swiperModal.destroy(true, true);
}

// Open modal and load images
document.querySelectorAll('.featured-item').forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    const modal = document.querySelector('.swiper-modal');
    const wrapper = modal.querySelector('.swiper-wrapper');

    // Get all images for this item
    const images = [
      item.querySelector('img').src,
      "https://i.postimg.cc/6q7Hzxsc/Coffee-Maker2.webp",
      "https://i.postimg.cc/8cPFVTkd/Coffee-Maker3.webp",
      "https://i.postimg.cc/Dy7Vn8T3/Coffee-Maker4.webp"
    ]; // Add extra images per product here

    // Clear previous slides
    wrapper.innerHTML = '';

    // Create slides
    images.forEach(src => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.innerHTML = `<img src="${src}" style="width:100%; height:auto;" alt="Product image">`;
      wrapper.appendChild(slide);
    });

    // Show modal
    modal.style.display = 'flex';

    // Destroy previous swiper if exists
    if (swiperModal) swiperModal.destroy(true, true);

    // Initialize Swiper
    swiperModal = new Swiper('.swiper-modal .swiper-container', {
      direction: 'vertical',
      slidesPerView: 1,
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      mousewheel: true, // desktop scroll
    });
  });
});

// Close modal on tap outside
document.querySelector('.swiper-modal').addEventListener('click', function(e){
  if(e.target.classList.contains('swiper-modal')) closeModal();
});

// Close modal on ESC
document.addEventListener('keydown', (e) => {
  if(e.key === "Escape") closeModal();
});

// Close modal with swipe down
let touchStartY = 0;
const modal = document.querySelector('.swiper-modal');
modal.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
});
modal.addEventListener('touchend', (e) => {
  const touchEndY = e.changedTouches[0].clientY;
  if(touchEndY - touchStartY > 100) closeModal();
});
