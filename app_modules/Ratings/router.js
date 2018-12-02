const express = require('express')
const router = express.Router()
const ratingController = require('./controller');

router.post('/add', ratingController.addRating)

module.exports = router;