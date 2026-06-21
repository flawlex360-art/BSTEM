import { getDb } from '@/lib/db';
import AdminListEditor from '@/components/AdminListEditor';

export default async function TestimonialsAdmin() {
  const db = getDb();
  
  return (
    <div className="animate-fade-in">
      <AdminListEditor 
        title="Manage Testimonials"
        collectionName="testimonials"
        initialDb={db}
        fields={[
          { key: 'author', label: 'Author / Name' },
          { key: 'quote', label: 'Quote', type: 'textarea' }
        ]}
      />
    </div>
  );
}
