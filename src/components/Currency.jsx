import React, { useState } from 'react';
import { useContextcustum } from '../contexts/AppContext';

const Currency = () => {
  const { dispatch } = useContextcustum();
  const [currency, setCurrency] = useState('');

  const changeLocation = (val) => {
    switch (val) {
      case '$':
        setCurrency(' ($ Dollar )');
        break;
      case '£':
        setCurrency('(£ Pound)');
        break;
      case '€':
        setCurrency('(€ Euro)');
        break;
      case '₹':
        setCurrency('(₹ Rupee)');
        break;
      default:
        setCurrency('');
        break;
    }

    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    });
  };

  return (
    <div className="input-group mb-3  ">
      <button
        className="btn btn-success dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Currency {currency}
      </button>
      <ul className="dropdown-menu">
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => changeLocation('$')}
          >
            $ Dollar
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => changeLocation('£')}
          >
            £ Pound
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => changeLocation('€')}
          >
            € Euro
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => changeLocation('₹')}
          >
            ₹ Rupee
          </button>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        {/* Additional menu items can be added here if needed */}
      </ul>
    </div>
  );
};

export default Currency;
