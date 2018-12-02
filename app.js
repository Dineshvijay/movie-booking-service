const express = require('express');
const app = express()
const mongoose = require('mongoose');
const error = require('./Middleware/error');
const movies = require('./app_modules/Movies/router');
const genre = require('./app_modules/Genres/router');
const rating = require('./app_modules/Ratings/router');
const theater = require('./app_modules/Theaters/router');
const actor = require('./app_modules/Actors/router');
const PORT = process.env.PORT || 3000;

app.use(express.json());

//Routers
app.use('/api/v1/movies', movies);
app.use('/api/v1/genre', genre);
app.use('/api/v1/rating', rating);
app.use('/api/v1/theater', theater)
app.use('/api/v1/theater', actor);

//Invalid Router handler
app.use('*', (req, res) => {
    res.send("Invalid routes")
});
//Middle function to handle errors
app.use(error);

mongoose.connect("mongodb://localhost:27017/movie-booking", { useNewUrlParser: true })
.then(() => {
    console.log("successfully connected to DB")
})
.catch((err) => {
    console.log("could not connect to mongoDB", err)
})

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})