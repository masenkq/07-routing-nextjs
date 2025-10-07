import Link from 'next/link';
import TagsMenu from '../TagsMenu/TagsMenu';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.logo}>
          NoteHub
        </Link>
        <nav className={css.nav}>
          <TagsMenu />
          <Link href="/notes/create" className={css.link}>
            Create Note
          </Link>
        </nav>
      </div>
    </header>
  );
}