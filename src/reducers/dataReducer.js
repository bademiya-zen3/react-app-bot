import { FETCHDATA } from "../actionTypes";
export const dataReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHDATA:
      return [...action.payload];
    default:
      return state;
  }
};
