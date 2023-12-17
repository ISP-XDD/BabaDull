const express = require('express');
const router = express.Router();


const {createProductReview, getProductReviews} = require('../controllers/reviewController.js');


router.route('/review').post(createProductReview);
router.route('/review').get(getProductReviews);

module.exports = router;