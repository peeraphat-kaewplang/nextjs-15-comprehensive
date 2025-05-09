// app/gallery/page.js
import Link from 'next/link';
import Image from 'next/image';

const images = [
  { id: '1', src: '/images/sample1.jpg', alt: 'Sample Image 1' }, // Place these in /public/images/
  { id: '2', src: '/images/sample2.jpg', alt: 'Sample Image 2' },
  { id: '3', src: '/images/sample3.jpg', alt: 'Sample Image 3' },
];
// Make sure to create /public/images folder and add some sample images (e.g., sample1.jpg, sample2.jpg, sample3.jpg)

export default function GalleryPage() {
  return (
    <div>
      <h2>Image Gallery</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {images.map(img => (
          <Link key={img.id} href={`/photo/${img.id}`} passHref>
            <Image src={img.src} alt={img.alt} width={150} height={100} style={{ objectFit: 'cover', border: '1px solid #ddd' }}/>
          </Link>
        ))}
      </div>
    </div>
  );
}