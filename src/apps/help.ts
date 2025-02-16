import { karin } from 'node-karin'
import { GenshinCfg } from '@/utils'
import { Help } from 'karin-mys-core/help'

export const help = karin.command(
	/^#?(template)帮助/i,
	async (e) => {
		const image = await Help.render(GenshinCfg.pkg.name)
		if (!image) return true

		e.reply(image)
		return true
	}
)

Help.register(GenshinCfg.pkg.name, {
	version: GenshinCfg.pkg.version,
	...GenshinCfg.help()
})