const user = require('./model');
const _ = require('lodash');
const { successJSON } = require('../../Utils/response')
const asyncMiddleWare = require('../../Middleware/asyncMiddleWare')

const registerNewUser = asyncMiddleWare( async (req, res) => {
    const newUser = await user.createNewUser(req.body)
    const json = successJSON(successJSON(_.pick(newUser, ['_id', 'email', 'username'])))
    const token = await user.generateAuthToken(newUser)
    res.status(200).header('x-auth-token', token).send(json)
})

const loginUser = asyncMiddleWare( async (req, res) => {
    const user = await user.authenticate(req.body)
    const json = successJSON(successJSON(_.pick(user, ['_id', 'email', 'username'])))
    const token = await user.generateAuthToken(newUser)
    res.status(200).header('x-auth-token', token).send(json)
})

module.exports = {
    registerNewUser,
    loginUser
}