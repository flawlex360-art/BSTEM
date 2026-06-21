'use client';
import { useState, useEffect } from 'react';

const images = [
  '/slide-1.jpg',
  '/slide-2.jpg',
  '/slide-3.jpg'
];

export default function HeroSlideshow({ children }: { children: React.ReactNode }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {images.map((img, index) => (
        <div
          key={img}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: -1
          }}
        />
      ))}
      {children}
    </section>
  );
}
