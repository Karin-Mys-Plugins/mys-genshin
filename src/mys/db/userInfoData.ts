import { MysCoreDb } from 'karin-mys-core/dbs'
import { baseUserInfoDataSchema } from 'karin-mys-core/mys'
import { UserInfoDataType } from '@/types'

const UserInfoDataSchema = {
	...baseUserInfoDataSchema

}

export const userInfoData = await new MysCoreDb<UserInfoDataType>('userInfoData', UserInfoDataSchema).Init()