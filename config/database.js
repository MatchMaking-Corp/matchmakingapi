const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('myproject', 'myprojectuser', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;

