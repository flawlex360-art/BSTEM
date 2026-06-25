import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogSlideshow from '@/components/BlogSlideshow';

export async function generateStaticParams() {
  const dataPath = path.join(process.cwd(), 'data.json');
  const fileContents = fs.readFileSync(dataPath, 'utf8');
  const db = JSON.parse(fileContents);
  return db.blogPosts?.map((post: any) => ({
    id: post.id,
  })) || [];
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const dataPath = path.join(process.cwd(), 'data.json');
  const fileContents = fs.readFileSync(dataPath, 'utf8');
  const db = JSON.parse(fileContents);
  
  const resolvedParams = await params;
  const post = db.blogPosts?.find((p: any) => p.id === resolvedParams.id);
  
  if (!post) {
    notFound();
  }

  const coverImage = post.imageUrls?.[0] || post.imageUrl || '/blog-banner.jpg';

  return (
    <div className="animate-fade-in">
      {/* Dynamic Hero Banner */}
      <div className="hero" style={{ minHeight: '50vh', backgroundImage: `url(${coverImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className="hero-overlay" style={{ background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container hero-content" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
          <Link href="/blog" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--secondary)', fontWeight: 'bold' }}>
            ← Back to Blog
          </Link>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{post.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
            <img src={coverImage} alt={post.author} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid white' }} />
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{post.author}</div>
              <div style={{ opacity: 0.8 }}>{post.date}</div>
            </div>
          </div>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <article>
            {(post.imageUrl || (post.imageUrls && post.imageUrls.length > 0)) && (
              <div style={{ marginBottom: '3rem' }}>
                <BlogSlideshow images={post.imageUrls || [post.imageUrl]} />
              </div>
            )}

            <div style={{ whiteSpace: 'pre-line', lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--foreground)' }}>
              {post.content}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
