import { CarinhaFeliz } from "./CarinhaFeliz";
import { useEffect, useState } from "react";

export function GerenciarCarinha(){

    const [todosFelizes, setTodosFelizes] = useState(false);

    return(
        <div>
            <CarinhaFeliz feliz={todosFelizes}/>
            <CarinhaFeliz feliz={todosFelizes}/>
            <CarinhaFeliz feliz={todosFelizes}/>
            <button onClick={() => setTodosFelizes(!todosFelizes)}>{todosFelizes ? "Deixar todos felizes" : "Deixar todos tristes"}</button>
        </div>
    )
}