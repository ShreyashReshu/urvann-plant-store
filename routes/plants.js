const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// GET all plants with search and filter
router.get('/', async (req, res) => {
  try {
    const { search, category, minPrice, maxPrice, available } = req.query;
    let query = {};

    // Search by name or category (case-insensitive)
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { categories: { $regex: search, $options: 'i' } }
      ];
    }

    // Filter by category
    if (category && category !== 'all') {
      query.categories = { $in: [category] };
    }

    // Filter by price range
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseFloat(minPrice);
      if (maxPrice) query.price.$lte = parseFloat(maxPrice);
    }

    // Filter by availability
    if (available !== undefined) {
      query.stockAvailable = available === 'true';
    }

    const plants = await Plant.find(query).sort({ createdAt: -1 });
    res.json(plants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// POST new plant (Admin feature)
router.post('/', async (req, res) => {
  try {
    const { name, price, categories, stockAvailable, description, imageUrl, careLevel, lightRequirement, wateringFrequency, height } = req.body;

    // Validation
    if (!name || !price || !categories || categories.length === 0) {
      return res.status(400).json({ error: 'Name, price, and at least one category are required' });
    }

    if (price < 0) {
      return res.status(400).json({ error: 'Price cannot be negative' });
    }

    const plant = new Plant({
      name,
      price,
      categories,
      stockAvailable: stockAvailable !== undefined ? stockAvailable : true,
      description,
      imageUrl,
      careLevel,
      lightRequirement,
      wateringFrequency,
      height
    });

    const savedPlant = await plant.save();
    res.status(201).json(savedPlant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT update plant
router.put('/:id', async (req, res) => {
  try {
    const updatedPlant = await Plant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedPlant) {
      return res.status(404).json({ error: 'Plant not found' });
    }
    
    res.json(updatedPlant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE plant
router.delete('/:id', async (req, res) => {
  try {
    const deletedPlant = await Plant.findByIdAndDelete(req.params.id);
    
    if (!deletedPlant) {
      return res.status(404).json({ error: 'Plant not found' });
    }
    
    res.json({ message: 'Plant deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET categories for filter dropdown
router.get('/categories/list', async (req, res) => {
  try {
    const categories = await Plant.distinct('categories');
    res.json(categories.sort());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// This route should come after the categories route to avoid conflicts
router.get('/:id', async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) {
      return res.status(404).json({ error: 'Plant not found' });
    }
    res.json(plant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 