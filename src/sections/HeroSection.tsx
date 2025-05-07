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
          backgroundImage: "url('/img/bg_primera_vista.jpg')",
          filter: 'blur(3px)', // Aplica desenfoque al fondo
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Gradiente superpuesto */}
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/40 to-coffee-900/70" />

      {/* Contenido */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-cream-50 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-4">
          El Sabor Auténtico <br />de Colombia
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-cream-100">
          Descubre la rica tradición cafetera colombiana en cada taza, desde la semilla hasta la mesa.
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