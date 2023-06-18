import data from '../__mocks__/data'

export default class CallData {
    private _url: string
    // private _src: string
    private _id: number

    constructor(url: string) {
        this._url = url
        // this._src = src
        this._id = parseInt(this._url.split('/').pop()!)
    }

    async getUserData() {
        return import.meta.env.PROD
            ? fetch(this._url)
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
            : data.USER_MAIN_DATA.filter((user) => user.id === this._id).shift()
    }

    async getUserActivity() {
        return import.meta.env.PROD
            ? fetch(this._url + '/activity')
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
            : data.USER_ACTIVITY.filter(
                  (userActivity) => userActivity.userId === this._id
              ).shift()
    }

    async getUserSessions() {
        return import.meta.env.PROD
            ? fetch(this._url + '/average-sessions')
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
            : data.USER_AVERAGE_SESSIONS.filter(
                  (userActivity) => userActivity.userId === this._id
              ).shift()
    }

    async getUserPerformance() {
        return import.meta.env.PROD
            ? fetch(this._url + '/performance')
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
            : data.USER_PERFORMANCE.filter(
                  (userPerformance) => userPerformance.userId === this._id
              ).shift()
    }
}
