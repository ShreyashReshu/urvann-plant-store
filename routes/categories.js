const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Plant.distinct('categories');
    res.json(categories.sort());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 