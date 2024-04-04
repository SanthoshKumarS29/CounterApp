import React, { useContext } from 'react'
import { IncreaseContext } from '../context/CounterContext'

const Counter = () => {
    const {state,dispatch} = useContext(IncreaseContext)
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <p className="text-xl">Count (useContext and useReducer):{state.count}</p>
      <div className="flex gap-2 justify-center my-4">
      <button onClick={()=> dispatch({type:'INCREMENT'})} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Increment</button>
      <button onClick={()=> dispatch({type:'DECREMENT'})} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Decrement</button>
      </div>
    </div>
  )
}

export default Counter
