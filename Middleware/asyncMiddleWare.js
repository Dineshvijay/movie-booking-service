module.exports = asyncMiddleWareHandler = (handler) => {
    return async (req, res, next) => {
        try {
            await handler(req, res)
        } catch(ex) {
            next(ex)
        }
    }
}

//alternative for this approach - npm package - express-async-errors