import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [beansCreated, setBeansCreated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150 && !beansCreated) {
        setBeansCreated(true);
      } else if (window.scrollY <= 150 && beansCreated) {
        setBeansCreated(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [beansCreated]);

  return (
    <section
      id="inicio"
      className="h-screen relative overflow-hidden bg-fixed bg-center bg-cover"
    >
      {/* Contenedor del fondo con desenfoque */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('../img/bg_primera_vista.webp')",
          filter: 'blur(3px)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Gradiente superpuesto */}
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/40 to-coffee-900/70" />

      {/* Contenido */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-cream-50 px-4">
        {/* Imagen del título */}
        <img
          src="../../public/img/TITULO.png"
          alt="El auténtico sabor de Colombia"
          style={{ width: '80rem', height: 'auto', paddingBottom: '30px',marginBottom: '-150px', marginTop: '-200px'}}
        />
        {/* Texto adicional */}
        <p className="text-2xl md:text-3xl max-w-2xl mx-auto mt--40 mb-8 text-white font-semibold">
          El verdadero aroma del café.
        </p>

        <button
          onClick={() => document.getElementById('technical-sheet')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-transparent text-cream-50 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;