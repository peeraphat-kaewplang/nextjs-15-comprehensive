import { notFound } from 'next/navigation';

// 1. generateStaticParams (SSG for specific IDs)
export async function generateStaticParams() {
  // สมมติว่า ID '1' และ '2' เป็น popular posts ที่ต้องการ pre-render
  return [{ id: '1' }, { id: '2' }];
}

async function getPostData(id) {
  // Simulate fetching post data
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (id === '1') return { title: 'First Post', content: 'This is the first post content.' };
  if (id === '2') return { title: 'Second Post', content: 'Content for the second post.' };
  if (id === '3') return { title: 'Learn Next.js', content: 'Let us learn Next.js 15 features.' };
  return null; // Post not found
}

export async function generateMetadata({ params }) {
  const post = await getPostData(params.id);
  if (!post) return { title: 'Post Not Found' };
  return { title: post.title, description: `Content for post ${params.id}` };
}

export default async function PostPage({ params }) {
  const post = await getPostData(params.id);

  if (!post) {
    notFound(); // Triggers the nearest not-found.js
  }

  return (
    <div>
      <h1>{post.title} (ID: {params.id})</h1>
      <p>{post.content}</p>
    </div>
  );
}