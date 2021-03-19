/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:16:35
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-19 23:34:08
 * @Description: file content
 */

import Controller from './base'

const upRule = {
  username: 'usr',
  password: 'psd',
}

const baseRule = {
  sex: 'number',
  borthday: 'date',
}

export default class UsersController extends Controller {
  public async test() {
    const result = await this.ctx.model.Users.findAll()
    this.success(result)
  }

  public async login() {
    try {
      const body = this.ctx.request.body
      this.ctx.validate(upRule, body)
      const user = await this.service.users.login(body)
      this.success(user)
    } catch (error) {
      this.fail(error)
    }
  }

  public async loginOut() {
    await this.service.users.loginOut()
    this.success('退出成功！')
  }

  public async register() {
    try {
      const body = this.ctx.request.body
      this.ctx.validate({ ...upRule, ...baseRule }, body)
      await this.service.users.registerUser(body)
      this.success('注册成功！')
    } catch (error) {
      console.log(error)

      this.fail(error)
    }
  }
}
