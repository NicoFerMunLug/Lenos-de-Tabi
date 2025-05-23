import React, { useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import '../index.css';

// Lista de capítulos con IDs de videos de YouTube
const chapters = [
  {
    title: 'DETRÁS DEL CAFETAL - CAPITULO 1',
    videoId: '662IlyhC4xU'
  },
  {
    title: 'A LA SOMBRA DEL ÁRBOL - CAPITULO 2',
    videoId: 'irkvGXDS2_M'
  },
  {
    title: 'MALEZA - CAPITULO 3',
    videoId: 'KJJ1vs6Drwk'
  },
  {
    title: 'UNA NUEVA COSECHA - CAPITULO 4',
    videoId: 'QipBnLxFqlg'
  }
];

const Chapters = () => {
  useEffect(() => {
    // Importar el componente web de lite-youtube dinámicamente
    import('lite-youtube-embed');
  }, []);

  return (
    <section className="h-auto bg-[#fff] py-10">
      <div className="container mx-auto px-4">
        <SectionHeader
          id="capítulos"
          title={<h2 className="text-4xl font-typewriter font-bold text-center mb-8" style={{ color: '#6e322b' }}>Capítulos</h2>}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/20 backdrop-blur-md p-6 rounded-lg h-full shadow-lg">
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="custom-video-player bg-cream-50 rounded-lg shadow-lg overflow-hidden relative"
            >
              {/* Lite YouTube Component */}
              <lite-youtube
                videoid={chapter.videoId}
                class="w-full h-72"
              ></lite-youtube>
              <h3 className="py-3 text-center" style={{ color: '#6e322b' }}>
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