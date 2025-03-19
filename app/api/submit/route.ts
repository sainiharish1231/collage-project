// app/api/submit/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json(); // Parse the request body

  // Process the data (e.g., save to a database)
  console.log('Received data:', data);

  return NextResponse.json({ message: 'Data received successfully!' });
}