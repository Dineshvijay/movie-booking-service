const express = require('express')
const router = express.Router();
const theaterController = require('./controller');

router.get('/all', theaterController.listTheaters)
router.post('/add', theaterController.addTheater)

module.exports = router;
