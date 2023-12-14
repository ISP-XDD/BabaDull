const { Sequelize } = require('sequelize');
dotenv.config({ path: 'backend/config/config.env' });

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

module.exports = sequelize;