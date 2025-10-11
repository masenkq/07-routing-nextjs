import "./globals.css"

export const metadata = {
  title: "NoteHub",
  description: "Your personal note taking app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
