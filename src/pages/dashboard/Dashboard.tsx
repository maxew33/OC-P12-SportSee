import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Models from '../../models/models'

import ActivityChart from '../../components/charts/activity/ActivityChart'
import ScoreChart from '../../components/charts/score/ScoreChart'
import PerformanceChart from '../../components/charts/performance/PerformanceChart'
import SessionsChart from '../../components/charts/sessions/SessionsChart'
import Keydata from '../../components/charts/keyData/Keydata'

import styles from './Dashboard.module.css'

export default function Dashboard() {
    interface dataFormat {
        userMainData?: {
            score: number
            name: string
            keyData: {
                name: string
                value: number | string
                icon: string
                color: string
                unit: string
            }[]
        }

        userActivity?: {
            day: string
            kilogram: number
            calories: number
        }[]

        userSessions?: {
            day: string
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
        keyData: [{ name: '', value: 0, icon: '', color: '', unit: '' }],
    }

    const navigate = useNavigate()

    // Get the parameter from the URL
    const params = useParams()
    const userId = params.id

    useEffect(() => {
        const fetchData = async () => {
            if (userId) {
                const formattedData = await Models(userId)

                !formattedData && navigate('/error')

                setData(formattedData)
            }
        }

        fetchData()
    }, [navigate, userId])

    return (<>
            {data && (
                <section className={styles.dataViewer}>
                    <header className={styles.banner}>
                        <h1>
                            Bonjour <span>{mainData.name}</span>
                        </h1>
                        <h2>
                            Félicitations! Vous avez explosé vos objectifs hier
                            👏
                        </h2>
                    </header>
                    <div className={styles.dataCharts}>
                        <ActivityChart data={activitySession} />
                        <ScoreChart data={mainData} />
                        <PerformanceChart data={performance} />
                        <SessionsChart data={sessions} />
                        <div className={styles.data}>
                            {mainData.keyData.map((elt, idx) => (
                                <article key={idx} className={styles.keydata}>
                                    <Keydata data={elt} />
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
