function Array ( {itens} ){

    return(
        <>
        <h3>Lista de coisas boas: </h3>

            { 
                itens.length > 0 ? (

                itens.map ((item, index) => (<p key={index}>{item}</p>))
                ) : (
                <p>Não há itens na lista</p>
                )
            }
        </>
    );
}

export default Array;

        /*
        Lista dos parênteses da esquerda para a direita:

        1: JSX
        2: Map
        3: Condição ternária
        */