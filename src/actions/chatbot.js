import { fetchData } from "./index";
import { chatBotEndPoint } from "../utils/apiEndPoint";
import { GETBARDATA } from "../actionTypes";
export const getChatBotData = async () => {
  let payLoadData = await fetchData(chatBotEndPoint).then(data => data);
  return {
    type: GETBARDATA,
    payload: payLoadData
  };
};
