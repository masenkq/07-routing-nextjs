import { notFound } from 'next/navigation';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/getQueryClient';
import { api } from '@/lib/api';
import NotesClient from './Notes.client';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function NotesPage({ params }: PageProps) {
  const { slug } = await params;
  const tag = slug?.[0] || 'All';
  
  // Валідація тегу
  const validTags = ['All', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];
  if (tag !== 'All' && !validTags.includes(tag)) {
    notFound();
  }

  const queryClient = getQueryClient();
  const apiTag = tag === 'All' ? undefined : tag;

  // Префетчинг даних на сервері
  await queryClient.prefetchQuery({
    queryKey: ['notes', apiTag],
    queryFn: async (): Promise<any[]> => {
      const response = await api.notes.getAll(apiTag); // Передаємо apiTag напряму
      return response.data;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={apiTag} />
    </HydrationBoundary>
  );
}