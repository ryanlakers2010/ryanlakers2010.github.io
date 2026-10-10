
const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

function toggleMenu() {
    nav.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);
