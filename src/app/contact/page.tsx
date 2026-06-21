import { getDb } from '@/lib/db';

export default async function ContactPage() {
  const db = getDb();
  const phoneNumber = '+233592664865'; // User explicitly requested this number
  const email = db.settings.contactEmail || 'info@kpandoanglicanstem.org';
  const address = db.settings.address || 'Kpando, Volta Region, Ghana';

  return (
    <div className="animate-fade-in" style={{ minHeight: '60vh', padding: '4rem 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div className="section-header center">
          <h1>Contact Us</h1>
          <p>Get in touch with Kpando Anglican STEM Club</p>
        </div>

        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem', textAlign: 'center' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Phone</h3>
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              <a href={`tel:${phoneNumber}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                📞 {phoneNumber}
              </a>
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Email</h3>
            <p style={{ fontSize: '1.1rem' }}>
              <a href={`mailto:${email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                ✉️ {email}
              </a>
            </p>
          </div>

          <div>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Location</h3>
            <p style={{ fontSize: '1.1rem' }}>
              📍 {address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
