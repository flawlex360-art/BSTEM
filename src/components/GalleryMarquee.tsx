'use client';
import { useState, useEffect } from 'react';

interface GalleryImage {
  id: string;
  imageUrl: string;
}

export default function GalleryMarquee({ images }: { images: GalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation for the lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length]);

  // We duplicate the images array to create a seamless infinite scrolling effect
  const marqueeImages = [...images, ...images];

  return (
    <div style={{ width: '100%', overflow: 'hidden', padding: '1rem 0' }}>
      
      {/* The scrolling container */}
      <div className="animate-marquee" style={{ display: 'flex', gap: '1.5rem', width: 'max-content' }}>
        {marqueeImages.map((img, index) => {
          const originalIndex = index % images.length;
          
          return (
            <div 
              key={`${img.id}-${index}`} 
              style={{ 
                width: '300px', 
                height: '200px', 
                flexShrink: 0,
                borderRadius: 'var(--radius-md)', 
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
              }}
              className="card hover-scale"
            >
              <img 
                src={img.imageUrl} 
                alt={`Gallery image ${originalIndex + 1}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
