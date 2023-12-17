const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/errors');

app.use(express.json());

// Importing all routes
const products = require('./routes/product');
const auth = require('./routes/auth');
const reviews = require('./routes/review');


app.use('/api/v1', products);
app.use('/api/v1', auth);
app.use('/api/v1', reviews);

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;