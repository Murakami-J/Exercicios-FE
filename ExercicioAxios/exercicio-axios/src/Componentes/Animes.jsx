import React, { useState } from 'react'
import { useEffect } from 'react'

export function Animes(){

    const [titulo, setTitulo] = useState('')
    const [genero, setGenero] = useState('')
    const [episodios, setEpisodios] = useState('')

    

    return(
       <div>
            <h1>LISTA DE ANIMES</h1>
            <input type="text" placeholder="Título" onChange={(e) => setTitulo(e.target.value)} />
            <input type="text" placeholder="Gênero" onChange={(e) => setGenero(e.target.value)} />
            <input type="text" placeholder="Episódios" onChange={(e) => setEpisodios(e.target.value)} />
            <button>Adicionar</button>
       </div>
    )
}