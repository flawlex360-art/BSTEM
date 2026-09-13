'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CardSlideshow({ images, alt, className, style, interval = 3000 }: { images: string[], alt: string, className?: string, style?: React.CSSProperties, interval?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval); 
    
    return () => clearInterval(timer);
  }, [images, interval]);

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
          // Performance optimization: Only set priority on the first slide image (idx === 0)
          // setting priority={true} on all slides causes all hidden images to be eagerly preloaded,
          // increasing initial network bandwidth usage and contending with critical above-the-fold assets.
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
