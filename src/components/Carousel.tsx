import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  url: string;
  alt: string;
  caption?: string;
}

interface CarouselProps {
  images: CarouselImage[];
  autoRotate?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ 
  images, 
  autoRotate = true, 
  interval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (autoRotate) {
      timerRef.current = setInterval(goToNext, interval);
    }
  };

  useEffect(() => {
    resetTimer();
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoRotate, interval]);

  useEffect(() => {
    resetTimer();
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentIndex 
                ? 'opacity-100 scale-100 z-10' 
                : 'opacity-0 scale-105 z-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-coffee-900/80 to-transparent p-4 md:p-6 text-cream-50">
                <p className="text-lg font-medium">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 bg-coffee-900/70 hover:bg-coffee-800 text-cream-50 p-2 rounded-full"
        onClick={(e) => {
          e.preventDefault();
          goToPrevious();
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-coffee-900/70 hover:bg-coffee-800 text-cream-50 p-2 rounded-full"
        onClick={(e) => {
          e.preventDefault();
          goToNext();
        }}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-cream-50 w-6' : 'bg-cream-50/50'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;