import {GETBARDATA} from '../actionTypes';
import {FETCHDATA} from '../actionTypes';
import {dataArr} from '../utils/barData';
import {dataArr as data} from '../utils/barMonth';

//@TODO
//make an api request here with the reportType and 
//send array of objects as payload
export const getBarData = (reportType) =>{
    return {
        type:GETBARDATA,
        payload:dataArr
    }
}
//@TODO
//make an api request here with the filter type and
 //send array of objects as payload
export const getData = () =>{

    return { 
        type:FETCHDATA,
        payload:data
    }
}