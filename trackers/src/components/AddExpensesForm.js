import React, { useContext, useState } from 'react'
import { Appcontext } from '../ContextPage/Appcontext';
import { v4 as uuidv4 } from 'uuid';

export default function AddExpensesForm() {
    const {dispatch}=useContext(Appcontext);
    const [name,setname]=useState('');
    const [cost,setcost]=useState('');
    function saveExpenses(event)
    {
        event.preventDefault();
        const expense={
            id:uuidv4(),
            name:name,
            cost:parseInt(cost),
        }

        dispatch({
            type:'ADD_EXPENSE',
            payload:expense,
        })
    }
  return (
    <div>
        <form onSubmit={saveExpenses}>
            <div className='row'>
                <div className='col-sm'>
                        <label for='name'>Name</label>
                        <input type='text' className='form-control' id='name' value={name} onChange={(e)=>setname(e.target.value)} required/>
                </div>
                <div className='col-sm'>
                        <label for="cost">Cost</label>
                        <input type='text' className='form-control' id='cost' value={cost} onChange={(e)=>setcost(e.target.value)} required/>
                </div>
                <div className='col-sm'>
                        <button type='submit' className='btn btn-success mt-4'>Save</button>
                </div>
            </div>
        </form>
    </div>
  )
}
