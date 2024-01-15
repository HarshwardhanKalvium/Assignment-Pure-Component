import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleComponent from './components/SimpleCounterComponent'
import PureCounterComponent from './components/PureCounterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SimpleComponent></SimpleComponent>
    <PureCounterComponent></PureCounterComponent>
    </>
  )
}

export default App
