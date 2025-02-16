import { UserInfoDataType, GAME } from '@/types'
import { baseUserInfo } from 'karin-mys-core/mys'
import { userInfoData } from '..'
import { UidInfo } from 'karin-mys-core/types'

export class UserInfo extends baseUserInfo {
	userInfoData: UserInfoDataType

	#uidInfoMap: Map<string, UidInfo> = new Map()

	constructor (userId: string, userInfoData: UserInfoDataType) {
		super(userId)

		this.userInfoData = userInfoData
	}

	get mainUid () {
		return this.userInfoData[GAME.main]
	}

	async create (user_id: string) {
		const UserInfoData = await userInfoData.findByPk(user_id, true)

		const userInfo = new UserInfo(user_id, UserInfoData)

		await userInfo.initMysUserInfoData(UserInfoData)

		return this.initUidsInfo()
	}

	async refresh () {
		const UserInfoData = await userInfoData.findByPk(this.user_id, true)
		await this.initMysUserInfoData(UserInfoData)
	}

	initUidsInfo () {

		return this
	}

	getUidInfo (Uid?: string): UidInfo | undefined {
		const uid = Uid || this.mainUid
		if (!uid) {
			return undefined
		}

		const ltuid = this.userInfoData[GAME.uids][uid]

	}
}
