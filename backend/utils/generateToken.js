
const jwt = require('jsonwebtoken');


// Function to generate JWT token
function generateToken(user) {
    const payload = {
        id: user.id,
        // email: user.email,
        role: user.role || 'user'
    };
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30d' });
}

module.exports = generateToken;