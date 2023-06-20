import {
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    CartesianGrid,
    BarChart,
    ResponsiveContainer,
    TooltipProps,
} from 'recharts'

import styles from './ActivityChart.module.css'

interface ActivityChartProps {
    data?: {
        day: string
        kilogram: number
        calories: number
    }[]
}

export default function ActivityChart(props: ActivityChartProps) {
    const { data } = props

    console.log(data)

    const weight = [0, 0]

    data?.forEach((elt, idx) => {
        const { kilogram } = elt
        idx === 0 && ((weight[0] = kilogram), (weight[1] = kilogram))
        kilogram < weight[0] && (weight[0] = kilogram)
        kilogram > weight[1] && (weight[1] = kilogram)
    })

    const tickQty = weight[1] - weight[0] + 5

    console.log(tickQty)

    const formatLegendText = (value: string) => {
        return <span className={styles.textLegend}>{value}</span>
    }

    const customToolTip = (props: TooltipProps<any, string | number>) => {
        const { active, payload } = props

        if(active && payload){
            return(
                <div className={styles.toolTip}>
                    {payload[0].payload.kilogram}{payload[0].unit}
                    <br/>
                    {payload[1].payload.calories}{payload[1].unit}
                </div>
            )

        }
        return null
    }

    return (
        <article className={styles.activity}>
            <h3 className={styles.title}>Activité quotidienne</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="4 6" verticalPoints={[0]} />
                    <XAxis
                        dataKey="day"
                        tickSize={0}
                        tickMargin={20}
                        scale={'auto'}
                        style={{
                            fontSize: '1rem',
                            fontWeight: '500',
                            color: '#9B9EAC',
                        }}
                    />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#ffffffff"
                        color="red"
                        tick={{ fill: '#9B9EAC' }}
                        tickCount={tickQty}
                        tickMargin={20}
                        type="number"
                        domain={[weight[0] - 2, weight[1] + 2]}
                    />
                    <YAxis yAxisId="left" orientation="left" hide />
                    <Tooltip content={customToolTip} cursor={{ fill: '#c4c4c450' }} />
                    <Legend
                        verticalAlign="top"
                        iconType="circle"
                        iconSize={7}
                        align="right"
                        height={50}
                        formatter={formatLegendText}
                    />
                    <Bar
                        yAxisId="right"
                        dataKey="kilogram"
                        name="Poids (kg)"
                        unit="kg"
                        fill="#000000"
                        barSize={7}
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        yAxisId="left"
                        dataKey="calories"
                        name="Calories brûlées (kCal)"
                        unit="kCal"
                        fill="#E60000"
                        barSize={7}
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </article>
    )
}
