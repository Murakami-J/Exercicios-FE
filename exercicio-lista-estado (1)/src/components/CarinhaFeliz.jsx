import { useEffect } from "react";
import { useState } from "react";

export function CarinhaFeliz(props){
    const [feliz, setFeliz] = useState(false);

    useEffect(() => {
       setFeliz(props.feliz)
    }, [props.feliz])
    
    return(
        <div>
            <span style={{fontSize: "100px"}}>{feliz ? "😼" : "😿"}</span>
            <button onClick={() => setFeliz(!feliz)}> {feliz ? "Ficar Feliz" : "Ficar Triste"}</button>
        </div>
    )
}