const express = require("express");
const ticketController = require("../controllers/ticket.controller");
const router = express.Router();

router.post("/", ticketController.createTicket)
router.get("/", ticketController.getTickets)
router.get("/:flyNumber", ticketController.getTicket)
router.put("/:id", ticketController.updateTicket)
router.delete("/:id", ticketController.deleteTicket)

module.exports = router;