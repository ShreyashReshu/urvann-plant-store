const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Plant name is required'],
    trim: true,
    maxlength: [100, 'Plant name cannot exceed 100 characters']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  categories: [{
    type: String,
    required: [true, 'At least one category is required'],
    enum: ['Indoor', 'Outdoor', 'Succulent', 'Air Purifying', 'Home Decor', 'Low Maintenance', 'Flowering', 'Foliage', 'Herb', 'Cactus']
  }],
  stockAvailable: {
    type: Boolean,
    default: true
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  imageUrl: {
    type: String,
    default: 'https://via.placeholder.com/300x300?text=Plant+Image'
  },
  careLevel: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Easy'
  },
  lightRequirement: {
    type: String,
    enum: ['Low Light', 'Medium Light', 'Bright Light', 'Direct Sunlight'],
    default: 'Medium Light'
  },
  wateringFrequency: {
    type: String,
    enum: ['Weekly', 'Bi-weekly', 'Monthly', 'As needed'],
    default: 'Weekly'
  },
  height: {
    type: String,
    default: 'Medium'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for search functionality
plantSchema.index({ name: 'text', categories: 'text' });

// Pre-save middleware to update the updatedAt field
plantSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Plant', plantSchema); 