/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:08:37
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-20 11:47:48
 * @Description: file content
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'
import { Context } from 'egg'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614733707628_7234'

  // add your egg config in here
  config.middleware = [ 'checkIsLogin', 'deBounce' ]

  config.sequelize = {
    database: 'music_community',
    username: 'root',
    password: 'tzc241241',
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }

  config.checkIsLogin = {
    ignore(ctx:Context) {
      const reg = /(\/users\/login)|(\/users\/register)/
      const { path } = ctx
      console.log(path)
      return reg.test(path)
    },
  }

  config.redis = {
    client: {
      host: 'localhost',
      port: 6379,
      password: '',
      db: 0,
    },
    agent: true,
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
