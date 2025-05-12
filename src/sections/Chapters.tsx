import React, { useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import '../index.css'; // Asegúrate de que este archivo importe el CSS de lite-youtube

// Lista de capítulos con IDs de videos de YouTube
const chapters = [
  {
    title: 'Capítulo 1',
    videoId: '2Yu0z_J1fqk'
  },
  {
    title: 'Capítulo 2',
    videoId: 'CHhKIBrHk14'
  },
  {
    title: 'Capítulo 3',
    videoId: '-HnkibpABYE'
  },
  {
    title: 'Capítulo 4',
    videoId: '_cX2AkBD0z4'
  }
];

const Chapters = () => {
  useEffect(() => {
    // Importar el componente web de lite-youtube dinámicamente
    import('lite-youtube-embed');
  }, []);

  return (
    <section className="py-20 bg-coffee-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          id="capítulos"
          title={<h1 className="text-5xl md:text-4xl font-serif font-bold text-cream-50">Capítulos</h1>}
          subtitle={<p className="text-cream-50">Disfruta de nuestra historia completa</p>}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="custom-video-player bg-cream-50 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Lite YouTube Component */}
              <lite-youtube
                videoid={chapter.videoId}
                class="w-full h-72"
              ></lite-youtube>
              <h3 className="absolute bottom-4 right-4 text-xl font-serif font-bold text-gray-900 bg-cream-50 bg-opacity-80 px-4 py-2 rounded-lg shadow-md">
                {chapter.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chapters;