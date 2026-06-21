'use client';
import { useState, useEffect } from 'react';

const images = [
  '/new-slide-1.jpg',
  '/new-slide-2.png',
  '/new-slide-3.jpg'
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
      {images.map((img, index) => {
        let translateX = '100%';
        let transition = 'transform 1s ease-in-out';
        
        if (index === currentImageIndex) {
          translateX = '0%';
        } else if (index === (currentImageIndex - 1 + images.length) % images.length) {
          translateX = '-100%';
        } else {
          translateX = '100%';
          transition = 'none'; // snap back to the right side instantly without animating backwards
        }

        return (
          <div
            key={img}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateX(${translateX})`,
              transition: transition,
              zIndex: -1
            }}
          />
        );
      })}
      {children}
    </section>
  );
}
