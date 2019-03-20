const Sequelize = require('sequelize')
const sqlConn = require('../connection')


const RuleCompetition = sqlConn.define('rule_competition', {
    property: Sequelize.STRING,
    value: Sequelize.STRING
})

// RuleCompetition.sync({force: true})

module.exports = RuleCompetition