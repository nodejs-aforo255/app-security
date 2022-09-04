const authService = require('../services/auth.service')
const jwt = require('jsonwebtoken');
const config = require('../config/environments')

const getUsersByCredentials = async (req, res) => {
    const { userName, password } = req.body
    const result = await authService.getUsersByCredentials(userName, password)
    if(result.length > 0)
    {
        const token = jwt.sign({ username: userName }, config.TOKEN_SECRET, { expiresIn: config.TOKEN_EXPIRATION })
        return res.status(200).json({ token: token, username: userName, expiration: config.TOKEN_EXPIRATION })
    }
    else
        return res.status(401).send({ error: 'Unauthorized user' });
}

module.exports = { getUsersByCredentials }