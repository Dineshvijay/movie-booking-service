const winston = require('winston');
require('winston-mongodb');
require('express-async-errors')

module.exports =  function () {
    winston.handleExceptions(new winston.transports.File({filename: 'uncaughtException.log'}));
    winston.add(winston.transports.File, {filename: 'logFile.log'});
    process.on('unhandledRejection', (ex) => {
        throw ex
    });
    winston.add(winston.transports.MongoDB, {
        db: 'mongodb://localhost/movie-booking',
        level: 'info'
    });
}

/* Without winston we can achive
module.exports = function () {
    process.on('uncaughtException', (ex) => {
        console.log(ex);
        process.exit(1);
    });

    process.on('unhandledRejection', (ex) => {
        console.log(ex);
        process.exit(1);
    });
}
*/