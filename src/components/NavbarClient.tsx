'use client';
import { useState } from 'react';
import Link from 'next/link';
import './Navbar.css';

export default function NavbarClient({ siteName }: { siteName: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="navbar-brand">
          <img src="/logo.png" alt="Logo" style={{ height: '75px', width: 'auto', objectFit: 'contain' }} />
          {siteName}
        </Link>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? '✕' : '☰'}
        </button>
        
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
          
          <div className="desktop-only-links">
            <Link href="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/events" className="nav-link" onClick={() => setIsOpen(false)}>Upcoming Events</Link>
            <Link href="/events/past" className="nav-link" onClick={() => setIsOpen(false)}>Past Events</Link>
            <Link href="/blog" className="nav-link" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/gallery" className="nav-link" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="/testimonials" className="nav-link" onClick={() => setIsOpen(false)}>Testimonials</Link>
            <Link href="/partners" className="nav-link" onClick={() => setIsOpen(false)}>Partners</Link>
            <Link href="/faqs" className="nav-link" onClick={() => setIsOpen(false)}>FAQs</Link>
          </div>

          <div className="nav-dropdown mobile-only-dropdown">
            <button className="nav-link dropbtn">More ▼</button>
            <div className="dropdown-content">
              <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link href="/events" onClick={() => setIsOpen(false)}>Upcoming Events</Link>
              <Link href="/events/past" onClick={() => setIsOpen(false)}>Past Events</Link>
              <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
              <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
              <Link href="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
              <Link href="/partners" onClick={() => setIsOpen(false)}>Partners</Link>
              <Link href="/faqs" onClick={() => setIsOpen(false)}>FAQs</Link>
            </div>
          </div>
          
          <Link href="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
