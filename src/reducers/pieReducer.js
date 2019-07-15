import { FETCHPIEDATA } from "../actionTypes";
export const pieReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHPIEDATA:
      return [...action.payload];
    default:
      return state;
  }
};
