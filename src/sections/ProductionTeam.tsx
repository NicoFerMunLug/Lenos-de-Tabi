import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import SectionHeader from '../components/SectionHeader';

const team = [
  {
    name: 'Juan Pablo Delgado',
    role: 'Director y Editor',
    image: '../../public/img/produccion/JUANPABLO.jpg'
  },
  {
    name: 'Santiago Mejía',
    role: 'Guionista, Director fotográfico y Editor',
    image: '../../public/img/produccion/SANTIAGO_MEJIA.jpg'
  },
  {
    name: 'Giuliana Lopera',
    role: 'Productora, Script - Pietaje y Editora',
    image: '../../public/img/produccion/GIULIANA.jpg'
  },
  {
    name: 'Esteban Castiblanco',
    role: 'Guionista y Sonidista',
    image: '../../public/img/produccion/ESTEBAN.jpg'
  },
  {
    name: 'Santiago Pardo',
    role: 'Guionista, Camatógrafo y Editor',
    image: '../../public/img/produccion/SANTIAGO_PARDO.jpg'
  },
  {
    name: 'Juan Pablo Gutiérrez',
    role: 'Director, Editor y Dirección de arte',
    image: '../../public/img/produccion/PABLO_GUTIERREZ.jpg'
  },
  {
    name: 'Juan Diego Garzón',
    role: 'Entrevistador y Editor',
    image: '../../public/img/produccion/'
  },
  {
    name: 'Daniel Medina',
    role: 'Camarógrafo y Editor',
    image: '../../public/img/produccion/DANIEL.jpg'
  },
  {
    name: 'Zharick Noriega',
    role: 'Sonidista y Editora',
    image: '../../public/img/produccion/ZHARICK.jpg'
  },
];

const ProductionTeam = () => {
  return (
    <section className="h-auto bg-[#6e322b] py-10">
      <div className="container mx-auto px-4">
        <SectionHeader
          id="producción"
          title={<h2 className="text-4xl font-typewriter font-bold text-center mb-8" style={{ color: '#ffff' }}>Equipo de Producción</h2>}
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
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mt-12"
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative group w-80 h-100 mx-auto overflow-hidden rounded-lg shadow-lg"
                onMouseEnter={(e) => e.currentTarget.closest('.swiper').swiper.autoplay.stop()}
                onMouseLeave={(e) => e.currentTarget.closest('.swiper').swiper.autoplay.start()}
              >
                {/* Foto */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Fondo borroso y texto al hacer hover */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-center mt-4 text-xl font-typewriter font-bold text-white">{member.name}</h3>
                  <p className="text-center text-white mt-4 font-bold italic">{member.role}</p>
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