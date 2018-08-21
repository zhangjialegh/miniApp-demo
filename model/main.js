const Sequelize = require('sequelize');
var config = require('../config/default.js')

const sequelize = new Sequelize(
  config.database.DATABASE, 
  config.database.USERNAME, 
  config.database.PASSWORD, 
  {
  host: config.database.HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports = sequelize
