'use client';
import { useState, useEffect } from 'react';
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

      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(5px)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
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
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                transition: 'transform 0.2s'
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              &times;
            </button>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
               <Image 
                 src={selectedImage} 
                 alt="Full screen preview" 
                 fill
                 sizes="100vw"
                 style={{ objectFit: 'contain' }}
               />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
