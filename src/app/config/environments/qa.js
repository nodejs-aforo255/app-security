module.exports = {
    PORT: process.env.PORT,
    DB: {
        user: 'aforo255',
        password: 'Aforo255#2050',
        database: 'db_identity',
        host: 'localhost',
        port: 5433,
        dialect: "postgres"
    },
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    TOKEN_EXPIRATION: process.env.TOKEN_EXPIRATION
}