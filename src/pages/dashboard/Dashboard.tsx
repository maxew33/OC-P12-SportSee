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
        userMainData?: {
            score: number
            name: string
            kcal: number
            protein: number
            carboHydrate: number
            lipid: number
        }

        userActivity?: {
            day: string
            kilogram: number
            calories: number
        }[]

        userSessions?: {
            day: number
            sessionLength: number
        }[]

        userPerformance?: {
            value: number
            kind: string
        }[]
    }

    const [data, setData] = useState<dataFormat | null>(null)

    const activitySession = data?.userActivity || []

    const sessions = data?.userSessions || []

    const performance = data?.userPerformance || []

    const mainData = data?.userMainData || {
        score: 0,
        name: 'max',
        kcal: 0,
        protein: 0,
        carboHydrate: 0,
        lipid: 0,
    }

    const navigate = useNavigate()

    // Get the parameter from the URL
    const params = useParams()

    const userId = params.id

    const dataSrc = params.src

    useEffect(() => {
        const fetchData = async () => {
            if (userId && dataSrc) {
                const formattedData = await Models(dataSrc, userId)

                !formattedData && navigate('/error')

                setData(formattedData)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            {data && (
                <div>
                    <h1> dashboard - Bienvenue {mainData.name}</h1>
                    <ActivityChart data={activitySession} />
                    <MainChart data={mainData} />
                    <PerformanceChart data={performance} />
                    <SessionsChart data={sessions} />
                    <NavBarHor />
                    <NavBarVert />
                </div>
            )}
        </>
    )
}
