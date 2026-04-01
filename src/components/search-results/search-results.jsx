import './search-results.scss'
import { useSelector } from 'react-redux';
import { selectSearchedIngredients } from '../../slices/ingredientsSlice';
import { selectSuggestedRecipes } from '../../slices/suggestedRecipesSlice';
import RecipeCard from './recipe-card/recipe-card';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Circle } from '@mui/icons-material';


export default  function SearchResults() {

    const suggestedRecipes = useSelector(selectSuggestedRecipes);
    const searchedIngredients = useSelector(selectSearchedIngredients);
    const navigate = useNavigate();

    useEffect(() => {  
        if(!suggestedRecipes.length || !searchedIngredients.length) {
           navigate('/');
        }        
    }, [suggestedRecipes, searchedIngredients]);


    let showIngredients = searchedIngredients?.length < 5  ? searchedIngredients.join(', ') : searchedIngredients.slice(0, 5).join(', ');

    return (
        <section className="search-results-section">
            <div className="search-results-section-tag-container">
                <Tooltip title="Back to Home" placement="bottom">
                    <IconButton className="" onClick={() => navigate('/')} >
                        <ArrowBackIcon />
                    </IconButton>
                </Tooltip>
                <p className='tertiary-tag'>SEARCH RESULTS</p>
                <Circle className='search-results-section-tag-separator' />
                <p className='recipies-found-number'>{suggestedRecipes.length} recipes found</p>
            </div>
            <h1 className='search-results-section--heading'>Culinary alchemy with&nbsp; 
                <i>{ showIngredients + ' and more'}</i>
            </h1>
            <p className='search-results-section--description'>
                We've curated these editorial masterpieces using your selected pantry staples. 
                Each recipe is designed to highlight the natural essence of your ingredients.
            </p>
            <div className='recipes-display'>
                {suggestedRecipes.map((recipe, index) => (
                    <RecipeCard key={index} {...recipe} />
                ))}
            </div>

        </section>
    )
} 