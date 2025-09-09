// Simple slideshow logic
const slides = document.querySelectorAll('.slideshow .slide');
let current = 0;

function showNextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

// Change every 5 seconds
setInterval(showNextSlide, 5000);
