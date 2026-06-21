'use client';
import { useState, useEffect } from 'react';

interface GalleryImage {
  id: string;
  imageUrl: string;
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {images.map((img, index) => (
          <div 
            key={img.id} 
            onClick={() => setSelectedIndex(index)}
            style={{ 
              borderRadius: 'var(--radius-md)', 
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
            }}
            className="card hover-scale"
          >
            <img 
              src={img.imageUrl} 
              alt={`Gallery preview ${index + 1}`} 
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-md) var(--radius-md) 0 0' }} 
            />
          </div>
        ))}
      </div>

      {/* Lightbox for single image */}
      {selectedIndex !== null && (
        <div 
          style={{ 
            position: 'fixed', inset: 0, zIndex: 9999, 
            background: 'rgba(0,0,0,0.95)', 
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            padding: '2rem' 
          }}
        >
          {/* Transparent overlay for clicking to close */}
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
          
          {/* Navigation Hints */}
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
    </>
  );
}
