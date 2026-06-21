import { getDb } from '@/lib/db';
import Link from 'next/link';

export const metadata = {
  title: 'Our Projects | Kpando Anglican STEM Club',
  description: 'Explore the innovative STEM projects and solutions created by our club members.',
};

export default async function ProjectsPage() {
  const db = getDb();
  const projects = db.projects || [];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="hero" style={{ minHeight: '40vh', padding: '6rem 0', backgroundImage: 'url(/hero.jpg)' }}>
        <div className="hero-overlay" style={{ background: 'rgba(0, 0, 0, 0.7)' }}></div>
        <div className="container hero-content center">
          <h1>Our Projects</h1>
          <p className="hero-subtitle">Discover the innovative solutions and hands-on experiments created by our students.</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-light">
        <div className="container">
          {projects.length === 0 ? (
            <div className="center">
              <p>Check back soon for new projects!</p>
            </div>
          ) : (
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="card">
                  {project.imageUrl && (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="project-image" 
                    />
                  )}
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.date && <p className="text-muted mt-4"><small>Completed: {project.date}</small></p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
