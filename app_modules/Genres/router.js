const express = require('express');
const router = express.Router()
const genreController = require('./controller');

router.get('/all', genreController.listOfGenres);

router.post('/add', genreController.addNewGenre);

router.put('/update', genreController.updateGenre);

router.delete('/delete', genreController.deleteGenre);

module.exports = router;