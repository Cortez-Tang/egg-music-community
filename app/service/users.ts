/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:08:37
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-05 11:39:57
 * @Description: file content
 */
/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:08:37
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-05 11:33:31
 * @Description: file content
 */
import { Service } from 'egg'

/**
 * Test Service
 */
export default class Users extends Service {
  public async registerUser(data) {
    const user = await this.ctx.model.Users.create(data)
    return user ? user : false
  }
}
