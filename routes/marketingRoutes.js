const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');
const nodemailer = require('nodemailer');

// Create a new campaign
router.post('/', async (req, res) => {
  const { name, title, description, startDate, endDate, clicks, leadsGenerated } = req.body;

  const newCampaign = new Campaign({
    name,
    title,
    description,
    startDate,
    endDate,
    clicks,
    leadsGenerated,
  });

  try {
    const savedCampaign = await newCampaign.save();
    
    // After campaign is saved, send email
    const emailResult = await sendEmail(savedCampaign);
    
    res.status(201).json({ savedCampaign, emailResult });
  } catch (err) {
    console.error("Error creating campaign:", err);
    res.status(400).json({ message: "Error creating campaign", error: err });
  }
});

// Fetch all campaigns
router.get('/campaigns', async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (err) {
    console.error("Error fetching campaigns:", err);
    res.status(500).json({ message: "Error fetching campaigns", error: err });
  }
});

// Route to send an email
router.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;
  
  try {
    const result = await sendEmail({ to, subject, text });
    res.status(200).json({ message: 'Email sent successfully', result });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ message: 'Error sending email', error: err });
  }
});

// Function to send email
async function sendEmail(campaign) {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: '"EzyMetrics" <your-email@example.com>', // sender address
    to: 'recipient@example.com', // list of receivers (you can also pass from req.body)
    subject: `New Campaign Created: ${campaign.name}`, // Subject line
    text: `A new campaign named ${campaign.name} has been created.`, // plain text body
  };

  // Send email
  return transporter.sendMail(mailOptions);
}

module.exports = router;
