import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import BrandNote from './components/BrandNote';
import Products from './components/Products';
import Footer from './components/Footer';
import NaturalStones from './pages/NaturalStones';
import Quartz from './pages/Quartz';
import Tiles from './pages/Tiles';
import Marbles from './pages/Marbles';
import SPC from './pages/SPC';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navigation setCurrentPage={(page: string) => {}} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <BrandNote />
                <Products />
              </>
            } />
            <Route path="/natural-stones" element={<NaturalStones />} />
            <Route path="/quartz" element={<Quartz />} />
            <Route path="/tiles" element={<Tiles />} />
            <Route path="/marbles" element={<Marbles />} />
            <Route path="/spc" element={<SPC />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;