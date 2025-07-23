const express = require("express");
const {createTicket, getTicket} = require("./../controllers/ticket");
const router = express.Router();

router.post("/", createTicket);
router.get("/", getTicket);

module.exports = router;