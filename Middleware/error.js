const error = (err, req, res, next) => {
    const errorJSON = {
        code: 500,
        error: err
    }
    res.send(errorJSON)
}

module.exports = error