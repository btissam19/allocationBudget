import React from 'react';
import { useContextcustum } from '../contexts/AppContext';

const Currency = () => {
  const { dispatch } = useContextcustum();

  const changeLocation = (val) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    });
  };

  return (
    <div className='alert alert-secondary'>
      Currency
      {
        <select name="Location" id="Location" onChange={event => changeLocation(event.target.value)}>
          <option value="$">$ Dollar</option>
          <option value="£">£Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
        </select>
      }
    </div>
  );
};

export default Currency;
