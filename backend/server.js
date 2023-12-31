const app = require('./app');

const dotenv = require('dotenv');

// Setting up config file
dotenv.config({ path: 'backend/config/config.env' });

// Handle Uncaught exceptions
process.on('uncaughtException', err => {
  console.log(`ERROR: ${err.stack}`);
  console.log('Shutting down due to uncaught exception.');
  process.exit(1);
});


const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', err => {
  console.log(`ERROR: ${err.message}`);
  console.log('Shutting down the server due to unhandled promise rejection.');
  server.close(() => {
    process.exit(1);
  });
});