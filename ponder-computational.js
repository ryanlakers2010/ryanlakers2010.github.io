const bodyElement = document.body;
const themeSelect = document.getElementById("theme-select");


themeSelect.addEventListener("change", changeTheme);


function changeTheme() {
  
  const selectedTheme = themeSelect.value;

  
  if (selectedTheme === "ocean") {
    bodyElement.style.fontFamily = "Papyrus, fantasy";
    bodyElement.style.backgroundImage = "url('ocean.jpg')";
  } 
  else if (selectedTheme === "forest") {
    bodyElement.style.fontFamily = "Impact, charcoal, sans-serif";
    bodyElement.style.backgroundImage = "url('forest.jpg')";
  } 
  else if (selectedTheme === "desert") {
    bodyElement.style.fontFamily = "'Big Caslon', Book Antiqua, serif";
    bodyElement.style.backgroundImage = "url('desert.jpg')";
  } 
  else {
    // Default fallback if no theme or default option is selected
    bodyElement.style.fontFamily = "Arial, sans-serif";
    bodyElement.style.backgroundImage = "none";
  }
}
