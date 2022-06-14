const menuBtn = document.querySelector('.list-icon');
const menu = document.querySelector('.menu');
menuBtn.onclick = () => {
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    } else {
        menu.classList.add('visible');
    }
}