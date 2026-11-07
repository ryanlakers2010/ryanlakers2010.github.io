const character = {
    name: "Dragonis",
    class: "Ancient Dragon King",
    level: 25,
    health: 200,
    image: "images/dragonis.jpg",

    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            document.querySelector("#message").textContent =
                "💀 Dragonis has fallen in battle!";
        } else {
            document.querySelector("#message").textContent =
                `🔥 Dragonis takes 20 damage! Health is now ${this.health}.`;
        }

        updateCard();
    },

    levelUp() {
        this.level++;
        this.health += 10;

        document.querySelector("#message").textContent =
            `⭐ Dragonis reached Level ${this.level}! +10 Health`;

        updateCard();
    }
};
