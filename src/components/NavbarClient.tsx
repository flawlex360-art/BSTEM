'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import './Navbar.css';

export default function NavbarClient({ siteName }: { siteName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Defer state update to avoid synchronous cascading renders in React 19
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

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
          <Link href="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/blog" className="nav-link" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/gallery" className="nav-link" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="/testimonials" className="nav-link" onClick={() => setIsOpen(false)}>Testimonials</Link>
          <div className="nav-dropdown">
            <button className="nav-link dropbtn">Events ▼</button>
            <div className="dropdown-content">
              <Link href="/events" onClick={() => setIsOpen(false)}>Upcoming Events</Link>
              <Link href="/events/past" onClick={() => setIsOpen(false)}>Past Events</Link>
            </div>
          </div>
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="nav-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', padding: '0.5rem', display: 'flex', alignItems: 'center' }}
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
