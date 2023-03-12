import axios from "axios";
import { getIncomeAndExpenseOfCurrentYearApiUrl } from "../apis/DashboardApiUrls";





class DashboardService {



    getIncomeAndExpenseOfCurrentYear() {

        return axios.get(getIncomeAndExpenseOfCurrentYearApiUrl());
    }

}



export default new DashboardService();