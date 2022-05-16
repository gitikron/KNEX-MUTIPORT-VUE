require('dotenv').config()

module.exports = {
    development: {
        client: process.env.DB_CLIENT,
        connection: {
            host: process.env.HOST,
            port: process.env.PORT,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
        },
        migrations: {
            directory: __dirname + "/migrations"
        },
        seeds: {
            directory: __dirname + "/seeds"
        },
        useNullAsDefault: process.env.DB_NULLABLEDEFALUT
    },
};