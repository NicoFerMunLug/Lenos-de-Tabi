import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import SectionHeader from '../components/SectionHeader';

const team = [
  {
    name: 'Director',
    role: 'Juan Pérez',
    image: '../../public/img/director.jpg',
  },
  {
    name: 'Productor',
    role: 'María Gómez',
    image: '../../public/img/productor.jpg',
  },
  {
    name: 'Director de Fotografía',
    role: 'Carlos López',
    image: '../../public/img/fotografia.jpg',
  },
  {
    name: 'Diseñador de Producción',
    role: 'Ana Martínez',
    image: '../../public/img/disenador.jpg',
  },
];

const ProductionTeam = () => {
  return (
    <section className="h-screen bg-[#6e322b] py-10">
      <div className="container mx-auto px-4">
        <SectionHeader
          id="produccion"
          title={<h1 className="text-white">Equipo de Producción</h1>}
          subtitle={<p className="text-white">Conoce al equipo detrás de cámaras</p>}
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
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-coffee-800 rounded-lg overflow-hidden shadow-xl w-66 mx-auto">
                <div className="h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 text-cream-50 text-center">
                  <h3 className="text-xl font-serif font-bold">{member.name}</h3>
                  <p className="text-cream-100 mt-2 font-bold italic">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductionTeam;