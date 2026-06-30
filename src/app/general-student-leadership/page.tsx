import { getDb } from '@/lib/db';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Student Leadership | Kpando Anglican STEM Club',
  description: 'Meet the dynamic students leading the Kpando Anglican school community.',
};

export default async function GeneralStudentLeadershipPage() {
  const db = getDb();
  const studentLeadership = db.generalStudentLeadership || [];

  return (
    <div className="animate-fade-in pb-10">
      {/* Hero Header */}
      <section className="hero" style={{ minHeight: '40vh', padding: '4rem 0 8rem 0', backgroundImage: 'url(/student-leadership-1.jpg)', backgroundPosition: 'center 20%' }}>
        <div className="hero-overlay" style={{ background: 'rgba(0, 0, 0, 0.7)' }}></div>
        <div className="container hero-content center">
          <h1 style={{ marginBottom: '0.2rem' }}>Student Leadership</h1>
          <p className="hero-subtitle" style={{ marginTop: '0' }}>Meet the student council and prefects leading our school</p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="center mb-4">
            <Link href="/" className="btn btn-secondary">← Back to Home</Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(22%, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {studentLeadership.map((leader: any) => (
              <div key={leader.id} className="leader-card center" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                  <Image src={leader.imageUrl} alt={leader.name} fill sizes="(max-width: 768px) 50vw, 300px" style={{ objectFit: 'cover' }} />
                </div>
                <h3>{leader.name}</h3>
                <h5 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.3rem', fontWeight: 'bold' }}>{leader.role}</h5>
                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>"{leader.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
