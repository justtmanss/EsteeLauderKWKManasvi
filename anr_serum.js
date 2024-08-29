let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

if (slides.length > 0 && document.querySelector('.carousel-track')) {
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function showSlide(index) {
    const track = document.querySelector('.carousel-track');
    const slideWidth = document.querySelector('.carousel-slide').offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds