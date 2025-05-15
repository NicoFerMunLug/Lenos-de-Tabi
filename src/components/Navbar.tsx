import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur`}
      style={{
        backgroundColor: isScrolled ? 'rgba(110, 50, 43, 0.8)' : 'rgba(110, 50, 43, 0.5)', // Fondo con transparencia
        boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none', // Sombra al hacer scroll
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Reemplazo del logo */}
          <a href="#" className="flex items-center">
            <img
              src="../../public/img/TITULO.png"
              alt="Leños de Tabí"
              style={{ width: '10rem', height: 'auto' }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-wrap space-x-4">
            <ul className="flex flex-wrap space-x-4 font-typewriter">
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
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} // Ajusta el href para que coincida con los id
                    className={`font-medium hover:text-coffee-300 transition-colors duration-300 ${
                      isScrolled ? 'text-coffee-200' : 'text-coffee-100'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-coffee-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <ul className="flex flex-col space-y-4">
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
                    className="text-coffee-200 hover:text-coffee-300 transition-colors duration-300 block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;