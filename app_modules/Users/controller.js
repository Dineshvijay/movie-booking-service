const user = require('./model');
const _ = require('lodash');
const { successJSON, errorJSON } = require('../../Utils/response')
const asyncMiddleWare = require('../../Middleware/asyncMiddleWare')

const registerNewUser = asyncMiddleWare( async (req, res) => {
    const error = user.validateNewUser(req.body)
    if (error) {
        return res.status(400).send(errorJSON(error, 412))
    }
    const newUser = await user.createNewUser(req.body)
    const json = successJSON(_.pick(newUser, ['_id', 'email', 'username']))
    const token = await user.generateAuthToken(newUser)
    res.status(200).header('x-auth-token', token).send(json)
})

const loginUser = asyncMiddleWare( async (req, res) => {
    const error = user.validateLogin(req.body)
    if (error) {
        return res.status(400).send(errorJSON(error, 412))
    }
    const result = await user.authenticate(req.body)
    const json = successJSON(_.pick(result, ['_id', 'email', 'username']))
    const token = await user.generateAuthToken(result)
    res.status(200).header('x-auth-token', token).send(json)
})

module.exports = {
    registerNewUser,
    loginUser
}