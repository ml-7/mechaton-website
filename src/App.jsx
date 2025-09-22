import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EditionsPage from './pages/EditionsPage';
import PartnershipPage from './pages/PartnershipPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/o-mechatonie" element={<AboutPage />} />
      <Route path="/edycje" element={<EditionsPage />} />
      <Route path="/wspolpraca" element={<PartnershipPage />} />
    </Routes>
  </Router>
);

export default App;
