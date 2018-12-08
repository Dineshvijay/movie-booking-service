const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function () {
    mongoose.connect("mongodb://localhost:27017/movie-booking", { useNewUrlParser: true })
    .then(() => winston.info("successfully connected to DB"));
    //Since unhandled rejection caught by process.on('unhandledRejection)
}

