const sequelize = require('./main')
const Sequelize = require('sequelize')

const Comment = sequelize.define('comment', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  avator: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  moment: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  contentCount: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  postid: {
    type: Sequelize.STRING(40),
    allowNull: false,
  }
});

module.exports = Comment;
