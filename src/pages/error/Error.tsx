import styles from './Error.module.css'
import { NavLink } from 'react-router-dom'

export default function Error() {
    const basePath = process.env.BASE_URL
    return (
        <div className={styles.error}>
            <span>404</span>
            <br /> Oups, nous ne trouvons pas la page.
            <NavLink className={styles.link} to={`${basePath}`}>
                Retour à la page de connexion
            </NavLink>
        </div>
    )
}
