import React, { useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import '../index.css'; // Asegúrate de que este archivo importe el CSS de lite-youtube

const Trailer = () => {
  useEffect(() => {

    import('lite-youtube-embed');
  }, []);

  return (
    <section id="trailer" className="h-auto bg-white py-10">
      <div className="container mx-auto px-4">
        <SectionHeader
          id="trailer"
          title={<h2 className="text-4xl font-typewriter font-bold text-center mb-8 text-white" style={{ color: '#6e322b' }}>Tráiler</h2>}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Póster */}
          <div className="flex justify-center items-center">
            <img
              src="../../public/img/poster.jpg"
              alt="Póster del tráiler"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>

          {/* Video */}
          <div className="flex justify-center items-center">
            <lite-youtube
              videoid="jwmlUCtu3lM"
              class="w-full h-100"
            ></lite-youtube>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trailer;