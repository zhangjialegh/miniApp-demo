const sequelize = require('./main')
const Sequelize = require('sequelize')
const User = require('./user')

const Address = sequelize.define('address', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  userId : {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  adInfo: {
    type: Sequelize.JSON,
    allowNull: true
  },
  addressComponent: {
    type: Sequelize.JSON,
    allowNull: true
  },
  addressReference: {
    type: Sequelize.JSON,
    allowNull: true
  },
  formattedAddresses: {
    type: Sequelize.JSON,
    allowNull: true
  },
  latitude: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  longitude: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
});

module.exports = Address;
