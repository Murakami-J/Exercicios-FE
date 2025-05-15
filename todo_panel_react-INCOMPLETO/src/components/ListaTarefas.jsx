import React from 'react';

function ListaTarefas(props) {
  const tarefas = props.tarefas;

  return (
    <ul id="lista-tarefas" aria-label="Lista de Tarefas">
      {tarefas.map(function (tarefa) {
        return (
          <ItemTarefa
            key={tarefa.id}
            tarefa=tarefa
            mostrarConcluidas=
            alternarTarefa={props.alternarConclusaoTarefa} // enviando uma função como argumento. Está correto. Não mexer!
            excluirTarefa={props.excluirTarefa} // enviando uma função como argumento. Está correto. Não mexer!
            editarTarefa={props.editarTarefa} // enviando uma função como argumento. Está correto. Não mexer!
          />
        );
      })}
    </ul>
  );
}