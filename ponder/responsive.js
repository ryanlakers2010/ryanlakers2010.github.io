
// Select the menu button and navigation
const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector("nav");

// Hide the menu initially on mobile screens
function setupMenu() {
    if (window.innerWidth <= 700) {
        navigation.classList.add("hide");
    } else {
        navigation.classList.remove("hide");
    }
}

// Open and close the navigation when the button is clicked
menuButton.addEventListener("click", function () {
    navigation.classList.toggle("hide");
});

// Update the menu when the window is resized
window.addEventListener("resize", setupMenu);

// Set the initial menu state
setupMenu();
```
