const sequelize = require('./main')
const Sequelize = require('sequelize')
const News = sequelize.define('news', {
  id: {
    type: Sequelize.STRING(11),
    primaryKey: true,
    allowNull: false
  },
  order: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING(200),
    allowNull: false
  },
  jsonstr: {
    type: Sequelize.JSON,
    allowNull: false
  },
  insert_time: {
    type: Sequelize.DATE,
    allowNull: false
  },
  publish_time: {
    type: Sequelize.DATE,
    allowNull: true
  }
});

module.exports = News;
