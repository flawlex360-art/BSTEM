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
          // Keep track of the original index for the lightbox
          const originalIndex = index % images.length;
          
          return (
            <div 
              key={`${img.id}-${index}`} 
              onClick={() => setSelectedIndex(originalIndex)}
              style={{ 
                width: '300px', 
                height: '200px', 
                flexShrink: 0,
                borderRadius: 'var(--radius-md)', 
                overflow: 'hidden',
                cursor: 'pointer',
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

      {/* Lightbox for single image (Same as GalleryGrid) */}
      {selectedIndex !== null && (
        <div 
          style={{ 
            position: 'fixed', inset: 0, zIndex: 9999, 
            background: 'rgba(0,0,0,0.95)', 
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            padding: '2rem' 
          }}
        >
          <div 
            style={{ position: 'absolute', inset: 0, cursor: 'zoom-out' }} 
            onClick={() => setSelectedIndex(null)} 
          />
          
          <img 
            src={images[selectedIndex].imageUrl} 
            alt="Enlarged gallery view" 
            style={{ 
              maxWidth: '100%', maxHeight: '100%', 
              objectFit: 'contain', 
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              position: 'relative',
              zIndex: 10
            }} 
          />
          
          <div style={{ position: 'absolute', bottom: '2rem', color: 'white', opacity: 0.8, pointerEvents: 'none', zIndex: 10 }}>
            Use ⬅️ and ➡️ arrows to navigate
          </div>

          <button 
            onClick={() => setSelectedIndex(null)}
            className="btn btn-primary"
            style={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 10 }}
          >
            Close ✕
          </button>
        </div>
      )}
    </div>
  );
}
