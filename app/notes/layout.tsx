import { ReactNode } from 'react';

interface NotesLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function NotesLayout({
  children,
  sidebar,
}: NotesLayoutProps) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {sidebar}
      <main style={{ flex: 1 }}>
        {children}
      </main>
    </div>
  );
}