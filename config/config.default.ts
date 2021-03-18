/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:08:37
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-05 14:16:04
 * @Description: file content
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614733707628_7234'

  // add your egg config in here
  config.middleware = []

  config.sequelize = {
    database: 'music_community',
    username: 'root',
    password: 'tzc241241',
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }

  // config.onClientError

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  }
}
