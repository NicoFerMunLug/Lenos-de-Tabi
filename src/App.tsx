import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import TechnicalSheet from './sections/TechnicalSheet';
import ProductionBible from './sections/ProductionBible';
import Characters from './sections/Characters';
import Scripts from './sections/Scripts';
import ProductionTeam from './sections/ProductionTeam';
import Trailer from './sections/Trailer';
import DramaticArcs from './sections/DramaticArcs';
import Chapters from './sections/Chapters';
import Gallery from './sections/Gallery';

function App() {
  return (
    <div className="font-sans text-white bg-cream-50">
      <Navbar />

      <main>
        <HeroSection />
        <TechnicalSheet />
        <ProductionBible />
        <Characters />
        <Scripts />
        <ProductionTeam />
        <Trailer />
        <DramaticArcs />
        <Chapters />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

export default App;