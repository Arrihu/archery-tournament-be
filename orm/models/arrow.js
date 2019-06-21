const Sequelize = require('sequelize')
const sqlConn = require('../connection')


const Arrow = sqlConn.define('arrow', {
    type: Sequelize.STRING,
    length: Sequelize.FLOAT,
    diameter: Sequelize.FLOAT,
    spine: Sequelize.INTEGER
})

// Arrow.sync({force: true})

module.exports = Arrow