/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:08:37
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-19 23:32:53
 * @Description: file content
 */
import { Application } from 'egg'


export default (app: Application) => {
  const { controller, router } = app

  // users
  router.post('/users/login', controller.users.login)
  router.post('/users/loginOut', controller.users.loginOut)
  router.post('/users/register', controller.users.register)
  router.get('/users/test', controller.users.test)
  router.get('/', controller.home.index)
}
