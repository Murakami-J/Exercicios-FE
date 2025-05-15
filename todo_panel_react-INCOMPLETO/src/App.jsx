import { Cabecalho } from './components/Cabecalho';
import { FormularioTarefa } from './components/FormularioTarefa';
import { ListaTarefas } from './components/ListaTarefas';
import { Rodape } from './components/Rodape';
import './styles/estilos.css';

const apiUrl = 'http://localhost:4000/tarefas'; 

function App() {
  const [tarefas, setTarefas] = useState([]);

  const [quantidadeTarefas, setQuantidadeTarefas] = useState(0);
  const [quantidadeTarefasConcluidas, setQuantidadeTarefasConcluidas] = useState(0);
  const [percentualProgresso, setPercentualProgresso] = useState(0);

  const [mostrarConcluidas, setMostrarConcluidas] = useState(true);


  function getTarefas() {
    axios.get(apiUrl)
      .then((response) => {
    
        const tarefasJson = response.data

        setQuantidadeTarefasConcluidas(tarefasJson.filter(tarefa => tarefa.concluida).length);
        setPercentualProgresso(tarefasJson.length ? (tarefasJson.filter(tarefa => tarefa.concluida).length / tarefasJson.length) * 100: 0)
        
        setTarefas(tarefasJson);
      })
      .catch((err) => {
        console.error('Erro ao tentar receber as Tarefas da API:', err);
      });
  };


  function alternarConclusaoTarefa(id, concluida) {
    axios.(`${apiUrl}/${id}`, {concluida: concluida})
      .then((response) => {
        console.log(`Tarefa ${id} alterada para ${concluida?'' : 'não'} concluída` );
      })
      .catch((err) => {
        console.error('Erro ao tentar atualizar o "concluida" da Tarefa:', err);
      })
      .finally(() => {
        getTarefas();
      })
  };


  function adicionarTarefa(descricaoTarefa) {
    const novaTarefa = {
      id: Date.now().toString(),
      descricao: descricaoTarefa,
      concluida: false,
    };
    axios.post(apiUrl)
      .then((response) => {
        console.log(`Tarefa ${JSON.stringify(novaTarefa)} criada com sucesso` );
      })
      .catch((err) => {
        console.error('Erro ao tentar criar Tarefa:', err);
      })
      .finally(() => {
        getTarefas();
      })
  }


  function editarTarefa(tarefa) {
    console.log('tarefa:', tarefa);
    const novaDescricao = prompt('Digite a nova descrição da tarefa:', tarefa.descricao);
    
    if (novaDescricao.trim() == '') {
      
    }
   
    tarefa.descricao = novaDescricao.trim();

    axios.(`${apiUrl}/${tarefa.id}`, tarefa)
      .then((response) => {
        console.log(`Tarefa ${tarefa.id} alterada com sucesso` );
      })
      .catch((err) => {
        console.error(`Erro ao tentar atualizar a Tarefa ${tarefa.id}:`, err);
      })
      .finally(() => {
        getTarefas();
      })
  };


  function excluirTarefa(id, descricao) {
    if (!confirm(`Confirmar exclusão de tarefa ${descricao}?`)) {
        
    }
    .delete(`${apiUrl}/${id}`)
      .then((response) => {
        console.log(`Tarefa ${id} excluída com sucesso` );
      })
      .catch((err) => {
        console.error(`Erro ao tentar excluir a Tarefa ${id}:`, err);
      })
      .finally(() => {
        getTarefas();
      })
  };

  function alternarMostrarConcluidas() {
    setMostrarConcluidas(!mostrarConcluidas);
  }


  useEffect(() => {
    getTarefas();
  }, []);


  return (
    <div>
      
      <FormularioTarefa 
        adicionarTarefa={adicionarTarefa} // enviando uma função como argumento. Está correto. Não mexer!
      /> 
      <ListaTarefas
        tarefas={tarefas}
        mostrarConcluidas={mostrarConcluidas}
        alternarConclusaoTarefa={alternarConclusaoTarefa} // enviando uma função como argumento. Está correto. Não mexer!
        excluirTarefa={excluirTarefa} // enviando uma função como argumento. Está correto. Não mexer!
        editarTarefa={editarTarefa} // enviando uma função como argumento. Está correto. Não mexer!
      />

      <Rodape
        progresso={percentualProgresso}
        mostrarConcluidas={mostrarConcluidas} 
        alternarMostrarConcluidas={alternarMostrarConcluidas} // enviando uma função como argumento. Está correto. Não mexer!
      />

    </div>
  );
}

export default App;