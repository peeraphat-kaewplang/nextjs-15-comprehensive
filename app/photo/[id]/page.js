// app/photo/[id]/page.js
import Image from 'next/image';
import Link from 'next/link';

// This component shows on direct navigation or refresh to /photo/[id]
export default function PhotoPage({ params }) {
    // In a real app, fetch image details based on params.id
    const imageSrc = `/images/sample${params.id}.jpg`; // Example path

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Full Photo Page for ID: {params.id}</h1>
      <Image src={imageSrc} alt={`Photo ${params.id}`} width={600} height={400} style={{ objectFit: 'contain', border: '1px solid #ccc' }}/>
      <p><Link href="/gallery">Back to Gallery</Link></p>
    </div>
  );
}