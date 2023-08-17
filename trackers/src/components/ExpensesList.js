import React, { useContext } from 'react';
import ExpensesItem from './ExpensesItem';
import { Appcontext } from '../ContextPage/Appcontext';

export default function ExpensesList() {
  const {expenses} =useContext(Appcontext);
   
  return (
    <div>
        {expenses.map((expense)=>(
            <ExpensesItem id={expense.id} name={expense.name} cost={expense.cost}/>
        ))}
    </div>
  )
}
