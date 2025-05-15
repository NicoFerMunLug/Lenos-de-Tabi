import React from 'react';
import SectionHeader from '../components/SectionHeader';

const ProductionBible = () => {
  return (
    <section className="py-24 bg-cream-100">
      <div className="container mx-auto px-4">
        <SectionHeader
          id="biblia"
          title={<h2 className="text-4xl font-typewriter font-bold text-center mb-8" style={{ color: '#6e322b' }}>Biblia</h2>}
        />
        
        <div className="mt-12">
          <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <iframe
              allowFullScreen
              scrolling="no"
              className="fp-iframe border border-gray-300 w-full"
              style={{ height: '400px' }}
              src="https://heyzine.com/flip-book/6c8bd82d2b.html"
              title="Biblia de Producción"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionBible;