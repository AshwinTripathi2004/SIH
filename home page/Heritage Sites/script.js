const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');
let currentSlide = slides.findIndex(slide => slide.classList.contains('current-slide'));

function updateSlidePosition() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
        slide.classList.remove('current-slide');
        slide.style.opacity = '0.5';
    });
    slides[currentSlide].classList.add('current-slide');
    slides[currentSlide].style.opacity = '1';
}

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
});

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlidePosition();
});

updateSlidePosition();