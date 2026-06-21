'use client';
import { useState } from 'react';
import { Database } from '@/lib/db';
import { updateDatabase } from '../actions';

export default function SettingsForm({ initialDb }: { initialDb: Database }) {
  const [db, setDb] = useState<Database>(initialDb);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMsg('');
    await updateDatabase(db);
    setMsg('Settings saved successfully!');
    setSaving(false);
  };

  const updateSetting = (key: keyof Database['settings'], value: string) => {
    setDb(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        [key]: value
      }
    }));
  };

  return (
    <form onSubmit={handleSave} className="admin-form card">
      <h2 className="mb-4">Site Settings</h2>
      {msg && <div className="alert" style={{backgroundColor: '#dcfce3', color: '#166534'}}>{msg}</div>}
      
      <div className="form-group">
        <label>Site Name</label>
        <input 
          value={db.settings.siteName} 
          onChange={e => updateSetting('siteName', e.target.value)} 
          required 
        />
      </div>
      
      <div className="form-group">
        <label>Contact Email</label>
        <input 
          type="email"
          value={db.settings.contactEmail || ''} 
          onChange={e => updateSetting('contactEmail', e.target.value)} 
        />
      </div>
      
      <div className="form-group">
        <label>Contact Phone</label>
        <input 
          value={db.settings.contactPhone || ''} 
          onChange={e => updateSetting('contactPhone', e.target.value)} 
        />
      </div>
      
      <div className="form-group">
        <label>Address</label>
        <textarea 
          value={db.settings.address || ''} 
          onChange={e => updateSetting('address', e.target.value)} 
          rows={3}
        />
      </div>
      
      <div className="form-group">
        <label>Footer Text</label>
        <textarea 
          value={db.settings.footerText || ''} 
          onChange={e => updateSetting('footerText', e.target.value)} 
          rows={2}
        />
      </div>
      
      <button type="submit" className="btn btn-primary" disabled={saving}>
        {saving ? 'Saving...' : 'Save Settings'}
      </button>
    </form>
  );
}
