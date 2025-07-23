const express = require("express");
const {createTicket, getTicket} = require("../controllers/ticket.controller");
const router = express.Router();

router.post("/", createTicket);
router.get("/", getTicket);

module.exports = router;