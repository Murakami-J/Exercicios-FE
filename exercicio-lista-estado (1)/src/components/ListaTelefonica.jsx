import React, { useState } from "react";

export function ListaTelefonica() {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");

  const [listaTelefonica, setListaTelefonica] = useState([]);

  function cadastrarContato() {
    if(!validarCampos()) return;

    // ...listaTelefonica: Spread operator: copiar a lista atual e adicionar o novo contato
    setListaTelefonica([...listaTelefonica, { nome, sobrenome, telefone }]);
    setNome("");
    setSobrenome("");
    setTelefone("");
  }

  function validarCampos(){
    if(nome === "" || sobrenome === "" || telefone === ""){
      alert("Preencha todos os campos");
      return false;
    }
    return true;
  }

  function excluirContato(index) {
    // Vai filrar a listaTelefonica e retornar todos os contatos que não sejam o contato que queremos excluir
    // Depois vai setar a listaTelefonica com a nova lista filtrada (sem o item que queremos excluir)
    // O segundo parâmetro do filter é o index do elemento atual
    const listaAtualizada = listaTelefonica.filter((_, i) => i !== index);
    setListaTelefonica(listaAtualizada);
  }

  return (
    <div>
      <h1>Lista Telefônica</h1>

      <div>
        Nome:
        <input value={nome} placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
        Sobrenome:
        <input value={sobrenome} placeholder="Sobrenome" onChange={(e) => setSobrenome(e.target.value)} />
        Telefone:
        <input value={telefone} placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} />
        <button onClick={cadastrarContato}>Cadastrar</button>
      </div>
      <ul>
      {
        // forEach: não retorna nada
        // map: retorna um novo array. Neste caso, retorna um novo array de elementos HTML <li>
      listaTelefonica.map((contato, index) => (     
        // Tem que colocar uma key única para cada elemento da lista, pois o React precisa saber qual elemento mudou, foi adicionado ou removido
        // Se não tiver uma key única, o React não vai conseguir identificar os elementos corretamente
            <li key={index} style={{ listStyle: "none" }}>
              <strong>Nome do contato:</strong> {contato.nome} | <strong>Sobrenome do contato:</strong> {contato.sobrenome} | <strong>Telefone do contato: </strong>{contato.telefone} 
              <button onClick={() => excluirContato(index)}>Excluir</button>
            </li>
        ))
      }
      </ul>
    </div>
  );
}