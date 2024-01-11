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
