const { errorJSON } = require('../Utils/response');

const error = (err, req, res, next) => {
    const msg = err.msg ? err.msg : err
    const code = err.code ? err.code : 500
    res.status(code).send(errorJSON(msg, code))
}

module.exports = error