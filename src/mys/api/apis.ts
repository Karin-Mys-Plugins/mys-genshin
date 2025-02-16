import { BaseltuidInfo, BaseMysResDataType, requestMethod, UidInfo } from 'karin-mys-core/types'
import { defineMysApi, MysHosts, MysApp, NoHeaders, PassportHeaders, CookieHeaders } from 'karin-mys-core/mys'

export const example = (uidInfo: UidInfo) => new defineMysApi<
	BaseMysResDataType & {
		data: {}
	},
	{}
>({
	method: requestMethod.GET,
	url: (self, data) => new URL(''),
	body: (self, data) => ({}),
	headers: NoHeaders
})