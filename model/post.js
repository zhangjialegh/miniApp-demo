const sequelize = require('./main')
const Sequelize = require('sequelize')

const Post = sequelize.define('post', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  avator: {
    type: Sequelize.STRING,
    allowNull: false
  },
  moment: {
    type: Sequelize.STRING,
    allowNull: false
  },
  md: {
    type: Sequelize.TEXT(0),
    allowNull: false
  },
  uid: {
    type: Sequelize.STRING(40),
    allowNull: false
  },
  comments: {
    type: Sequelize.STRING(200),
    notNull: false
  },
  pv: {
    type: Sequelize.STRING(40),
    notNull: false,
    defaultValue: '0'
  }
});

module.exports = Post;
