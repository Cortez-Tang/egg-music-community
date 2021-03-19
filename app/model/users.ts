/**
 * @Author: tangzhicheng
 * @Date: 2021-03-05 11:24:53
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-19 22:09:06
 * @Description: file content
 */

import { Application } from 'egg'

interface UserAttrbutes {
  id: number
  username: string
  password: string
  sex: number
  address_id?: number
  qq_number?: string
  wx_number?: string
  borthday: Date
  introduce?: string
  music_label_id?: number
}


export default (app: Application) => {
  const Sequelize = app.Sequelize

  const Users = app.model.define<any, UserAttrbutes>('Users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    sex: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    address_id: Sequelize.INTEGER,
    qq_number: Sequelize.STRING(20),
    wx_number: Sequelize.STRING(20),
    borthday: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    introduce: Sequelize.STRING(300),
    music_label_id: Sequelize.INTEGER,
  }, {
    freezeTableName: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
  })

  return Users
}
