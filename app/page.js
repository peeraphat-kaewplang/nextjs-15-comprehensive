// app/page.js
import Image from 'next/image';
import MyButton from './_components/MyButton/MyButton'; // ตัวอย่าง Private Component
import styles from './Homepage.module.css'; // ตัวอย่าง CSS Modules

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Comprehensive Next.js 15 App!</h1>
      <p>This app demonstrates various features discussed.</p>
      <Image
        src="/vercel.svg" // ต้องมีไฟล์ vercel.svg ใน public folder
        alt="Vercel Logo"
        width={100}
        height={50}
        priority // โหลดรูปนี้ก่อน
      />
      <div style={{ marginTop: '20px' }}>
        <MyButton text="I'm a private component!" />
      </div>
    </div>
  );
}