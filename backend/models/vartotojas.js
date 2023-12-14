const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vartotojas = sequelize.define('Vartotojas', {
  vart_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  vartotojo_vardas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slaptazodis: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vardas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pavarde: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  el_pastas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adresas: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Vartotojas;