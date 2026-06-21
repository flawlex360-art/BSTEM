'use client';

import { useState, useEffect } from 'react';

export default function BlogSlideshow({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Auto-play every 5 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <img 
        src={images[0]} 
        alt="Blog post image" 
        style={{ width: '100%', borderRadius: 'var(--radius-md)', display: 'block' }} 
      />
    );
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: 'var(--radius-md)', backgroundColor: '#000' }}>
      <div 
        style={{ 
          display: 'flex', 
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`Slide ${idx + 1}`} 
            style={{ width: '100%', flexShrink: 0, objectFit: 'cover', height: '400px' }} 
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        style={{
          position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%',
          width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.5rem', zIndex: 10
        }}
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button 
        onClick={handleNext}
        style={{
          position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%',
          width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.5rem', zIndex: 10
        }}
        aria-label="Next slide"
      >
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div style={{ position: 'absolute', bottom: '15px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '8px' }}>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: '10px', height: '10px', borderRadius: '50%', border: 'none',
              background: currentIndex === idx ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer', padding: 0
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
