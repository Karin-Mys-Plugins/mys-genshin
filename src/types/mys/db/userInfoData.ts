import { baseUserInfoDataType } from 'karin-mys-core/types'

export const GameKey = 'temp'
export const GameName = 'Template'

export enum GAME {
	main = GameKey + '_main',
	uids = GameKey + '_uids'
}

export interface UserInfoDataType extends baseUserInfoDataType {
	[GAME.main]: string
	[GAME.uids]: {
		[key: string]: 0 | 1 | 2 | 3
	}
}