const express = require('express');
const router = express.Router();
const userController = require('./controller')

router.post('/register', userController.registerNewUser);
router.post('/login', userController.loginUser)


module.exports = router;