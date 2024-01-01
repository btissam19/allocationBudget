import React from 'react';
import { useContextcustum } from '../contexts/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContextcustum();

    const handleDeleteItem = () => {

        dispatch({
            type: 'DELETE_ITEM',
            payload:props.id, 
        });
    };

    const handleAddTen = (name) => {
        const expense = {
            name: name,
            cost: 10,
          }
        dispatch({
            type: 'ADD_COST',
            payload: expense,
        });
    };

    const handleRemoveTen = (name) => {
        const expense = {
            name: name,
            cost: 10,
          }
        dispatch({
            type: 'RED_COST',
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <FontAwesomeIcon
                    icon={faPlusCircle}
                    size='2.2em'
                    color='green'
                    onClick={() => handleAddTen(props.name)}
                />
            </td>
            <td>
                <FontAwesomeIcon
                    icon={faMinusCircle}
                    size='2.2em'
                    color='red'
                    onClick={() => handleRemoveTen(props.name)}
                />
            </td>
            <td>
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    size='2.2em'
                    color='red'
                    onClick={handleDeleteItem}
                />
            </td>
        </tr>
    );
};

export default ExpenseItem;
