'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import css from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeModal = () => {
    router.back();
  };

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeModal();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  return (
    <dialog ref={dialogRef} className={css.modal} onClose={closeModal}>
      <div className={css.content}>
        <button className={css.closeButton} onClick={closeModal}>
          ×
        </button>
        {children}
      </div>
    </dialog>
  );
}