// Taskbar Toggle
document.querySelector('.nav-toggle').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('open');
});

// Select the header element
const header = document.querySelector('header');

// Quiz Functionality
document.getElementById('skincare-quiz').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const skinType = document.getElementById('skin-type').value;
    const concern = document.getElementById('concern').value;
    const resultContainer = document.getElementById('quiz-result');

    let resultMessage;

    if (skinType === 'normal' && concern === 'aging') {
        resultMessage = 'We recommend our Advanced Night Repair Serum for normal skin types concerned with aging.';
    } else if (skinType === 'oily' && concern === 'hydration') {
        resultMessage = 'Our Revitalizing Supreme+ Night Moisturizer is perfect for oily skin that needs hydration.';
    } else if (skinType === 'dry' && concern === 'texture') {
        resultMessage = 'Try our Advanced Night Repair Treatment to improve texture for dry skin.';
    } else if (skinType === 'combination' && concern === 'brightening') {
        resultMessage = 'The Advanced Night Repair Serum will help brighten combination skin.';
    } else {
        resultMessage = 'Please explore our range of products to find the best fit for your needs.';
    }

    resultContainer.textContent = resultMessage;
});


// Taskbar Scroll and Hover Effect
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 34, 68, 0.9)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

header.addEventListener('mouseenter', function () {
    header.style.maxHeight = '200px';
});

header.addEventListener('mouseleave', function () {
    if (window.scrollY <= 50) {
        header.style.maxHeight = '80px';
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".hero-video");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.5 // Play when 50% of the hero section is in view
    });

    observer.observe(document.querySelector(".hero"));
});


