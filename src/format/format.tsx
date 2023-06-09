import Api from '../api/Api'

export default async function Format(id: string) {
    const url = 'http://localhost:3000/user/' + id
    const api = new Api(url)

    const userData = await api.getUserData()

    if (typeof userData !== 'object') {
        return null
    }

    const userActivity = await api.getUserActivity()
    const userSessions = await api.getUserSessions()
    const userPerformance = await api.getUserPerformance()

    console.log(userData)

    return { userData, userActivity, userSessions, userPerformance }
}
