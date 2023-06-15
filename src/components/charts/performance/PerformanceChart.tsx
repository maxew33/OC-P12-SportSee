import React from 'react'
import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
} from 'recharts'

interface PerformanceChartProps {
    data?: {
        value: number
        kind: string
    }[]
}

export default function PerformanceChart(props: PerformanceChartProps) {
    const { data } = props

    return (
        <>
            <div>PerformanceChart</div>

            {data?.map((data, idx) => (
                <div key={idx}>
                    {data.kind} / {data.value}
                </div>
            ))}

            <RadarChart
                width={500}
                height={500}
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
        </>
    )
}
