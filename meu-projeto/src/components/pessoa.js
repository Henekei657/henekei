/*

function pessoa (props){

    return(
        <div>
            <img src={props.foto} alt={props.nome}/>
            <h3>Nome: {props.nome}</h3>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </div>
    )
}

*/

//Tornando o código mais prático

function pessoa ({foto, nome, idade, profissao}){

    return(
        <div>
            <img src={foto} alt={nome}/>
            <h3>Nome: {nome}</h3>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default pessoa;