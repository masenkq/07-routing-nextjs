'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { Note } from '@/types/note';

interface NoteDetailsClientProps {
  noteId: string;
}

export default function NoteDetailsClient({ noteId }: NoteDetailsClientProps) {
  const { data: note, isLoading, error } = useQuery({
    queryKey: ['note', noteId],
    queryFn: async (): Promise<Note> => {
      // API тепер повертає безпосередньо Note, не response
      const response = await api.notes.getById(noteId);
      return response; // Без .data, оскільки API вже повертає дані
    },
  });

  if (isLoading) return <div>Loading note...</div>;
  if (error) return <div>Error loading note</div>;
  if (!note) return <div>Note not found</div>;

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      {note.tags && note.tags.length > 0 && (
        <div>
          <strong>Tags:</strong> {note.tags.join(', ')}
        </div>
      )}
      <div>
        <small>Created: {new Date(note.createdAt).toLocaleDateString()}</small>
      </div>
      <div>
        <small>Updated: {new Date(note.updatedAt).toLocaleDateString()}</small>
      </div>
    </div>
  );
}