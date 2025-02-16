import { logger } from 'node-karin'
import { GenshinCfg } from '@/utils'

/** 请不要在这编写插件 不会有任何效果~ */
logger.info(`${logger.violet(`[插件:${GenshinCfg.pkg.version}]`)} ${logger.green(GenshinCfg.pkg.name)} 初始化完成~`)