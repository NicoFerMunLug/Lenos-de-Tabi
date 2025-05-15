import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import '../index.css';

type Image = {
  url: string;
  alt: string;
};

const images: Image[] = Array.from({ length: 32 }, (_, i) => ({
  url: `/img/galeria/foto${i + 1}.webp`,
  alt: `Foto ${i + 1}`
}));

const customGridPositions: { [key: number]: string } = {
  8: 'col-start-8 row-start-2',
  9: 'col-start-8 row-start-3',
  10: 'col-start-8 row-start-4',
  11: 'col-start-7 row-start-4',
  12: 'col-start-6 row-start-4',
  13: 'col-start-5 row-start-4',
  14: 'col-start-4 row-start-4'
};

const Gallery: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedImages === images.length) {
      // Agrega un pequeño retraso para una mejor experiencia visual
      setTimeout(() => setIsLoading(false), 500);
    }
  }, [loadedImages]);

  return (
    <section className="py-24 bg-cream-100 relative min-h-screen">
      {/* Loader */}
      <div className={`loader ${isLoading ? '' : 'fade-out'}`}>
        <div className="container">
          <div className="coffee-header">
            <div className="coffee-header__buttons"></div>
            <div className="coffee-header__display"></div>
            <div className="coffee-header__details"></div>
          </div>
          <div className="coffee-medium">
            <div className="coffe-medium__exit"></div>
            <div className="coffee-medium__arm"></div>
            <div className="coffee-medium__liquid"></div>
            <div className="smoke one"></div>
            <div className="smoke two"></div>
            <div className="smoke three"></div>
            <div className="smoke four"></div>
            <div className="coffee-medium__cup"></div>
          </div>
        </div>
      </div>

      {/* Galería */}
      <div className={`${isLoading ? 'hidden' : 'block'} container mx-auto px-4`}>
        <SectionHeader
          id="galeria"
          title={<h2 className="text-4xl font-typewriter font-bold text-center mb-8" style={{ color: '#6e322b' }}>Galería</h2>}
        />
        <div className="mt-12">
          <div className="grid grid-cols-8 grid-rows-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-lg ${customGridPositions[index] || ''}`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onLoad={handleImageLoad}
                />
                <div className="absolute inset-0 bg-coffee-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;