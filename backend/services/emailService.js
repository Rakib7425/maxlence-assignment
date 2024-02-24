const nodemailer = require('nodemailer');

const emailService = {
    async sendPasswordResetEmail(email, resetToken) {
        try {
            // Create a Nodemailer transporter
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                // secure: true,
                auth: {
                    user: 'rakibulrsm7@gmail.com',
                    // pass: 'Rakibul@RsM123'
                    pass: 'tajn mlog kibz fezq' // Custom app password from gmail
                }
            });

            // Send email
            const mailOptions = {
                from: 'rakibulrsm7@gmail.com',
                to: email,
                subject: 'Password Reset Request',
                text: `Click the following link to reset your password: http://localhost:5173/reset-password/${resetToken}`,
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
