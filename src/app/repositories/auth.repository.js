const { Pool } = require('pg')
const config = require('../config/environments')

const pool = new Pool(config.DB)

const authRepository = {
    getUsersByCredentials: async (userName, password) => {
        var results = await pool.query('SELECT * FROM usercredential WHERE username=$1 AND password=$2', [userName, password])
        return results.rows
    }
}

module.exports = authRepository;