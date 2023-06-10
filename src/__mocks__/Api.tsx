import data from './data'

export default class MockedApi {
    private _url: string
    private _id: number

    constructor(url: string) {
        this._url = url
        this._id = parseInt(this._url.split('/').pop()!)
    }

    async getUserData() {
        return data.USER_MAIN_DATA.filter(
            (user) => user.id === this._id
        ).shift()
    }

    async getUserActivity() {
        return data.USER_ACTIVITY.filter(
            (userActivity) => userActivity.userId === this._id
        ).shift()
    }

    async getUserSessions() {
        return data.USER_AVERAGE_SESSIONS.filter(
            (userActivity) => userActivity.userId === this._id
        ).shift()
    }

    async getUserPerformance() {
        return data.USER_PERFORMANCE.filter(
            (userPerformance) => userPerformance.userId === this._id
        ).shift()
    }
}
