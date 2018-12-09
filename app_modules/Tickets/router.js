const express = require('express');
const router = express.Router();
const ticketController = require('./controller');

router.post('/buy', ticketController.purchaseTicket)
router.get('/user/me', ticketController.getCustomerTicketList)
router.get('/theater/me', ticketController.getTheaterBookingsList)

module.exports = router;