import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './components/Budget'
import Remaning from './components/Remaning'
import Spent from './components/Spent'
import ExpensesList from './components/ExpensesList'
import AddExpensesForm from './components/AddExpensesForm'
import { AppProvider } from './ContextPage/Appcontext'

export default function App() {
  return (
    <AppProvider>


      <div className='container'>
        <h1>Budget Planner</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaning />
          </div>
          <div className='col-sm'>
            <Spent />
          </div>

          <h3>Expenses</h3>
          <div className='row'>
            <div className='col-sm'>
              <ExpensesList />
            </div>
          </div>
        </div>
        <h3>Add Expenses</h3>
        <div className='row'>
          <div className='col-sm'>
            <AddExpensesForm />
          </div>

        </div>


      </div>
    </AppProvider>
  )
}
