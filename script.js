window.history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavQuery = window.matchMedia('(max-width: 900px)');

function closeMobileMenuIfNotMobile() {
    if (!mobileNavQuery.matches) {
        mobileMenu?.classList.remove('open');
    }
}

burgerBtn?.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
});

mobileNavQuery.addEventListener('change', closeMobileMenuIfNotMobile);

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

const themeBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme !== 'light') {
    document.body.classList.add('dark-mode');
}

themeBtn?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});
