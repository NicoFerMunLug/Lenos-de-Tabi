import React from 'react';
import SectionHeader from '../components/SectionHeader';

const arcs = [
  {
    title: 'Capítulo 1',
    image: 'img/arcos/arco1.webp',
  },
  {
    title: 'Capítulo 2',
    image: 'img/arcos/arco2.webp',
  },
  {
    title: 'Capítulo 3',
    image: 'img/arcos/arco3.webp',
  },
  {
    title: 'Capítulo 4',
    image: 'img/arcos/arco4.webp',
  }
];

const DramaticArcs = () => {
  return (
    <section className="h-auto py-24 bg-[#6e322b]">
      <div className="container mx-auto px-4">
        <SectionHeader
          id="arcos"
          title={
            <h2 className="text-4xl font-typewriter font-bold text-center mb-8" style={{ color: '#fff' }}>
              Arcos
            </h2>
          }
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 arcos-grid relative">
          {arcs.map((arc, index) => (
            <div
              key={index}
              className={`arco-card relative transition-transform duration-300 rounded-lg overflow-hidden shadow-lg sm:hover:scale-150 hover:z-10
                ${index === 0
                  ? 'origin-left'
                  : index === arcs.length - 1
                  ? 'origin-right'
                  : 'origin-center'
                } h-[30rem]`} // altura fija aquí
            >
              <img
                src={arc.image}
                alt={arc.title}
                className="w-full h-full object-cover" // imagen se adapta completamente
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DramaticArcs;
