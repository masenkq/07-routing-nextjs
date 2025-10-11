import Modal from "@/components/Modal/Modal";
import NotePreviewClient from "./NotePreview.client";

interface PageProps {
  params: {
    id: string;
  };
}

export default function NoteModalPage({ params }: PageProps) {
  return (
    <Modal>
      <NotePreviewClient noteId={params.id} />
    </Modal>
  );
}