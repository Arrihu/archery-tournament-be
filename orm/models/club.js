const Sequelize = require('sequelize')
const sqlConn = require('../connection')
const Archer = require('./archer')


const Club = sqlConn.define('club', {
    name: Sequelize.STRING,
    address: Sequelize.TEXT
})

Club.hasMany(Archer)
// Club.sync({force: true})

module.exports = Club