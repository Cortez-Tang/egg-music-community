/**
 * @Author: tangzhicheng
 * @Date: 2021-03-19 22:52:14
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-19 22:53:26
 * @Description: file content
 */

import { Context } from 'egg'
import { Fail } from '../controller/base'


export default () => {
  return async (ctx: Context, next) => {
    if (ctx.session.isLogin) {
      return await next()
    }

    ctx.body = new Fail('请先登录！')
  }
}
