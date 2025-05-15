import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { CrudAxios } from './CrudAxios'
import RickMorty from './RickMorty'
import { Cabecalho } from './componentes/Cabecalho'
import { Form } from './componentes/Form'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cabecalho />}>
          <Route path='/crud/:idProduto' element={<CrudAxios />} />
          {/* <Route path='/teste' element={<>Teste</>} /> */}
          <Route path='/rick-morty' element={<RickMorty />} />
          <Route path='/testando-tela' element={<>Outra tela</>} />
          <Route path='/formulario' element={<Form/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


// Criar um arquivo JSON-Server com algum tema que deseja fazer
// Realizar as operações de CRUD nesse arquivo (POST,PUT,DELETE,GET)
// Os elementos devem ser exibidos na tela, você deve usar o useState para guardar esses valores e o useEffect para buscar esses valores;