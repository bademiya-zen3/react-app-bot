import { GETBARDATA } from "../actionTypes";

export const barReducer = (state = [], action) => {
  switch (action.type) {
    case GETBARDATA:
      return [...action.payload];
    default:
      return state;
  }
};
