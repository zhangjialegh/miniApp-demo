const sequelize = require('./main')
const Sequelize = require('sequelize')
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  wechat_nickname: {
    type: Sequelize.STRING
  },
  wechat_province: {
    type: Sequelize.STRING
  },
  wechat_city: {
    type: Sequelize.STRING
  },
  wechat_country: {
    type: Sequelize.STRING
  },
  wechat_openid: {
    type: Sequelize.STRING,
    allowNull: false
  },
  wechat_avatar_uri: {
    type: Sequelize.STRING,
  },
  third_session: {
    type: Sequelize.STRING,
    allowNull: false
  },
  scene: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = User;
