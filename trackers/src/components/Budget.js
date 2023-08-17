import React, { useContext } from 'react'
import { Appcontext } from '../ContextPage/Appcontext'

export default function Budget() {
  const {budget} =useContext(Appcontext)
  return (
    <div className='alert alert-secondary'>
        <span>My Budget:₹{budget}</span>
    </div>
  )
}
