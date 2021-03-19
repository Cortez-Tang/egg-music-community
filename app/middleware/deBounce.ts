/**
 * @Author: tangzhicheng
 * @Date: 2021-03-19 23:36:01
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-20 00:07:27
 * @Description: file content
 */

import { Context } from 'egg'
import { Fail } from '../controller/base'


export default () => {
  return async (ctx: Context, next) => {
    const now = Date.now()
    const preTime = ctx.session.preTime || 0
    ctx.session.preTime = now
    console.log('now', now, 'pre', preTime)
    console.log(now - preTime)


    if (now - preTime < 200) {
      return (ctx.body = new Fail('操作频繁！'))
    }

    await next()
  }
}
