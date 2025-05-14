import React from 'react';
import SectionHeader from '../components/SectionHeader';

const ProductionBible = () => {
  return (
    <section className="py-24 bg-cream-100">
      <div className="container mx-auto px-4">
        <SectionHeader
          id="personajes"
          title={<h1 className="text-5xl md:text-4xl font-serif font-bold text-cream-50">Biblia</h1>}
          subtitle={<p className="text-black">Guía completa del proyecto</p>}
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