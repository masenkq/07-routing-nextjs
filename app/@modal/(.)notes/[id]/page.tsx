
import Modal from "@/components/Modal/Modal"
import NotePreview from "@/components/NotePreview/NotePreview"

interface PageProps {
  params: {
    id: string
  }
}

export default function NoteModalPage({ params }: PageProps) {
  return (
    <Modal>
      <NotePreview noteId={params.id} />
    </Modal>
  )
}