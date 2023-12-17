const express = require('express');
const router = express.Router();


const {createProductReview} = require('../controllers/reviewController.js');


router.route('/review').post(createProductReview);

module.exports = router;