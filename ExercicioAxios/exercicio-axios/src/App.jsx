import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Animes } from './Componentes/Animes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Animes />
    </>
  )
}

export default App
