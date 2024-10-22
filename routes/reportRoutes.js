const express = require('express');
const { generateCSVReport } = require('../controllers/reportController');

const router = express.Router();

router.get('/csv', generateCSVReport);

module.exports = router;
