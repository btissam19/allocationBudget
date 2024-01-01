const AppReducer =(state,action)=>{
  let budget = 0
  switch(action.type){
    case 'ADD_COST':
      let total_budget = 0
      total_budget = state.expenses.reduce((previousExp, currentExp) => {
        return previousExp + currentExp.cost
      }, 0)
      total_budget = total_budget + action.payload.cost
      action.type = 'DONE'
      if (total_budget <= state.budget) {
        total_budget = 0
        state.expenses.map((currentExp) => {
          if (currentExp.name === action.payload.name) {
            currentExp.cost = action.payload.cost + currentExp.cost
          }
          return currentExp
        })
        return {
          ...state,
        }
      } else {
        alert('Cannot increase the allocation! Out of funds')
        return {
          ...state,
        }
      }
      case 'RED_COST':
        const red_expenses = state.expenses.map((currentExp) => {
          if (
            currentExp.name === action.payload.name &&
            currentExp.cost - action.payload.cost >= 0
          ) {
            currentExp.cost = currentExp.cost - action.payload.cost
            budget = state.budget + action.payload.cost
          }
          return currentExp
        })
        action.type = 'DONE'
        return {
          ...state,
          expenses: [...red_expenses],
        }
        case  "DELETE_ITEM":
          action.type = 'DONE'
          state.expenses.map((currentExp) => {
            if (currentExp.name === action.payload) {
              budget = state.budget + currentExp.cost
              currentExp.cost = 0
            }
            return currentExp
          })
          action.type = 'DONE'
          return {
            ...state,
            budget,
          }
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