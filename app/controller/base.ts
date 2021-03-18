/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:26:22
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-03 09:37:08
 * @Description: file content
 */

import { Controller } from 'egg'

class BaseModel {
  public code: number
  public data: any
  public msg: string | null
  constructor(code: number, data: any, msg: string | null) {
    this.code = code
    this.data = data
    this.msg = msg
  }
}

class Success extends BaseModel {
  constructor(data: any) {
    super(0, data, null)
  }
}

class Fail extends BaseModel {
  constructor(msg: string) {
    super(-1, null, msg)
  }
}


export default class BaseController extends Controller {
  protected success(data: any) {
    this.ctx.body = new Success(data)
  }

  protected fail(msg: string) {
    this.ctx.body = new Fail(msg)
  }
}
