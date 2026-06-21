'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface GalleryImage {
  id: string;
  imageUrl: string;
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length]);

  const nextImage = () => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  const prevImage = () => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      nextImage(); // Swipe left
    } else if (diff < -50) {
      prevImage(); // Swipe right
    }
    setTouchStartX(null);
  };

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
              style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block', borderRadius: 'var(--radius-md) var(--radius-md) 0 0' }} 
            />
          </div>
        ))}
      </div>

      {/* Lightbox for single image using createPortal to escape any parent CSS transforms */}
      {selectedIndex !== null && typeof document !== 'undefined' && createPortal(
        <div 
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
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
          
          {/* Left Arrow */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            style={{ position: 'absolute', left: '1rem', zIndex: 11, background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', fontSize: '1.5rem', cursor: 'pointer' }}
          >
            ❮
          </button>

          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', zIndex: 10 }}>
            {images.map((img, index) => {
              // Calculate offset relative to selected index
              let offset = index - selectedIndex;
              
              // Handle wrap-around for infinite scroll feel
              if (offset > images.length / 2) offset -= images.length;
              if (offset < -images.length / 2) offset += images.length;

              if (Math.abs(offset) > 2) return null; // Don't render images too far away for performance

              return (
                <img 
                  key={`lightbox-${img.id}`}
                  src={img.imageUrl} 
                  alt="Enlarged gallery view" 
                  style={{ 
                    position: 'absolute',
                    maxWidth: '100%', maxHeight: '100%', 
                    objectFit: 'contain', 
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    transform: `translateX(${offset * 120}%) scale(${offset === 0 ? 1 : 0.8})`,
                    opacity: offset === 0 ? 1 : 0.5,
                    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease',
                    pointerEvents: offset === 0 ? 'auto' : 'none',
                  }} 
                />
              );
            })}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            style={{ position: 'absolute', right: '1rem', zIndex: 11, background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', fontSize: '1.5rem', cursor: 'pointer' }}
          >
            ❯
          </button>
          
          {/* Navigation Hints */}
          <div style={{ position: 'absolute', bottom: '2rem', color: 'white', opacity: 0.8, pointerEvents: 'none', zIndex: 10, textAlign: 'center' }}>
            Swipe or use arrows to navigate
          </div>

          <button 
            onClick={() => setSelectedIndex(null)}
            className="btn btn-primary"
            style={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 10 }}
          >
            Close ✕
          </button>
        </div>,
        document.body
      )}
    </>
  );
}
