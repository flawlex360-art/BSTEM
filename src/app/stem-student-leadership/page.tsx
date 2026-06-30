import { getDb } from '@/lib/db';
import Link from 'next/link';

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
          
          <div className="leadership-grid" style={{ marginTop: '3rem' }}>
            {studentLeadership.map((leader: any) => (
              <div key={leader.id} className="leader-card center">
                <div className="leader-image-container">
                  <img src={leader.imageUrl} alt={leader.name} className="leader-image" />
                </div>
                <h3>{leader.name}</h3>
                <h5 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{leader.role}</h5>
                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>"{leader.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
