import { useRef } from "react";

export function Form() {
    // useRef = variável que não perde o valor quando a tela é atualizada
    // Não precisa atualizar o estado da tela
    // Quando eu não tenho um useState na tela, o useRef não atualiza o valor na tela, mas ele atualiza o valor na variável
    // useRef: quando eu não quero exibir o valor na tela, mas quero guardar o valor para usar depois
    // useState: quando eu quero exibir o valor na tela e quero guardar o valor para usar depois
    const nome = useRef(null);
    const numero = useRef(null);
    const idade = useRef(null);

    function recuperarValores(){
        console.log(nome.current.value);
        console.log(numero.current.value);
        console.log(idade.current.value);
    }
    
    return (
        <div>
            <input type="text" placeholder="nome" ref={nome}/>
            <input type="text" placeholder="numero" ref={numero}/>
            <input type="text" placeholder="idade" ref={idade}/>
            <button onClick={recuperarValores}>Recuperar Valores</button>
        </div>
    );
}