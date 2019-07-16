import { emailBotEndPoint } from "../utils/apiEndPoint";
import { FETCHDATA } from "../actionTypes";
import { fetchData } from "./index";

export const getEmailBotData = async filterType => {
  let queryString;
  if (filterType === "daily") queryString = "?sortby=day";
  else if (filterType === "weekly") queryString = "?sortby=week";
  else if (filterType === "monthly") queryString = "?sortby=month";
  let apiEndPoint = emailBotEndPoint + queryString;
  let payLoadData = await fetchData(apiEndPoint).then(data => data);
  return {
    type: FETCHDATA,
    payload: payLoadData
  };
};
