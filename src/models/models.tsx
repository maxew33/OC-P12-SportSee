import CallData from '../callData/CallData'
import UserActivity from './UserActivity'
import UserSessions from './UserSessions'
import UserPerformance from './UserPerformance'
import UserMainData from './UserMainData'

export default async function Models(id: string) {

    const url = 'http://localhost:3000/user/' + id
    const callData = new CallData(url)
    const userData = await callData.getUserData()

    if (typeof userData !== 'object') {
        return null
    }

    const mainData = new UserMainData(userData)
    const userMainData = await mainData.getData()

    const activity = new UserActivity(await callData.getUserActivity())
    const userActivity = await activity.getData()

    const sessions = new UserSessions(await callData.getUserSessions())
    const userSessions = await sessions.getData()

    const performance = new UserPerformance(await callData.getUserPerformance())
    const userPerformance = await performance.getData()

    return { userMainData, userActivity, userSessions, userPerformance }
}
