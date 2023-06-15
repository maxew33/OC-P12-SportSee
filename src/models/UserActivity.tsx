export default class UserActivity {
    private _data: {
        sessions: {
            day: string
            kilogram: number
            calories: number
        }[]
        userId: number
    }

    constructor(data: {
        sessions: {
            day: string
            kilogram: number
            calories: number
        }[]
        userId: number
    }) {
        this._data = data
    }

    getData() {
        const customData = this._data.sessions.map((data, idx) => ({
            ...data,
            day: (idx+1).toString(),
            calories: data.calories / 1000,
        }))
        return customData
    }
}
