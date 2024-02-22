const nodemailer = require('nodemailer');

const emailService = {
    async sendPasswordResetEmail(email, resetToken) {
        try {
            // Create a Nodemailer transporter
            const transporter = nodemailer.createTransport({
                // Specify my email service provider and authentication details
                service: 'gmail',
                auth: {
                    user: 'my_email@gmail.com',
                    pass: 'my_email_password'
                }
            });

            // Send email
            const mailOptions = {
                from: 'my_email@gmail.com',
                to: email,
                subject: 'Password Reset Request',
                text: `Click the following link to reset your password: http://myapp.com/reset-password/${resetToken}`,
                // HTML version of the email can be provided here as well
            };

            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ', info.response);
        } catch (error) {
            console.error('Error sending email: ', error);
            throw error;
        }
    }
};

module.exports = emailService;
