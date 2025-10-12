// components/Header/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      padding: "1rem 2rem",
      borderBottom: "1px solid #eee",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <Link href="/" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        NoteHub
      </Link>
      <nav>
        <Link href="/notes/filter/All" style={{ marginRight: "1rem" }}>
          Notes
        </Link>
        <Link href="/notes/create">
          Create Note
        </Link>
      </nav>
    </header>
  );
}