const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const Vartotojai = sequelize.define('Vartotojas', {
 id_Vartotojas: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  vartotojo_vardas: {
    type: DataTypes.STRING,
    allowNull: false,
    required: [true, 'Prašome įvesti vartotojo vardą.'],
  },
  slaptazodis: {
    type: DataTypes.STRING,
    allowNull: false,
    required: [true, 'Prašome įvesti slaptažodį.'],
    validate: {
      len: {
        args: 6,
        msg: 'Slaptažodis turi būti bent 6 simbolių ilgio.',
      },
    },
    select: false,
  },
  vardas: {
    type: DataTypes.STRING,
    allowNull: false,
    required: [true, 'Prašome įvesti vardą.'],
  },
  pavarde: {
    type: DataTypes.STRING,
    allowNull: false,
    required: [true, 'Prašome įvesti pavardę.'],
  },
  el_pastas: {
    type: DataTypes.STRING,
    allowNull: false,
    required: [true, 'Prašome įvesti el. pašto adresą.'],
    validate: [validator.isEmail, 'Neteisingas el. pašto adresas.'],
  },
  adresas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resetPasswordToken: String,
  resetPaswoedExpire: Date,
});

// Hook to hash the password before creating a new Vartotojas
Vartotojas.beforeCreate(async (vartotojas, options) => {
  vartotojas.slaptazodis = await bcrypt.hash(vartotojas.slaptazodis, 10);
});

module.exports = Vartotojai;