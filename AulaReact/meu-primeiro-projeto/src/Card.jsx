import { Figurinha } from "./Figurinha";

// Criando um componente
export function Card(props){
    return(
        <div className='card-nosso'>
            <h1>{props.nome}</h1>
            <h2>{props.profissao}</h2>
            <p>{props.descricao}</p>
            <p>{props.idade >= 18 ? "Maior de idade" : "Menor de idade"}</p>
            <p>{!props.habilitado ? "" : "Habilitado"}</p>
            <Figurinha idade={props.idade}/>
            <br /><br />
            <button onClick={props.redirecionar}>Redirecionar</button>
        </div>
    )
}