const mongoose = require('mongoose');
const Joi = require('joi');

const schema = new mongoose.Schema({
    title: {
        type: String,
        min: 1,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    actors: {
        type: [String],
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    ratings: {
        type: [Number],
        required: true
    },
    storline: {
        type: String,
        min: 10,
        max: 300
    },
    duration: {
        type: Number,
        required: true
    },
    posterUrl: {
        type: String
    },
    releaseDate: {
        type: Date
    }
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

const validateNewEntry = (params) => {
    const joiSchema = {
        title: Joi.string().min(1).required(),
        year: Joi.string().min(1).required(),
        actors: Joi.array(Joi.string()).required(),
        genres: Joi.array(Joi.number()).required(),
        ratings: Joi.array(Joi.number()).required(),
        storline: Joi.string().min(10).required(),
        duration: Joi.number().required(),
        posterUrl: Joi.string().required(),
        releaseDate: Joi.date().required()
    }
    const result = Joi.validate(params, joiSchema);
    if(result.error){
        return result.error.details[0].message;
    }
    return null
}
module.exports = {
    validateNewEntry,
    addMovie,
    getAllMovies
}