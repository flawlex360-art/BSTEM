'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface GalleryImage {
  id: string;
  imageUrl: string;
}

export default function InteractiveGallery({ images }: { images: GalleryImage[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  
  // Use only first two images for the cover slideshow
  const coverImages = images.slice(0, 2);

  // Auto slideshow for the cover
  useEffect(() => {
    if (coverImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % coverImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [coverImages.length]);

  return (
    <div 
      className="gallery-preview card" 
      onClick={() => router.push('/gallery')}
      style={{ cursor: 'pointer', overflow: 'hidden', position: 'relative', height: '100%', minHeight: '300px', display: 'flex', flexDirection: 'column', padding: 0 }}
    >
      {coverImages.map((img, idx) => (
        <img 
          key={img.id}
          src={img.imageUrl} 
          alt="Gallery preview"
          style={{ 
            position: 'absolute', 
            top: 0, left: 0, 
            width: '100%', height: '100%', 
            objectFit: 'cover',
            opacity: currentIndex === idx ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }} 
        />
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', display: 'flex', alignItems: 'flex-end', padding: '2rem' }}>
        <div style={{ color: 'white' }}>
          <h3 style={{ margin: 0, color: 'white' }}>Photo Gallery</h3>
          <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>Click to view all {images.length} photos 📸</p>
        </div>
      </div>
    </div>
  );
}
