import React from 'react';
import SectionHeader from '../components/SectionHeader';

const chapters = [
  {
    title: 'Capítulo 1',
    videoId: 'your-video-id-1'
  },
  {
    title: 'Capítulo 2',
    videoId: 'your-video-id-2'
  },
  {
    title: 'Capítulo 3',
    videoId: 'your-video-id-3'
  },
  {
    title: 'Capítulo 4',
    videoId: 'your-video-id-4'
  }
];

const Chapters = () => {
  return (
    <section className="py-24 bg-coffee-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          id="capítulos"
          title="Capítulos"
          subtitle="Disfruta de nuestra historia completa"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {chapters.map((chapter, index) => (
            <div key={index} className="custom-video-player">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${chapter.videoId}`}
                title={chapter.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="text-xl font-serif font-bold text-cream-50 mt-4">
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