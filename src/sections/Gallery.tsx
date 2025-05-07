import React from 'react';
import SectionHeader from '../components/SectionHeader';

const images = Array.from({ length: 15 }, (_, i) => ({
  url: `../../public/img/galeria/foto${i + 1}.jpg`,
  alt: `Foto ${i + 1}`
}));

const Gallery = () => {
  return (
    <section className="py-24 bg-cream-100">
      <div className="container mx-auto px-4">
        <SectionHeader
          id="galeria"
          title="Galería"
          subtitle="Momentos capturados durante la producción"
        />

        <div className="mt-12">
          <div className="grid grid-cols-8 grid-rows-4 gap-4"> {/* Ajustado a 4 filas */}
            {images.map((image, index) => {
              const customClasses = [
                index === 8 ? 'col-start-8 row-start-2' : '',
                index === 9 ? 'col-start-8 row-start-3' : '',
                index === 10 ? 'col-start-8 row-start-4' : '',
                index === 11 ? 'col-start-7 row-start-4' : '',
                index === 12 ? 'col-start-6 row-start-4' : '',
                index === 13 ? 'col-start-5 row-start-4' : '',
                index === 14 ? 'col-start-4 row-start-4' : ''
              ].join(' ');

              return (
                <div
                  key={index}
                  className={`relative group overflow-hidden rounded-lg ${customClasses}`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading="lazy" // Lazy loading para optimizar la carga
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-coffee-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;