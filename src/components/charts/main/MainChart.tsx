import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts'

import styles from './MainChart.module.css'

interface MainChartProps {
    data?: {
        score: number
        name: string
        keyData: { name: string; value: number; icon: string }[]
        // kcal: number
        // protein: number
        // carboHydrate: number
        // lipid: number
    }
}

export default function MainChart(props: MainChartProps) {
    const { data } = props
    return (
        <article className={styles.mainChart}>
            <h3 className={styles.title}>Score</h3>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="100%"
                    // outerRadius="80%"
                    barSize={25}
                    data={[data]}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        tick={false}
                    />
                    <RadialBar
                        dataKey="score"
                        fill="#FF0000"
                        startAngle={-90}
                        cornerRadius={25}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </article>
    )
}
