import {GETBARDATA} from '../actionTypes';
import {FETCHDATA} from '../actionTypes';

//Getting Mock data
import {dataArr,dataArrMonthly,dataArrYearly,dataMonthly,dataWeekly,dataDaily} from '../utils/seed'


//@TODO
//make an api request here with the reportType and 
//send array of objects as payload
 //for development purpose, arays with required results is assumed
export const getBarData = (reportType) =>{
    let payLoadData;
    if(reportType === 'lastTwoDays'){
        payLoadData = [...dataArr];
    }
    else if(reportType === 'monthToDate'){
        payLoadData = [...dataArrMonthly];
    }
    else if(reportType === 'yearly'){
        payLoadData = [...dataArrYearly];
    }
    return {
        type:GETBARDATA,
        payload:payLoadData
    }
}
//@TODO
//make an api request here with the filter type and
 //send array of objects as payload
 //for development purpose, arays with required results is assumed
export const getData = (filterType) =>{
    let payLoadData;
    if(filterType === 'daily'){
        payLoadData = [...dataDaily];
    }
    else if(filterType === 'monthly'){
        payLoadData = [...dataMonthly];
    }
    if(filterType === 'weekly'){
        payLoadData = [...dataWeekly];
    }
    return { 
        type:FETCHDATA,
        payload:payLoadData
    }
}