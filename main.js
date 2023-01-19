let humbergurMenu = document.querySelector(".nav__menu");
let closeIcon = document.querySelector(".close");
let navbar = document.querySelector(".navbar");

const openMenu = () => {
    closeIcon.style.display = 'block';
  navbar.classList.add("toggle-menu");
};
const closeMenu = () => {
    closeIcon.style.display = 'none';
  navbar.classList.remove("toggle-menu");
};

humbergurMenu.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);
