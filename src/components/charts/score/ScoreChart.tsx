import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts'

import styles from './ScoreChart.module.css'

interface MainChartProps {
    data?: {
        score: number
        name: string
        keyData: { name: string; value: number; icon: string }[]
    }
}

export default function MainChart(props: MainChartProps) {
    const { data } = props
    return (
        <article className={styles.mainChart}>
            <h3 className={styles.title}>Score</h3>
            <p className={styles.score}>
                <span className={styles.value}> {[data?.score]} %</span>
                de votre <br/>
                objectif
            </p>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="75%"
                    outerRadius="75%"
                    barSize={25}
                    data={[data]}
                    startAngle={90}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        tick={false}
                    />
                    <RadialBar
                        dataKey="score"
                        fill="#FF0000"
                        cornerRadius={25}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </article>
    )
}
