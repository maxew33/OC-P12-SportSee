export default class Api {
    private _url: string

    constructor(url: string) {
        this._url = url
    }

    async getUserData() {
        return fetch(this._url)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Response status not OK')
                }
            })
            .then((data) => data.data)
            .catch((err) => {
                console.error('an error occurs', err)
            })
    }

    async getUserActivity() {
        return fetch(this._url + '/activity')
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Response status not OK')
                }
            })
            .then((data) => data.data)
            .catch((err) => {
                console.error('an error occurs', err)
            })
    }

    async getUserSessions() {
        return fetch(this._url + '/average-sessions')
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Response status not OK')
                }
            })
            .then((data) => data.data)
            .catch((err) => {
                console.error('an error occurs', err)
            })
    }

    async getUserPerformance() {
        return fetch(this._url + '/performance')
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Response status not OK')
                }
            })
            .then((data) => data.data)
            .catch((err) => {
                console.error('an error occurs', err)
            })
    }
}
