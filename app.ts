/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 13:58:40
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-05 11:58:22
 * @Description: file content
 */


import { Application } from 'egg'

export default (app: Application) => {
  app.once('server', () => {
    app.logger.info('server is running')
  })

}
