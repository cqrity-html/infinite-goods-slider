'use strict';

const slides = document.querySelectorAll('.slider__item');
const slider = document.querySelectorAll(`.slider`);
const btnLeft = document.querySelector('.slider__button--prev');
const btnRight = document.querySelector('.slider__button--next');
const SLIDES_VISIBLE_AMOUNT = 5;

let currentSlide = 0;

const moveToSlide = function () {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${(currentSlide) * 100}%)`;
        slide.style.transition = `transform 0.6s ease`;
    });
};

const nextSlide = function () {
    if (currentSlide === slides.length - SLIDES_VISIBLE_AMOUNT) {
        currentSlide = 0;
    } else {
        currentSlide = currentSlide + SLIDES_VISIBLE_AMOUNT;
    }
    moveToSlide();
};

const previousSlide = function () {
    if (currentSlide === 0) {
        currentSlide = slides.length - SLIDES_VISIBLE_AMOUNT;
    } else {
        currentSlide = currentSlide - SLIDES_VISIBLE_AMOUNT;
    }
    moveToSlide();
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', previousSlide);

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') previousSlide();
});
