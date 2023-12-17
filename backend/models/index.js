
// Create Sequelize instance
const sequelize = require('../config/database.js'); // Import the Sequelize instance from database.js

// Import your models
const Vartotojai = require('./vartotojai.js');
const Roles = require('./roles.js');

// Define associations if needed
Roles.hasMany(Vartotojai, { foreignKey: 'fk_id_Role' });
Vartotojai.belongsTo(Roles, { foreignKey: 'fk_id_Role' });


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
  Vartotojai,
  Roles,
};