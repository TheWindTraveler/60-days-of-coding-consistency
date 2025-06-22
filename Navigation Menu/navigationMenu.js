const menuIconElement = document.querySelector(".menu-icon");
const NavMenuElement = document.querySelector(".navmenu");

// NavMenu On click event
menuIconElement.addEventListener('click', () => {
    NavMenuElement.classList.toggle('active');
});