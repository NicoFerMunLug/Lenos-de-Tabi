import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import SectionHeader from '../components/SectionHeader';

const characters = [
  {
    name: 'David Alberto Giraldo',
    role: 'Interpretado por: Santiago',
    image: '../../public/img/David_giraldo.jpg'
  },
  {
    name: 'David Alberto Giraldo (Adulto)',
    role: 'Interpretado por: Santiago',
    image: '../../public/img/reinel.jpg'
  },
  {
    name: 'Papá de David',
    role: 'Interpretado por: Fernando Lopera',
    image: '../../public/img/Papa_david.jpg'
  },
  {
    name: 'Mamá de David',
    role: 'Interpretado por: Gloria Bernal',
    image: '../../public/img/Mama_david.jpg'
  },
];

const Characters = () => {
  return (
    <section className="h-screen bg-coffee-900 py-10">
      <div className="container mx-auto px-4">
      <SectionHeader
      id="personajes"
      title={<h1 className="text-5xl md:text-4xl font-serif font-bold text-cream-50">Personajes</h1>}
      subtitle={<p className="text-cream-50">Conoce a los protagonistas de nuestra historia</p>}
    />

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
          className="mt-12"
        >
          {characters.map((character, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-coffee-800 rounded-lg overflow-hidden shadow-xl w-66 mx-auto">
                <div className="h-72 overflow-hidden">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 text-cream-50 text-center">
                  <h3 className="text-xl font-serif font-bold">{character.name}</h3>
                  <p className="text-cream-100 mt-2 font-bold italic">{character.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Characters;