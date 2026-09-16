'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CardSlideshow({ images, alt, className, style, interval = 3000 }: { images: string[], alt: string, className?: string, style?: React.CSSProperties, interval?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesCount = images?.length || 0;

  // Optimize timer effect: depend on imagesCount instead of new array reference on every render
  useEffect(() => {
    if (imagesCount <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagesCount);
    }, interval); 
    
    return () => clearInterval(timer);
  }, [imagesCount, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden', ...style }}>
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`${alt} slide ${idx + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          // Performance optimization: set priority loading only for the initial visible slide (idx === 0)
          // setting priority=true on all slides forces Next.js to inject preload links for hidden slides
          priority={idx === 0}
          style={{
            objectFit: 'cover',
            opacity: idx === currentIndex ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out'
          }}
        />
      ))}
    </div>
  );
}
