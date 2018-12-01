const asyncHandler = require('../../Middleware/asyncMiddleWare');
const movie = require('./model');

const addNewMovie = asyncHandler((req, res) => {
    const result = movie.addMovie()
    res.send(result)
});

const fetchAllMovies = asyncHandler((req, res) => {
    const result = movie.getAllMovies()
    res.send(result)
})

module.exports = {
    addNewMovie,
    fetchAllMovies
} 