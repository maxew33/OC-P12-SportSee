export default class UserMainData {
    private _data: {
        id: number
        userInfos: {
            firstName: string
            lastName: string
            age: number
        }
        todayScore: number
        score: number
        keyData: {
            calorieCount: number
            proteinCount: number
            carbohydrateCount: number
            lipidCount: number
        }
    }

    constructor(data: {
        id: number
        userInfos: {
            firstName: string
            lastName: string
            age: number
        }
        todayScore: number
        score: number
        keyData: {
            calorieCount: number
            proteinCount: number
            carbohydrateCount: number
            lipidCount: number
        }
    }) {
        this._data = data
    }

    getData() {
        const customScore = this._data.todayScore
            ? this._data.todayScore * 100
            : this._data.score * 100
        const customName = this._data.userInfos.firstName
        const customCalories = this._data.keyData.calorieCount / 1000
        const customProtein = this._data.keyData.proteinCount
        const customCarbohydrate = this._data.keyData.carbohydrateCount
        const customLipid = this._data.keyData.lipidCount

        const customData = {
            score: customScore,
            name: customName,
            kcal: customCalories,
            protein: customProtein,
            carboHydrate: customCarbohydrate,
            lipid: customLipid,
        }

        return customData
    }
}
