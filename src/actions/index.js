import { GETBARDATA } from "../actionTypes";
import axios from "axios";

//Getting Mock data
import { dataArr, dataArrMonthly, dataArrYearly } from "../utils/seed";

//@TODO
//make an api request here with the report duration Type and
//send array of objects as payload
//for development purpose, arays with required results is assumed
export const getBarData = reportType => {
  let payLoadData;
  if (reportType === "lastTwoDays") payLoadData = [...dataArr];
  else if (reportType === "monthToDate") payLoadData = [...dataArrMonthly];
  else if (reportType === "yearly") payLoadData = [...dataArrYearly];

  return {
    type: GETBARDATA,
    payload: payLoadData
  };
};

export const fetchData = async apiEndPoint => {
  let { data } = await axios.get(apiEndPoint);
  return data;
};
