require('dotenv').config()
const knex = require('knex')({
    client: process.env.DB_CLIENT,
    connection: {
        host: localhost,
        port: 3306,
        user: "root",
        password: "",
        database: "darlene",
    }
})

module.exports = knex