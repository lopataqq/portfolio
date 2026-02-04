window.history.scrollRestoration = 'manual'; // отключение автоматической прокрутки браузера
window.scrollTo(0, 0); // прокрутка страницы в начало при загрузке

const burgerBtn = document.getElementById('burger-btn'); // добавление обработчика для кнопки бургер-меню
const mobileMenu = document.getElementById('mobile-menu'); // получение элемента мобильного меню
burgerBtn?.addEventListener('click', function() { // при клике на кнопку
    mobileMenu.classList.toggle('open'); // переключение класса 'open' для мобильного меню
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// блок переключения темы светлая-темная
const themeBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// По умолчанию тёмная тема (телефон и компьютер); светлая только если пользователь сохранил выбор
if (currentTheme !== 'light') {
    document.body.classList.add('dark-mode');
}

themeBtn?.addEventListener('click', () => {
    // Переключаем класс
    document.body.classList.toggle('dark-mode');
    // Определяем текущую тему
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    // Сохраняем выбор в LocalStorage чтобы сохранить тему при перезагрузке
    localStorage.setItem('theme', theme);
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Предложить или автоматически включить темную тему
}