import { fetchData } from "./index";
import { errorBreakUpEndPoint } from "../utils/apiEndPoint";
import { FETCHPIEDATA } from "../actionTypes";
export const getErrorBreakupData = async () => {
  let payLoadData = await fetchData(errorBreakUpEndPoint).then(data => data);
  return {
    type: FETCHPIEDATA,
    payload: payLoadData
  };
};
