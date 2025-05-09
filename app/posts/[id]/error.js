"use client";

export default function PostError({ error, reset }) {
  return (
    <div>
      <h2>Oops! Something went wrong loading this post.</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}