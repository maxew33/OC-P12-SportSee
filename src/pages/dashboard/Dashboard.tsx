import { useNavigate, useParams } from 'react-router-dom'
import Format from '../../format/format'
import { useEffect, useState } from 'react'

export default function Dashboard() {
    interface dataFormat {
        userData: {
            data: {
                id: number
                userInfos: {
                    firstName: string
                    lastName: string
                    age: number
                }
                todayScore: number
                keyData: {
                    calorieCount: number
                    proteinCount: number
                    carbohydrateCount: number
                    lipidCount: number
                }
            }
        }

        userActivity: {
            data: {
                userId: number
                sessions: {
                    day: string
                    kilogram: number
                    calories: number
                }[]
            }
        }

        userSessions: {
            data: {
                userId: number
                sessions: {
                    day: number
                    sessionLength: number
                }[]
            }
        }

        userPerformance: {
            data: {
                userId: number
                kind: {
                    [key: number]: string
                }
                data: {
                    value: number
                    kind: number
                }[]
            }
        }
    }

    const [data, setData] = useState<dataFormat | null>(null)

    const { userInfos, todayScore, keyData } = data?.userData?.data || {}

    const { firstName, lastName, age } = userInfos || {}

    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
        keyData || {}

    const { sessions: activitySession } = data?.userActivity?.data || {}

    const { sessions } = data?.userSessions?.data || {}

    const navigate = useNavigate()

    // Get the parameter from the URL
    const params = useParams()

    const userId = params.id

    useEffect(() => {
        const fetchData = async () => {
            if (userId) {
                const formattedData = await Format(userId)
                console.log(formattedData)

                !formattedData && navigate('/error')
                setData(formattedData)
            }
        }

        fetchData()
    }, [userId])

    console.log(data)

    return (
        <div>
            dashboard - {firstName} - {calorieCount} -
            {activitySession?.map((elt, idx) => {
                return <div key={idx}>{elt.kilogram} kg</div>
            })}
        </div>
    )
}
