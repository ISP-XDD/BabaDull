const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

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
  fk_id_Role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  resetPasswordToken: {
    type: DataTypes.STRING,
  },
  resetPasswordExpire: {
    type: DataTypes.DATE,
  },

},{
  timestamps: false,
  freezeTableName: true,
});

// Hook to hash the password before creating a new Vartotojas
Vartotojai.beforeCreate(async (vartotojas) => {
  vartotojas.slaptazodis = await bcrypt.hash(vartotojas.slaptazodis, 10);
});

//Compare user pasword
Vartotojai.prototype.comparePassword = async function (enteredSlaptazodis){
  return await bcrypt.compare(enteredSlaptazodis, this.slaptazodis)
}

// return JWT token
Vartotojai.prototype.getJwtToken = function () {
  return jwt.sign(
    { id: this.id_Vartotojas },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

// Generate password reset token
Vartotojai.prototype.getResetPasswordToken = function () {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Hash and set to resetPasswordToken
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Set token expire time
  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;

  return resetToken;
};

module.exports = Vartotojai;