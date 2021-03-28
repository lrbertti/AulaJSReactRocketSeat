import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App(){

  const [devs, setDevs] = useState([]);
  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data){

    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }

  return(
    <div id= "app">
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit = {handleAddDev}/>
        </aside>
        <main>
          <ul>
            {devs.map(dev => (
              <DevItem key = {dev._id} dev={dev}/>
            ))}            
          </ul>
        </main>
    </div>  
  );
}

export default App;

/*
import React, {useState} from 'react';

import Header from './Header';
// Componente: função que retorna algum conteudo HTML (não altera a aplicação)
// Bloco isolado de HTML, CSS e JS. O qual não interfere no restante da aplicação
// Estado: informação mantida pelo componente, variaveis que dependem de alguma ação do usuario (Lembrar: imutabilidade)
// Propriedade: Informações que um componente PAI passa para o componente FILHO



function App() { //componente pai
  const [counter, setCounter] = useState(0);
  function incrementCounter(){
    setCounter(counter +1);
  }
   return (
  //   <>
  //      <Header title= "Dashboard"/> // componente filho
  //      <Header title= "Dashboard2"/>
  //      <Header title= "Dashboard3"/>
  //   </>
  <>
      <h1>Contador: {counter}</h1>
      <button onClick = {incrementCounter}>Incrementar</button>
  </>
  );
}

export default App;*/

