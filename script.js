const burgerBtn = document.getElementById('burger-btn'); // добавление обработчика для кнопки бургер-меню
const mobileMenu = document.getElementById('mobile-menu');

burgerBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
}); 