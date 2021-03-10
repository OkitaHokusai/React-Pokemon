import { useSelector, useDispatch } from 'react-redux';
import {SAVE} from './actions';


const SavedPoke = () =>{
        const basic = useSelector(state => state.basic);
        const dispatch = useDispatch();
    return(
            <>
                {/* redux output */}
                <p>Pokemons Salvos {basic}</p> 
                <button onClick={() => dispatch(SAVE())}>+</button>
            </>
    )
}