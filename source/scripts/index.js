/* в этот файл добавляет скрипты*/

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
  if (sliderCount >= sliderImages.length) {
    sliderCount = 0;
  }

  rollSlider();
/*   thisSlide(sliderCount); */
};

// Перелистывает слайд назад

const previousSlide = () => {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderImages.length - 1;
  }

  rollSlider();
/*   thisSlide(sliderCount); */
};

// Кнопки листания слайдов вперед и назад

sliderButtonNext.addEventListener('click', nextSlide);
sliderButtonPrevious.addEventListener('click', previousSlide);
window.addEventListener('resize', showSlide);

showSlide();
