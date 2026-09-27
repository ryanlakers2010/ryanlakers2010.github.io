// Select DOM elements
const selectElem = document.querySelector('select');
const logo = document.querySelector('#logo');

// Event handler function
function changeTheme() {
    const current = selectElem.value;

    if (current === 'dark') {
        // Add dark class to body
        document.body.classList.add('dark');
        // Change image src to white logo
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png';
    } else {
        // Remove dark class from body
        document.body.classList.remove('dark');
        // Revert image src to blue logo
        logo.src = 'byui-logo.png';
    }
}

// Add event listener
selectElem.addEventListener('change', changeTheme);         
