'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { Note } from '@/types/note';
import Modal from '@/components/Modal/Modal';

interface NotePreviewClientProps {
  noteId: string;
}

export default function NotePreviewClient({ noteId }: NotePreviewClientProps) {
  const router = useRouter();

  const { data: note, isLoading, error } = useQuery({
    queryKey: ['note', noteId],
    queryFn: async (): Promise<Note> => {
      // ✅ Видалено .data - API тепер повертає безпосередньо Note
      const response = await api.notes.getById(noteId);
      return response; // Без .data
    },
    refetchOnMount: false,
  });

  const handleClose = () => {
    router.back();
  };

  if (isLoading) return (
    <Modal isOpen onClose={handleClose}>
      <div>Loading note...</div>
    </Modal>
  );

  if (error) return (
    <Modal isOpen onClose={handleClose}>
      <div>Error loading note</div>
    </Modal>
  );

  if (!note) return (
    <Modal isOpen onClose={handleClose}>
      <div>Note not found</div>
    </Modal>
  );

  return (
    <Modal isOpen onClose={handleClose}>
      <div style={{ padding: '2rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>{note.title}</h1>
        <p style={{ marginBottom: '1rem', whiteSpace: 'pre-wrap' }}>{note.content}</p>
        {note.tags && note.tags.length > 0 && (
          <div style={{ marginBottom: '1rem' }}>
            <strong>Tags:</strong> {note.tags.join(', ')}
          </div>
        )}
        <div style={{ fontSize: '0.875rem', color: '#666' }}>
          <div>Created: {new Date(note.createdAt).toLocaleDateString()}</div>
          <div>Updated: {new Date(note.updatedAt).toLocaleDateString()}</div>
        </div>
      </div>
    </Modal>
  );
}