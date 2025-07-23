const { DataTypes } = require('sequelize');
const sequelize = require("../config/database")

const Ticket = sequelize.define("Ticket", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    flyNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company: {
        type: DataTypes.STRING,
        validate: {
            len: {
                args: [0, 500],
                msg: "Description must be less than 500 characters"
            }
        }
    },
    origin: {
        type: DataTypes.TEXT
    },
    destination: {
        type: DataTypes.STRING
    },
    start: {
        type: DataTypes.STRING
    },
    end: {
        type: DataTypes.STRING
    },
    namePassenger: {
        type: DataTypes.STRING
    },
    seat: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('PENDING', 'CONFIRMED', 'CANCELED'),
        defaultValue: 'PENDING',
        allowNull: false
    }

})

module.exports = Ticket;