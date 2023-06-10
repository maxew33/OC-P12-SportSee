import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logging() {
    const [inputId, setInputId] = useState('')
    const [onDevelopment, setOnDevelopment] = useState(true)

    const navigate = useNavigate()

    const changeInput = (e: FormEvent) => {
        const target = e.target as HTMLFormElement
        target && setInputId(target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        navigate(`dashboard/${onDevelopment ? 'mock' : 'api'}/${inputId}`)
    }

    const onDevelopmentChange = () => {
        setOnDevelopment(!onDevelopment)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Merci de rentrer votre identifiant :
                <input
                    name="inputId"
                    value={inputId}
                    onInput={(e) => changeInput(e)}
                />
            </label>
            <label>
            <input
              type="checkbox"
              value="en développement"
              checked={onDevelopment}
              onChange={onDevelopmentChange}
            />
            en développement
          </label>

            <button type="submit">envoyer</button>
        </form>
    )
}
