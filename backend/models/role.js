const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define('Role', {
  role_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pavadinimas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Role;