const authService = require('../services/authService.js');

exports.register = async (req, res) => {
    try {
        // Call registerUser function from authService
        const id = Date.now();

        const newUser = await authService.registerUser(req.body, id, req.file.path);

        // Handle the result and send appropriate response
        res.status(201).json(newUser);
    } catch (error) {
        // Handle errors
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.login = async (req, res) => {
    try {
        // Call loginUser function from authService
        const data = await authService.loginUser(req.body.email, req.body.password);

        // Handle the result and send appropriate response
        res.status(data.statusCode || 500).json({ data });
    } catch (error) {
        // Handle errors
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.changePassword = async (req, res) => {
    try {
        // Call forgotPassword function from authService
        const id = req.user.id || req.body.userId;

        const result = await authService.changePassword(id, req.body);
        // Handle the result and send appropriate response
        res.status(200).json(result);

    } catch (error) {
        // Handle errors
        console.error('Error changing password :', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// To be implement
exports.forgotPassword = async (req, res) => {
    try {
        // Call forgotPassword function from authService
        const result = await authService.forgotPassword(req.body.email);
        // Handle the result and send appropriate response
        res.status(200).json({ message: 'Password reset link sent successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error sending password reset link:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// To be implement
exports.resetPassword = async (req, res) => {
    try {
        // Call resetPassword function from authService
        const result = await authService.resetPassword(req.params.token, req.body.password);

        // Handle the result and send appropriate response
        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error resetting password:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
