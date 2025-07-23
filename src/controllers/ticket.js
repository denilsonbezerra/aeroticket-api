const { Ticket } = require("../models")

async function createTicket(req, res) {
    console.log("btgrfegffd req.body", req.body)

    if (!req.body.flyNumber || !req.body.company || !req.body.origin || !req.body.destination ||
        !req.body.start || !req.body.end || !req.body.namePassenger || !req.body.seat || !req.body.price) {
        return res.status(400).send({
            error: "Todos os campos são obrigatórios"
        })
    }

    const { flyNumber, company, origin, destination, start, end, namePassenger, seat, price } = req.body;
    try {
        const ticket = await Ticket.create({
            flyNumber,
            company,
            origin,
            destination,
            start,
            end,
            namePassenger,
            seat,
            price
        })

        return res.status(201).send(ticket)
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error.message
        })
    }
}

async function getTicket(req, res) {
    try {
        const tickets = await Ticket.findAll()

        return res.send(tickets)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

module.exports = {
    createTicket,
    getTicket
}