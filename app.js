const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;

require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})