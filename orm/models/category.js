const Sequelize = require('sequelize')
const sqlConn = require('../connection')
const Score = require('./score')


const Category = sqlConn.define('category', {
    name: Sequelize.STRING,
    division: Sequelize.STRING,
    range: Sequelize.STRING
})

Category.hasMany(Score)
// Category.sync({force: true})

module.exports = Category