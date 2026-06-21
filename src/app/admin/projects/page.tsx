import { getDb } from '@/lib/db';
import AdminListEditor from '@/components/AdminListEditor';

export default async function ProjectsAdmin() {
  const db = getDb();
  
  return (
    <div className="animate-fade-in">
      <AdminListEditor 
        title="Manage Projects"
        collectionName="projects"
        initialDb={db}
        fields={[
          { key: 'title', label: 'Project Title' },
          { key: 'description', label: 'Description', type: 'textarea' },
          { key: 'imageUrl', label: 'Image URL' },
          { key: 'date', label: 'Date / Year' }
        ]}
      />
    </div>
  );
}
