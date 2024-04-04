import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'

export const IncreaseContext = createContext()

const initialState = {count:0}

const reducer = (state,action) =>{
    switch (action.type) {
        case 'INCREMENT':
            return {count : state.count + 1}
        case 'DECREMENT':
            return {count : state.count - 1}
        default:
            return state;
    }
}

const CounterContext = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <IncreaseContext.Provider value={{state,dispatch}}>
      {children}
    </IncreaseContext.Provider>
  )
}

export {CounterContext}
