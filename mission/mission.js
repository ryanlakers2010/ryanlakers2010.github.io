let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    
    if (current === 'dark') {
        // Add dark class to body for background/text color changes
        document.body.classList.add('dark');
        // Change the logo image source to the dark mode logo
        logo.setAttribute('src', 'byui-logo_white.png'); 
    } else {
        // Remove dark class from body to revert to light mode
        document.body.classList.remove('dark');
        // Change the logo image source back to the original logo
        logo.setAttribute('src', 'byui-logo_blue.webp'); 
    }
}              
