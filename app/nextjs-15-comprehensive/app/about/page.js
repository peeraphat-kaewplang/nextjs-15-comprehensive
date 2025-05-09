import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <h1>About This Application</h1>
      <p>This application is built using Next.js and demonstrates various features of the framework.</p>
      <p>Created by [Your Name].</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}