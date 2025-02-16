import { GenshinbaseConfig } from '@/types'
import { dirPath } from '@/utils'
import { pluginHelpInfoDataType } from 'karin-mys-core/types'
import { CreateConfig } from 'karin-mys-core/utils'
import { requireFileSync } from 'node-karin'

/**
 * @description package.json
 */
export const pkg = requireFileSync(`${dirPath}/package.json`)

export const GenshinConfig = new CreateConfig(dirPath, pkg.name)

/**
 * @description 基础配置文件
 */
export const base = () => GenshinConfig.get<GenshinbaseConfig>('config')

/**
 * @description 自定义帮助
 */
export const help = () => GenshinConfig.get<pluginHelpInfoDataType>('help')