const ticket = require('./model');
const asyndMiddleWare = require('../../Middleware/asyncMiddleWare');
const { successJSON, errorJSON }  = require('../../Utils/response');

const purchaseTicket = asyndMiddleWare((req, res) => {
    const result = ticket.addTicket(req.body)
    res.status(200).send(successJSON(result, 201))
});

const getCustomerTicketList = asyndMiddleWare((req, res) => {
    const result = ticket.getTicket(req.body)
    res.status(200).send(successJSON(result, 200))
});

const getTheaterBookingsList = asyndMiddleWare((req, res) => {
    const result = ticket.getBookings(req.body)
    res.status(200).send(successJSON(result, 200))
});

module.exports = {
    purchaseTicket,
    getCustomerTicketList,
    getTheaterBookingsList
}