const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    year: Number,
    actors: [String],
    genres: [String],
    ratings: [Number],
    storline: String,
    duration: Number,
    posterUrl: String,
    releaseDate: Date
})

const Movie = mongoose.model('Movie', schema)

async function addMovie() {
    const movie = new Movie({
        name: "Avengers",
        theaters: ["mayajal", "AGS", "PVR"]
    })
    const result = await movie.save()
    return result
}

async function getAllMovies() {
    const result = await Movie.find()
    return result
}
module.exports = {
    addMovie,
    getAllMovies
}