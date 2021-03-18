/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:16:35
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-05 13:51:02
 * @Description: file content
 */

import Controller from './base'

export default class UsersController extends Controller {
  public async index() {
    this.success([{
      id: 1,
      name: '2000',
    }])
  }

  public async create() {
    const data = this.ctx.request.body
    this.app.logger.info(`${this.ctx.method} - ${this.ctx.url} - ${JSON.stringify(this.ctx.request.body)}`)
    const result = await this.service.users.registerUser(data)
    result ? this.success(result) : this.fail('创建失败！')
  }

}
