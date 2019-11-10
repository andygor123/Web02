const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'product',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    price: {
      type: Sequelize.TEXT,
      allowNull: false
    },
  },
  {
    timestamps: false
  }
)