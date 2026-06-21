import { getDb } from '@/lib/db';
import AdminListEditor from '@/components/AdminListEditor';

export default async function ServicesAdmin() {
  const db = getDb();
  
  return (
    <div className="animate-fade-in">
      <AdminListEditor 
        title="Manage Services"
        collectionName="services"
        initialDb={db}
        fields={[
          { key: 'title', label: 'Service Title' },
          { key: 'description', label: 'Description', type: 'textarea' },
          { key: 'icon', label: 'Icon (Emoji or URL)' }
        ]}
      />
    </div>
  );
}
