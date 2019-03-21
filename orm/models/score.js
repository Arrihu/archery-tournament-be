const Sequelize = require('sequelize')
const sqlConn = require('../connection')


const Score = sqlConn.define('score', {
    date: Sequelize.DATE,
    end: Sequelize.INTEGER,
})

// Score.sync({force: true})

module.exports = Score