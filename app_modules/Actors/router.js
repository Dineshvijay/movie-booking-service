const express = require('express');
const router = express.Router();
const actorController = require('./controller');

router.get('/all', actorController.actorsList);
router.post('/create', actorController.addActor);

module.exports = router;