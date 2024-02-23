const User = require('../models/User.js');
const { uploadOnCloudinary } = require('../utils/cloudinary.js');

// User service logic
const userService = {
    // Function to Retrieve all users from the database
    getAllUsers: async () => {
        try {
            // Retrieve all users from the database
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw error;
        }
    },

    // Function to retrieve a user by ID
    getUserById: async (userId) => {
        try {
            // Retrieve a user by ID using the Sequelize model
            const user = await User.findByPk(userId);
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            throw error;
        }
    },

    // Function to update a user
    updateUser: async (userId, userNewData) => {
        try {
            // Fetch the current user data
            const currentUser = await User.findByPk(userId);
            if (!currentUser) {
                throw new Error('User not found');
            }

            // Filter out null or undefined values from the userNewData object
            const updatedFields = Object.fromEntries(
                Object.entries(userNewData).filter(([_, value]) => value !== null && value !== undefined)
            );

            // Update the user using the Sequelize model
            const [rowsUpdated] = await User.update(updatedFields, {
                where: { id: userId },
                returning: false,
                individualHooks: false, // Disable individual hooks for update operation
                omitNull: true // Omit null values from the update operation
            });

            if (rowsUpdated === 0) {
                throw new Error('User not found');
            }

            // Fetch the updated user data after the update operation
            const updatedUser = await User.findByPk(userId);

            // Merge the updated fields with the previous user data
            const mergedUserData = { ...currentUser.toJSON(), ...updatedUser.toJSON() };

            return mergedUserData;

        } catch (error) {
            throw error;
        }
    },

    // Function to update a user Avatar image
    updateUserAvatar: async (userId, avatarPath) => {
        try {
            const user = await User.findByPk(userId);

            if (!user) {
                throw new Error('User not found');
            }

            // Upload the avatar image to Cloudinary
            const cloudinaryRes = await uploadOnCloudinary(avatarPath);

            // Update the avatar field of the user with the new avatar URL
            await user.update({ avatar: cloudinaryRes.secure_url });

            // Fetch the updated user to return
            const updatedUser = await User.findByPk(userId);

            return updatedUser.toJSON(); // Return the updated user object
        } catch (error) {
            // Handle specific error cases
            if (error.message === 'User not found') {
                throw new Error('User not found. Unable to update avatar.');
            } else if (error.code === 'SOME_SPECIFIC_ERROR_CODE') {
                // Handle specific error code
            } else {
                // For other errors, log and throw a generic error message
                console.error('An error occurred:', error);
                throw new Error('Failed to update avatar. Please try again later.');
            }
        }

    },

    // Function to delete a user
    deleteUser: async (userId) => {
        try {
            // Delete the user using the Sequelize model
            const rowsDeleted = await User.destroy({ where: { id: userId } });
            if (rowsDeleted === 0) {
                throw new Error('User not found');
            }
        } catch (error) {
            throw error;
        }
    }
};

module.exports = userService;
