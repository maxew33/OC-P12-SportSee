import yoga from '../../assets/yoga.svg'
import swim from '../../assets/natation.svg'
import bicycle from '../../assets/bicycle.svg'
import dumbbell from '../../assets/dumbbell.svg'

import styles from './NavBarVert.module.css'


export default function NavBarVert() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <img src={yoga} alt="méditation" />
                </li>
                <li>
                    <img src={swim} alt="natation" />
                </li>
                <li>
                    <img src={bicycle} alt="cyclisme" />
                </li>
                <li>
                    <img src={dumbbell} alt="musculation" />
                </li>
            </ul>
            <span className={styles.copyright}>Copyright, SportSee 2020</span>
        </nav>
    )
}
