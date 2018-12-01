const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    },
    rating: Number
})

const Rating = mongoose.model('Rating', Schema);

module.exports = addRating = (params) => {
    const rating = new Rating({
       rating: params.rating,
       movie: params.movie
    })
    return rating.save();
}