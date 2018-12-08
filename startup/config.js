const config = require('config')
module.exports = function () {
    //configuration
    if (!config.get('jwtSecretKey')){
        throw new Error("FATAL ERROR: JwtSecretkey is not set")
    }
};