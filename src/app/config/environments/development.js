module.exports = {
    PORT: process.env.PORT,
    DB: {
        user: 'aforo255',
        password: 'AVNS_jPmjSEMP6Dv3Nc_A4Rq',
        database: 'DB_SECURITY',
        host: 'serveraforo255postgres-ica-do-user-12343977-0.b.db.ondigitalocean.com',
        port: 25060,
        ssl: { 
            rejectUnauthorized: false 
        },
        dialect: "postgres"
    },
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    TOKEN_EXPIRATION: process.env.TOKEN_EXPIRATION
}