import { getDb } from '@/lib/db';
import SettingsForm from './SettingsForm';

export default async function SettingsPage() {
  const db = getDb();
  
  return (
    <div className="animate-fade-in">
      <SettingsForm initialDb={db} />
    </div>
  );
}
