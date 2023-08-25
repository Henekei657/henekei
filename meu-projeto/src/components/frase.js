import Styles from './frase.module.css';

function frase(){

    return (
        <div className={Styles.fraseContainer}>
            <p className={Styles.fraseContent}>Este é o componente com uma frase!</p>
        </div>
    )
}

export default frase;