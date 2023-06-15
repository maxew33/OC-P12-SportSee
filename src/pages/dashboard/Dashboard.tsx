import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBarHor from '../../components/navbarHor/NavBarHor'
import NavBarVert from '../../components/navbarVert/NavBarVert'
import ActivityChart from '../../components/charts/activity/ActivityChart'
import MainChart from '../../components/charts/main/MainChart'
import PerformanceChart from '../../components/charts/performance/PerformanceChart'
import SessionsChart from '../../components/charts/sessions/SessionsChart'
import Models from '../../models/models'

export default function Dashboard() {
    interface dataFormat {
        userData: {
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

        userActivity: {
                day: string
                kilogram: number
                calories: number
            }[]
        

        userSessions: {
                day: number
                sessionLength: number
            }[]
        

        userPerformance: {
                value: number
                kind: string
            }[]
        
    }

    const [data, setData] = useState<dataFormat | null>(null)

    const { userInfos, todayScore, keyData } = data?.userData || {}

    const { firstName, lastName, age } = userInfos || {}

    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
        keyData || {}

    const activitySession = data?.userActivity || []

    const sessions = data?.userSessions || []

    const performance = data?.userPerformance|| []

    const navigate = useNavigate()

    /* todo performance */

    // Get the parameter from the URL
    const params = useParams()

    const userId = params.id

    const dataSrc = params.src

    useEffect(() => {
        const fetchData = async () => {
            if (userId && dataSrc) {
                console.log('data fetch')
                const formattedData = await Models(dataSrc, userId)
                console.log('formattedData', formattedData)

                !formattedData && navigate('/error')
                setData(formattedData)
            }
        }

        fetchData()
    }, [])

    console.log('data', data)

    return (
        <>
            {data && (
                <div>
                    <h1> dashboard - Bienvenue {firstName}</h1>
                    <ActivityChart data={activitySession} />
                    <MainChart />
                    <PerformanceChart data={performance} />
                    <SessionsChart data={sessions}/>
                    <NavBarHor />
                    <NavBarVert />
                </div>
            )}
        </>
    )
}
