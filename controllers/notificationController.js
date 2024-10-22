const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// Function to send email alert
const sendAlert = (req, res) => {
  const { email, message } = req.body;
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'EzyMetrics Alert',
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email' });
    }
    res.status(200).json({ message: 'Email sent successfully' });
  });
};

module.exports = {
  sendAlert,
};
