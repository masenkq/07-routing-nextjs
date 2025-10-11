import NotePreview from '@/components/NotePreview/NotePreview';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NotePage({ params }: PageProps) {
  const { id } = await params;
  
  return (
    <div style={{ padding: '2rem' }}>
      <NotePreview noteId={id} />
    </div>
  );
}