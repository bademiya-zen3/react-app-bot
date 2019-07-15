import {combineReducers} from 'redux';
import {barReducer} from './barReducer';
import {dataReducer} from './dataReducer'

const rootReducer = combineReducers({
    barData:barReducer,
    dataMonthly : dataReducer
})

export default rootReducer;