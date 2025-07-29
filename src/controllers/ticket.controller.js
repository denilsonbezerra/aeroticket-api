const { Ticket } = require("../models");
const { get } = require("../routes/ticket.routes");

async function createTicket(req, res) {
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

async function getTickets(req, res) {
    try {
        const tickets = await Ticket.findAll()

        return res.send(tickets)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

async function getTicket(req, res) {
    try {
        const { flyNumber } = req.params

        const ticket = await Ticket.findOne({
            where: {
                flyNumber
            }
        })

        if (!ticket) {
            return res.status(404).send({
                error: "Ticket not found"
            })
        }

        return res.send(ticket)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

async function updateTicket(req, res) {
    try {
        const { id } = req.params
        const { flyNumber, company, origin, destination, start, end, namePassenger, seat, price } = req.body

        const ticket = await Ticket.findByPk(id)

        if (!ticket) {
            return res.status(404).send({
                error: "Ticket not found"
            })
        }

        ticket.flyNumber = flyNumber
        ticket.company = company
        ticket.origin = origin
        ticket.destination = destination
        ticket.start = start
        ticket.end = end
        ticket.namePassenger = namePassenger
        ticket.seat = seat
        ticket.price = price

        await ticket.save()

        return res.send(ticket)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

async function deleteTicket(req, res) {
    try {
        const { id } = req.params

        const ticket = await Ticket.findByPk(id)

        if (!ticket) {
            return res.status(404).send({
                error: "Ticket not found"
            })
        }

        await ticket.destroy()

        return res.status(204).send()
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

module.exports = {
    createTicket,
    getTickets,
    getTicket,
    updateTicket,
    deleteTicket
}