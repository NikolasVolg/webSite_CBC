const $nav = document.getElementById('nav');
const $logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    window.pageYOffset <= 80 ? $nav.classList.remove('scrolled') : $nav.classList.add('scrolled');
    window.pageYOffset <= 80 ? $logo.classList.remove('logoScrolled') : $logo.classList.add('logoScrolled');
});