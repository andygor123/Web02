const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  storage: './db.db',
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db