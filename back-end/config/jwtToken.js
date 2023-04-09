const jwt = require('jsonwebtoken');
//tạo token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRECT, { expiresIn: '1d' });
};
module.exports = { generateToken };