import React from 'react';
import SectionHeader from '../components/SectionHeader';

const ProductionBible = () => {
  return (
    <section className="py-24 bg-cream-100">
      <div className="container mx-auto px-4">
        <SectionHeader
          id="biblia"
          title="Biblia"
          subtitle="Guía completa del proyecto"
        />
        
        <div className="mt-12">
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.canva.com/your-embed-url"
              className="w-full h-full"
              allow="fullscreen"
              title="Biblia de Producción"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionBible;