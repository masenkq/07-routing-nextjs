import { NextResponse } from 'next/server';

// Použijte stejné úložiště jako v ostatních route.ts
let notes = [
  {
    id: '1',
    title: 'První poznámka',
    content: 'Obsah první poznámky',
    tags: ['Todo'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newNote = {
      id: Date.now().toString(),
      title: body.title,
      content: body.content,
      tags: body.tags || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    notes.push(newNote);

    return NextResponse.json(newNote, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}