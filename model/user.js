const sequelize = require('./main')
const Sequelize = require('Sequelize')
const User = sequelize.define('user', {
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
  pass: {
    type: Sequelize.STRING,
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
});

module.exports = User;
