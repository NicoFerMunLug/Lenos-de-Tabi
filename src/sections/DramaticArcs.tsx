import React from 'react';
import SectionHeader from '../components/SectionHeader';

const arcs = [
  {
    title: 'Capítulo 1',
    image: 'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Capítulo 2',
    image: 'https://images.pexels.com/photos/2608495/pexels-photo-2608495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Capítulo 3',
    image: 'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Capítulo 4',
    image: 'https://images.pexels.com/photos/2159062/pexels-photo-2159062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const DramaticArcs = () => {
  return (
    <section className="py-24 bg-coffee-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          id="arcos"
          title="Arcos"
          subtitle="La evolución de nuestra historia a través de cuatro capítulos"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {arcs.map((arc, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            >
              <div className="aspect-[3/4]">
                <img
                  src={arc.image}
                  alt={arc.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/80 to-transparent flex items-end p-6">
                <h3 className="text-xl font-serif font-bold text-cream-50">
                  {arc.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DramaticArcs;