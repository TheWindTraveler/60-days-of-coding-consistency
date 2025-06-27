const menuIconsElement = document.getElementById("menu-icon");
const NavMenuElement = document.querySelector(".navmenu");

// NavMenu On click event
menuIconsElement.addEventListener('click', () => {
    NavMenuElement.classList.toggle('active');
    menuIconsElement.classList.toggle('open');
});