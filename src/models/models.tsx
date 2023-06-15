import CallData from '../callData/CallData'
import UserActivity from './UserActivity'
import UserSessions from './UserSessions'
import UserPerformance from './UserPerformance'

export default async function Models(src: string, id: string) {
    const url = 'http://localhost:3000/user/' + id
    const callData = new CallData(src, url)
    const userData = await callData.getUserData()

    if (typeof userData !== 'object') {
        return null
    }

    // const userActivity = await callData.getUserActivity()
    // const userSessions = await callData.getUserSessions()
    // const userPerformance = await callData.getUserPerformance()

    const activity = new UserActivity(await callData.getUserActivity())
    const userActivity = await activity.getData()

    const sessions = new UserSessions(await callData.getUserSessions())
    const userSessions = await sessions.getData()

    const performance = new UserPerformance(await callData.getUserPerformance())
    const userPerformance = await performance.getData()

    console.log('models performance', performance, userPerformance)

    return { userData, userActivity, userSessions, userPerformance }
}
