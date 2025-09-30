import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AboutUsPage from './pages/AboutUsPage';

import PartnershipPage from './pages/PartnershipPage';
import BasicEditionsPage from './pages/BasicEditionsPage';


// Prevent zooming with ctrl+wheel globally
function usePreventZoom() {
  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && (e.deltaY !== 0 || e.deltaX !== 0)) {
        e.preventDefault();
      }
    };
    window.addEventListener('wheel', handler, { passive: false });
    return () => window.removeEventListener('wheel', handler);
  }, []);
}

const App = () => {
  usePreventZoom();
  return (
    <Router>
      <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/o-mechatonie" element={<AboutPage />} />
    <Route path="/o-nas" element={<AboutUsPage />} />

    <Route path="/edycje" element={<BasicEditionsPage />} />
    <Route path="/wspolpraca" element={<PartnershipPage />} />
      </Routes>
    </Router>
  );
};

export default App;
