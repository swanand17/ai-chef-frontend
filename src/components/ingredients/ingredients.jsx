import { useState } from 'react'
import './ingredients.scss'
import recipeData from '../../recipes'
import Card from '../card/card';


export default function Ingredients() {
    const [ingredients, setIngredients] = useState(["potato", "onion", "garlic", "ginger"]);
    const [recipeFound, setRecipeFound] = useState(false);

    function addIngredient(formData) {
        const ingredientName = formData.get('ingredientName');
        console.log(ingredientName);
        if (ingredientName) {
            setIngredients([...ingredients, ingredientName]);
        }
    }

    function removeIngredient(index) {
        const updatedIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(updatedIngredients);
    }
    
    function getRecipe(formData) {
        const preference = formData.get('preference');
        console.log(preference);
        console.log('Getting recipe with ingredients:', ingredients);
        setRecipeFound(true);
    }

    return (
        <section className="ingredients">
            <form action={addIngredient} className="ingredients-form">
                <label htmlFor="ingredientName">Ingredient Name:</label>
                <input type="text" name="ingredientName" placeholder="e.g., Tomatoes" />
                <button type="submit" className="btn-add-ingredient">+ Add Ingredient</button>
            </form>
            <div className="ingredients-display">
                <h2>Ingredients on hand:</h2>

                {ingredients.map((ingredient, index) => (
                    <p key={index}>{ingredient}
                        <button className="btn-remove-ingredient" onClick={() => removeIngredient(index)}>
                            Remove
                        </button>
                    </p>
                ))}
            </div>
            {ingredients.length > 3 && (
            <>
                <form action={getRecipe} className="recipe-preference-form">
                    <fieldset>
                    <legend>Recipe Preference:</legend>

                    <label>
                        <input type="radio" name="preference" value="vegetarian" />
                        Vegetarian
                    </label>

                    <label>
                        <input type="radio" name="preference" value="eggetarian" />
                        Eggitarian
                    </label>

                    <label>
                        <input type="radio" name="preference" value="non-vegetarian" />
                        Non-Vegetarian
                    </label>

                    <label>
                        <input
                        type="radio"
                        name="preference"
                        value="all of the above"
                        defaultChecked
                        />
                        All of the above
                    </label>
                    </fieldset>

                    <button className="btn-get-recipe" type="submit">
                    Get Recipe
                    </button>
                </form>

                {recipeFound &&
                recipeData.map((recipe) => (
                    <Card key={recipe.id} {...recipe}/>
                ))}
            </>
            )}
        </section>
    )
} 