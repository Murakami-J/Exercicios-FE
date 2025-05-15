import React from 'react'

export function Calculadora() {

  return (
    <div>
      <h1>Calculadora</h1>
      <input type="number" />
      <input type="number" />
      <select>
        <option value="MULTIPLICAR">MULTIPLICAR</option>
        <option value="SUBTRAIR">SUBTRAIR</option>
        <option value="DIVIDIR">DIVIDIR</option>
        <option value="SOMAR">SOMAR</option>
      </select>
      <button>Calcular</button> <br/> <br/>
      Resultado da operação: ____
    </div>
  )
}

