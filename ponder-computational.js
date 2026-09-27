// Get the value from the drop-down so you know what theme they chose
let chosenTheme = themeSelect.value;

// According to what theme they choose, change the font style and background image:
if (chosenTheme === "ocean") {
  // If the value is ocean
  document.body.style.fontFamily = "Papyrus, fantasy";
  document.body.style.backgroundImage = "url('ocean.jpg')";
} 
else if (chosenTheme === "forest") {
  // If the value is forest
  document.body.style.fontFamily = "Impact, fantasy";
  document.body.style.backgroundImage = "url('forest.jpg')";
} 
else if (chosenTheme === "desert") {
  // If the value is desert
  document.body.style.fontFamily = "'Big Caslon', serif";
  document.body.style.backgroundImage = "url('dessert.jpg')";
} 
else {
  // Otherwise no changes will be made to the background and font will remain the same
  document.body.style.fontFamily = "";
  document.body.style.backgroundImage = "";
}
          
