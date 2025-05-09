async function getLatestNews() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  if (!res.ok) throw new Error('Failed to fetch news');
  return res.json();
}

export default async function NewsPage() {
  const newsItem = await getLatestNews();
  return (
    <div>
      <h2>Latest News (Revalidates every 60s)</h2>
      <p>ID: {newsItem.id} - Title: {newsItem.title}</p>
      <p>Fetched at: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}