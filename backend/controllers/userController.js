const userService = require('../services/userService.js');

exports.getAllUser = async (req, res) => {
    try {
        // Call getAllUsers function from userService
        const users = await userService.getAllUsers();
        // Send the users array as the response
        res.status(200).json(users);
    } catch (error) {
        // Handle errors
        console.error('Error getting all users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        // Extract user ID from request parameters
        const userId = req.params.id;
        // Call getUser function from userService with the extracted ID
        const user = await userService.getUserById(userId);

        console.log(user);

        // Send the user object as the response
        res.status(200).json(user);

    } catch (error) {
        // Handle errors
        console.error('Error getting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// update users emil and fullName
exports.updateUser = async (req, res) => {
    try {
        // Extract user ID and updated user data from request body
        const id = req.user.id;
        const userData = req.body;

        // Call updateUser function from userService with the extracted ID and user data
        const updatedUser = await userService.updateUser(id, userData);

        // Send the updated user object as the response
        res.status(200).json(updatedUser);

    } catch (error) {
        // Handle errors
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update user Avatar
exports.updateUserAvatar = async (req, res) => {
    try {
        // Check if a file is included in the request
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Update the user's avatar URL in the database
        const userId = req.user.id;
        const updatedUser = await userService.updateUserAvatar(userId, req.file.path);

        res.json(updatedUser);

    } catch (error) {
        console.error('Error updating user avatar:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.deleteUser = async (req, res) => {
    try {
        // Extract user ID from request parameters
        const id = req.body.userId;
        // Call deleteUser function from userService with the extracted ID
        await userService.deleteUser(id);

        // Send success response
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error deleting user:', error);
        res.status(error?.code || 404).json({ success: false, message: error?.message || 'Internal server error' });
    }
};
