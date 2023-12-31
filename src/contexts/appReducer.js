const AppReducer =(state,action)=>{
    let new_expenses = [];
    switch(action.type){
        case "ADD_COST":
            let total_budget = 0;
            let foundExpense = false;
          
            const updatedExpenses = state.expenses.map((expense) => {
              if (expense.name === action.payload.name) {
                foundExpense = true;
                expense.cost += action.payload.cost;
                total_budget = total_budget + action.payload.cost;
              }
              return expense;
            });
          
            if (!foundExpense) {
              total_budget = action.payload.cost;
              updatedExpenses.push({
                name: action.payload.name,
                cost: action.payload.cost,
              });
            }
          
            if (total_budget <= state.budget) {
              return {
                ...state,
                expenses: updatedExpenses,
              };
            } else {
              alert('Cannot increase the allocation! Out of funds');
              return {
                ...state,
              };
            }
          
      case "RED_COST":
        state.expenses.map((expense)=>{
            if(expense.name===action.payload){
                expense.cost-=action.payload.cost
            }
            expense.cost=expense.cost<0?0:expense.cost
            new_expenses.push(expense)
            return true
        })
          state.expenses = new_expenses;
          action.type="DONE"
          return {...state}
      case  "ADD_TEN":
        state.expenses.map((expense)=>{
            if(expense.name===action.payload){
                expense.cost+=10
            }
            new_expenses.push(expense)
            return true
        })
          state.expenses = new_expenses;
          action.type="DONE"
          return {...state}
      case  "RED_TEN":
        state.expenses.map((expense)=>{
            if(expense.name===action.payload){
                expense.cost-=10
            }
            expense.cost=expense.cost<0?0:expense.cost
            new_expenses.push(expense)
            return true
        })
          state.expenses = new_expenses;
          action.type="DONE"
          return {...state}
          case  "DELETE_ITEM":
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.cost = 0;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };
      case 'CHG_CURRENCY':
        action.type = "DONE";
        state.currency = action.payload;
        return {
            ...state
        }
        case 'CHG_BUDGET':
            action.type="DONE";
            state.budget=action.payload
            return {...state,}
      default :
      return state;
    
    }
}

export default AppReducer