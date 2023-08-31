import Button from './eventos/button'

function evento (){

    function meuEvento(){

        console.log(`Ativando primeiro evento!`);
    }

    function segundoEvento(){

        console.log(`Ativando segundo evento!`)
    }

    return (

        <div>
            <p>Clique para disparar um evento</p>

            <Button event = {meuEvento} text = "Primeiro Evento"/>
            <br/>
            <Button event = {segundoEvento} text = "Segundo Evento"/>
            <br/>
            <p>É a mesma função feita de outra maneira</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default evento;