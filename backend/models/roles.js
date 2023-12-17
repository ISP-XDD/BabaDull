const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const validator = require('validator');

const Roles = sequelize.define('Roles', {
  id_Role: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Pavadinimas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  timestamps: false,
  freezeTableName: true,
});

module.exports = Roles;