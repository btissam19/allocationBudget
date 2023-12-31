import { createContext ,useContext, useReducer } from "react";
import AppReducer from "./appReducer";
const initialState = {
    budget: 2000,
    expenses: 
    [ { id: 'Marketing',name: 'Marketing',cost: 50,},
      {id: 'Finance',name: 'Finance',cost: 300,},
      {id: 'Sales',name: 'Sales',cost: 70,},
      {id: 'HR',name: 'HR',cost: 40,},
      { id: 'IT', name: 'IT', cost: 500,},
    ],
    currency: '£',
  }
export const AppContext =createContext()

export const AppcontextProvider = ({children})=>{
  const [state,dispatch]=useReducer(AppReducer,initialState)
  let remaining = 0

  if (state.expenses) {
    const totalExpenses = state.expenses.reduce((total, item) => {
      return (total = total + item.cost)
    }, 0)
    remaining = state.budget - totalExpenses
  }
  const value={expenses: state.expenses,budget: state.budget,remaining: remaining,dispatch,currency: state.currency}
  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    
    )
}


export const useContextcustum=()=>useContext(AppContext);