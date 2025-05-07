import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const coffeeSackRef = useRef<HTMLDivElement>(null);
  const [isTilted, setIsTilted] = useState(false);
  const [beansCreated, setBeansCreated] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150 && !isTilted) {
        setIsTilted(true);
        setTimeout(() => setBeansCreated(true), 500);
      } else if (window.scrollY <= 150 && isTilted) {
        setBeansCreated(false);
        setIsTilted(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isTilted]);

  useEffect(() => {
    if (beansCreated) {
      createBeans();
    }
  }, [beansCreated]);

  const createBeans = () => {
    if (!coffeeSackRef.current) return;
    
    const beansContainer = document.getElementById('beans-container');
    const targetSection = document.getElementById('technical-sheet');
    if (!beansContainer || !targetSection) return;
    
    beansContainer.innerHTML = '';
    
    const sackRect = coffeeSackRef.current.getBoundingClientRect();
    const targetRect = targetSection.getBoundingClientRect();
    
    const startX = sackRect.left + sackRect.width / 2;
    const startY = sackRect.top + sackRect.height / 2;
    
    for (let i = 0; i < 40; i++) {
      const bean = document.createElement('div');
      bean.className = 'bean bean-animation';
      
      const finalX = (Math.random() - 0.5) * targetRect.width;
      const finalY = targetRect.top - startY + (Math.random() * targetRect.height / 2);
      const finalZ = Math.random() * 200 - 100;
      
      bean.style.setProperty('--final-x', `${finalX}px`);
      bean.style.setProperty('--final-y', `${finalY}px`);
      bean.style.setProperty('--final-z', `${finalZ}px`);
      
      bean.style.left = `${startX}px`;
      bean.style.top = `${startY}px`;
      
      const size = 10 + Math.random() * 15;
      bean.style.width = `${size}px`;
      bean.style.height = `${size / 2}px`;
      
      bean.style.transform = `rotate3d(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random() * 360}deg)`;
      bean.style.animationDelay = `${Math.random() * 1}s`;
      
      const brownShade = 20 + Math.floor(Math.random() * 20);
      bean.style.backgroundColor = `rgb(${brownShade + 30}, ${brownShade}, ${brownShade - 10})`;
      
      beansContainer.appendChild(bean);
    }
  };

  return (
    <section id="inicio" className="h-screen relative overflow-hidden bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/40 to-coffee-900/70" />
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-cream-50 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-4">
          El Sabor Auténtico <br />de Colombia
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-cream-100">
          Descubre la rica tradición cafetera colombiana en cada taza, desde la semilla hasta la mesa.
        </p>
        
        <div 
          ref={coffeeSackRef}
          className={`coffee-sack absolute bottom-[20%] md:bottom-[15%] right-[10%] md:right-[20%] w-32 md:w-48 h-auto ${isTilted ? 'tilted' : ''}`}
        >
          <img 
            src="/coffee-sack.png"
            alt="Saco de café" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div id="beans-container" className="absolute inset-0 pointer-events-none z-10" />
        
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