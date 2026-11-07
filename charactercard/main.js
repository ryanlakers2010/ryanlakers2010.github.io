const character = {
    name: "Aragorn",
    class: "Ranger",
    level: 1,
    health: 100,
    image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",

    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            document.querySelector("#message").textContent =
                `${this.name} has died!`;
        }

        updateCard();
    },

    levelUp() {
        this.level++;
        document.querySelector("#message").textContent =
            `${this.name} reached level ${this.level}!`;

        updateCard();
    }
};

function updateCard() {
    document.querySelector("#characterName").textContent =
        character.name;

    document.querySelector("#characterClass").textContent =
        character.class;

    document.querySelector("#characterLevel").textContent =
        character.level;

    document.querySelector("#characterHealth").textContent =
        character.health;

    document.querySelector("#characterImage").src =
        character.image;
}

updateCard();

document.querySelector("#attackBtn").addEventListener("click", () => {
    character.attacked();
});

document.querySelector("#levelBtn").addEventListener("click", () => {
    character.levelUp();
});
