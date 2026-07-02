import { getDb } from '@/lib/db';
import Link from 'next/link';
import Image from 'next/image';
import LeaderGrid from '@/components/LeaderGrid';

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
          
          <LeaderGrid leaders={studentLeadership} />

        </div>
      </section>
    </div>
  );
}
