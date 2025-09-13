let swiperModal;

function openSwiperModal(startIndex = 0) {
  const modal = document.querySelector('.swiper-modal');
  modal.style.display = 'flex';

  // Destroy previous swiper if exists
  if (swiperModal) swiperModal.destroy(true, true);

  // Initialize Swiper once
  swiperModal = new Swiper('.swiper-modal .swiper-container', {
    direction: 'vertical',       // vertical swipe
    slidesPerView: 1,
    loop: false,                 // no infinite loop for vertical
    pagination: {
      el: '.swiper-modal .swiper-pagination',
      clickable: true,
    },
   
    
    
    
    navigation: {
      nextEl: '.swiper-modal .swiper-button-next',
      prevEl: '.swiper-modal .swiper-button-prev',
    },
   
    
    
    
    mousewheel: true,
    keyboard: true,
    centeredSlides: false,       // align top
    autoHeight: true,            // important for vertical
    spaceBetween: 20,
  });


  

  swiperModal = new Swiper('.swiper-modal .swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  loop: false,
  pagination: {
    el: '.swiper-modal .swiper-pagination',
    clickable: true,
  },
 
    
    navigation: {
    nextEl: '.swiper-modal .swiper-button-next',
    prevEl: '.swiper-modal .swiper-button-prev',
  },

    
    mousewheel: true,
  keyboard: true,
  centeredSlides: false,
  // Fix: Set autoHeight to false for vertical scrolling
  autoHeight: false,
  spaceBetween: 20,
});



 



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
