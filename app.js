const express = require('express');
const connectDB = require('./config/db');

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const crmRoutes = require('./routes/crmRoutes');
const marketingRoutes = require('./routes/marketingRoutes'); // Ensure this line is present
const reportRoutes = require('./routes/reportRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

// Define routes
app.use('/api/crm', crmRoutes);
app.use('/api/marketing', marketingRoutes); // Ensure this line is present
app.use('/api/reports', reportRoutes);
app.use('/api/notifications', notificationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
