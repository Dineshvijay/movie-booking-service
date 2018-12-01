const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: String
});

const Genre = mongoose.model('Genre', Schema);

const addGenre = async (params) => {
    const genre = new Genre({
        name: params.name
    })
    return await genre.save()
}

const listOfGenres = async () => {
    return await Genre.find()
}

const updateGenre = async (params) => {
     return await Genre.findById(params.id)
}

const deleteGenre = async (params) => {
    return await Genre.findByIdAndDelete(params.id)
}

module.exports = {
    addGenre,
    listOfGenres,
    updateGenre,
    deleteGenre
}