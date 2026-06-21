import Link from 'next/link';
import { getDb } from '@/lib/db';
import './Footer.css';

export default async function Footer() {
  const db = getDb();
  
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3 className="footer-brand">{db.settings.siteName}</h3>
          <p className="footer-text">
            {db.settings.footerText || 'Advancing digital equity, STEM education, and innovation leadership across Africa.'}
          </p>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Programs</h4>
          <ul className="footer-links">
            <li><Link href="/services">STEM Education</Link></li>
            <li><Link href="/services">Digital Literacy</Link></li>
            <li><Link href="/services">Mentorship</Link></li>
            <li><Link href="/training">Training</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <address className="footer-address">
            <p>{db.settings.address || 'Kpando, Volta Region, Ghana'}</p>
            <p>{db.settings.contactPhone || '+233 24 123 4567'}</p>
            <p>{db.settings.contactEmail || 'info@kpandoanglicanstem.org'}</p>
          </address>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {db.settings.siteName}. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

