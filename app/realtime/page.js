async function getCurrentTime() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    cache: 'no-store', // Fetch fresh data on every request
  });
  if (!res.ok) throw new Error('Failed to fetch time');
  return res.json();
}

export default async function RealtimePage() {
  const newsItem = await getCurrentTime();
  return (
    <div>
      <h2>Realtime Data (No Store)</h2>
    <p>ID: {newsItem.id} - Title: {newsItem.title}</p>
      <p>Fetched at: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}