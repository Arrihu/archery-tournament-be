const Sequelize = require('sequelize')
const sqlConn = require('../connection')


const Role = sqlConn.define('role', {
    name: Sequelize.STRING,
    description: Sequelize.TEXT
});

// Role.sync({force: true});

module.exports = Role;