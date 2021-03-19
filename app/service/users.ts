/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:08:37
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-19 23:31:17
 * @Description: file content
 */

import { Service } from 'egg'
import { UserAttrbutes } from '../model/users'


export default class Users extends Service {
  public async findUser(username: string, password?: string): Promise<UserAttrbutes | null> {
    const where: any = {
      username,
    }
    if (password) {
      where.password = password
    }
    return await this.ctx.model.Users.findOne({
      where,
    })
  }

  public async login({ username, password }: { username: string, password: string }): Promise<UserAttrbutes> {
    const result = await this.findUser(username, password)
    if (result === null) {
      throw new Error('账号密码不正确！')
    }
    this.ctx.session.isLogin = true
    this.ctx.session.userInfo = result
    return result
  }

  public async loginOut() {
    this.ctx.session.isLogin = false
    this.ctx.session.userInfo = null
  }

  public async registerUser(data: UserAttrbutes): Promise<UserAttrbutes> {
    const result = await this.findUser(data.username)
    if (result !== null) {
      throw new Error('该用户名已经存在！')
    }
    return await this.ctx.model.Users.create(data)
  }
}
