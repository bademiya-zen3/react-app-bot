import { combineReducers } from "redux";
import { barReducer } from "./barReducer";
import { dataReducer } from "./dataReducer";
import { pieReducer } from "./pieReducer";

const rootReducer = combineReducers({
  barReport: barReducer,
  barMonthly: dataReducer,
  pieData: pieReducer
});

export default rootReducer;
