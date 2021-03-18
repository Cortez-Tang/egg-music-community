/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:08:37
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-04 10:08:03
 * @Description: file content
 */
import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this
    ctx.body = await ctx.service.test.sayHi('egg')
  }
}
