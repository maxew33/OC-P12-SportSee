import styles from './Error.module.css'
import { NavLink } from 'react-router-dom'

export default function Error() {
    return (
        <div className={styles.error}>
            <span>404</span>
            <br /> Oups, nous ne retrouvons pas la page.
            <NavLink className={styles.link} to="/">
                retour à la page de connexion
            </NavLink>
        </div>
    )
}
