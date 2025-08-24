import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Star } from 'lucide-react';
import axios from 'axios';

// Configure API base URL for production
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://urvann-plant-store-backend.onrender.com' 
  : '';

const PlantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/api/plants/${id}`);
        setPlant(response.data);
      } catch (error) {
        setError(error.response?.data?.error || 'Failed to fetch plant details');
      } finally {
        setLoading(false);
      }
    };

    fetchPlant();
  }, [id]);

  const getCategoryBadgeClass = (category) => {
    const categoryMap = {
      'Indoor': 'badge-indoor',
      'Outdoor': 'badge-outdoor',
      'Succulent': 'badge-succulent',
      'Air Purifying': 'badge-air-purifying',
      'Home Decor': 'badge-home-decor',
      'Low Maintenance': 'badge-low-maintenance',
      'Flowering': 'badge-flowering',
      'Foliage': 'badge-foliage',
      'Herb': 'badge-herb',
      'Cactus': 'badge-cactus'
    };
    return categoryMap[category] || 'badge-gray-100 text-gray-800';
  };

  const getCareLevelColor = (level) => {
    const colorMap = {
      'Easy': 'text-green-600 bg-green-100',
      'Medium': 'text-yellow-600 bg-yellow-100',
      'Hard': 'text-red-600 bg-red-100'
    };
    return colorMap[level] || 'text-gray-600 bg-gray-100';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading plant details...</p>
        </div>
      </div>
    );
  }

  if (error || !plant) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Plant not found</h3>
          <p className="text-gray-600 mb-4">{error || 'The plant you are looking for does not exist.'}</p>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Back to Catalog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={() => navigate('/')}
          className="p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{plant.name}</h1>
          <p className="text-gray-600">Plant Details</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
            <img
              src={plant.imageUrl}
              alt={plant.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x600?text=Plant+Image';
              }}
            />
          </div>
          
          {/* Quick Actions */}
          <div className="flex space-x-3">
            <button className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Heart className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Add to Wishlist</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Share2 className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Share</span>
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          {/* Price and Rating */}
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold text-primary-600">
              ₹{plant.price}
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              <span className="text-gray-600">(4.8)</span>
            </div>
          </div>

          {/* Stock Status */}
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              plant.stockAvailable 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {plant.stockAvailable ? 'In Stock' : 'Out of Stock'}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCareLevelColor(plant.careLevel)}`}>
              {plant.careLevel} Care
            </span>
          </div>

          {/* Description */}
          {plant.description && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{plant.description}</p>
            </div>
          )}

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {plant.categories.map((category) => (
                <span
                  key={category}
                  className={`badge ${getCategoryBadgeClass(category)}`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Care Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Light Requirements</h4>
              <p className="text-gray-600">{plant.lightRequirement}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Watering</h4>
              <p className="text-gray-600">{plant.wateringFrequency}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Height</h4>
              <p className="text-gray-600">{plant.height}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Care Level</h4>
              <p className="text-gray-600">{plant.careLevel}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                plant.stockAvailable
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!plant.stockAvailable}
            >
              {plant.stockAvailable ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <button className="w-full py-3 px-6 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200">
              Contact for Bulk Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetail; 