/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:08:37
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-19 21:49:50
 * @Description: file content
 */
import { Application } from 'egg'


export default (app: Application) => {
  const { controller, router } = app

  router.get('/', controller.home.index)
  router.resources('users', '/api/users', controller.users)
}
