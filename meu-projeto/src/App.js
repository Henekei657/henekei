import './App.css';
import HelloWorld from './components/helloWorld'
import SayMyName from './components/sayMyName';
import Pessoa from './components/pessoa';
import Frase from './components/frase';
import Lista from './components/lista'

function App() {

  const name = 'Nicolas';
  const newName = name.toUpperCase();

  function soma (a, b){
    return a + b;

  }

  const url = "https://via.placeholder.com/150";

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
    </div>
  );
}

export default App;
