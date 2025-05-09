// app/templated-section/template.js
"use client";
import { useEffect, useState } from 'react';

export default function MyTemplate({ children }) {
  const [key, setKey] = useState(Math.random()); // To visually see re-mount

  useEffect(() => {
    console.log('Template instance re-created/re-mounted. Key:', key);
    // This will run on each navigation within this template's scope
  }, [key]); // Rerun if key changes, which it will on remount if state is not persisted

  // To force a new key on each navigation for demonstration, you might need more complex state management
  // or simply observe console logs. A simple state like below won't reset automatically on navigation.
  // The core idea is template creates a new instance.

  return (
    <div key={Date.now()} style={{ border: '1px solid teal', padding: '0.5rem', marginTop: '0.5rem' }}>
      <p><em>Template Instance (Re-mounts on navigation within section) - Current random: {Math.random().toFixed(3)}</em></p>
      {children}
    </div>
  );
}