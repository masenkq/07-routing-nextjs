import Link from 'next/link';
import css from './page.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <main className={css.main}>
        <h1 className={css.title}>Welcome to NoteHub</h1>
        <p className={css.description}>
          Your personal note taking application
        </p>
        <div className={css.buttons}>
          <Link href="/notes/filter/All" className={css.button}>
            View All Notes
          </Link>
          <Link href="/notes/create" className={css.button}>
            Create New Note
          </Link>
        </div>
      </main>
    </div>
  );
}