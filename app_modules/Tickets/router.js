const express = require('express');
const router = express.Router();
const ticketController = require('./controller');
const auth = require('../../Middleware/auth');

router.post('/buy', auth, ticketController.purchaseTicket)
router.get('/user/me', auth, ticketController.getCustomerTicketList)
router.get('/theater/me', auth, ticketController.getTheaterBookingsList)

module.exports = router;