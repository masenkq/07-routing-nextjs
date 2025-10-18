import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NoteModalPage({ params }: PageProps) {
  const { id } = await params;
  
  // Для серверного компонента не можна використовувати onClose через router
  // Краще використовувати клієнтський компонент для модального вікна
  return (
    <Modal isOpen={true} onClose={() => {}}>
      <NotePreview noteId={id} />
    </Modal>
  );
}