import { useState } from 'react'
import './ingredients.scss'
import recipeData from '../../recipes'
import Card from '../card/card';

import Box from '@mui/material/Box';
import { Add } from '@mui/icons-material';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Tooltip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


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
        // const preference = formData.get('preference');
        // console.log(preference);
        console.log('Getting recipe with ingredients:', ingredients);
        setRecipeFound(true);
    }
    

    function toSentenceCase(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    return (
        <section className="ingredients">
            <form action={addIngredient} className="ingredients-form">
                <Box className="search-box" sx={{ }}>
                    <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <div className='search-input-container'>
                        <label htmlFor="ingredientName" className="visually-hidden">Add an ingredient (e.g. Chicken, Basil, Garlic...)</label>
                        <input className='search-input' type="text" name="ingredientName" placeholder="Add an ingredient (e.g. Chicken, Basil, Garlic...)" />
                    </div>
                    <Button type="submit" className='btn-add' variant="contained" startIcon={<Add />}>
                      Add
                    </Button>
                </Box>
                
            </form>
            <div className="ingredients-display">
                {ingredients.map((ingredient, index) => (
                    <p className='chip' key={index}>{toSentenceCase(ingredient)}
                        <Tooltip title="Remove" placement="bottom">
                            <CloseIcon  className="close-icon" onClick={() => removeIngredient(index)} />
                        </Tooltip>
                    </p>
                ))}
            </div>
            {ingredients.length > 3 && (
            <>
                {/* <form action={getRecipe} className="recipe-preference-form">
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
                </form> */}
                
                <Button onClick={getRecipe} color='secondary' className='btn-get-recipe' variant="contained" endIcon={<ArrowForwardIcon />}>
                    Get Recipe
                </Button>

                {recipeFound &&
                recipeData.map((recipe) => (
                    <Card key={recipe.id} {...recipe}/>
                ))}
            </>
            )}
        </section>
    )
} 