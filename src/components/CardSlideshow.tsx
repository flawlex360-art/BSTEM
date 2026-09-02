'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CardSlideshow({ images, alt, className, style, interval = 3000 }: { images: string[], alt: string, className?: string, style?: React.CSSProperties, interval?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Performance optimization: depend on images.length instead of images array reference
  // to avoid clearing and re-creating the interval timer on parent re-renders when inline arrays are passed.
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval); 
    
    return () => clearInterval(timer);
  }, [images.length, interval]);

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
          // Performance optimization: Prioritize preloading only for the initial visible slide (idx === 0)
          // instead of marking all hidden slide images as high priority, which avoids network bandwidth contention on initial load.
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
