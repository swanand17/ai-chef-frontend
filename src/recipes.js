import pizzaImage from "./assets/PIZZA-MARGHERITA.jpg";
import spaghettiImage from "./assets/Spaghetti.avif";

export default [
    {
        id: 1,
        images: [spaghettiImage],
        title: "Spaghetti Aglio e Olio",
        description: "A simple Italian pasta dish made with garlic, olive oil, and chili flakes.",
        ingredients: ["spaghetti", "garlic", "olive oil", "chili flakes", "parsley"],
        instructions: [
            "Boil spaghetti until al dente.",
            "Heat olive oil and sauté garlic until light golden.",
            "Add chili flakes.",
            "Toss in pasta with a little pasta water.",
            "Add parsley and parmesan."
        ],
        time: "20 mins",
        difficulty: "Easy"
    },
    {
        id: 2,
        images: [pizzaImage],
        title: "Margherita Pizza",
        description: "A classic Italian pizza with tomato sauce, mozzarella, and fresh basil.",
        ingredients: ["pizza dough", "tomato sauce", "mozzarella", "fresh basil"],
        instructions: [
            "Preheat oven to 475°F (245°C).",
            "Roll out pizza dough.",
            "Spread tomato sauce over the dough.",
            "Add mozzarella slices.",
            "Bake for 12-15 minutes.",
            "Top with fresh basil before serving."
        ],
        time: "40 mins",
        difficulty: "Hard"
    }
]