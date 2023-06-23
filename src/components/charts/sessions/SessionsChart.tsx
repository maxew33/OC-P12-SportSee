import {
    LineChart,
    Line,
    ResponsiveContainer,
    XAxis,
    Tooltip,
    TooltipProps,
    YAxis,
} from 'recharts'

import styles from './SessionsChart.module.css'
import { useRef } from 'react'

interface SessionsChartProps {
    data?: {
        day: string
        sessionLength: number
    }[]
}

export default function SessionsChart(props: SessionsChartProps) {
    const { data } = props

    const duration = [0, 0]

    const shadowRef = useRef<HTMLDivElement>(null)

    data?.forEach((elt, idx) => {
        const { sessionLength } = elt
        idx === 0 &&
            ((duration[0] = sessionLength), (duration[1] = sessionLength))
        sessionLength < duration[0] && (duration[0] = sessionLength)
        sessionLength > duration[1] && (duration[1] = sessionLength)
    })

    const customToolTip = (props: TooltipProps<any, string | number>) => {
        const { active, payload } = props

        if (active && payload) {
            const dot = document
                .querySelector('.recharts-active-dot')
                ?.getBoundingClientRect()

            const dotPos = { left: dot?.left ?? 0, width: dot?.width ?? 0 }

            if (shadowRef.current && dotPos) {
                const newShadowPos =
                    (100 *
                        (dotPos.left +
                            dotPos.width / 2 -
                            shadowRef.current.getBoundingClientRect().left)) /
                    shadowRef.current.getBoundingClientRect().width

                displayShadow(newShadowPos)
            }

            return (
                <div className={styles.toolTip}>
                    {payload[0].payload.sessionLength} min
                </div>
            )
        }
        return null
    }

    const displayShadow = (value: number) => {
        shadowRef.current &&
            (shadowRef.current.style.background = `linear-gradient(90deg, #00000000 0 ${value}%, #00000050 ${value}% 100%)`)
    }

    const removeShadow = () => {
        displayShadow(100)
    }

    return (
        <article className={styles.sessions}>
            <div className={styles.cursorShadow} ref={shadowRef}></div>
            <h3 className={styles.title}>durée moyenne des sessions</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} onMouseLeave={removeShadow}>
                    <XAxis
                        dataKey="day"
                        tickSize={0}
                        strokeWidth={0}
                        tick={{ fill: '#ffffffaa' }}
                    />
                    <YAxis
                        yAxisId="axis"
                        domain={[duration[0] - 10, duration[1] + 10]}
                        hide
                    />
                    <Tooltip
                        isAnimationActive={false}
                        content={customToolTip}
                        cursor={{ stroke: '#ffffff50' }}
                    />
                    <Line
                        yAxisId="axis"
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#ffffff"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            stroke: '#ffffff50',
                            strokeWidth: 10,
                            fill: '#ffffff',
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </article>
    )
}
