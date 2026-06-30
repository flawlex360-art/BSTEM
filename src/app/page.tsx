import { getDb } from '@/lib/db';
import Link from 'next/link';

import HeroSlideshow from '@/components/HeroSlideshow';
import CardSlideshow from '@/components/CardSlideshow';
import InteractiveGallery from '@/components/InteractiveGallery';
import GalleryMarquee from '@/components/GalleryMarquee';

export default async function Home() {
  const db = getDb();
  
  // Fetch dynamic content from CMS
  const heroBlock = db.pageBlocks.find(b => b.pageSlug === 'home' && b.section === 'hero');
  const aboutBlock = db.pageBlocks.find(b => b.pageSlug === 'home' && b.section === 'about');
  
  const services = db.services.slice(0, 6);
  const projects = db.projects.slice(0, 3);
  const events = db.events.slice(0, 4);
  const gallery = db.gallery || [];
  const leadership = db.leadership || [];
  const testimonials = db.testimonials;

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <HeroSlideshow>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>{heroBlock?.title || 'Empowering Learners Through STEM'}</h1>
          <p className="hero-subtitle">{heroBlock?.subtitle || 'We bridge the digital divide by providing quality STEM education, mentorship, and innovation programs.'}</p>
          <div className="hero-actions">
            <Link href="/about" className="btn btn-primary">Get Started</Link>
            <Link href="/contact" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>Contact Us</Link>
          </div>
        </div>
      </HeroSlideshow>

      {/* About Section */}
      <section className="bg-white" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
        <div className="container about-grid">
          <div className="about-text">
            <h5>About Us</h5>
            <h2>{aboutBlock?.title || 'Building the Next Generation of Innovators'}</h2>
            <p>{aboutBlock?.content || 'Kpando Anglican STEM Club is a youth-driven, impact-focused organization advancing digital equity, STEM education, and innovation leadership.'}</p>
            <Link href="/about" className="btn btn-primary mt-4">Learn More</Link>
          </div>
          <div className="about-image">
            <img src={aboutBlock?.imageUrl || '/default-about.jpg'} alt="About Us" className="rounded-image" />
          </div>
        </div>
      </section>

      {/* Services / What We Do */}
      <section className="bg-light" style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: '1.5rem' }}>
            <h2>What We Do</h2>
            <p style={{ margin: 0 }}>We are always here to serve you with awesome services</p>
          </div>
          <div className="services-grid" style={{ gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {services.length > 0 ? services.map(service => (
              <div key={service.id} className="card service-card" style={{ padding: '1.25rem' }}>
                <div className="service-icon" style={{ fontSize: '2rem', margin: '0 0 0.5rem 0' }}>{service.icon || '🚀'}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{service.title}</h3>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>{service.description}</p>
              </div>
            )) : (
              <p>No services found. Add some in the admin panel.</p>
            )}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Projects</h2>
            <p>See what we have done so far</p>
          </div>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="card project-card">
                {project.imageUrls && project.imageUrls.length > 0 ? (
                  <CardSlideshow 
                    images={project.imageUrls} 
                    alt={project.title} 
                    style={{ width: 'calc(100% + 3rem)', height: '200px', margin: '-1.5rem -1.5rem 1.5rem -1.5rem', borderRadius: 'var(--radius-md) var(--radius-md) 0 0' }}
                  />
                ) : (
                  project.imageUrl && <img src={project.imageUrl} alt={project.title} className="project-image" />
                )}
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="center mt-4">
            <Link href="/projects" className="btn btn-secondary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="bg-dark text-white" style={{ padding: '3rem 0' }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: '2rem' }}>
            <h2 style={{color: 'white'}}>Upcoming Events</h2>
          </div>
          <div className="events-list">
            {events.map(event => (
              <div key={event.id} className="event-item card" style={{color: 'var(--foreground)'}}>
                
                {/* Event Image or Slideshow */}
                {(event.imageUrl || (event.imageUrls && event.imageUrls.length > 0)) && (
                  <div className="event-image-container" style={{ width: '150px', height: '120px', flexShrink: 0, borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    {event.imageUrls && event.imageUrls.length > 0 ? (
                      <CardSlideshow 
                        images={event.imageUrls} 
                        alt={event.title} 
                        style={{ width: '100%', height: '100%' }}
                      />
                    ) : (
                      <img src={event.imageUrl} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    )}
                  </div>
                )}
                
                <div className="event-date">
                  <strong>{event.date || 'TBD'}</strong>
                </div>
                
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <p className="event-location" style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '0.5rem' }}>📍 {event.location}</p>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section bg-white" style={{ overflow: 'hidden', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: '1.5rem' }}>
            <h2>Our Gallery</h2>
            <p>Moments captured from our events and programs</p>
          </div>
        </div>
        
        {/* Full width marquee */}
        {gallery && gallery.length > 0 ? (
          <GalleryMarquee images={gallery} />
        ) : (
          <p className="center">No photos available.</p>
        )}

        <div className="container center mt-4">
          <Link href="/gallery" className="btn btn-primary">View Full Gallery</Link>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header center">
            <h2>Our Leadership</h2>
            <p>Meet the dedicated team behind Kpando Anglican STEM Club</p>
          </div>
          <div className="leadership-grid">
            {leadership.map(leader => (
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

      {/* Student Leadership */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header center">
            <h2>Student Leadership</h2>
            <p>Meet the dynamic students leading the next generation of innovators</p>
          </div>
          <div className="center">
            <Link href="/student-leadership" style={{ display: 'block', maxWidth: '400px', margin: '0 auto', textDecoration: 'none', color: 'inherit' }} className="card hover-scale">
              <CardSlideshow 
                images={db.studentLeadership?.map((s: any) => s.imageUrl) || ['/event-placeholder.jpg']} 
                alt="Student Leadership" 
                interval={2000}
                style={{ width: '100%', height: '300px', borderRadius: 'var(--radius-md) var(--radius-md) 0 0' }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ color: 'var(--primary)' }}>Meet Our Student Leaders</h3>
                <p style={{ margin: '0.5rem 0 0 0' }}>Click here to view all 5 of our brilliant student leaders driving the club forward!</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header center">
            <h2>What People Say</h2>
            <p>Testimonials from our community</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.id} className="card testimonial-card">
                <p>"{t.quote}"</p>
                <div className="testimonial-author">- {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
