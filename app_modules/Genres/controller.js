const genre = require('./model');
const asyncMiddleWare = require('../../Middleware/asyncMiddleWare');
const { successJSON, errorJSON } = require('../../Utils/response');

const addNewGenre = asyncMiddleWare ( async (req, res) => {
    const result = genre.addGenre(req.body.params);
    res.status(200).send(successJSON(result, 201))
})

const deleteGenre = asyncMiddleWare(async (req, res) => {
    const result = genre.deleteGenre(req.body)
    res.status(200).send(successJSON(result, 200))
})

const updateGenre = (req, res) => {
    const result = genre.updateGenre(req.body)
    res.status(200).send(successJSON(result))
}

const listOfGenres = (req, res) => {
    const result = genre.listOfGenres(req.body)
    res.status(200).send(successJSON(result, 200))
}

module.exports = {
    addNewGenre,
    deleteGenre,
    updateGenre,
    listOfGenres
}