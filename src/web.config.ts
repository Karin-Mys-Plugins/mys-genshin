import { GenshinCfg } from '@/utils'
import { components } from 'node-karin'
import lodash from 'node-karin/lodash'

export default {
	info: {
		// 插件信息配置
	},
	/** 动态渲染的组件 */
	components: () => {
		const baseCfg = GenshinCfg.base()
	},

	/** 前端点击保存之后调用的方法 */
	save: (configData: Record<string, Record<string, string>[]>) => {
		console.log('保存的配置:', configData)
		// 在这里处理保存逻辑

		const message = ['保存成功ε٩(๑> ₃ <)۶з']
		for (const accordionKey in configData) {
			const name = accordionKey.split('.')[1]
			const Config = GenshinCfg.GenshinConfig.get(name)

			const mergeData: Record<string, string> = {}
			configData[accordionKey].map((accordionItem) => {
				lodash.forEach(accordionItem, (value, key) => {
					mergeData[key.split('.')[2]] = value
				})
			})
			Config.save(mergeData)
		}

		return {
			success: true,
			message: message.join('\n')
		}
	}
}