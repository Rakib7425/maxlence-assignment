const jwt = require('jsonwebtoken');
const { getUserById } = require('../services/userService');

// Verify JWT token
const verifyJWT = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            throw new Error("Unauthorized request");
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await getUserById(decodedToken?.id);

        if (!user) {
            throw new Error("Invalid Access Token");
        }

        req.user = user.dataValues;

        next();

    } catch (error) {
        res.status(403).json({ message: error?.message || 'SM: Unauthorized access' });
        next(error); // Pass errors to the error handling middleware
    }
};

// Check if the user is authenticated and has the admin role
const isAdmin = (req, res, next) => {
    console.log(req.user.role);
    console.log(req.body);

    if (req.user && req.user.role === 'admin') {
        // User is an admin, proceed to the next middleware or route handler
        next();
    } else {
        // User is not authorized, send a 403 Forbidden response
        res.status(403).json({ message: 'Unauthorized access' });
    }
};

module.exports = { verifyJWT, isAdmin };

