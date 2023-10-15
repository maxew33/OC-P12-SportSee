import CallData from '../callData/CallData'
import UserActivity from './UserActivity'
import UserSessions from './UserSessions'
import UserPerformance from './UserPerformance'
import UserMainData from './UserMainData'

export default async function Models(id: string) {

    const url = '/user/' + id
    console.log(url)
    const callData = new CallData(url)
    const userData = await callData.getUserData()

    if (typeof userData !== 'object') {
        return null
    }

    const mainData = new UserMainData(userData)
    const userMainData = mainData.getData()

    const activity = new UserActivity(await callData.getUserActivity())
    const userActivity = activity.getData()

    const sessions = new UserSessions(await callData.getUserSessions())
    const userSessions = sessions.getData()

    const performance = new UserPerformance(await callData.getUserPerformance())
    const userPerformance = performance.getData()

    return { userMainData, userActivity, userSessions, userPerformance }
}
