import { getDb } from '@/lib/db';
import Link from 'next/link';
import Image from 'next/image';
import LeaderGrid from '@/components/LeaderGrid';

export const metadata = {
  title: 'Student Leadership | Kpando Anglican STEM Club',
  description: 'Meet the student council and prefects leading our school.',
};

export default async function GeneralStudentLeadershipPage() {
  const db = getDb();
  const studentLeadership = db.generalStudentLeadership || [];

  return (
    <div className="animate-fade-in pb-10">
      {/* Hero Header */}
      <section className="hero" style={{ minHeight: '40vh', padding: '6rem 0', backgroundImage: 'url(/student-leadership-1.jpg)', backgroundPosition: 'center top' }}>
        <div className="hero-overlay" style={{ background: 'rgba(0, 0, 0, 0.7)' }}></div>
        <div className="container hero-content center">
          <h1>Student Leadership</h1>
          <p className="hero-subtitle">Meet the student council and prefects leading our school</p>
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
