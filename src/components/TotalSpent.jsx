import { useContextcustum } from "../contexts/AppContext"
const ExpenseTotal = () => {
  const { expenses ,currency } = useContextcustum()
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost)
  }, 0)
  return (
    <div className="alert alert-primary">
      <span>Spent so far: {currency}{totalExpenses}</span>
    </div>
  )
}
export default ExpenseTotal
