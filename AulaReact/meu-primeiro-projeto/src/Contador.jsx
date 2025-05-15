import { useState } from "react";

export function Contador(){

    // O React não associa o valor da variável com o valor do componente, então não atualiza a tela
    // let contador = 0;

    // Retorna um vetor com dois valores: o primeiro é o valor atual do estado e o segundo é uma função que atualiza o valor do estado
    // Analogia: contador = getter, retorna um valor / setContador = setter, atualiza o valor
    // Desestruturação de um vetor 
    const [contador, setContador] = useState(0); // 0 é o valor inicial do contador

    // O react por padrão executa o código duas vezes em modo de desenvolvimento, para saber se o estado está sendo corretamente atualizado (Strict Mode)
    // Por isso o console.log aparece 2 vezes no console
    // Tem como tirar o Strct Mode no main.jsx
    console.log("ATUALIZOU")

    const contar = () => {
        setContador(contador + 1);

        // Ele agenda a atualização do estado, então não atualiza imediatamente, por isso o contador não atualiza na hora
        console.log(contador);
    }

    function exibirMensagem(){
        return "Você passou de 30!";
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={contar}>Incrementar</button>
            <p>{contador > 30 ? exibirMensagem() : ""}</p>
        </div>
    )
}