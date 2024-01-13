/* в этот файл добавляет скрипты*/

const BACKGROUND_COLOURS = ['#F3EBE1', '#EAE6FC', '#E5E6E8'];

// Бургер меню

const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
    navList.classList.toggle('nav-list--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
    navList.classList.toggle('nav-list--opened');
  }
});

// Слайдер

const sliderImages = document.querySelectorAll('.slider__item');
const sliderLine = document.querySelector('.slider__list');
const sliderDots = document.querySelectorAll('.slider__dot');
const sliderButtonNext = document.querySelector('.slider__button--next');
const sliderButtonPrevious = document.querySelector('.slider__button--previous');
const heroSection = document.querySelector('.hero');

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);

// Функции

// Задает нужную ширину слайду

const showSlide = () => {
  sliderWidth = document.querySelector('.slider__container').offsetWidth;
  sliderLine.style.width = (sliderWidth * sliderImages.length) + 'px';
  sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
};

// Задает шаг перемещения слайдов

const rollSlider = () => {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
};

// Перелистывает слайд вперед

const nextSlide = () => {
  sliderCount++;
  sliderButtonPrevious.disabled = false;
  if (sliderCount >= sliderImages.length) {
    sliderButtonNext.disabled = true;
    sliderCount = sliderImages.length - 1;
/*      */
  }
  heroSection.style.backgroundColor = BACKGROUND_COLOURS[sliderCount];

  rollSlider();
/*   thisSlide(sliderCount); */
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
/*   thisSlide(sliderCount); */
};

// Кнопки листания слайдов вперед и назад

sliderButtonNext.addEventListener('click', nextSlide);
sliderButtonPrevious.addEventListener('click', previousSlide);
window.removeEventListener('resize', showSlide);

showSlide();
