import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlantContext } from '../context/PlantContext';
import { ArrowLeft, Plus, X } from 'lucide-react';

const AddPlant = () => {
  const navigate = useNavigate();
  const { addPlant, categories } = usePlantContext();
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    categories: [],
    stockAvailable: true,
    description: '',
    imageUrl: '',
    careLevel: 'Easy',
    lightRequirement: 'Medium Light',
    wateringFrequency: 'Weekly',
    height: 'Medium'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  const availableCategories = [
    'Indoor', 'Outdoor', 'Succulent', 'Air Purifying', 'Home Decor',
    'Low Maintenance', 'Flowering', 'Foliage', 'Herb', 'Cactus'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Plant name is required';
    }

    if (!formData.price || formData.price <= 0) {
      newErrors.price = 'Valid price is required';
    }

    if (formData.categories.length === 0) {
      newErrors.categories = 'At least one category is required';
    }

    if (formData.description && formData.description.length > 500) {
      newErrors.description = 'Description cannot exceed 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCategoryToggle = (category) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));

    if (errors.categories) {
      setErrors(prev => ({ ...prev, categories: '' }));
    }
  };

  const addCustomCategory = () => {
    if (newCategory.trim() && !availableCategories.includes(newCategory.trim())) {
      const category = newCategory.trim();
      setFormData(prev => ({
        ...prev,
        categories: [...prev.categories, category]
      }));
      setNewCategory('');
      
      if (errors.categories) {
        setErrors(prev => ({ ...prev, categories: '' }));
      }
    }
  };

  const removeCategory = (categoryToRemove) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.filter(c => c !== categoryToRemove)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await addPlant({
        ...formData,
        price: parseFloat(formData.price)
      });

      if (result.success) {
        navigate('/');
      }
    } catch (error) {
      console.error('Error adding plant:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={() => navigate('/')}
          className="p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Add New Plant</h1>
          <p className="text-gray-600">Add a new plant to your collection</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Plant Name */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Plant Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`input-field ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Enter plant name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price (₹) *
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className={`input-field ${errors.price ? 'border-red-500' : ''}`}
              placeholder="0.00"
              min="0"
              step="0.01"
            />
            {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
          </div>

          {/* Stock Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stock Availability
            </label>
            <div className="flex items-center space-x-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="stockAvailable"
                  checked={formData.stockAvailable}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700">In Stock</span>
              </label>
            </div>
          </div>

          {/* Categories */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categories *
            </label>
            <div className="space-y-3">
              {/* Available Categories */}
              <div className="flex flex-wrap gap-2">
                {availableCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryToggle(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                      formData.categories.includes(category)
                        ? 'bg-primary-100 text-primary-700 border border-primary-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Custom Category */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="input-field flex-1"
                  placeholder="Add custom category"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomCategory())}
                />
                <button
                  type="button"
                  onClick={addCustomCategory}
                  className="btn-secondary"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Selected Categories */}
              {formData.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700"
                    >
                      {category}
                      <button
                        type="button"
                        onClick={() => removeCategory(category)}
                        className="ml-2 text-primary-600 hover:text-primary-800"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
            {errors.categories && <p className="mt-1 text-sm text-red-600">{errors.categories}</p>}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
              className={`input-field ${errors.description ? 'border-red-500' : ''}`}
              placeholder="Enter plant description (optional)"
              maxLength="500"
            />
            <div className="flex justify-between items-center mt-1">
              {errors.description && <p className="text-sm text-red-600">{errors.description}</p>}
              <span className="text-sm text-gray-500 ml-auto">
                {formData.description.length}/500
              </span>
            </div>
          </div>

          {/* Image URL */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              className="input-field"
              placeholder="https://example.com/image.jpg"
            />
            <p className="mt-1 text-sm text-gray-500">
              Leave empty to use default placeholder image
            </p>
          </div>

          {/* Care Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Care Level
            </label>
            <select
              name="careLevel"
              value={formData.careLevel}
              onChange={handleInputChange}
              className="input-field"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Light Requirement */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Light Requirement
            </label>
            <select
              name="lightRequirement"
              value={formData.lightRequirement}
              onChange={handleInputChange}
              className="input-field"
            >
              <option value="Low Light">Low Light</option>
              <option value="Medium Light">Medium Light</option>
              <option value="Bright Light">Bright Light</option>
              <option value="Direct Sunlight">Direct Sunlight</option>
            </select>
          </div>

          {/* Watering Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Watering Frequency
            </label>
            <select
              name="wateringFrequency"
              value={formData.wateringFrequency}
              onChange={handleInputChange}
              className="input-field"
            >
              <option value="Weekly">Weekly</option>
              <option value="Bi-weekly">Bi-weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="As needed">As needed</option>
            </select>
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height
            </label>
            <select
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              className="input-field"
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Tall">Tall</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="btn-secondary"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding Plant...' : 'Add Plant'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlant; 