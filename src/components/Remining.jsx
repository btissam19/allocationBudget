import React from 'react'
import { useContextcustum } from '../contexts/AppContext'
const Remaining = () => {
  const { expenses, budget ,currency } = useContextcustum()
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost)
  }, 0)
  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'
  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining:{currency} {budget - totalExpenses}</span>
    </div>
  )
}
export default Remaining
