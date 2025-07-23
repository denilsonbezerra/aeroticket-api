const express = require("express");
const cors = require("cors");
require('./src/models')
const ticketRouter = require("./src/routes/ticket.routes");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use("/tickets", ticketRouter);

app.listen(port, () => {
    console.log(`API sendo executada na porta ${port}`);
});