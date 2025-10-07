'use client';

import { useState } from 'react';
import { CreateNoteData } from '@/types/note';
import css from './NoteForm.module.css';

interface NoteFormProps {
  onSubmit: (data: CreateNoteData) => void;
  isLoading?: boolean;
}

export default function NoteForm({ onSubmit, isLoading = false }: NoteFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const noteData: CreateNoteData = {
      title,
      content,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : undefined
    };
    
    onSubmit(noteData);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.field}>
        <label htmlFor="title" className={css.label}>Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={css.input}
          required
        />
      </div>
      
      <div className={css.field}>
        <label htmlFor="content" className={css.label}>Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={css.textarea}
          required
        />
      </div>
      
      <div className={css.field}>
        <label htmlFor="tags" className={css.label}>Tags (comma separated)</label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className={css.input}
          placeholder="Work, Personal, Ideas"
        />
      </div>
      
      <button type="submit" disabled={isLoading} className={css.button}>
        {isLoading ? 'Creating...' : 'Create Note'}
      </button>
    </form>
  );
}