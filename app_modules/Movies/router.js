const express = require('express');
const router = express.Router();
const moviesController = require('./controllers');

//GET Request
router.get('/all', moviesController.fetchAllMovies);

//POST Request
router.post('/new', moviesController.addNewMovie)

module.exports = router;