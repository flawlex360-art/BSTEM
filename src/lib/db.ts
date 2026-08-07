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

// Module-level cache to hold parsed database in memory.
// This implements a write-through caching pattern to eliminate redundant synchronous disk I/O and JSON parsing on read paths.
let cachedData: Database | null = null;

export function getDb(): Database {
  if (cachedData) {
    return cachedData;
  }
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify(defaultData, null, 2));
    cachedData = defaultData;
    return defaultData;
  }
  try {
    const raw = fs.readFileSync(dataFile, 'utf-8');
    cachedData = JSON.parse(raw) as Database;
    return cachedData;
  } catch (e) {
    return defaultData;
  }
}

export function saveDb(data: Database) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
  // Keep cache synchronized with disk (write-through cache)
  cachedData = data;
}
