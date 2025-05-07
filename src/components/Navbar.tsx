import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-coffee-900 shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Coffee 
              size={32} 
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-cream-50' : 'text-cream-100'
              }`} 
            />
            <span className={`font-serif text-xl md:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-cream-50' : 'text-cream-100'
            }`}>
              Leños de Tabí
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-wrap space-x-4">
            <ul className="flex flex-wrap space-x-4">
              {['Inicio', 'Ficha técnica', 'Biblia', 'Personajes', 'Arcos', 'Capítulos', 'Galeria'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} // Ajusta el href para que coincida con los id
                    className={`font-medium hover:text-coffee-200 transition-colors duration-300 ${
                      isScrolled ? 'text-cream-50' : 'text-cream-100'
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
            className="md:hidden text-cream-100"
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
              {['Inicio', 'Ficha', 'Biblia', 'Personajes', 'Arcos', 'Capítulos', 'Galeria'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} // Ajusta el href para que coincida con los id
                    className="text-cream-100 hover:text-coffee-200 transition-colors duration-300 block py-2"
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