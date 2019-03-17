const Sequelize = require('sequelize');

var sequelize = new Sequelize({
  database: 'database',
  username: 'username',
  password: 'password',
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: './migrations/db.sqlite'
});

//Uncomment this ONLY WHEN you want to rebuild your databse
// sequelize.sync({ force: true })
//   .then(function(err) {
//     console.log('The table was successfully created!');
//   }, function (err) {
//     console.log('An error occurred while creating the table:', err);
//   });

module.exports = sequelize;