import { combineReducers } from "redux";
import incomeAndExpenseReducer from "./DashboardReducers";




const rootReducer = combineReducers({


    incomeAndExpenseReducer,
});



export default rootReducer;