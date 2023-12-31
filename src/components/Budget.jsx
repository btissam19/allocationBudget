import React from 'react'
import { useContextcustum } from '../contexts/AppContext'
const Budget = () => {
  const { budget } = useContextcustum()
  return (
    <div className="alert alert-secondary">
      <span> Budget: £{budget} </span>{' '}
    </div>
  )
}
export default Budget
