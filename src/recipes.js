import pizzaImage from "./assets/PIZZA-MARGHERITA.jpg";
import spaghettiImage from "./assets/Spaghetti.avif";

export default [
    {
        id: 1,
        images: [spaghettiImage],
        title: "Spaghetti Aglio e Olio",
        description: "A simple Italian pasta dish made with garlic, olive oil, and chili flakes.",
        ingredients: ["spaghetti", "garlic", "olive oil", "chili flakes", "parsley"],
        instructions: [`Ingredients
            200g spaghetti
            5 garlic cloves (sliced)
            3 tbsp olive oil
            1 tsp chili flakes
            Salt
            Fresh parsley
            Parmesan (optional)
            Steps
            Boil spaghetti until al dente.
            Heat olive oil and sauté garlic until light golden.
            Add chili flakes.
            Toss in pasta with a little pasta water.
            Add parsley and parmesan.`
        ]
    },
    {
        id: 2,
        images: [pizzaImage],
        title: "Margherita Pizza",
        description: "A classic Italian pizza with tomato sauce, mozzarella, and fresh basil.",
        ingredients: ["pizza dough", "tomato sauce", "mozzarella", "fresh basil"],
        instructions: [`Ingredients
            1 pizza dough
            1/2 cup tomato sauce
            8 oz mozzarella (sliced)
            Fresh basil leaves
            Steps
            Preheat oven to 475°F (245°C).
            Roll out pizza dough.
            Spread tomato sauce over the dough.
            Add mozzarella slices.
            Bake for 12-15 minutes.
            Top with fresh basil before serving.`]
    }
]