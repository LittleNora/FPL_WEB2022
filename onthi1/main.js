const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('header .menu');
menuBtn.onclick = () => {
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    } else {
        menu.classList.add('visible');
    }
}