import React, { useContext, useEffect, useState } from 'react'
import { IncreaseContext } from '../context/CounterContext'
import Counter from './Counter'

const CounterApp = () => {
    const [count , setCount] = useState(0)
    // const {state} = useContext(IncreaseContext)

    useEffect(()=>{
        document.title = `Count:${count}`
    },[count])
  return (
    <div className="bg-gray-100 p-6 rounded shadow-md">
      <div className="bg-white p-4 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Counter App</h1>
      <p className="text-xl">Count (useState): {count}</p>
      <div className="flex gap-2 justify-center my-4">
      <button onClick={()=> setCount(count + 1)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Increment</button>
      <button onClick={()=> setCount(count - 1)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Decrement</button>
      </div>
      </div>
      <Counter />
    </div>
  )
}

export default CounterApp
