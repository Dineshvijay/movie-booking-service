const rating = require('./model');
const asyncMiddleWare = require('../../Middleware/asyncMiddleWare');
const { successJSON } = require('../../Utils/response');

const addRating = asyncMiddleWare( async (req, res) => {
    const result = rating.addRating(req.body)
    res.status(200).send(successJSON(result, 201));
})

module.exports = {
    addRating
}