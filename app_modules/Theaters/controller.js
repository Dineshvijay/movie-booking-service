const theater = require('./model');
const asyncMiddleWare = require('../../Middleware/asyncMiddleWare');
const { successJSON } = require('../../Utils/response');

const addTheater = asyncMiddleWare(async(req, res) => {
    const result = theater.addTheater(req.body)
    res.status(200).send(successJSON(result, 201))
})

const listTheaters = asyncMiddleWare(async(req, res) => {
    const result = theater.listAllTheaters(req.params)
    res.status(200).send(successJSON(result, 200))
})

module.exports = {
    addTheater,
    listTheaters
}