const asyncHandler = require('../../Middleware/asyncMiddleWare');
const { successJSON, errorJSON } = require('../../Utils/response');
const movie = require('./model');

const addNewMovie = asyncHandler((req, res) => {
    const error = movie.validateNewEntry(req.body)
    if(error) {
        return res.status(400).send(errorJSON(error, 412))
    }
    const result = movie.addMovie()
    res.status(200).send(successJSON(result, 201))
});

const fetchAllMovies = asyncHandler((req, res) => {
    const result = movie.getAllMovies()
    res.status(200).send(successJSON(result, 200))
})

module.exports = {
    addNewMovie,
    fetchAllMovies
} 