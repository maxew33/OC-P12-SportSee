export default class UserPerformance {
    private _data: {
        data: {
            value: number
            kind: number
        }[]
        kind: { [key: number]: string }
    }

    private _kind: { [key: number]: string } = {
        1: 'cardio',
        2: 'énergie',
        3: 'endurance',
        4: 'force',
        5: 'vitesse',
        6: 'intensité',
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

        return customData
    }
}
