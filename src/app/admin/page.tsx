import { getDb } from '@/lib/db';
import Link from 'next/link';

export default async function AdminDashboard() {
  const db = getDb();
  
  return (
    <div className="admin-dashboard animate-fade-in">
      <div className="admin-header">
        <h1>Dashboard</h1>
        <p className="text-muted">Welcome back to the {db.settings.siteName} CMS.</p>
      </div>
      
      <div className="dashboard-stats mt-4">
        <div className="card stat-card">
          <h3>{db.services.length}</h3>
          <p>Services</p>
          <Link href="/admin/services" className="btn btn-secondary mt-4">Manage</Link>
        </div>
        <div className="card stat-card">
          <h3>{db.projects.length}</h3>
          <p>Projects</p>
          <Link href="/admin/projects" className="btn btn-secondary mt-4">Manage</Link>
        </div>
        <div className="card stat-card">
          <h3>{db.events.length}</h3>
          <p>Events</p>
          <Link href="/admin/events" className="btn btn-secondary mt-4">Manage</Link>
        </div>
        <div className="card stat-card">
          <h3>{db.pageBlocks.length}</h3>
          <p>Page Blocks</p>
          <Link href="/admin/pages" className="btn btn-secondary mt-4">Manage</Link>
        </div>
      </div>
      
      <div className="card mt-4">
        <h2>Quick Actions</h2>
        <div className="quick-actions mt-4" style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/admin/settings" className="btn btn-primary">Edit Site Title</Link>
          <Link href="/admin/pages" className="btn btn-primary">Edit Homepage Hero</Link>
        </div>
      </div>
    </div>
  );
}
