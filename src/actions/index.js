import {GETBARDATA} from '../actionTypes';
import {data} from '../utils/barData';

export const getBarData = () =>{
    return {
        type:GETBARDATA,
        payload:data
    }
}