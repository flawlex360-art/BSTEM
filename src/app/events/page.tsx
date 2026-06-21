import { getDb } from '@/lib/db';
import CardSlideshow from '@/components/CardSlideshow';

export const metadata = {
  title: 'Events | Kpando Anglican STEM Club',
  description: 'Stay updated with the latest events, excursions, and launches at the Kpando Anglican STEM Club.',
};

export default async function EventsPage() {
  const db = getDb();
  const events = db.events || [];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '40vh', padding: '6rem 0', backgroundImage: 'url(/hero.jpg)' }}>
        <div className="hero-overlay" style={{ background: 'rgba(0, 0, 0, 0.7)' }}></div>
        <div className="container hero-content center">
          <h1>Upcoming Events</h1>
          <p className="hero-subtitle">Check out our planned field trips and upcoming gatherings.</p>
        </div>
      </section>

      {/* Events List */}
      <section className="section bg-light">
        <div className="container">
          {events.length === 0 ? (
            <div className="center">
              <p>Check back soon for upcoming events!</p>
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

                  {/* Image Slideshow Placeholder */}
                  {event.imageUrls && event.imageUrls.length > 0 && (
                    <div style={{ width: '100%', height: '400px', backgroundColor: '#e2e8f0', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      {/* We use CardSlideshow here. The default URLs will just fail to load and show alt text until the user adds real images */}
                      <CardSlideshow 
                        images={event.imageUrls} 
                        alt={event.title} 
                        style={{ width: '100%', height: '100%' }}
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
