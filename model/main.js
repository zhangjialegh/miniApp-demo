const Sequelize = require('sequelize');
var config = require('../config/default.js')
const NODE_ENV = process.env.NODE_ENV === 'dev' ? 'dev' : 'prod'
const sequelize = new Sequelize(
  config[NODE_ENV].database.DATABASE, 
  config[NODE_ENV].database.USERNAME, 
  config[NODE_ENV].database.PASSWORD, 
  {
  host: config[NODE_ENV].database.HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
});

module.exports = sequelize
