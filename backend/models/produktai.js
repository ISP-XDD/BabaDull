const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const Produktai = sequelize.define('Produktai', {
 id_Produktas: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pavadinimas: {
    type: DataTypes.STRING,
    allowNull: false,
    required: [true, 'Prašome įvesti produkto pavadinima'],
  },
}, {
  timestamps: false,
  freezeTableName: true,
});


module.exports = Produktai;