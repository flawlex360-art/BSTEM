import fs from 'fs';
import path from 'path';
import BlogSlideshow from '@/components/BlogSlideshow';

export default async function BlogPage() {
  const dataPath = path.join(process.cwd(), 'data.json');
  const fileContents = fs.readFileSync(dataPath, 'utf8');
  const db = JSON.parse(fileContents);
  const blogPosts = db.blogPosts || [];

  return (
    <div className="animate-fade-in">
      <div className="hero" style={{ minHeight: '40vh', backgroundImage: 'url(/blog-banner.jpg)' }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Learners' Blog</h1>
          <p className="hero-subtitle">Stories, projects, and experiences from our brilliant students.</p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          {blogPosts.length === 0 ? (
            <div className="center" style={{ padding: '4rem 0', opacity: 0.7 }}>
              <h3>Coming Soon!</h3>
              <p>Check back later to read amazing stories and projects from our STEM club learners.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {blogPosts.map((post: any) => (
                <article key={post.id} className="card" style={{ padding: '2rem' }}>
                  <header style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                    <h2>{post.title}</h2>
                    <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>By {post.author}</div>
                    {post.date && <div style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.25rem' }}>{post.date}</div>}
                  </header>

                  {(post.imageUrl || (post.imageUrls && post.imageUrls.length > 0)) && (
                    <div style={{ marginBottom: '2rem' }}>
                      <BlogSlideshow images={post.imageUrls || [post.imageUrl]} />
                    </div>
                  )}

                  <div style={{ whiteSpace: 'pre-line', lineHeight: 1.8 }}>
                    {post.content}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
