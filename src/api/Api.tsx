import data from '../__mocks__/data'

export default class Api {
    private _url: string
    private _id: number

    constructor(url: string) {
        this._url = url
        this._id = parseInt(this._url.split('/').pop()!)
    }

    async getUserData() {
        return fetch(this._url)
            .then((res) => res.json())
            .catch((err) => {
                console.error('an error occurs', err)
                return data.USER_MAIN_DATA
                .filter(user => user.id === this._id)
                .shift()
            })
    }

    async getUserActivity() {
        return fetch(this._url + '/activity')
            .then((res) => res.json())
            .catch((err) => {
                console.error('an error occurs', err)
                return data.USER_ACTIVITY
                .filter(userActivity => userActivity.userId === this._id)
                .shift()
            })
    }

    async getUserSessions() {
        return fetch(this._url + '/average-sessions')
            .then((res) => res.json())
            .catch((err) => {
                console.error('an error occurs', err)
                return data.USER_AVERAGE_SESSIONS
                .filter(userActivity => userActivity.userId === this._id)
                .shift()
            })
    }

    async getUserPerformance() {
        return fetch(this._url + '/performance')
            .then((res) => res.json())
            .catch((err) => {
                console.error('an error occurs', err)
                return data.USER_PERFORMANCE
                .filter(userPerformance => userPerformance.userId === this._id)
                .shift()
            })
    }
}
