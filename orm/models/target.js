const Sequelize = require('sequelize')
const sqlConn = require('../connection')
const Category = require('./category')


const Target = sqlConn.define('target', {
    type: Sequelize.STRING,
    size: Sequelize.INTEGER
})

Target.hasMany(Category)
// Target.sync({force: true})

module.exports = Target