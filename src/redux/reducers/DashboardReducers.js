

const incomeAndExpenseState = [];






const incomeAndExpenseReducer = (state = incomeAndExpenseState, action) => {


    console.log(incomeAndExpenseState)

    switch (action.type) {

       

        case "SAVE_INCOME_AND_EXPENSE" :  return [...state , { name : action.data.name , month : action.data.month , value : action.data.value }]

        default: return state;



    }

}




export default incomeAndExpenseReducer;