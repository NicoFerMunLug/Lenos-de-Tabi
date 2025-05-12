import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import TechnicalSheet from './sections/TechnicalSheet';
import ProductionBible from './sections/ProductionBible';
import Characters from './sections/Characters';
import DramaticArcs from './sections/DramaticArcs';
import Chapters from './sections/Chapters';
import Gallery from './sections/Gallery';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-cream-50">
      <Navbar />
      <main>
        <HeroSection />
        <TechnicalSheet />
        <ProductionBible />
        <Characters />
        <DramaticArcs />
        <Chapters />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App