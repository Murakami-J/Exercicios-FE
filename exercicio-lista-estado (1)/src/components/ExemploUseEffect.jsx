import { useEffect, useState } from "react"

export function ExemploUseEffect(){
    const [contador, setContador] = useState(0);
    const [ativado, setAtivado] = useState(false);

    // useEffect só observa um estado ou uma props
    // Se colocar uma variável, não funciona, ele não observa
    // Com uma dependência
    // Executa só quando a dependência for alterada
    useEffect(() => {
        console.log(contador)
    }, [contador]) // [] aqui coloca o que quer observar

    // Com nenhuma dependência
    // Só vai ser executado quando o componente for montado
    // Exemplo: Quando o componente for carregado pela primeira vez. Ou seja, quando vc precisa fazer uma requisição quando o componente renderizar
    // Tipo o Onload()
    useEffect(() => {
        console.log("Executado")
    }, []) 

    // Sem array de dependência
    // Executa todas as vezes em que for atualizado 
    useEffect(() => {
        console.log("Executa toda vez")
    })


    return(
        <div>
            <span>{contador}</span>
            <button onClick={() => setContador(contador+1)}>Contar</button>
            <button onClick={() => setAtivado(!ativado)}>{ativado ? "Desativar" : "Ativar"}</button>
        </div>
    )
}