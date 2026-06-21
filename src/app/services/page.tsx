import { getDb } from '@/lib/db';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services | Kpando Anglican STEM Club',
  description: 'Explore the educational programs, workshops, and STEM services we offer to empower our community.',
};

export default async function ServicesPage() {
  const db = getDb();
  const services = db.services || [];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '40vh', padding: '6rem 0', backgroundImage: 'url(/hero.jpg)' }}>
        <div className="hero-overlay" style={{ background: 'rgba(0, 0, 0, 0.7)' }}></div>
        <div className="container hero-content center">
          <h1>Our Services</h1>
          <p className="hero-subtitle">Comprehensive STEM education programs, training, and workshops for students and educators.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-light">
        <div className="container">
          {services.length === 0 ? (
            <div className="center">
              <p>Check back soon for our updated services!</p>
            </div>
          ) : (
            <div className="services-grid">
              {services.map((service) => (
                <div key={service.id} className="card center">
                  {service.icon && (
                    <div className="service-icon">{service.icon}</div>
                  )}
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          )}
          
          <div className="center mt-4" style={{ marginTop: '3rem' }}>
            <Link href="/contact" className="btn btn-primary">Contact Us to Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
