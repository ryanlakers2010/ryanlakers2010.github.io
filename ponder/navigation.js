```javascript
// Select the menu button and navigation
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

// Open and close the menu when the button is clicked
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("hide");
    menuButton.classList.toggle("change");

    // Update accessibility information
    const isOpen = !navigation.classList.contains("hide");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});
```
