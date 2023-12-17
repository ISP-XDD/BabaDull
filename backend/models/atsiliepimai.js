const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const Atsiliepimai = sequelize.define('Atsiliepimai', {
 id_Atsiliepimas: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  antraste: {
    type: DataTypes.STRING,
    allowNull: false,
    required: [true, 'Prašome įvesti atsiliepimo antraštę'],
  },
  turinys: {
    type: DataTypes.STRING,
    allowNull: false,
    required: [true, 'Prašome aprašyti atsiliepimą'],
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  ar_pranesta: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  reitingas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  reitingu_kiekis: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  anonimiskumas: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    required: [true, 'Nurodykite ar norite, kad atsiliepimas būtų anonimiškas'],
  },
  Produktasid_Produktas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Vartotojasid_Vartotojas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
  timestamps: false,
  freezeTableName: true,
});


module.exports = Atsiliepimai;