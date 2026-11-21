
const hikeContainer = document.querySelector("#hike-container");
const input = document.querySelector("#search");
const button = document.querySelector("#search-button");

// Sort hikes by distance
function compareHikes(a, b) {
  return parseFloat(a.distance) - parseFloat(b.distance);
}

// Create hiking tag buttons
function tagTemplate(tags) {
  return tags.map(tag =>
    `<button class="tag-button">${tag}</button>`
  ).join(" ");
}

// Display difficulty with boots
function difficultyTemplate(rating) {
  let html = `<span aria-label="Difficulty ${rating} out of 5">`;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += "🥾";
    } else {
      html += "▫️";
    }
  }

  html += "</span>";
  return html;
}

// Create the HTML for each hike
function hikesTemplate(hike) {
  return `
    <article class="hike-card">
      <img src="${hike.imgSrc}" alt="${hike.imgAlt}">

      <div class="hike-content">
        <h2>${hike.name}</h2>

        <p><strong>Distance:</strong> ${hike.distance}</p>

        <div class="hike-tags">
          ${tagTemplate(hike.tags)}
        </div>

        <p>${hike.description}</p>

        <p><strong>Difficulty:</strong>
          ${difficultyTemplate(hike.difficulty)}
        </p>
      </div>
    </article>
  `;
}

// Display a hike
function renderHike(hike) {
  hikeContainer.innerHTML += hikesTemplate(hike);
}

// Search and filter hikes
function search() {
  const hikeQuery = input.value.toLowerCase().trim();

  const filteredHikes = hikes.filter(hike => {
    return (
      hike.name.toLowerCase().includes(hikeQuery) ||
      hike.description.toLowerCase().includes(hikeQuery) ||
      hike.tags.some(tag =>
        tag.toLowerCase().includes(hikeQuery)
      )
    );
  });

  const sortedHikes = filteredHikes.sort(compareHikes);

  hikeContainer.innerHTML = "";

  if (sortedHikes.length === 0) {
    hikeContainer.innerHTML = "<p>No hikes found. Try another search.</p>";
    return;
  }

  sortedHikes.forEach(renderHike);
}

// Search button
button.addEventListener("click", search);

// Search when pressing Enter
input.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    search();
  }
});

// Show a random hike when the page loads
function init() {
  const randomNum = Math.floor(Math.random() * hikes.length);

  renderHike(hikes[randomNum]);
}

init();

// Display one random hike when the page loads
function init() {
  // Generate a random number based on the number of hikes
  const randomIndex = Math.floor(Math.random() * hikes.length);

  // Get the randomly selected hike
  const randomHike = hikes[randomIndex];

  // Clear the container
  hikeContainer.innerHTML = "";

  // Display the random hike
  renderHike(randomHike);
}

// Run when the page loads
init();

