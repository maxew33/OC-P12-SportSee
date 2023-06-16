import React from 'react'
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts'

interface MainChartProps {
    data?: {
        score: number
        name: string
        keyData : {name: string, value: number, icon: string}[]
        // kcal: number
        // protein: number
        // carboHydrate: number
        // lipid: number
    }
}

export default function MainChart(props: MainChartProps) {
    const { data } = props
    return (
        <div>
            MainChart - {data?.name}
            <RadialBarChart
                width={500}
                height={500}
                cx="50%"
                cy="50%"
                innerRadius="100%"
                // outerRadius="80%"
                barSize={25}
                data={[data]}
            >
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar 
                dataKey="score" 
                fill="#FF0000" 
                startAngle={-90}
                cornerRadius={25}/>
            </RadialBarChart>
        </div>
    )
}
