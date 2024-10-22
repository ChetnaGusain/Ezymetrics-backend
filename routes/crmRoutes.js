const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead'); // Make sure this path is correct

// Fetch all leads
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find(); // Fetch leads from the database
    res.json(leads); // Return leads as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching leads' });
  }
});

// Add a new lead
router.post('/', async (req, res) => {
  const { name, email, phone } = req.body; // Destructure the incoming data

  // Validate the incoming data
  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create a new lead instance
    const newLead = new Lead({ name, email, phone });
    await newLead.save(); // Save to database

    res.status(201).json(newLead); // Return the created lead
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating lead' });
  }
});

module.exports = router;
