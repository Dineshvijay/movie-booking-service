const express = require('express');
const error = require('../Middleware/error');
const user = require('../app_modules/Users/router');
const movies = require('../app_modules/Movies/router');
const genre = require('../app_modules/Genres/router');
const rating = require('../app_modules/Ratings/router');
const theater = require('../app_modules/Theaters/router');
const actor = require('../app_modules/Actors/router');
const { errorJSON } = require('../Utils/response');

module.exports = function (app){
    app.use(express.json());
    //Routers
    app.use('/api/v1/user', user);
    app.use('/api/v1/movies', movies);
    app.use('/api/v1/genre', genre);
    app.use('/api/v1/rating', rating);
    app.use('/api/v1/theater', theater)
    app.use('/api/v1/theater', actor);

    //Invalid Router handler
    app.use('*', (req, res) => {
        res.status(400).send(errorJSON('Invalid request', 400))
    });
    //Middle function to handle errors
    app.use(error);
}
