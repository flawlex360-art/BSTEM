import { getDb } from '@/lib/db';

export default async function AboutPage() {
  const db = getDb();
  
  return (
    <div className="animate-fade-in pb-10">
      {/* Hero Header for About Page */}
      <section className="bg-primary text-white" style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: 'var(--primary)' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>About the Innovators STEM Club</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
            The premier science, technology, engineering, and mathematics organization at Kpando Anglican Basic School.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
              Designed for curious and driven students in the Basic 7, 8, and 9 levels, the club bridges the gap between theoretical textbook science and real-world application. We provide a collaborative space where students transform from passive consumers of technology into active creators, problem-solvers, and critical thinkers.
            </p>
          </div>

          <div style={{ marginBottom: '4rem', padding: '2rem', backgroundColor: 'var(--background)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--primary)' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Our Mission</h2>
            <p style={{ fontSize: '1.25rem', fontStyle: 'italic', margin: 0 }}>
              "To demystify science and technology through hands-on learning, empowering the next generation of Ghanaian innovators to solve local problems using practical engineering, computing, and creative resourcefulness."
            </p>
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Core Activities & Projects</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Our approach is highly practical, ensuring that every member gets their hands dirty building, coding, and experimenting. The club focuses on several core disciplines:
            </p>
            
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div className="card">
                <h3 style={{ color: 'var(--secondary)' }}>🛠️ Practical Engineering & Upcycling</h3>
                <p>We believe innovation doesn't require expensive lab equipment. Our members specialize in repurposing everyday materials into functional technology. Past and ongoing projects include constructing wind turbines from recycled blender motors and engineering makeshift rice cookers using foil.</p>
              </div>
              
              <div className="card">
                <h3 style={{ color: 'var(--secondary)' }}>⚡ Electronics & Circuitry</h3>
                <p>Students learn the fundamentals of electrical engineering by assembling DIY electronics. Members gain experience working with components like FM radio kits, USB mini humidifiers, and fog volume modules, bringing abstract physics concepts to life.</p>
              </div>
              
              <div className="card">
                <h3 style={{ color: 'var(--secondary)' }}>🧲 Applied Physics</h3>
                <p>We move beyond the whiteboard to explore mechanics and magnetism through interactive, hands-on experiments that prove how the physical world operates.</p>
              </div>
              
              <div className="card">
                <h3 style={{ color: 'var(--secondary)' }}>💻 Computing & Software</h3>
                <p>Recognizing the importance of digital literacy, the club introduces members to computer programming, with a specific focus on Python and web-based technologies, laying the groundwork for future software development skills.</p>
              </div>
            </div>
          </div>

          <div className="about-grid" style={{ gap: '2rem', marginBottom: '4rem' }}>
            <div className="card" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
              <h2 style={{ color: 'white', marginBottom: '1rem' }}>The Science Fun Day</h2>
              <p>
                The highlight of our academic calendar is the annual Science Fun Day. This exhibition allows our young innovators to showcase their projects, experiments, and DIY builds to the rest of the school and the Kpando community. It is a celebration of curiosity that encourages public speaking, project management, and peer-to-peer learning.
              </p>
            </div>
            
            <div className="card" style={{ backgroundColor: 'var(--background)' }}>
              <h2 style={{ marginBottom: '1rem' }}>Leadership and Guidance</h2>
              <p>
                The Innovators STEM Club is driven by student enthusiasm and structured by dedicated educational leadership. The club operates under the constitution of the JHS Science Innovators Club and is closely guided by its founding Patron <strong>Mr. Eli Nugbemado</strong> and Co-Patron, <strong>Mr. Kornutsey Prince</strong>. Together, the leadership team ensures a safe, encouraging, and highly technical environment where every student has the resources and mentorship needed to bring their ideas to life.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
