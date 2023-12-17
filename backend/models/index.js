
// Create Sequelize instance
const sequelize = require('../config/database.js'); // Import the Sequelize instance from database.js

// Import your models
const Vartotojai = require('./vartotojai.js');
const Roles = require('./roles.js');
const Atsiliepimai = require('./atsiliepimai.js');
const Produktai = require('./produktai.js');

// Define associations if needed
Roles.hasMany(Vartotojai, { foreignKey: 'id_Role' });
Vartotojai.belongsTo(Roles, { foreignKey: 'id_Role' });
Vartotojai.hasMany(Atsiliepimai, { foreignKey: 'Vartotojasid_Vartotojas' });
Atsiliepimai.belongsTo(Vartotojai,  { foreignKey: 'Vartotojasid_Vartotojas' })
Produktai.hasMany(Atsiliepimai, { foreignKey: 'Produktasid_Produktas' } )
Atsiliepimai.belongsTo(Produktai,  { foreignKey: 'Produktasid_Produktas' })


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
  Atsiliepimai,
  Produktai,
};