const sequelize = require("../config/database");
const Ticket = require("./ticket");

sequelize.sync({ alter: true })
    .then(() => console.log("Tabelas sincronizadas com sucesso"))
    .catch((error) => console.error("Erro ao sincronizar", error))

module.exports = {
    Ticket
}