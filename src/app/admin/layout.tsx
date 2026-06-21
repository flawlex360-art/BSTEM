import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import './admin.css';
import Providers from './Providers';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/login');
  }

  return (
    <Providers>
      <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <h2>Admin Panel</h2>
        </div>
        <nav className="admin-nav">
          <Link href="/admin" className="admin-nav-link">Dashboard</Link>
          <Link href="/admin/pages" className="admin-nav-link">Page Content</Link>
          <Link href="/admin/services" className="admin-nav-link">Services</Link>
          <Link href="/admin/projects" className="admin-nav-link">Projects</Link>
          <Link href="/admin/events" className="admin-nav-link">Events</Link>
          <Link href="/admin/blog" className="admin-nav-link">Blog Posts</Link>
          <Link href="/admin/team" className="admin-nav-link">Team Members</Link>
          <Link href="/admin/testimonials" className="admin-nav-link">Testimonials</Link>
          <Link href="/admin/partners" className="admin-nav-link">Partners</Link>
          <Link href="/admin/faqs" className="admin-nav-link">FAQs</Link>
          <Link href="/admin/settings" className="admin-nav-link">Site Settings</Link>
        </nav>
        <div className="admin-footer">
          <Link href="/api/auth/signout" className="btn btn-secondary w-100">Logout</Link>
        </div>
      </aside>
      <main className="admin-main">
        {children}
      </main>
    </div>
    </Providers>
  );
}
