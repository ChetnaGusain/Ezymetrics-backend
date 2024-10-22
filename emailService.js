const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to your email service provider like Mailtrap, SendGrid, etc.
  auth: {
    user: process.env.EMAIL_USER, // Email address from .env
    pass: process.env.EMAIL_PASS, // Email password or app password from .env
  },
});

// Function to send email
const sendEmail = async (to, subject, text) => {
  try {
    console.log(`Sending email to: ${to}, subject: ${subject}`);
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email');
  }
};

module.exports = sendEmail;
