document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let currentPosition = 0;
    const cardWidth = 320; // card width including margin/padding

    prevBtn.addEventListener('click', function () {
        if (currentPosition > 0) {
            currentPosition -= cardWidth;
            carousel.style.transform = `translateX(-${currentPosition}px)`;
        }
    });

    nextBtn.addEventListener('click', function () {
        if (currentPosition < (carousel.scrollWidth - cardWidth * 3)) {
            currentPosition += cardWidth;
            carousel.style.transform = `translateX(-${currentPosition}px)`;
        }
    });
});
function moveToHome() {
    window.location.href = "index.html";
  }