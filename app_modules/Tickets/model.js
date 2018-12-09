const mongoose = require('mongoose');

const ticketsSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    movie: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Movie'
    },
    theater: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Theater'
    },
    booking: {
        showTime: String,
        screenName: String,
        seats: [Number],
        price: Number
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Ticket = mongoose.model('Ticket', ticketsSchema);

const addTicket = async (params) => {
    const ticket = new Ticket({
        user: params.userId,
        movie: params.movieId,
        theater: params.theaterId,
        booking: {
            showTime: params.showTime,
            screenName: params.screenName,
            seats: params.seats,
            price: params.price
        }
    })
    return await ticket.save()
}

const getTicket = async (params) => {
    const tickets = await Ticket.find( { userId: params.userId } )
                                .populate('Movie')
                                .populate('Theater')
    
    return tickets
}

const getBookings = async (params) => {
    const bookings = await Ticket.find( { movie: params.movieId, theater: params.theaterId } )
                                .populate('Movie')
                                .populate('Theater')
    
    return bookings
}

module.exports = {
    addTicket,
    getTicket,
    getBookings
}