const express = require('express');
const winston = require('winston')
const app = express()
const PORT = process.env.PORT || 3001;

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();

app.listen(PORT, () => {
    winston.info(`listening to port ${PORT}`)
})