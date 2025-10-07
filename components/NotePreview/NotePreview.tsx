'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Note } from '@/types/note';
import css from './NotePreview.module.css';

interface NotePreviewProps {
  noteId: string;
}

export default function NotePreview({ noteId }: NotePreviewProps) {
  const { data: note, isLoading, error } = useQuery({
    queryKey: ['note', noteId],
    queryFn: async (): Promise<Note> => {
      const response = await axios.get(`/api/notes/${noteId}`);
      return response.data;
    },
  });

  if (isLoading) return <div className={css.loading}>Loading...</div>;
  if (error) return <div className={css.error}>Error loading note</div>;
  if (!note) return <div className={css.error}>Note not found</div>;

  return (
    <div className={css.container}>
      <h1 className={css.title}>{note.title}</h1>
      <div className={css.meta}>
        <span className={css.date}>
          {new Date(note.createdAt).toLocaleDateString()}
        </span>
        {note.tags && note.tags.length > 0 && (
          <div className={css.tags}>
            {note.tags.map((tag) => (
              <span key={tag} className={css.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className={css.content}>
        {note.content}
      </div>
    </div>
  );
}