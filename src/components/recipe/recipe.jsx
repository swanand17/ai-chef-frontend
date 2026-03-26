import { useSelector } from 'react-redux';
import { selectRecipe } from '../../slices/recipeSlice';
import './recipe.scss'


export default  function Recipe() {

    const recipe = useSelector(selectRecipe);

     return (
        recipe ? <section className="recipe-section">
            <img src={recipe.images[0]} alt={recipe.images[0].alt} className="logo" />
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}     
            </ul>
            <h2>Instructions</h2>
            <ol>    
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </section> : <hr></hr>
    )
} 