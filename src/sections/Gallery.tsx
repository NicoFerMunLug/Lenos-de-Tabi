import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

type Image = {
  url: string;
  alt: string;
};

const images: Image[] = Array.from({ length: 31 }, (_, i) => ({
  url: `/img/galeria/foto${i + 1}.webp`,
  alt: `Foto ${i + 1}`
}));

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-cream-100 relative min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeader
          id="galeria"
          title={
            <h2 className="text-4xl font-typewriter font-bold text-center mb-8" style={{ color: '#6e322b' }}>
              Galería
            </h2>
          }
        />
        <div className="mt-12">
          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="gallery-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full aspect-[4/3] md:aspect-square flex items-center justify-center overflow-hidden rounded-lg shadow-lg bg-gray-200">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;