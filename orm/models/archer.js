const Sequelize = require('sequelize')
const sqlConn = require('../connection')
const Score = require('./score')


const Archer = sqlConn.define('archer', {
  name: Sequelize.STRING,
  gender: Sequelize.STRING,
  age: Sequelize.INTEGER,
})

Archer.hasMany(Score)
// Archer.sync({force: true})

module.exports = Archer