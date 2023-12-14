const { Sequelize } = require('sequelize');

const dotenv = require('dotenv');
dotenv.config({ path: 'backend/config/config.env' });

const sequelize = new Sequelize(process.env.DATABASE_URI, {
  dialect: 'mysql',
  dialectOptions: {
    charset: 'utf8mb4',
  },
});

module.exports = sequelize;