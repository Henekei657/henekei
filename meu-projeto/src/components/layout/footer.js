import style from './footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer () {

    return ( 
    
    <footer>
        <ul className={style.social_media}>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaLinkedin/></li>
        </ul>
        <p>Nosso rodapé</p>
    </footer>
    )
}

export default Footer;