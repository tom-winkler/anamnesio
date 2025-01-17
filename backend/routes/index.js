const express = require('express');
const router = express.Router();

// Define a simple route
router.get('/', (req, res) => {
  res.send('Welcome to Anamnesio API');
});

// Add more routes as needed
router.get('/about', (req, res) => {
  res.send('About Anamnesio API');
});

module.exports = router;