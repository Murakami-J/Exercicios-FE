import { useEffect } from "react";
import { api } from "./provider/apiProvider";
import { useParams } from "react-router-dom";

export function CrudAxios() {
  const parametros = useParams();
  console.log(parametros.idProduto);

  function getDados() {
    api
      .get("/filmes")
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }

  useEffect(() => {
    getDados();
  }, []);

  function adicionarFilme() {
    api
      .post("/filmes", {
        nome: "Terror na sala de aula",
        avaliacao: 5.0,
        autor: "JP",
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Erro ao adicionar filme:", error));
  }


  function atualizarFilme(){

  //   fetch("http://localhost:3000/filmes/db64", {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     nome: "Filme Atualizado",
  //     avaliacao: 1.0,
  //     autor: "Murilo Barbosa",
  //   }),
  // })

    api.put("/filmes/db64",{
      nome: "Filme Atualizado",
      avaliacao: 1.0,
      autor: "Murilo Barbosa",
    })
  }

  function deletarFilme() {
  api
    .delete("/filmes/db64")
    .then((response) => console.log("Filme deletado com sucesso:", response.data))
    .catch((error) => console.error("Erro ao deletar filme:", error));
}

 return (
  <div>
    <button onClick={adicionarFilme}>Adicionar Filme</button>
    <button onClick={atualizarFilme}>Atualizar Filme</button>
    <button onClick={deletarFilme}>Deletar Filme</button>
  </div>
);
}