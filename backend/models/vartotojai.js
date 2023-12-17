const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const Vartotojai = sequelize.define('Vartotojai', {
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
    validate: {
      isEmail: {
        msg: 'Prašome įvesti teisingą el. pašto adresą.',
      },
    }
  },
  adresas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_Role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
  timestamps: false,
  freezeTableName: true,
});

// Hook to hash the password before creating a new Vartotojas
Vartotojai.beforeCreate(async (vartotojas) => {
  vartotojas.slaptazodis = await bcrypt.hash(vartotojas.slaptazodis, 10);
});

module.exports = Vartotojai;