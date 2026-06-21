import fs from 'fs';
import path from 'path';

export default async function TestimonialsPage() {
  const dataPath = path.join(process.cwd(), 'data.json');
  const fileContents = fs.readFileSync(dataPath, 'utf8');
  const db = JSON.parse(fileContents);
  const testimonials = db.testimonials || [];

  return (
    <div className="animate-fade-in">
      <div className="hero" style={{ minHeight: '40vh', backgroundImage: 'url(/project-2.jpg)' }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>What People Say</h1>
          <p className="hero-subtitle">Hear from our students, parents, and community</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((t: any) => (
              <div key={t.id} className="card">
                <div style={{ fontSize: '2rem', color: 'var(--primary)', opacity: 0.2, lineHeight: 1 }}>"</div>
                <p style={{ fontStyle: 'italic', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                  {t.quote}
                </p>
                <div className="testimonial-author">— {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
