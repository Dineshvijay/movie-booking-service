const actor = require('./model');
const asyncMiddleWare = require('../../Middleware/asyncMiddleWare');
const { successJSON, errorJSON } = require('../../Utils/response');

const addActor = asyncMiddleWare( async (req, res) => {
    const error = actor.validate(req.body)
    if(error) {
        res.status(400).send(errorJSON(error.details[0].message, 412))
    }
    const result = actor.addActor(req.body)
    res.status(200).send(successJSON(result, 201))
})

const actorsList = asyncMiddleWare( async (req, res) => {
    const result = actor.actorsList()
    res.status(200).send(successJSON(result, 200))
})

module.exports = {
    addActor,
    actorsList
}