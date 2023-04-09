const jwt = require('jsonwebtoken');
//tạo token
const generateRefreshToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRECT, { expiresIn: '3d' });
};
module.exports = { generateRefreshToken }; 