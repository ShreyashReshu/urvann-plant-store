import React from 'react';
import { usePlantContext } from '../context/PlantContext';
import SearchAndFilters from './SearchAndFilters';
import PlantCard from './PlantCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const PlantCatalog = () => {
  const { plants, loading, error } = usePlantContext();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discover Your Perfect Plant
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Browse through our curated collection of beautiful plants, from easy-care succulents 
          to statement-making foliage plants.
        </p>
      </div>

      {/* Search and Filters */}
      <SearchAndFilters />

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          {plants.length} {plants.length === 1 ? 'plant' : 'plants'} found
        </p>
      </div>

      {/* Plants Grid */}
      {plants.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No plants found</h3>
          <p className="text-gray-500">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <PlantCard key={plant._id} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlantCatalog; 