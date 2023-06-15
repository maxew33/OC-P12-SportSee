import CallData from '../callData/CallData'

export default async function Models(src: string, id: string) {
    const url = 'http://localhost:3000/user/' + id
    const callData = new CallData(src, url)
    const userData = await callData.getUserData()
    
    if (typeof userData !== 'object') {
        return null
    }
    
    const userActivity = await callData.getUserActivity()
    const userSessions = await callData.getUserSessions()
    const userPerformance = await callData.getUserPerformance()

    return { userData, userActivity, userSessions, userPerformance }
}
