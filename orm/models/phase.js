const Sequelize = require('sequelize')
const sqlConn = require('../connection')


const Phase = sqlConn.define('phase', {
    property: Sequelize.STRING,
    value: Sequelize.STRING,
    rambahan: Sequelize.INTEGER,
    arrow: Sequelize.INTEGER
})

// Phase.sync({force: true})

module.exports = Phase