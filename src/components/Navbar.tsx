import Link from 'next/link';
import { getDb } from '@/lib/db';
import './Navbar.css';

export default async function Navbar() {
  const db = getDb();
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="navbar-brand">
          {db.settings.siteName}
        </Link>
        
        <div className="navbar-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <div className="nav-dropdown">
            <button className="nav-link dropbtn">More ▼</button>
            <div className="dropdown-content">
              <Link href="/services">Services</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/events">Events</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/testimonials">Testimonials</Link>
              <Link href="/partners">Partners</Link>
              <Link href="/faqs">FAQs</Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <button className="nav-link dropbtn">Get Involved ▼</button>
            <div className="dropdown-content">
              <Link href="/training">Training</Link>
              <Link href="/donation">Donations</Link>
              <Link href="/volunteer">Volunteers</Link>
            </div>
          </div>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
