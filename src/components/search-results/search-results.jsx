import './search-results.scss'
import { useSelector } from 'react-redux';
import { selectRecipe } from '../../slices/recipeSlice';
import { selectSearchedIngredients } from '../../slices/ingredientsSlice';


export default  function SearchResults() {

    const recipe = useSelector(selectRecipe);
    const searchedIngredients = useSelector(selectSearchedIngredients);

    let showIngredients = '';
    if (searchedIngredients.length) {
        showIngredients = searchedIngredients?.length < 5  ? searchedIngredients.join(', ') : searchedIngredients.slice(0, 5).join(', ');
    }

    return (
        <section className="search-results-section">
            <h1 className='search-results-section--heading'>Culinary alchemy with&nbsp; 
                <i>{ showIngredients + ' and more'}</i>
            </h1>
            <p className='search-results-section--description'>
                We've curated these editorial masterpieces using your selected pantry staples. 
                Each recipe is designed to highlight the natural essence of your ingredients.
            </p>
        </section>
    )
} 