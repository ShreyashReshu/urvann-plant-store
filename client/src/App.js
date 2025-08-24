import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PlantCatalog from './components/PlantCatalog';
import AddPlant from './components/AddPlant';
import PlantDetail from './components/PlantDetail';
import { PlantProvider } from './context/PlantContext';

function App() {
  return (
    <PlantProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<PlantCatalog />} />
              <Route path="/add-plant" element={<AddPlant />} />
              <Route path="/plant/:id" element={<PlantDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </PlantProvider>
  );
}

export default App; 