const express = require('express')
const router = express.Router();
const theaterController = require('./controller');
const auth = require('../../Middleware/auth')

router.get('/all', theaterController.listTheaters)
router.post('/add', auth, theaterController.addTheater)

module.exports = router;
