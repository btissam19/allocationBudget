import React, { useState, useEffect } from 'react';
import { useContextcustum } from '../contexts/AppContext';

const Budget = () => {
  const { budget, currency, dispatch } = useContextcustum();
  const [editableBudget, setEditableBudget] = useState(budget);

  useEffect(() => {
    setEditableBudget(budget);
  }, [budget]);

  const handleBudgetChange = (e) => {
    const newBudget = parseInt(e.target.value, 10);
    setEditableBudget(newBudget);

    // Dispatch an action to update the budget in the context
    dispatch({
      type: 'CHG_BUDGET',
      payload: newBudget,
    });
  };

  return (
    <div className="alert alert-secondary">
      <span> Budget: {currency}</span>
      <input
        type="number"
        value={editableBudget}
        onChange={handleBudgetChange}
      />
    </div>
  );
};

export default Budget;
