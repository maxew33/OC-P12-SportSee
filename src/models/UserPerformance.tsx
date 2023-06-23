export default class UserPerformance {
    private _data: {
        data: {
            value: number
            kind: number
        }[]
        kind: { [key: number]: string }
    }

    private _kind: { [key: number]: string } = {
        1: 'Cardio',
        2: 'Energie',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensité',
    }

    constructor(data: {
        data: {
            value: number
            kind: number
        }[]
        kind: { [key: number]: string }
    }) {
        this._data = data
    }

    getData() {
        const customData = this._data.data.map((data) => ({
            ...data,
            kind: this._kind[data.kind],
        }))

        return customData.reverse()
    }
}
