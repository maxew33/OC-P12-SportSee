export default class UserSessions {
    private _data: {
        sessions: {
            day: number
            sessionLength: number
        }[]
        userId: number
    }

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
        return this._data.sessions
    }
}
