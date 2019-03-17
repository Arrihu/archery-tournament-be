const Sequelize = require('sequelize')
const sqlConn = require('../connection')
const Role = require('./role')


const User = sqlConn.define('user', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING
  });

User.hasOne(Role)
// User.sync({force: true})

module.exports = User;