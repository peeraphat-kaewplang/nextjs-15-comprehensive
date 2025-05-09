import Link from 'next/link';

async function getPostSummaries() {
  // ในความเป็นจริงคือ fetch จาก API
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
  return [
    { id: '1', title: 'First Post' },
    { id: '2', title: 'Second Post' },
    { id: '3', title: 'Learn Next.js' },
  ];
}

export default async function PostsListPage() {
  const posts = await getPostSummaries();
  return (
    <div>
      <h2>All Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}