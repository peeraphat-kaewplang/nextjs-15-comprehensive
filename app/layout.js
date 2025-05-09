// app/layout.js
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Comprehensive Next.js 15 App',
  description: 'Demonstrating various Next.js features',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{ padding: '1rem', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/posts">Posts (Dynamic)</Link>
            <Link href="/news">News (Revalidate)</Link>
            <Link href="/realtime">Realtime Data (No-Store)</Link>
            <Link href="/interactive">Interactive (Client Fetch)</Link>
            <Link href="/feedback">Feedback (Server Action)</Link>
            <Link href="/dashboard">Dashboard (Parallel)</Link>
            <Link href="/gallery">Gallery (Intercepting)</Link>
            <Link href="/templated-section/page-one">Templated Section</Link>
            <Link href="/docs/introduction/setup">Docs (Catch-all)</Link>
            <Link href="/search">Search (Optional Catch-all)</Link>
          </nav>
        </header>
        <main style={{ padding: '1rem' }}>
          {children}
        </main>
        <footer style={{ padding: '1rem', backgroundColor: '#f0f0f0', borderTop: '1px solid #ccc', marginTop: '2rem' }}>
          <p>&copy; {new Date().getFullYear()} My App</p>
        </footer>
      </body>
    </html>
  );
}