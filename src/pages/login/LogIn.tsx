import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import RunnigMan from '../../assets/runningMan.svg'
import styles from './LogIn.module.css'

export default function LogIn() {
    const [inputId, setInputId] = useState('')

    const navigate = useNavigate()

    const changeInput = (e: FormEvent) => {
        const target = e.target as HTMLFormElement
        target && setInputId(target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        navigate(`dashboard/${inputId}`)
    }
    return (
        <form onSubmit={handleSubmit} className={styles.logIn}>
            <label htmlFor="inputId">Identifiant:</label>
            <div className={styles.inputWrapper}>
                <img src={RunnigMan} alt="submit" />
                <input
                    name="inputId"
                    id="inputId"
                    className={styles.input}
                    value={inputId}
                    onInput={(e) => changeInput(e)}
                    placeholder="n° d'adhésion"
                />
            </div>

            <button type="submit" className={styles.button}>
                envoyer
            </button>
        </form>
    )
}
