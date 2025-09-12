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

    // Initialize Swiper - vertical scroll
    swiperModal = new Swiper('.swiper-modal .swiper-container', {
      direction: 'vertical', // 👈 swipe up/down
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      mousewheel: true, // desktop users can scroll with mouse
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
document.addEventListener("DOMContentLoaded", function () {
  // Main Swiper (if you have it already)
  var mainSwiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
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


// Extra image swiper - vertical, 1 image per view
  var extraSwiper = new Swiper(".extraSwiper", {
    direction: "vertical",   // vertical swipe
    slidesPerView: 1,        // show 1 full image
    spaceBetween: 10,        // small gap
    mousewheel: true,        // allow scroll
    pagination: {
      el: ".extra-pagination",
      clickable: true,
    },
  });
});

                          
