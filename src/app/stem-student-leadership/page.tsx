import { getDb } from '@/lib/db';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'STEM Student Leadership | Kpando Anglican STEM Club',
  description: 'Meet the dynamic students leading the next generation of innovators at Kpando Anglican STEM Club.',
};

export default async function StemStudentLeadershipPage() {
  const db = getDb();
  const studentLeadership = db.stemStudentLeadership || [];

  return (
    <div className="animate-fade-in pb-10">
      {/* Hero Header */}
      <section className="hero" style={{ minHeight: '40vh', padding: '6rem 0', backgroundImage: 'url(/hero.jpg)' }}>
        <div className="hero-overlay" style={{ background: 'rgba(0, 0, 0, 0.7)' }}></div>
        <div className="container hero-content center">
          <h1>STEM Student Leadership</h1>
          <p className="hero-subtitle">Meet the dynamic students leading the STEM Club</p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="center mb-4">
            <Link href="/" className="btn btn-secondary">← Back to Home</Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {studentLeadership.map((leader: any) => (
              <div key={leader.id} className="leader-card center" style={{ display: 'flex', flexDirection: 'column' }}>
                <a href={leader.imageUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'zoom-in' }}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                    <Image src={leader.imageUrl} alt={leader.name} fill sizes="(max-width: 768px) 100vw, 600px" style={{ objectFit: 'cover', objectPosition: 'center 15%', transition: 'transform 0.3s ease' }} className="hover-zoom" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{leader.name}</h3>
                </a>
                <h5 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.3rem', fontWeight: 'bold' }}>{leader.role}</h5>
                <p style={{ fontSize: '1rem', opacity: 0.9 }}>"{leader.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
