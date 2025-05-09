// app/feedback/page.js
"use client"; // The form component itself will be client-side for interaction

import { useState, useRef, useEffect, useTransition } from 'react';
import { submitFeedback, getFeedbackEntries } from '../actions'; // Import Server Action

export default function FeedbackPage() {
  const [responseMessage, setResponseMessage] = useState('');
  const [currentFeedback, setCurrentFeedback] = useState([]);
  const formRef = useRef(null);
  const [isPending, startTransition] = useTransition(); // For pending UI state

  // Function to load initial feedback (optional, could be passed from Server Component parent)
  async function loadFeedback() {
    const entries = await getFeedbackEntries();
    setCurrentFeedback(entries);
  }

  useEffect(() => {
    loadFeedback();
  }, []);

  const handleSubmit = async (formData) => {
    startTransition(async () => {
        const result = await submitFeedback(formData);
        if (result.error) {
        setResponseMessage(`Error: ${result.error}`);
        } else if (result.success) {
        setResponseMessage(result.message);
        formRef.current?.reset(); // Clear the form
        loadFeedback(); // Reload feedback
        }
    });
  };

  return (
    <div>
      <h2>Submit Feedback (Server Action)</h2>
      <form ref={formRef} action={handleSubmit}> {/* Use the action attribute */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit" disabled={isPending} style={{ marginTop: '0.5rem' }}>
          {isPending ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
      {responseMessage && <p style={{ marginTop: '1rem' }}>{responseMessage}</p>}

      <h3 style={{ marginTop: '2rem' }}>Submitted Feedback:</h3>
      {currentFeedback.length === 0 ? <p>No feedback yet.</p> : (
        <ul>
          {currentFeedback.map((fb, index) => (
            <li key={index}><strong>{fb.name}:</strong> {fb.message} <em>({new Date(fb.date).toLocaleTimeString()})</em></li>
          ))}
        </ul>
      )}
    </div>
  );
}