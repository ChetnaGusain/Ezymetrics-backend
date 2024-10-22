const Lead = require('../models/Lead');

// Fetch all leads
const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching leads' });
  }
};

module.exports = {
  getLeads,
};
