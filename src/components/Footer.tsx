import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-coffee-900 text-cream-100 py-16">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-16"> {/* Tres columnas iguales */}
        
        {/* Columna 1: Información */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-cream-50 mb-6">Leños de Tabí</h3>
          <p className="mb-4">
            Descubre la auténtica tradición cafetera colombiana, desde la semilla hasta la taza. Nuestro compromiso es preservar la cultura cafetera y compartirla con el mundo.
          </p>
          <p>
            Este proyecto es un homenaje a los caficultores colombianos, quienes con dedicación y esfuerzo hacen posible que disfrutemos del mejor café.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div className="text-center"> {/* Centrado */}
          <h4 className="text-lg font-serif font-bold text-cream-50 mb-6">Enlaces Rápidos</h4>
          <ul className="space-y-3">
            {['Inicio', 'Ficha técnica', 'Biblia', 'Personajes', 'Arcos', 'Capítulos', 'Galeria'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} // Ajuste para que coincida con los IDs
                  className="hover:text-coffee-300 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Créditos */}
        <div className="text-center"> {/* Centrado */}
          <h4 className="text-lg font-serif font-bold text-cream-50 mb-6">Créditos</h4>
          <ul className="space-y-3">
            {['Juan Pérez', 'María Gómez', 'Carlos López', 'Ana Martínez', 'Luis Torres'].map((name) => (
              <li key={name} className="text-cream-100">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pie de página */}
      <div className="border-t border-coffee-800 pt-8 mt-16 text-center text-sm">
        <p>© {new Date().getFullYear()} Leños de Tabí. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;