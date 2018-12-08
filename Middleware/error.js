const error = (err, req, res, next) => {
    const errCode = err.code ? err.code : 500
    const errorJSON = {
        code: errCode,
        error: err
    }
    res.send(errorJSON)
}

module.exports = error