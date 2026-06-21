import { getDb } from '@/lib/db';
import AdminListEditor from '@/components/AdminListEditor';

export default async function EventsAdmin() {
  const db = getDb();
  
  return (
    <div className="animate-fade-in">
      <AdminListEditor 
        title="Manage Events"
        collectionName="events"
        initialDb={db}
        fields={[
          { key: 'title', label: 'Event Title' },
          { key: 'description', label: 'Description', type: 'textarea' },
          { key: 'location', label: 'Location' },
          { key: 'date', label: 'Date / Time' }
        ]}
      />
    </div>
  );
}
