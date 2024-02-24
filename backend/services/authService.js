const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { sendPasswordResetEmail } = require('./emailService.js');
const generateToken = require('../utils/generateToken.js');
const { uploadOnCloudinary } = require('../utils/cloudinary.js');

// Register a new user
const registerUser = async (userData, id, localFilePath) => {

    // console.log(localFilePath);

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const token = generateToken({ id, email: userData.email, role: userData.role });

        const cloudinaryResponse = await uploadOnCloudinary(localFilePath);

        // Create a new user in the database
        const newUser = await User.create({
            id,
            fullName: userData.fullName,
            email: userData.email,
            password: hashedPassword,
            avatar: cloudinaryResponse?.secure_url,
            token,
            role: userData.role,
        });

        return newUser;

    } catch (error) {
        throw error;
    }
};

// Login user and generate JWT
const loginUser = async (email, password) => {
    try {
        // Find the user by email
        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return { statusCode: 404, status: false, message: "User not found!" };
        }

        // Compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return { statusCode: 401, status: false, message: 'Invalid credentials' };
        }

        // Generate JWT token
        const token = generateToken(user);

        // Return the user details along with the token
        return { statusCode: 200, status: true, message: 'Successfully logged in', token: token, user: user };


    } catch (error) {
        return { statusCode: 500, status: false, message: 'invalid credentials', error };
    }
};


const changePassword = async (id, newUserDetails) => {
    try {
        // Find the user by ID
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newUserDetails.newPassword, 10);

        // Update the password field of the user with the new hashed password
        await user.update({ password: hashedPassword });

        // Return success message or any other desired response
        return { message: 'Password changed successfully' };
    } catch (error) {
        return { message: error?.message || 'User not found', error };
    }
}

const forgotPassword = async (email) => {
    try {
        // Find user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error('User not found');
        }

        // Generate a unique token
        const resetToken = uuidv4();

        // Update user's resetToken in the database
        await user.update({ resetToken });

        // Send password reset email with reset link
        await sendPasswordResetEmail(email, resetToken);

        return { message: 'Password reset email sent successfully' };
    } catch (error) {
        throw error;
    }
};


const resetPassword = async (token, newPassword) => {
    try {
        // Find user by resetToken
        const user = await User.findOne({ where: { resetToken: token } });
        if (!user) {
            throw new Error('Invalid or expired reset token');
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10); // You can adjust the salt rounds as needed

        // Update user's password and resetToken in the database
        await user.update({ password: hashedPassword, resetToken: null });

        return { message: 'Password reset successfully' };
    } catch (error) {
        throw error;
    }
};


module.exports = { registerUser, loginUser, changePassword, forgotPassword, resetPassword }