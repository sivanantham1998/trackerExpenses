import React from 'react'
import {TiDelete} from 'react-icons/ti'

export default function ExpensesItem(props) {
  return (
    <div>
        <li className='list-group-item d-flex justify-content-between align-item-center'>
            {props.name} 
            {/* <span className='text-success'>₹{props.cost}
            <TiDelete size='1.5em'></TiDelete>
            
            </span> */}
            
            {/* Another code for the view the cost */}
            
                <span className='text-success'>
                ₹ {props.cost}
                <TiDelete size='1.5em'></TiDelete>
                </span>
           
        </li>
    </div>
  )
}
