import './sass/main.scss';
import menu from './templates/menu-item.hbs';
import menuList from './menu.json';

// Варіанти тем
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const ref = {
  menu: document.querySelector('.js-menu'),
  themeSwitchToggle: document.querySelector('#theme-switch-toggle'),
};

// Вставити розмітку на головну сторінку
ref.menu.insertAdjacentHTML('beforeend', menu(menuList));

const toggleTheme = () => {
  // Переключати теми
  switch (document.body.className) {
    case Theme.DARK:
      document.body.classList.remove(Theme.DARK);
      document.body.classList.add(Theme.LIGHT);
      break;

    default:
      document.body.classList.remove(Theme.LIGHT);
      document.body.classList.add(Theme.DARK);
      break;
  }

  // Збереження вибору теми
  localStorage.setItem('theme', document.body.className);
};

// Слухати перемикач теми
ref.themeSwitchToggle.addEventListener('change', toggleTheme);

// Прочитати збережину тему якщо вона є в наявності
if (localStorage.getItem('theme')) document.body.classList.add(localStorage.getItem('theme'));

// Провірити коректність розташування перемикача теми
if (localStorage.getItem('theme') === Theme.DARK)
  ref.themeSwitchToggle.setAttribute('checked', true);
