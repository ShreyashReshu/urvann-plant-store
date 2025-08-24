import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Eye } from 'lucide-react';

const PlantCard = ({ plant }) => {
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

  return (
    <div className="card group overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={plant.imageUrl}
          alt={plant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x300?text=Plant+Image';
          }}
        />
        
        {/* Stock Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            plant.stockAvailable 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {plant.stockAvailable ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* Care Level Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCareLevelColor(plant.careLevel)}`}>
            {plant.careLevel}
          </span>
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="flex space-x-2">
            <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200">
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
            <Link 
              to={`/plant/${plant._id}`}
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <Eye className="w-4 h-4 text-gray-600" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Plant Name */}
        <Link to={`/plant/${plant._id}`}>
          <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
            {plant.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-primary-600">
            ₹{plant.price}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">4.8</span>
          </div>
        </div>

        {/* Description */}
        {plant.description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {plant.description}
          </p>
        )}

        {/* Categories */}
        <div className="flex flex-wrap gap-1 mb-3">
          {plant.categories.slice(0, 3).map((category) => (
            <span
              key={category}
              className={`badge ${getCategoryBadgeClass(category)}`}
            >
              {category}
            </span>
          ))}
          {plant.categories.length > 3 && (
            <span className="badge bg-gray-100 text-gray-800">
              +{plant.categories.length - 3}
            </span>
          )}
        </div>

        {/* Plant Details */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span>{plant.lightRequirement}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span>{plant.wateringFrequency}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard; 