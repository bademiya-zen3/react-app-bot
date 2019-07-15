import {combineReducers} from 'redux';
import {barReducer} from './barReducer'

const rootReducer = combineReducers({
    barData:barReducer
})

export default rootReducer;