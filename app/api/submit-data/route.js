// app/api/submit-data/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    console.log('Data received via API:', data);
    // Process data here (e.g., save to database)
    return NextResponse.json({ message: 'Data received successfully', receivedData: data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }
}