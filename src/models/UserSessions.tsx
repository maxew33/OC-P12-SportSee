export default class UserSessions {
    private _data: {
        sessions: {
            day: number
            sessionLength: number
        }[]
        userId: number
    }

    private _day: string[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    constructor(data: {
        sessions: {
            day: number
            sessionLength: number
        }[]
        userId: number
    }) {
        this._data = data
    }

    getData() {
        // return this._data.sessions
        const customData = this._data.sessions.map((data) => ({
            ...data,
            day: this._day[data.day - 1],
        }))

        return customData
    }
}
