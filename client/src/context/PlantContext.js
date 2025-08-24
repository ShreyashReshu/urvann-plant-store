import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

// Configure API base URL for production
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://urvann-plant-store-backend.onrender.com' 
  : '';

const PlantContext = createContext();

const initialState = {
  plants: [],
  categories: [],
  loading: false,
  error: null,
  searchTerm: '',
  selectedCategory: 'all',
  minPrice: '',
  maxPrice: '',
  availableOnly: false
};

const plantReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_PLANTS':
      return { ...state, plants: action.payload, loading: false, error: null };
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'SET_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'SET_PRICE_FILTERS':
      return { ...state, minPrice: action.payload.minPrice, maxPrice: action.payload.maxPrice };
    case 'SET_AVAILABLE_ONLY':
      return { ...state, availableOnly: action.payload };
    case 'ADD_PLANT':
      return { ...state, plants: [action.payload, ...state.plants] };
    case 'UPDATE_PLANT':
      return {
        ...state,
        plants: state.plants.map(plant =>
          plant._id === action.payload._id ? action.payload : plant
        )
      };
    case 'DELETE_PLANT':
      return {
        ...state,
        plants: state.plants.filter(plant => plant._id !== action.payload)
      };
    default:
      return state;
  }
};

export const PlantProvider = ({ children }) => {
  const [state, dispatch] = useReducer(plantReducer, initialState);

  const fetchPlants = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      const params = new URLSearchParams();
      if (state.searchTerm) params.append('search', state.searchTerm);
      if (state.selectedCategory !== 'all') params.append('category', state.selectedCategory);
      if (state.minPrice) params.append('minPrice', state.minPrice);
      if (state.maxPrice) params.append('maxPrice', state.maxPrice);
      if (state.availableOnly) params.append('available', 'true');

      const response = await axios.get(`${API_BASE_URL}/api/plants?${params.toString()}`);
      dispatch({ type: 'SET_PLANTS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.response?.data?.error || 'Failed to fetch plants' });
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/categories`);
      dispatch({ type: 'SET_CATEGORIES', payload: response.data });
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const addPlant = async (plantData) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await axios.post(`${API_BASE_URL}/api/plants`, plantData);
      dispatch({ type: 'ADD_PLANT', payload: response.data });
      return { success: true, data: response.data };
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to add plant';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      return { success: false, error: errorMessage };
    }
  };

  const updatePlant = async (id, plantData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/api/plants/${id}`, plantData);
      dispatch({ type: 'UPDATE_PLANT', payload: response.data });
      return { success: true, data: response.data };
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to update plant';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      return { success: false, error: errorMessage };
    }
  };

  const deletePlant = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/plants/${id}`);
      dispatch({ type: 'DELETE_PLANT', payload: id });
      return { success: true };
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to delete plant';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      return { success: false, error: errorMessage };
    }
  };

  const setSearchTerm = (term) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: term });
  };

  const setSelectedCategory = (category) => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category });
  };

  const setPriceFilters = (minPrice, maxPrice) => {
    dispatch({ type: 'SET_PRICE_FILTERS', payload: { minPrice, maxPrice } });
  };

  const setAvailableOnly = (available) => {
    dispatch({ type: 'SET_AVAILABLE_ONLY', payload: available });
  };

  const clearFilters = () => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: '' });
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: 'all' });
    dispatch({ type: 'SET_PRICE_FILTERS', payload: { minPrice: '', maxPrice: '' } });
    dispatch({ type: 'SET_AVAILABLE_ONLY', payload: false });
  };

  useEffect(() => {
    fetchPlants();
  }, [state.searchTerm, state.selectedCategory, state.minPrice, state.maxPrice, state.availableOnly]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const value = {
    ...state,
    fetchPlants,
    fetchCategories,
    addPlant,
    updatePlant,
    deletePlant,
    setSearchTerm,
    setSelectedCategory,
    setPriceFilters,
    setAvailableOnly,
    clearFilters
  };

  return (
    <PlantContext.Provider value={value}>
      {children}
    </PlantContext.Provider>
  );
};

export const usePlantContext = () => {
  const context = useContext(PlantContext);
  if (!context) {
    throw new Error('usePlantContext must be used within a PlantProvider');
  }
  return context;
}; 