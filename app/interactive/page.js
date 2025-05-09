"use client";

import { useState, useEffect } from 'react';

export default function InteractivePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(userData => {
        setData(userData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Client fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading interactive data on client...</p>;

  return (
    <div>
      <h2>Interactive Page (Client-Side Fetch)</h2>
      {data && <p>User Name: {data.name}</p>}
      <button onClick={() => alert('Button clicked!')}>Click Me</button>
    </div>
  );
}