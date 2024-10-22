const { Parser } = require('json2csv');
const Lead = require('../models/Lead');

// Generate CSV report for leads
const generateCSVReport = async (req, res) => {
  try {
    const leads = await Lead.find(); // Fetch leads from the database
    const csvParser = new Parser();
    const csv = csvParser.parse(leads);
    res.header('Content-Type', 'text/csv');
    res.attachment('leads-report.csv');
    res.send(csv);
  } catch (error) {
    res.status(500).json({ message: 'Error generating CSV report' });
  }
};

module.exports = {
  generateCSVReport,
};
