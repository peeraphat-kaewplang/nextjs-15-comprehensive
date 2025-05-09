// app/old-feature/page.js
import { redirect } from 'next/navigation';

export default function OldFeaturePage() {
  // This component will likely not render as redirect happens on the server.
  redirect('/about'); // Redirect to the about page
  return <h1>This is an old feature. You should be redirected.</h1>;
}