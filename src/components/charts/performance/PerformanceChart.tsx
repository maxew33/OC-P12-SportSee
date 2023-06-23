import {
    PolarAngleAxis,
    PolarGrid,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Text
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

    const renderPolarAngleAxis = (props: any) => {
        const { payload, x, y, cx, cy, ...rest } = props
        return (
            <Text
                {...rest}
                verticalAnchor="middle"
                y={y + (y - cy) / 8}
                x={x + (x - cx) / 8}
                fill='white'
                fontSize={12}
            >
                {payload.value}
            </Text>
        )
    }
    return (
        <article className={styles.performance}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid stroke="#ffffff" radialLines={false} />
                    <PolarAngleAxis
                        dataKey="kind"
                        tick={(props) => renderPolarAngleAxis(props)}
                    />
                    <Radar
                        name="kind"
                        dataKey="value"
                        fill="#ff0101"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </article>
    )
}
