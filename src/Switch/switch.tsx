import Api from '../api/Api'
import MockedApi from '../__mocks__/Api'

export default async function Format(src: string, id: string) {
    const url = 'http://localhost:3000/user/' + id
    const api = src === 'api' ? new Api(url) : new MockedApi(url)

    const userData = await api.getUserData()
    
    if (typeof userData !== 'object') {
        return null
    }
    
    const userActivity = await api.getUserActivity()
    const userSessions = await api.getUserSessions()
    const userPerformance = await api.getUserPerformance()

    return { userData, userActivity, userSessions, userPerformance }
}
