'use client';

import { useState } from 'react';
import { CreateNoteData } from '@/types/note';

interface NoteFormProps {
  onSubmit: (data: CreateNoteData) => void;
  isLoading?: boolean;
  onClose: () => void;
}

const availableTags = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

// Тимчасовий стан для чернетки (поки не реалізовано Zustand)
const initialDraft = {
  title: '',
  content: '',
  tag: 'Todo' as string,
};

export default function NoteForm({ onSubmit, isLoading = false, onClose }: NoteFormProps) {
  const [draft, setDraft] = useState(initialDraft);

  const handleInputChange = (field: keyof typeof draft, value: string) => {
    setDraft(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title: draft.title, content: draft.content, tags: [draft.tag] });
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Title
        </label>
        <input
          type="text"
          id="title"
          value={draft.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem' }}
          required
        />
      </div>
      
      <div>
        <label htmlFor="content" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Content
        </label>
        <textarea
          id="content"
          value={draft.content}
          onChange={(e) => handleInputChange('content', e.target.value)}
          style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', minHeight: '200px', fontSize: '1rem', resize: 'vertical' }}
          required
        />
      </div>

      <div>
        <label htmlFor="tag" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Tag
        </label>
        <select
          id="tag"
          value={draft.tag}
          onChange={(e) => handleInputChange('tag', e.target.value)}
          style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem' }}
        >
          {availableTags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          type="submit" 
          disabled={isLoading}
          style={{ 
            background: '#007acc', 
            color: 'white', 
            border: 'none', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '4px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.6 : 1,
            fontSize: '1rem',
            flex: 1
          }}
        >
          {isLoading ? 'Creating...' : 'Create Note'}
        </button>
        
        <button 
          type="button"
          onClick={handleCancel}
          style={{ 
            background: '#6c757d', 
            color: 'white', 
            border: 'none', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            flex: 1
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}