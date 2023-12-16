const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const validator = require('validator');

const VartotojuRoles = sequelize.define('VartotojuRoles', {
  fk_Vartotojasid_Vartotojas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fk_Roleid_Role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = VartotojuRoles;