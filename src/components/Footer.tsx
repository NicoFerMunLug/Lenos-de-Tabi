import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#6e322b] text-cream-100 py-16">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16"> {/* Tres columnas iguales */}
        
        {/* Columna 1: Información */}
        <div className="flex flex-col items-center md:items-start">
          {/* Reemplazo del texto por la imagen */}
          <img
            src="../../public/img/TITULO.png"
            alt="Leños de Tabí"
            style={{ width: '15rem', height: 'auto' }}
          />
          <p className="mb-4 text-center md:text-left">
            Descubre la auténtica tradición cafetera colombiana, desde la semilla hasta la taza. Nuestro compromiso es preservar la cultura cafetera y compartirla con el mundo.
          </p>
          <p className="text-center md:text-left">
            Este proyecto es un homenaje a los caficultores colombianos, quienes con dedicación y esfuerzo hacen posible que disfrutemos del mejor café.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div className="text-center">
          <h4 className="text-lg font-serif font-bold text-cream-50 mb-6 font-typewriter font-bold">Enlaces Rápidos</h4>
          <ul className="space-y-3 font-typewriter">
            {[
              'Inicio',
              'Ficha técnica',
              'Biblia',
              'Personajes',
              'Guiones',
              'Producción',
              'Trailer',
              'Arcos',
              'Capítulos',
              'Galeria',
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-coffee-300 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pie de página */}
      <div className="border-t border-coffee-800 pt-8 mt-16 text-center text-xs md:text-sm">
        <p>© {new Date().getFullYear()} Leños de Tabí. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;