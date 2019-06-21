const Sequelize = require('sequelize')
const sqlConn = require('../connection')
const Category = require('./category')
const EventOrganizer = require('./event_organizer')
const Archer = require('./archer')


const Tournament = sqlConn.define('tournament', {
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    start_date: Sequelize.DATE,
    end_date: Sequelize.DATE
})

Tournament.hasMany(Category)
Tournament.hasMany(EventOrganizer)
Tournament.hasMany(Archer)
// Tournament.sync({force: true});

module.exports = Tournament;