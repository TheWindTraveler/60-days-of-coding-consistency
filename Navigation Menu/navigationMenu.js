const menuIconElement = document.querySelector(".menu-icon");
const NavMenuElement = document.querySelector(".navmenu");


menuIconElement.addEventListener('click', () => {
    NavMenuElement.classList.toggle('active');
});