// Слайдер

const BACKGROUND_COLOURS = ['#F3EBE1', '#EAE6FC', '#E5E6E8'];

const sliderImages = document.querySelectorAll('.slider__item');
const sliderLine = document.querySelector('.slider__list');
const sliderDots = document.querySelectorAll('.slider__dot');
const sliderButtonNext = document.querySelector('.slider__button--next');
const sliderButtonPrevious = document.querySelector('.slider__button--previous');
const heroSection = document.querySelector('.hero');

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', () => {
  showSlide();
});

// Функции

// Указывает какой слайд по счету активен

const thisSlide = (index) => {
  sliderDots.forEach((item) => item.classList.remove('slider__dot--active'));
  sliderDots[index].classList.add('slider__dot--active');
};

// Задает шаг перемещения слайдов

const rollSlider = () => {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
};

// Задает нужную ширину слайду

function showSlide () {
  sliderWidth = document.querySelector('.slider__container').offsetWidth;
  sliderLine.style.width = `${sliderWidth * sliderImages.length }px`;
  // eslint-disable-next-line no-return-assign
  sliderImages.forEach((item) => item.style.width = `${sliderWidth}px`);

  rollSlider();
}

// Перелистывает слайд вперед

const nextSlide = () => {
  sliderCount++;
  sliderButtonPrevious.disabled = false;
  if (sliderCount >= sliderImages.length) {
    sliderButtonNext.disabled = true;
    sliderCount = sliderImages.length - 1;
  }
  heroSection.style.backgroundColor = BACKGROUND_COLOURS[sliderCount];

  rollSlider();
  thisSlide(sliderCount);
};

// Перелистывает слайд назад

const previousSlide = () => {
  sliderCount--;
  sliderButtonNext.disabled = false;
  if (sliderCount < 0) {
    sliderButtonPrevious.disabled = true;
    sliderCount = 0;
  }
  heroSection.style.backgroundColor = BACKGROUND_COLOURS[sliderCount];

  rollSlider();
  thisSlide(sliderCount);
};

// Вешает клик на дот

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
    heroSection.style.backgroundColor = BACKGROUND_COLOURS[sliderCount];
  });
});

// Кнопки листания слайдов вперед и назад

sliderButtonNext.addEventListener('click', nextSlide);
sliderButtonPrevious.addEventListener('click', previousSlide);

showSlide();
window.addEventListener('load', showSlide);
window.removeEventListener('resize', showSlide);
window.removeEventListener('load', showSlide);
