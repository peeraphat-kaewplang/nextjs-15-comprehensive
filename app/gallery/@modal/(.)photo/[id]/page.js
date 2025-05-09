// app/gallery/@modal/(.)photo/[id]/page.js
import Link from 'next/link';
import Image from 'next/image';

// This component shows when navigating from gallery to a photo
export default function PhotoModal({ params }) {
    // Assuming you have a way to get image src by id for the modal
    // For simplicity, we'll just show the ID. In a real app, you'd fetch image details.
    const imageSrc = `/images/sample${params.id}.jpg`; // Example path

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
        <h3>Photo ID: {params.id} (Modal View)</h3>
        <Image src={imageSrc} alt={`Photo ${params.id}`} width={400} height={300} style={{ objectFit: 'contain' }}/>
        <br />
        <Link href="/gallery" style={{ marginTop: '1rem', display: 'inline-block' }}>Close Modal</Link>
      </div>
    </div>
  );
}