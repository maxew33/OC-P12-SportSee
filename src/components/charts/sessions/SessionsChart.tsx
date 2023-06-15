import React from 'react'
import { LineChart, Line} from 'recharts';

interface SessionsChartProps {
  data?: {
      day: number
      sessionLength: number
  }[]
}

export default function SessionsChart(props: SessionsChartProps) {
  const { data } = props

  console.log('sessions Chart', data)
  return (<>
    <div>SessionsChart</div>
    <LineChart width={260} height={260} data={data}>
      <Line type="monotone" dataKey="sessionLength" stroke="#000000" strokeWidth={2} />

    </LineChart>
  </>
  )
}
