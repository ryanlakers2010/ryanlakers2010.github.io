const themeSelect = document.getElementById('theme-select');
const logo = document.getElementById('logo');

themeSelect.addEventListener('change', (event) => {
  const selectedTheme = event.target.value;

  if (selectedTheme === 'dark') {
    document.body.classList.add('dark');
    // Optional: Switch to a white/light logo if available in dark mode
    // logo.src = 'byui-logo-white.webp';
  } else {
    document.body.classList.remove('dark');
    // logo.src = 'byui-logo-blue.webp';
  }
});       
   // Add event listener to the select element
themeSelector.addEventListener('change', changeTheme);                 
