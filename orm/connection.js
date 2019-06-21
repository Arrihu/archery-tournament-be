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
// ======================================================


// const Archer = require('./models/archer')
// const Arrow = require('./models/arrow')
// const Bow = require('./models/bow')
// const Category = require('./models/category')
// const Club = require('./models/club')
// const EventOrganizer = require('./models/event_organizer')
// const Role = require('./models/role')
// const Score = require('./models/score')
// const Target = require('./models/target')
// const Tournament = require('./models/tournament')
// const User = require('./models/user') 


// User.belongsToMany(EventOrganizer, {
//   through: 'UserEventOrganizer',
//   foreignKey: 'userId'
// })

// EventOrganizer.belongsToMany(User, {
//   through: 'UserEventOrganizer',
//   foreignKey: 'eventOrganizerId'
// })


// Category.belongsToMany(Arrow, {
//   through: 'CategoryArrow',
//   foreignKey: 'categoryId'
// })

// Arrow.belongsToMany(Category, {
//   through: 'CategoryArrow',
//   foreignKey: 'arrowId'
// })


// Category.belongsToMany(Bow, {
//   through: 'CategoryBow',
//   foreignKey: 'categoryId'
// })

// Bow.belongsToMany(Category, {
//   through: 'CategoryBow',
//   foreignKey: 'bowId'
// })

// Archer.belongsToMany(Category, {
//   through: 'ArcherCategory',
//   foreignKey: 'archerId'
// })

// Category.belongsToMany(Archer, {
//   through: 'ArcherCategory',
//   foreignKey: 'categoryId'
// })


// User.hasOne(Role)
// Club.hasMany(Archer)
// Archer.hasMany(Score)
// Category.hasMany(Score)
// Target.hasMany(Category)
// EventOrganizer.hasMany(Score)
// Tournament.hasMany(Archer)
// Tournament.hasMany(EventOrganizer)
// Tournament.hasMany(Category)