import React from 'react'
import {
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    CartesianGrid,
    BarChart,
    ResponsiveContainer,
} from 'recharts'

interface ActivityChartProps {
    data?: {
        day: string
        kilogram: number
        calories: number
    }[]
}

export default function ActivityChart(props: ActivityChartProps) {
    const { data } = props

    console.log("activity chart", data)

    return (
        <>
            ActivityChart
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <BarChart width={835} height={320} data={data}>
                    <CartesianGrid strokeDasharray="3 3" verticalPoints={[0]}/>
                    <XAxis dataKey="name" />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#000"
                    />
                    <YAxis
                        yAxisId="left"
                        orientation="left"
                        stroke="#000000ff"
                        hide
                    />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="right" dataKey="kilogram" fill="#000000" />
                    <Bar yAxisId="left" dataKey="calories" fill="#E60000" />
                </BarChart>
            {/* </ResponsiveContainer> */}
        </>
    )
}
