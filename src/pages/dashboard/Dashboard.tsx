import { useNavigate, useParams } from 'react-router-dom'
import Format from '../../Switch/switch'
import { useEffect, useState } from 'react'
import NavBarHor from '../../components/navbarHor/NavBarHor'
import NavBarVert from '../../components/navbarVert/NavBarVert'
import ActivityChart from '../../components/charts/activity/ActivityChart'
import MainChart from '../../components/charts/main/MainChart'
import PerformanceChart from '../../components/charts/performance/PerformanceChart'
import SessionsChart from '../../components/charts/sessions/SessionsChart'

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
            userId: number
            sessions: {
                day: string
                kilogram: number
                calories: number
            }[]
        }

        userSessions: {
            userId: number
            sessions: {
                day: number
                sessionLength: number
            }[]
        }

        userPerformance: {
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

    const [data, setData] = useState<dataFormat | null>(null)

    const { userInfos, todayScore, keyData } = data?.userData || {}

    const { firstName, lastName, age } = userInfos || {}

    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
        keyData || {}

    const { sessions: activitySession } = data?.userActivity || {}

    const { sessions } = data?.userSessions || {}

    const navigate = useNavigate()

    /* todo performance */

    // Get the parameter from the URL
    const params = useParams()

    const userId = params.id

    const dataSrc = params.src

    useEffect(() => {
        const fetchData = async () => {
            if (userId && dataSrc) {
                console.log('toto')
                const formattedData = await Format(dataSrc, userId)
                console.log('formattedData', formattedData)

                !formattedData && navigate('/error')
                setData(formattedData)
            }
        }

        fetchData()
    }, [])

    console.log(123, data, activitySession)

    return (
        <>
            <NavBarHor />
            <NavBarVert />
            <div>
            <ActivityChart sessions={activitySession} />
                <MainChart />
                <PerformanceChart />
                <SessionsChart />
                dashboard - {firstName} - {calorieCount} -
                {activitySession?.map((elt, idx) => {
                    return <div key={idx}>{elt.kilogram} kg / {elt.calories} cal</div>
                })}
            </div>
        </>
    )
}
