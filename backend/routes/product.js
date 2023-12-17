const express = require('express');
const router = express.Router();


const {getProducts} = require('../controllers/productController');
const {isAuthenticatedUser} = require('../middlewares/auth.js');

router.route('/products').get(isAuthenticatedUser, getProducts);

module.exports = router;