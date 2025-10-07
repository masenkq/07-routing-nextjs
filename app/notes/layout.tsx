import { ReactNode } from 'react';

interface NotesLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  modal: ReactNode;
}

export default function NotesLayout({
  children,
  sidebar,
  modal,
}: NotesLayoutProps) {
  return (
    <>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {sidebar}
        <main style={{ flex: 1, padding: '2rem' }}>
          {children}
        </main>
      </div>
      {modal}
    </>
  );
}