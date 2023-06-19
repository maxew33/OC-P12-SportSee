import Logo from '../../assets/logo.svg'
import styles from './NavBarHor.module.css'

export default function NavBarHor() {
    return (
        <nav className={styles.navBar}>
            <img src={Logo} alt="SportSee logo" className={styles.logo}/>
            <ul className={styles.navLinks}>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </nav>
    )
}
