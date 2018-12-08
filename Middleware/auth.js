const jwt = require('jsonwebtoken');
const config = require('config');
const { errorJSON } = require('../Utils/response');

function auth(err, req, res, next) {
  const tokenString = req.header('x-auth-token')
  if (!tokenString) {
      return res.status(401).send(errorJSON('Invalid Token', 401))
  }
  try {
    const decoded = jwt.verify(tokenString, config.get('jwtSecretKey'))
    req.user = decoded
    next()
  } catch (ex) {
      res.status(401).send(errorJSON('Invalid Token', 401))
  }
}

module.exports = auth