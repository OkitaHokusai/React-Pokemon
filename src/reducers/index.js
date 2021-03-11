import pokemonReducer from './pokemon';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    //nome pelo qual o reducer sera identificado
    pokemonReducer
    
})

export default allReducers;