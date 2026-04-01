import './recipe-details.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectRecipe } from '../../../slices/recipeSlice';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';
import KitchenIcon from '@mui/icons-material/Kitchen';
import { capitalizeWords } from '../../../utility';

export default function RecipeDetails() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const recipe = useSelector(selectRecipe);
    console.log('Active recipe:', recipe);

    function backToSearchResults() {
        dispatch({ type: 'recipe/clearRecipe' });
        navigate('/home/search-results');
    }

    return (
        <section className="recipe-details">
            <div className="recipe-details-top">
                <div className='recipe-details-top-image-container'>
                    <Tooltip title="Back to Search Results" placement="bottom">
                        <IconButton className="recipe-details-top-back-button" onClick={backToSearchResults} >
                            <ArrowBackIcon />
                        </IconButton>
                    </Tooltip>
                    <img className="recipe-details-top-image" src={recipe.images[0]} alt={recipe.images[0].alt} />
                </div>
                <div className='recipe-details-top-intro'>
                    <h1 className='recipe-details-top-intro-title'>{recipe.title}</h1>
                    <p className='recipe-details-top-intro-description'>{recipe.description}</p>
                </div>
            </div>
            <div className='recipe-details-bottom'> 
                {/* Ingredients */}
                <div className='recipe-details-bottom-ingredients'>
                    <div className='recipe-details-bottom-ingredients-header'>
                        <KitchenIcon className='recipe-details-bottom-ingredients-icon' />
                        <h2 className='recipe-details-bottom-ingredients-title'>Pantry Essentials</h2>
                    </div>
                    <ul className='recipe-details-bottom-ingredients-list'>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className='recipe-details-bottom-ingredients-list-item'>{capitalizeWords(ingredient)}</li>
                        ))}
                    </ul>
                </div>
                
                {/* Instructions */}
                <div className='recipe-details-bottom-instructions'>
                    <h2 className='recipe-details-bottom-instructions-title'>Instructions</h2>
                    <table className='recipe-details-bottom-instructions-table'>
                        {recipe.instructions.map((instruction, index) => (
                            <tr key={index} className='recipe-details-bottom-instructions-table-row'>
                                <td className='instructions-table-row-number'>{index + 1}</td>
                                <td>{instruction}</td>
                            </tr>
                        ))}
                    </table>
                </div>

                {/* Nutrition */}
                <div className='recipe-details-bottom-nutrition'></div>
           </div>
        </section>
    )
}