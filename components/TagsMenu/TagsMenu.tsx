'use client';

import { useState } from 'react';
import css from './TagsMenu.module.css';

const tags = ['All', 'Work', 'Personal', 'Ideas', 'Important'];

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton} onClick={toggleMenu}>
        Notes ▾
      </button>
      {isOpen && (
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
                onClick={() => setIsOpen(false)}
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}