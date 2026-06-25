import { getDb } from '@/lib/db';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata = {
  title: 'Past Events | Kpando Anglican STEM Club',
  description: 'View the successful launches, excursions, and activities we have held in the past.',
};

export default async function PastEventsPage() {
  const db = getDb();
  const events = db.pastEvents || [];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '40vh', padding: '6rem 0', backgroundImage: 'url(/hero.jpg)' }}>
        <div className="hero-overlay" style={{ background: 'rgba(0, 0, 0, 0.7)' }}></div>
        <div className="container hero-content center">
          <h1>Past Events</h1>
          <p className="hero-subtitle">Take a look back at our previous excursions and successful club activities.</p>
        </div>
      </section>

      {/* Events List */}
      <section className="section bg-light">
        <div className="container">
          {events.length === 0 ? (
            <div className="center">
              <p>Check back soon for past events!</p>
            </div>
          ) : (
            <div className="events-list">
              {events.map((event) => (
                <div key={event.id} className="card event-item" style={{ flexDirection: 'column', gap: '1.5rem', alignItems: 'stretch' }}>
                  <div className="event-details">
                    <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{event.title}</h2>
                    <p><strong>Date:</strong> {event.date} | <strong>Location:</strong> {event.location}</p>
                    <p style={{ marginTop: '1rem' }}>{event.description}</p>
                  </div>

                  {/* Image Grid */}
                  {event.imageUrls && event.imageUrls.length > 0 && (
                    <div style={{ marginTop: '1.5rem' }}>
                      <GalleryGrid 
                        images={event.imageUrls.map((url: string, idx: number) => ({ id: `${event.id}-img-${idx}`, imageUrl: url }))} 
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
