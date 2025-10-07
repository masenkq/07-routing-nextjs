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
      <div style={{ display: 'flex' }}>
        {sidebar}
        <main style={{ flex: 1 }}>{children}</main>
      </div>
      {modal}
    </>
  );
}