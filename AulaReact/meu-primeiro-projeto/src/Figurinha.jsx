export function Figurinha(props){
    return(
        // <> </>Fragmento: quando eu não quero que o componente retorne um elemento (sem div) 
        <> 
          {props.idade >= 21 ? "😼" : "😾"}  
        </>
    )
}