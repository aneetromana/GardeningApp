import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GardeningApp from './GardeningApp';
import GardenDetails from './GardenDetails'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GardeningApp />} />
        <Route path="/garden/:gardenId" element={<GardenDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
