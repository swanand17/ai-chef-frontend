import './recipe-card.scss';
import { useDispatch } from 'react-redux';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { useNavigate } from 'react-router-dom';

export default function RecipeCard(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function setActiveRecipe() {
        dispatch({ type: 'recipe/setRecipe', payload: props });
        // navigate('/recipe/' + props.title);
        navigate('/recipe');
    }

    return (
        <div className="recipe-card pointer" onClick={setActiveRecipe}>
            <img className="recipe-card-image" src={props.images[0]} alt={props.images[0].alt} />
            <p className="recipe-card-title">{props.title}</p>
            <div className='recipe-card-info'>
                <p className='recipe-card-time'> 
                    <WatchLaterIcon className="recipe-card-time-icon" /><span className="recipe-card-time-text">{props.time}</span>
                </p>
                <p className='recipe-card-difficulty'> 
                    <EqualizerIcon className="recipe-card-difficulty-icon" /><span className="recipe-card-difficulty-text">{props.difficulty}</span>
                </p>
            </div>
        </div>
    )
}