import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Contador } from './Contador'
import { Calculadora } from './Calculadora'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Contador />
    <Calculadora />
  )
}

export default App
