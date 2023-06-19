import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from 'recharts'

import styles from './PerformanceChart.module.css'

interface PerformanceChartProps {
    data?: {
        value: number
        kind: string
    }[]
}

export default function PerformanceChart(props: PerformanceChartProps) {
    const { data } = props

    return (
        <article className={styles.performance}>
            <h3 className={styles.name}>PerformanceChart</h3>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={data}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar
                        name="kind"
                        dataKey="value"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </article>
    )
}
