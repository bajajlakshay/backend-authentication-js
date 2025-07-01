const nodemailer = require("nodemailer");
const config = require("../config/keys.config");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: config.GOOGLE_ACCOUNT,
        pass: config.GOOGLE_APP_PASS, 
    },
});

/**
 * Send a 6-digit OTP to user's email
 * @param {string} recipientEmail - The user's email address
 * @param {string} otp - The 6-digit OTP code
 */
const sendOtpEmail = (recipientEmail, otp) => {
    const mailOptions = {
        from: `"verification OTP" <${config.GOOGLE_ACCOUNT}>`,
        to: recipientEmail,
        subject: "Your OTP Code for Password Reset",
        html: `
            <h2>Password Reset Request</h2>
            <p>Your OTP code is:</p>
            <h1 style="color: #007bff;">${otp}</h1>
            <p>This code will expire in 10 minutes.</p>
            <br>
            <p>If you didn't request a password reset, please ignore this email.</p>
        `
    };

    transporter.sendMail(mailOptions);
};

module.exports = { sendOtpEmail };
