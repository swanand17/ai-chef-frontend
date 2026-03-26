import './card.scss';
import { useDispatch } from 'react-redux';

export default function Card(props) {

    const dispatch = useDispatch();

    return (
        <div className="card" onClick={() => dispatch({ type: 'recipe/setRecipe', payload: props })}>
            <img src={props.images[0]} className="base" width="170" height="179" alt={props.images[0].alt} />
            <div className='card-info'>
                <p className="card-info-title">{props.title}</p>
                <p className="card-info-description">{props.description}</p>
            </div>
        </div>
    )
}