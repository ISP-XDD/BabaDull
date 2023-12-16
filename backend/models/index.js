const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Load environment variables from config.env
dotenv.config({ path: './config/config.env' });

// Create Sequelize instance
const sequelize = require('./database'); // Import the Sequelize instance from database.js

// Import your models
const VartotojasModel = require('./models/vartotojas');
const RoleModel = require('./models/role');

// Initialize models
const Vartotojas = VartotojasModel(sequelize);
const Role = RoleModel(sequelize);

// Define associations if needed
Vartotojas.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasMany(Vartotojas, { foreignKey: 'role_id' });

// Synchronize the models with the database
sequelize.sync({ force: false }) // Set force to true to drop tables and recreate them (use with caution)
  .then(() => {
    console.log('Database synchronized successfully.');
  })
  .catch((err) => {
    console.error('Error synchronizing database:', err);
  });

// Export the initialized Sequelize instance and models
module.exports = {
  sequelize,
  Vartotojas,
  Role,
};