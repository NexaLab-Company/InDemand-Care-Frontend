

export const getIncomeAndExpenseOfCurrentYearApiUrl = () => {
    

    return `${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/income-and-expense/of-current-year`;

}