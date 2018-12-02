const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    name: String,
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    },
    screens: [{
        name: String,
        sound: String,
        time: String,
        format: String,
        language: String
    }]
})

const Theater = mongoose.model('Theater', Schema);

const addTheater = async (params) => {
    const theater = new Theater({
        name: params.name,
        movie: params.movie.id,
        screens: params.screens
    })
    return await theater.save()
}

const listAllTheaters = async () => {
    const result = await Theater.find()
            .populate('Movie', '-_id __v')
            .select('-__v')
    return result
}

module.exports = {
    addTheater,
    listAllTheaters
}