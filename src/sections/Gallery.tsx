import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';
import '../index.css';

type Image = {
  url: string;
  alt: string;
};

const allImages: Image[] = Array.from({ length: 32 }, (_, i) => ({
  url: `/img/galeria/foto${i + 1}.webp`,
  alt: `Foto ${i + 1}`
}));

const mobileImageIndices = [0, 1, 2, 3, 4, 6, 10, 17, 18, 19, 20, 23, 27, 28, 29];

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
  const isMobile = useMediaQuery("(max-width: 640px)");

  const images = isMobile
    ? mobileImageIndices.map((i) => allImages[i])
    : allImages;

  const getGridClass = (index: number) =>
    `relative group overflow-hidden rounded-lg ${
      !isMobile && customGridPositions[index] ? `sm:${customGridPositions[index]}` : ''
    }`;

  return (
    <section className="py-24 bg-cream-100 relative min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeader
          id="galeria"
          title={
            <h2
              className="text-4xl font-typewriter font-bold text-center mb-8"
              style={{ color: '#6e322b' }}
            >
              Galería
            </h2>
          }
        />
        <div className="mt-12">
          <div className={`grid gap-2 ${isMobile ? 'grid-cols-5 grid-rows-3' : 'grid-cols-8 grid-rows-4 gap-4'}`}>
            {images.map((image, index) => (
              <div key={index} className={getGridClass(index)}>
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
