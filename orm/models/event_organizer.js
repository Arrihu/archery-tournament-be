const Sequelize = require('sequelize')
const sqlConn = require('../connection')
const Score = require('./score')


const EventOrganizer = sqlConn.define('event_organizer', {
    position: Sequelize.STRING,
    description: Sequelize.TEXT
})

EventOrganizer.hasMany(Score)
// EventOrganizer.sync({force: true})

module.exports = EventOrganizer