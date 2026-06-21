import { getDb } from '@/lib/db';
import GalleryGrid from '@/components/GalleryGrid';

export default async function GalleryPage() {
  const db = getDb();
  const gallery = db.gallery || [];

  return (
    <div className="animate-fade-in pb-10">
      {/* Header Section */}
      <section className="bg-primary text-white" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Photo Gallery</h1>
          <p style={{ opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            A glimpse into the hands-on STEM activities, projects, and educational excursions of the Kpando Anglican STEM Club. Click any image to enlarge.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="section bg-light">
        <div className="container">
          {gallery && gallery.length > 0 ? (
            <GalleryGrid images={gallery} />
          ) : (
            <p className="center">No photos available in the gallery.</p>
          )}
        </div>
      </section>
    </div>
  );
}
