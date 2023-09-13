import {Link} from 'react-router-dom';
import styles from './navbar.module.css';

function navbar () {

    return (

        <ul className={styles.list}>
            <li className={styles.item}><Link to="/">Home</Link></li>
            <li className={styles.item}><Link to="/Empresa">Empresa</Link></li>
            <li className={styles.item}><Link to="/Contato">Contato</Link></li>
        </ul>
        
    )
}

export default navbar;