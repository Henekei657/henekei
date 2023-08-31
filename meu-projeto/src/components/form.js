import { useState } from 'react';

function Form(){

    //e = Evento, assim não irá carregar a tela e perder a msg;
    //preventDefault para o fluxo do HTML, requisição AJAX
    function cadastrarUsuario(e){

        e.preventDefault();
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`);
    }

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (

        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>

                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                    type="text" 
                    id="id_name" 
                    name="name" 
                    placeholder="Digite o nome"
                    //value = {name}
                    onChange={(e) => setName(e.target.value)}/>   
                </div>

                <div>
                    <label htmlFor="name">Senha:</label>
                    <input
                    type="password" 
                    id="id_password" 
                    name="password" 
                    placeholder="Digite a senha"  
                    onChange={(e) => setPassword(e.target.value)}
                    /> 
                </div>

                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>

            </form>
        </div>
    )
}

export default Form;