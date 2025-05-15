import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RickMorty() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const fetchCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      })
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  function redirecionar(){
    // window.location.href = "/crud";
    navigate("/crud/123");
  }

  return (
    <div>
      <h1>Personagens de Rick and Morty</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <p>{character.name}</p>
            <img src={character.image} alt={character.name} style={{ width: "100px", height: "100px" }} />
          </li>
        ))}
      </ul>
      <button onClick={redirecionar}>Redirecionar para o CRUD</button>
    </div>

  );
}

export default RickMorty;