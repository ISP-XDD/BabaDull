const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const validator = require('validator');

const Roles = sequelize.define('Role', {
  id_Role: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Pavadinimas: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Naudotojas',
  },
});

module.exports = Roles;