import propTypes from 'prop-types';
function item ({marca, ano_lancamento}){

    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

item.propTypes = {
    marca: propTypes.string.isRequired,
    ano_lancamento: propTypes.number.isRequired,
}

item.defaultProps = {
    marca: 'Faltou um componente',
    ano_lancamento: 0,
}

export default item;