import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data.json');

export interface SiteSettings {
  siteName: string;
  logoUrl?: string;
  footerText?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
}

export interface PageBlock {
  id: string;
  pageSlug: string;
  section: string;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageUrls?: string[];
  date: string;
}

export interface Event {
  id: string;
  title: string;
  location: string;
  description: string;
  date: string;
  imageUrl?: string;
  imageUrls?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  author: string;
  quote: string;
}

export interface GalleryImage {
  id: string;
  imageUrl: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  message: string;
  imageUrl: string;
}

export interface DbSchema {
  settings: {
    siteName: string;
  };
  pageBlocks: PageBlock[];
  services: Service[];
  projects: Project[];
  events: Event[];
  pastEvents?: Event[];
  gallery: GalleryImage[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
  leadership?: LeadershipMember[];
  stemStudentLeadership?: LeadershipMember[];
  generalStudentLeadership?: LeadershipMember[];
}

export interface Database {
  settings: SiteSettings;
  pageBlocks: PageBlock[];
  services: Service[];
  projects: Project[];
  events: Event[];
  pastEvents?: Event[];
  gallery: GalleryImage[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
  leadership?: LeadershipMember[];
  stemStudentLeadership?: LeadershipMember[];
  generalStudentLeadership?: LeadershipMember[];
}

const defaultData: Database = {
  settings: {
    siteName: 'Kpando Anglican STEM Club',
  },
  pageBlocks: [],
  services: [],
  projects: [],
  events: [],
  pastEvents: [],
  gallery: [],
  blogPosts: [],
  testimonials: [],
  leadership: [],
  stemStudentLeadership: [],
  generalStudentLeadership: []
};

// Bolt ⚡ Optimization: In-memory cache for synchronous JSON database reads and writes.
// Prevents costly blocking synchronous disk reads (`fs.readFileSync`) and JSON parsing (`JSON.parse`)
// on every single server component render request across pages and components.
let cachedDb: Database | null = null;
let cachedMtimeMs: number | null = null;

export function getDb(): Database {
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify(defaultData, null, 2));
    cachedDb = defaultData;
    cachedMtimeMs = fs.statSync(dataFile).mtimeMs;
    return defaultData;
  }

  try {
    const stat = fs.statSync(dataFile);
    if (cachedDb !== null && cachedMtimeMs === stat.mtimeMs) {
      return cachedDb;
    }

    const raw = fs.readFileSync(dataFile, 'utf-8');
    cachedDb = JSON.parse(raw) as Database;
    cachedMtimeMs = stat.mtimeMs;
    return cachedDb;
  } catch {
    return defaultData;
  }
}

export function saveDb(data: Database) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
  try {
    cachedDb = data;
    cachedMtimeMs = fs.statSync(dataFile).mtimeMs;
  } catch {
    cachedDb = null;
    cachedMtimeMs = null;
  }
}
