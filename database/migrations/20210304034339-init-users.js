/**
 * @Author: tangzhicheng
 * @Date: 2021-03-04 11:43:39
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-05 11:22:38
 * @Description: file content
 */


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize
    await queryInterface.createTable('Users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: {
        type: STRING(30),
        allowNull: false,
      },
      password: {
        type: STRING(30),
        allowNull: false,
      },
      sex: {
        type: INTEGER,
        allowNull: false,
      },
      address_id: INTEGER,
      qq_number: STRING(20),
      wx_number: STRING(20),
      borthday: {
        type: DATE,
        allowNull: false,
      },
      introduce: STRING(300),
      music_label_id: INTEGER,
      create_time: {
        type: DATE,
        allowNull: false,
      },
      update_time: {
        type: DATE,
        allowNull: false,
      },
    })
  },

  down: async queryInterface => {
    await queryInterface.dropTable('Users')
  },
}
