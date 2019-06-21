const Sequelize = require('sequelize')
const sqlConn = require('../connection')


const Bow = sqlConn.define('bow', {
    type: Sequelize.STRING,
    length: Sequelize.INTEGER,
    weight: Sequelize.INTEGER
})

// Bow.sync({force: true})

module.exports = Bow