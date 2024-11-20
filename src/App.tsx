import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioGrid from './components/PortfolioGrid';
import Illustrations from './pages/Illustrations';
import Inspirations from './pages/Inspirations';
import HorizonBlue from './pages/HorizonBlue';
import Ownphones from './pages/Ownphones';
import Vodka from './pages/Vodka';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioGrid />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/inspirations" element={<Inspirations />} />
        <Route path="/horizon-blue" element={<HorizonBlue />} />
        <Route path="/ownphones" element={<Ownphones />} />
        <Route path="/vodka" element={<Vodka />} />
      </Routes>
    </Router>
  );
}

export default App;