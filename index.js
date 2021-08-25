const $nav = document.getElementById('nav');
const $logo = document.getElementById('logo');

window.addEventListener('scroll', () =>
    window.pageYOffset <= 90 ? $nav.classList.remove('scrolled') : $nav.classList.add('scrolled')
);

window.addEventListener('scroll', () =>
    window.pageYOffset <= 90 ? $logo.classList.remove('logoScrolled') : $logo.classList.add('logoScrolled')
);