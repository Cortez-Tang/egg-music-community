/**
 * @Author: tangzhicheng
 * @Date: 2021-03-05 11:24:53
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-05 14:15:52
 * @Description: file content
 */

import { Application } from 'egg'


export default (app: Application) => {
  const Sequelize = app.Sequelize

  const Users = app.model.define('Users', {
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
