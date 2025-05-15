import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Card'
import { Figurinha } from './Figurinha'
import { Contador } from './Contador'
import { ExemploUseEffect } from './ExemploUseEffect'

// .jsx entende html e js

function App() {

  function redirecionar(){
    console.log("Redirecionando...")
  }

  return(
    // Chamando um componente "Card"
    <div>
      {/* <Card 
        nome="Carioca" 
        profissao="Professor/Monitor" 
        descricao="Professor dahora 👍" 
        redirecionar={redirecionar} 
        idade={18}
        habilitado={true}
        />

      <Card 
        nome="Yoshi" 
        profissao="Professor de Frontend?"  
        descricao="Professor viciado em criptomoeda 💰"
        redirecionar={redirecionar} 
        idade={10}
        habilitado={false}
        />
      
      <Card 
        nome="JP"
        profissao="Professor de Algoritmos"
        descricao="Não conheço, sei que ele faz parte da banda :D"
        redirecionar={redirecionar} 
        idade={32} 
        habilitado={true}
        /> */}
        
        <ExemploUseEffect />
    </div>
  )
}

export default App
