import fs from 'fs';
import path from 'path';
import Link from 'next/link';
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
        <div className="container" style={{ maxWidth: '1200px' }}>
          {blogPosts.length === 0 ? (
            <div className="center" style={{ padding: '4rem 0', opacity: 0.7 }}>
              <h3>Coming Soon!</h3>
              <p>Check back later to read amazing stories and projects from our STEM club learners.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {blogPosts.map((post: any) => {
                const coverImage = post.imageUrls?.[0] || post.imageUrl || '/default-about.jpg';
                return (
                  <Link href={`/blog/${post.id}`} key={post.id} className="card hover-scale" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
                    <img src={coverImage} alt={post.author} className="author-avatar" />
                    <h3 style={{ margin: '0.5rem 0', lineHeight: 1.3 }}>{post.title}</h3>
                    <div style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem' }}>By {post.author}</div>
                    {post.date && <div style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '0.25rem' }}>{post.date}</div>}
                    <div style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      Click to read full post...
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
