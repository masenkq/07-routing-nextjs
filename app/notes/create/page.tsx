'use client';

import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import NoteForm from '@/components/NoteForm/NoteForm';
import { CreateNoteData } from '@/types/note';
import css from './CreateNote.module.css';

export default function CreateNotePage() {
  const router = useRouter();

  const createMutation = useMutation({
    mutationFn: (data: CreateNoteData) => axios.post('/api/notes', data),
    onSuccess: () => {
      router.push('/notes/filter/All');
    },
  });

  const handleSubmit = (data: CreateNoteData) => {
    createMutation.mutate(data);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Create New Note</h1>
      <NoteForm 
        onSubmit={handleSubmit}
        isLoading={createMutation.isPending}
      />
    </div>
  );
}