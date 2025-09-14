let swiper;

function openSwiperModal(startIndex = 0) {
    const modal = document.querySelector('.swiper-modal');
    modal.style.display = 'flex';

    if (swiper) swiper.destroy(true, true);

    swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: false,                // stop at last slide
        initialSlide: startIndex,   // start from tapped image
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}

function closeSwiperModal() {
    document.querySelector('.swiper-modal').style.display = 'none';
}

// Close modal on tap outside
document.querySelector('.swiper-modal').addEventListener('click', (e) => {
    if (e.target.classList.contains('swiper-modal')) closeSwiperModal();
});

// Close modal on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeSwiperModal();
});

// Close button
document.querySelector('.swiper-close').addEventListener('click', closeSwiperModal);
