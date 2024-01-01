import React, { useState } from 'react';
import { useContextcustum } from '../contexts/AppContext';
function AllocationForm() {
    const { dispatch, remaining ,currency } = useContextcustum();
    const [department,setDepartment]=useState('');
    const [action,setAction]=useState('');
    const [cost,setCost]=useState('');
    const handelSubmit = (e) => {
        const item = {
          name: department,
          cost: parseInt(cost),
        };
      
        if (action === "Reduce") {
          dispatch({
            type: "RED_COST",
            payload: item,
          });
        } else {
          if (cost > remaining) {
            alert(`The value cannot exceed remaining funds ${currency}` + remaining);
            setCost('');
            return;
          }
          dispatch({
            type: 'ADD_COST',
            payload: item,
          });
        }
        setCost('');
      };
      
      
    return (
        <div>
          <div className="row">
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">
                  Department
                </label>
              </div>
              <select
                className="custom-select"
                id="inputGroupSelect01"
                onChange={(e)=>{setDepartment(e.target.value)}}
              
              >
                <option defaultValue>Choose...</option>
                <option value="Marketing" name="marketing">
                  Marketing
                </option>
                <option value="Sales" name="sales">
                  Sales
                </option>
                <option value="Finance" name="finance">
                  Finance
                </option>
                <option value="HR" name="HR">
                  HR
                </option>
                <option value="IT" name="it">
                  IT
                </option>
                <option value="Admin" name="admin">
                  Admin
                </option>
              </select>
              <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">
                  Allocation
                </label>
              </div>
              <select
                className="custom-select"
                id="inputGroupSelect02"
                onChange={(e)=>{setAction(e.target.value)}}
             
              >
                <option defaultValue value="Add" name="Add">
                  Add
                </option>
                <option value="Reduce" name="Reduce">
                  Reduce
                </option>
              </select>
              <div className="form-group mt-lg-0 mt-4 align-items-center d-flex">
                {currency}
                <input
                  className="ms-5 input-group-prepend p-1 "
                  required="required"
                  type="number"
                  value={cost}
                  onChange={(e)=>setCost(e.target.value)}
                  id="cost"
                ></input>
    
                <button className="btn btn-primary" onClick={handelSubmit}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )
}

export default AllocationForm;
