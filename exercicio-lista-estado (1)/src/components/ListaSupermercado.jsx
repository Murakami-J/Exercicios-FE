import React, { useState } from 'react'

export function ListaSupermercado() {

  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [listaProdutos, setListaProdutos] = useState([]);

  function adicionarItem() {
    if (!validarCampos()) return;

    setListaProdutos([...listaProdutos, { produto, quantidade }]);
    setProduto("");
    setQuantidade(0);
  }

  function validarCampos() {
    if (produto === "" || quantidade === "") {
      alert("Preencha todos os campos");
      return false;
    }
    return true;
  }

  return (
    <div>
      <h1>Lista de Supermercado</h1>
      <label>
        Nome do Produto:
        <input value={produto} type="text" placeholder="Ex: Arroz" onChange={(e) => setProduto(e.target.value)}/>
      </label>
      <label>
        Quantidade:
        <input value={quantidade} type="number" min="1" placeholder="Ex: 2" onChange={(e) => setQuantidade(e.target.value)}/>
      </label>

      <button onClick={adicionarItem}>Adicionar</button>

      <div>
        <h2>Itens na Lista</h2>
        <ul>
          {
            listaProdutos.map((produto, index) => (
              <li key={index} style={{ listStyle: "none" }}>
                <strong> Nome do produto:</strong> {produto.produto} | <strong>Quantidade:</strong> {produto.quantidade} | <strong>Subtotal:</strong> {produto.quantidade * 1.99}
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}
