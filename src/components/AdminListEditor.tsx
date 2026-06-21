'use client';
import { useState } from 'react';
import { Database } from '@/lib/db';
import { updateDatabase } from '@/app/admin/actions';

export default function AdminListEditor({
  title,
  collectionName,
  initialDb,
  fields
}: {
  title: string;
  collectionName: keyof Database;
  initialDb: Database;
  fields: { key: string, label: string, type?: 'text' | 'textarea' | 'image' }[]
}) {
  const [db, setDb] = useState<Database>(initialDb);
  const [items, setItems] = useState<any[]>(initialDb[collectionName] as any[]);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMsg('');
    
    const newDb = { ...db, [collectionName]: items };
    await updateDatabase(newDb);
    
    setMsg(`${title} saved successfully!`);
    setSaving(false);
  };

  const addItem = () => {
    const newItem: any = { id: Date.now().toString() };
    fields.forEach(f => newItem[f.key] = '');
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, key: string, value: string) => {
    setItems(items.map(item => item.id === id ? { ...item, [key]: value } : item));
  };

  return (
    <form onSubmit={handleSave} className="admin-form card" style={{ maxWidth: '1000px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2>{title}</h2>
        <button type="button" onClick={addItem} className="btn btn-secondary">+ Add New</button>
      </div>
      
      {msg && <div className="alert" style={{backgroundColor: '#dcfce3', color: '#166534'}}>{msg}</div>}
      
      {items.length === 0 ? (
        <p className="text-muted">No items found. Click 'Add New' to create one.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {items.map((item, index) => (
            <div key={item.id} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', background: 'var(--background)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h4>Item #{index + 1}</h4>
                <button type="button" onClick={() => removeItem(item.id)} className="btn btn-secondary" style={{ borderColor: 'red', color: 'red' }}>Remove</button>
              </div>
              
              {fields.map(field => (
                <div className="form-group" key={field.key}>
                  <label>{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea 
                      value={item[field.key] || ''} 
                      onChange={e => updateItem(item.id, field.key, e.target.value)}
                      rows={3}
                    />
                  ) : (
                    <input 
                      type="text"
                      value={item[field.key] || ''} 
                      onChange={e => updateItem(item.id, field.key, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-4">
        <button type="submit" className="btn btn-primary" disabled={saving}>
          {saving ? 'Saving...' : 'Save All Changes'}
        </button>
      </div>
    </form>
  );
}
