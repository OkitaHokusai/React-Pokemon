import counterReducer from './counter';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    //nome pelo qual o reducer sera identificado
    basic: counterReducer
})

export default allReducers;