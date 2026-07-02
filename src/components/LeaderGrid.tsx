'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

export default function LeaderGrid({ leaders }: { leaders: any[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        {leaders.map((leader: any) => (
          <div key={leader.id} className="leader-card center" style={{ display: 'flex', flexDirection: 'column' }}>
            <div 
              onClick={() => setSelectedImage(leader.imageUrl)} 
              style={{ cursor: 'zoom-in', display: 'block', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                <Image src={leader.imageUrl} alt={leader.name} fill sizes="(max-width: 768px) 100vw, 600px" style={{ objectFit: 'cover', objectPosition: 'center 15%', transition: 'transform 0.3s ease' }} className="hover-zoom" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{leader.name}</h3>
            </div>
            <h5 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.3rem', fontWeight: 'bold' }}>{leader.role}</h5>
            <p style={{ fontSize: '1rem', opacity: 0.9 }}>"{leader.message}"</p>
          </div>
        ))}
      </div>

      {/* Lightbox for single image using createPortal to escape any parent CSS transforms */}
      {selectedImage && typeof document !== 'undefined' && createPortal(
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem'
          }}
        >
          {/* Transparent overlay for clicking to close */}
          <div 
            style={{ position: 'absolute', inset: 0, cursor: 'zoom-out' }} 
            onClick={() => setSelectedImage(null)} 
          />
          
          <button 
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              fontSize: '2rem',
              lineHeight: '1',
              cursor: 'pointer',
              zIndex: 10000,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
            }}
          >
            &times;
          </button>
          
          <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'center', alignItems: 'center', pointerEvents: 'none' }}>
             <img 
               src={selectedImage} 
               alt="Full screen preview" 
               style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', pointerEvents: 'auto', borderRadius: 'var(--radius-md)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
             />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
