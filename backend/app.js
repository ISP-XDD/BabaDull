const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');

const errorMiddleware = require('./middlewares/errors');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


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