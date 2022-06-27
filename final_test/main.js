const listIconBtn = document.querySelector('.list-icon');
const menu = document.querySelector('header .menu');
listIconBtn.onclick = () => {
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    } else {
        menu.classList.add('visible');
    }
}