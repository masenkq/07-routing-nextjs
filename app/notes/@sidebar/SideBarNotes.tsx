const tags = ['All', 'Work', 'Personal', 'Ideas', 'Important'];
import css from './SideBarNotes.module.css'; // ← конкретний файл
export default function SidebarNotes() {
  return (
    <aside className={css.sidebar}>
      <h3 className={css.title}>Filter by Tag</h3>
      <ul className={css.menuList}>
        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <a
              href={
                tag === 'All' 
                  ? '/notes/filter/All' 
                  : `/notes/filter/${tag}`
              }
              className={css.menuLink}
            >
              {tag}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}