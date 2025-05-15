import React, { useState } from 'react'

export function Contador(){
    const [contador, setContador] = useState(0)
    
    const incrementar = () => {
        setContador(contador + 1)
    }

    function exibirMensagem(cont){
       if(cont <= 10){
            return "Você está longe de chegar ao 30";
       }

       if(cont <= 19){
            return "Está quase lá!";
       }

       if(cont <= 29){
            return "Falta pouco, você consegue!";
       }

       return "Você chegou em 30 cliques, parabéns!";
    }

    return(
        <div>
            <h1>Contador</h1>
            <button onClick={incrementar} disabled={contador > 29}>
                Incrementar
            </button>
            <div>{contador}</div>
            <p>{exibirMensagem(contador)}</p>
        </div>
    )
}