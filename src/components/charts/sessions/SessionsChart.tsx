import { LineChart, Line, ResponsiveContainer } from 'recharts'

import styles from './SessionsChart.module.css'

interface SessionsChartProps {
    data?: {
        day: number
        sessionLength: number
    }[]
}

export default function SessionsChart(props: SessionsChartProps) {
    const { data } = props

    return (
        <article className={styles.sessions}>
            <h3 className={styles.title}>durée moyenne des sessions</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#000000"
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </article>
    )
}
