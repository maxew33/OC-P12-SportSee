import styles from './KeyData.module.css'

interface keyDataProps {
    data?: {
        icon: string
        name: string
        value: number
        color: string
        unit: string
    }
}

export default function Keydata(props: keyDataProps) {
    const { data } = props
    return (
        <article className={styles.data}>
            <div
                className={styles.imgWrapper}
                style={{ backgroundColor: data?.color }}
            >
                <img src={data?.icon} alt={data?.name} />
            </div>

            <div className={styles.dataWrapper}>
                <span className={styles.value}>{data?.value}{data?.unit}</span>
                <span className={styles.name}>{data?.name}</span>                
            </div>
        </article>
    )
}
