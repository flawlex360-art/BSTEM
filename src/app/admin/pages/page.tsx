import { getDb } from '@/lib/db';
import AdminListEditor from '@/components/AdminListEditor';

export default async function PagesAdmin() {
  const db = getDb();
  
  return (
    <div className="animate-fade-in">
      <AdminListEditor 
        title="Manage Page Content Blocks"
        collectionName="pageBlocks"
        initialDb={db}
        fields={[
          { key: 'pageSlug', label: 'Page Slug (e.g. home)' },
          { key: 'section', label: 'Section Identifier (e.g. hero, about)' },
          { key: 'title', label: 'Title / Heading' },
          { key: 'subtitle', label: 'Subtitle / Description', type: 'textarea' },
          { key: 'content', label: 'Main Content', type: 'textarea' },
          { key: 'imageUrl', label: 'Background / Section Image URL' }
        ]}
      />
    </div>
  );
}
