import React, { useState } from 'react'

export function Calculadora() {

    const [resultado, setResultado] = useState(0)

    function exibirMensagem(){
        return `O resultado é: ${resultado}`
    }

    function calcular(){
        // num1, num2, operacao
        switch (operacao) {
            case 'somar':
                setResultado =  num1 + num2;
                break;
            case 'subtrair':
                setResultado =  num1 - num2;
                break;
            case 'multiplicar':
                setResultado = num1 * num2;
                break;
            case 'dividir':
                setResultado = num1 / num2;
                break;
        }
    }

  
    return (
        <div>
            <h1>Calculadora</h1>
            <input type="number" id="num1"/>
            <input type="number" id="num2"/>
            <select name="" id="operacao">
                <option value="somar">+</option>
                <option value="subtrair">-</option>
                <option value="multiplicar">×</option>
                <option value="dividir">÷</option>
            </select>
            <button onClick={calcular}>Calcular</button>
            <p>{exibirMensagem()}</p>
        </div>
    )
}