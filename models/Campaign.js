// models/Campaign.js
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // This field is required
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  clicks: {
    type: Number,
    required: true, // This field is required
    default: 0, // Default value if needed
  },
  leadsGenerated: {
    type: Number,
    required: true, // This field is required
    default: 0, // Default value if needed
  },
}, { timestamps: true });

module.exports = mongoose.model('Campaign', campaignSchema);
