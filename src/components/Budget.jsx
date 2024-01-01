import React from 'react'
import { useContextcustum } from '../contexts/AppContext'
const Budget = () => {
  const { budget ,currency } = useContextcustum()
  return (
    <div className="alert alert-secondary">
      <span> Budget: {currency}{budget} </span>{' '}
    </div>
  )
}
export default Budget
