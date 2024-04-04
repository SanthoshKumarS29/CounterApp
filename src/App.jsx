
import './App.css'
import CounterApp from './component/CounterApp'
import {CounterContext} from './context/CounterContext'

function App() {

  return (
    <>
     <CounterContext>
      <div  className="container mx-auto p-4">
      <CounterApp />
      </div>
     </CounterContext>
    </>
  )
}

export default App
