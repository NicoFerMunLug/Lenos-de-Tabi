import React from 'react';
import SectionHeader from '../components/SectionHeader';

const TechnicalSheet = () => {
  return (
    <section className="min-h-screen relative">
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(60, 41, 21, 0.7), rgba(60, 41, 21, 0.4)), url("https://images.pexels.com/photos/4820714/pexels-photo-4820714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="relative z-20 container mx-auto px-4 py-24 min-h-screen flex items-center">
        <div className="max-w-3xl mx-auto text-cream-50">
          <SectionHeader
            id="ficha-técnica"
            title="Ficha técnica"
            subtitle="Una breve descripción del proyecto"
          />
          
          <div className="mt-8 space-y-6 text-lg backdrop-blur-sm bg-coffee-900/30 p-8 rounded-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-coffee-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-serif mb-3">Dirección</h3>
                <p>Nombre del Director</p>
              </div>
              <div className="bg-coffee-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-serif mb-3">Producción</h3>
                <p>Nombre del Productor</p>
              </div>
              <div className="bg-coffee-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-serif mb-3">Género</h3>
                <p>Documental</p>
              </div>
              <div className="bg-coffee-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-serif mb-3">Duración</h3>
                <p>45 minutos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSheet;