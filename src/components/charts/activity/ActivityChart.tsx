import React from 'react'

interface ActivityChartProps {
    sessions?: {
        day: string
        kilogram: number
        calories: number
    }[]
}

export default function ActivityChart(props: ActivityChartProps) {
    const { sessions } = props

    console.log(sessions)

    return (
        <div>
            ActivityChart
            <br />
            {sessions?.map((elt, idx) => {
                return (
                    <div key={idx}>
                        <h1>ACTIVITY</h1>
                        {elt.kilogram} kg / {elt.calories} cal
                    </div>
                )
            })}
        </div>
    )
}
