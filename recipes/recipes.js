// Recipe data
const recipes = [
    {
        name: "Apple Crisp",
        description: "A delicious apple dessert with a crunchy topping.",
        tags: ["dessert", "apple", "fruit"],
        image: "images/apple-crisp.jpg",
        rating: "⭐⭐⭐⭐"
    }
];

// Get the search form and recipe container
const searchForm = document.querySelector("#search");
const recipeContainer = document.querySelector(".recipe-container");

// Listen for a search
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchInput = searchForm.querySelector("input").value.toLowerCase();

    const filteredRecipes = recipes.filter(function (recipe) {
        return (
            recipe.name.toLowerCase().includes(searchInput) ||
            recipe.description.toLowerCase().includes(searchInput) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(searchInput))
        );
    });

    displayRecipes(filteredRecipes);
});

// Display matching recipes
function displayRecipes(recipeList) {
    recipeContainer.innerHTML = "";

    if (recipeList.length === 0) {
        recipeContainer.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    recipeList.forEach(function (recipe) {
        const recipeCard = document.createElement("article");
        recipeCard.classList.add("recipe-card");

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <div>
                <h2>${recipe.name}</h2>
                <p>${recipe.description}</p>
                <p>${recipe.rating}</p>
                <p>${recipe.tags.join(", ")}</p>
            </div>
        `;

        recipeContainer.appendChild(recipeCard);
    });
}
