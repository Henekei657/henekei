import './App.css';
import {useState} from 'react';
import HelloWorld from './components/helloWorld'
import SayMyName from './components/sayMyName';
import Pessoa from './components/pessoa';
import Frase from './components/frase';
import Lista from './components/lista';
import Evento from './components/evento';
import Form from './components/form';
import Condicional from './components/condicional'
import Array from './components/array'
import SeuNome from './components/seuNome'
import Saudacao from './components/saudacao'

function App() {

  const name = 'Nicolas';
  const newName = name.toUpperCase();

  function soma (a, b){
    return a + b;

  }

  const url = "https://via.placeholder.com/150";
  const meusItens = ['react', 'view', 'angular'];  
  const [nome, setNome] = useState(""); //Elevar para o nível de pai

  return (

    <div className="App">

      <h1> Olá React</h1>

      <h2>Alterando o JSX</h2>
      <p> Olá, {newName}</p>

      <h2>Função</h2>
      <p> Soma: {soma(2, 3)}</p>

      <h2>Utilização de um components</h2>
      <HelloWorld/>

      <h2>Inserção de imagens</h2>
      <img src= {url} alt="Minha imagem"/>

      <h2>Início de trabalho com props</h2>
      <SayMyName nome="Nicolas"/>
      <SayMyName nome="Chirazawa"/>
      <SayMyName nome={name}/>

      <h2>Props mais complexa</h2>

      <Pessoa 
        nome="Rodrigo" 
        idade="28" 
        profissao="programador" 
        foto="https://via.placeholder.com/150"/>
    
      <h2>CSS Modules</h2>
      
      <Frase/>
      <Frase/>
      <Frase/>

      <h2>Lista</h2>

      <Lista/>

      <h2>Testando eventos</h2>

      <Evento/>
      <Form/>

      <h2>Renderizando Condicional</h2>
      <Condicional/>

      <h2>Renderizando de Listas</h2>
      <Array itens={meusItens}/>
      <Array itens={[]}/>
    
    <h2>State Lift</h2>

    <SeuNome setNome = {setNome}/>
    <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
