
import Item from './item';

function List (){

    return(
        <>
            <h3>Minha Lista</h3>

            <ul>
                <Item marca="Ferrari" ano_lancamento={2012}/>
                <Item marca="Renault" ano_lancamento={2012}/>
                <Item/>
            </ul>
        </>
    )
}

export default List;