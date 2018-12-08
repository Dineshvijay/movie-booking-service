const mongoose = require('mongoose');

module.exports = function () {
    mongoose.connect("mongodb://localhost:27017/movie-booking", { useNewUrlParser: true })
    .then(() => {
        console.log("successfully connected to DB")
    })
    //Since unhandled rejection caught by process.on('unhandledRejection)
}

