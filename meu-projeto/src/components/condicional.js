import { useState } from 'react'

function Condicional (){
    const [email, setEmail] = useState("");
    const [userEmail, setUserEmail] = useState("");


    function enviarEmail (e){

        e.preventDefault();
        setUserEmail(email); //Essa parte poderia ser uma validação do email escrito
    }

    function limparEmail (e){

        setUserEmail(""); //Essa parte poderia ser uma validação do email escrito
    }

    return(
        <div>
            <h3>Cadastre o seu email:</h3>

            <form> 
                <input 
                type="email" 
                placeholder='Digite o seu email...' 
                onChange={(e) => setEmail (e.target.value)}/>

                <button 
                type="submit" 
                onClick={enviarEmail}>
                    Enviar email
                </button>

                {userEmail &&(
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button> 
                    </div>
                )}

            </form>

        </div>

        // O button com a função 'limparEmail' tem a função de zerar o userEmail por meio do setUserEmail, assim a condição ficará falsa, o userEmail será falso e será apagado o HTML.   
    )

}

export default Condicional;