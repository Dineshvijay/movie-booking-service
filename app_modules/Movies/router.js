const express = require('express');
const router = express.Router();
const moviesController = require('./controllers');
const auth = require('../../Middleware/auth')

//GET Request
router.get('/all', moviesController.fetchAllMovies);

//POST Request
router.post('/new', auth, moviesController.addNewMovie)

module.exports = router;