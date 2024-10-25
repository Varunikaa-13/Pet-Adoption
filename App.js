import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Card';
import About from './components/About';
import AdoptionInfo from './components/Info';
import ImageGrid from './components/Ig';
import DogPage from './components/Dogpage';
import CatPage from './components/Catpage';
import OtherAnimalsPage from './components/Other';
import TipsPage from './components/Tipspage';
import NewAdoptionsPage from './components/Newadapt'; // Import NewAdoptionsPage
import AdoptionProcessPage from './components/Newprocess'; // Import AdoptionProcessPage

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div><Hero /><Cards /><About /><AdoptionInfo /><ImageGrid /></div>} />
        <Route path="/dogs" element={<DogPage />} />
        <Route path="/cats" element={<CatPage />} />
        <Route path="/other-animals" element={<OtherAnimalsPage />} />
        <Route path="/adoption-tips" element={<TipsPage />} /> {/* Add route for TipsPage */}
        <Route path="/new-adoptions" element={<NewAdoptionsPage />} /> {/* Add route for NewAdoptionsPage */}
        <Route path="/adoption-process" element={<AdoptionProcessPage />} /> {/* Add route for AdoptionProcessPage */}
      </Routes>
    </Router>
  );
}

export default App;
