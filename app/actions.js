// app/actions.js
"use server"; // This directive is crucial

import { revalidatePath } from 'next/cache';

// Simulate a database or external service
let feedbackEntries = [];

export async function submitFeedback(formData) {
  const name = formData.get('name');
  const message = formData.get('message');

  if (!name || !message) {
    return { error: 'Name and message are required.' };
  }

  console.log('Received feedback:', { name, message });
  feedbackEntries.push({ name, message, date: new Date().toISOString() });

  // Revalidate the path to show new feedback if displayed on the same page
  revalidatePath('/feedback');

  return { success: true, message: 'Feedback submitted successfully!' };
}

export async function getFeedbackEntries() {
    return feedbackEntries;
}