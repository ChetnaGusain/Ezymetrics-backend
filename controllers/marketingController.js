const Campaign = require('../models/Campaign');

// Fetch all campaigns
const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching campaigns' });
  }
};

module.exports = {
  getCampaigns,
};
