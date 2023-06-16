interface keyDataProps {
    data?: {
        icon: string
        name: string
        value: number
    }
}

export default function Keydata(props: keyDataProps) {
    const { data } = props
    return (
        <div>
            {data?.name} : {data?.value}
            <img src={data?.icon} alt={data?.name} />
        </div>
    )
}
